import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "@/components/Icons";
import { JsonLd } from "@/components/JsonLd";
import { Kicker } from "@/components/Kicker";
import { PageHero } from "@/components/PageHero";
import { ProductCard } from "@/components/ProductCard";
import { SITE_URL, getProduct, glossary } from "@/lib/content";

const find = (slug: string) => glossary.find((t) => t.slug === slug);

export const dynamicParams = false;

export function generateStaticParams() {
  return glossary.map((t) => ({ term: t.slug }));
}

type Params = Promise<{ term: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const t = find((await params).term);
  if (!t) return {};
  return pageMeta({ title: `¿Qué es ${t.term}?`, description: t.definition, path: `/glosario/${t.slug}` });
}

export default async function TermPage({ params }: { params: Params }) {
  const t = find((await params).term);
  if (!t) notFound();
  const product = t.related ? getProduct(t.related) : undefined;
  const siblings = glossary.filter((g) => g.category === t.category && g.slug !== t.slug).slice(0, 6);

  return (
    <>
      <PageHero
        crumbs={[
          { label: "Glosario", href: "/glosario" },
          { label: t.term, href: `/glosario/${t.slug}` },
        ]}
        kicker={t.category}
        title={`¿Qué es ${t.term}?`}
      />
      <section className="section">
        <div className="container split">
          <div data-reveal="left">
            <Kicker>Definición</Kicker>
            <p className="prose" style={{ fontSize: "1.3rem", color: "var(--gst-azul-profundo)" }}>{t.definition}</p>
            <div style={{ marginTop: 40 }}>
              <h2 style={{ fontSize: "1.2rem", marginBottom: 16 }}>Más términos de {t.category}</h2>
              <div className="cert-strip">
                {siblings.map((s) => (
                  <Link key={s.slug} href={`/glosario/${s.slug}`} className="cert-badge">{s.term}</Link>
                ))}
              </div>
            </div>
            <div style={{ marginTop: 32 }}>
              <Link href="/glosario" className="link-arrow">Volver al glosario <ArrowRight size={16} /></Link>
            </div>
          </div>
          {product && (
            <div>
              <Kicker>Producto relacionado</Kicker>
              <ProductCard product={product} />
            </div>
          )}
        </div>
      </section>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "DefinedTerm",
          name: t.term,
          description: t.definition,
          url: `${SITE_URL}/glosario/${t.slug}`,
          inDefinedTermSet: { "@type": "DefinedTermSet", name: "Glosario Grupo GESITEC", url: `${SITE_URL}/glosario` },
        }}
      />
    </>
  );
}
