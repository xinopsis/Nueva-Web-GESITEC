import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactSection } from "@/components/ContactSection";
import { ArrowRight } from "@/components/Icons";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { categoryLabel, formatDate, getPost, getPostBody, posts } from "@/lib/blog";
import { SITE_URL } from "@/lib/content";

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const p = getPost((await params).slug);
  if (!p) return {};
  return pageMeta({
    title: p.titulo,
    description: p.metaDescripcion || p.resumen,
    path: `/blog/${p.slug}`,
    ogDescription: p.resumen,
    image: { url: p.portada, alt: p.portadaAlt },
    type: "article",
    keywords: p.keywords || undefined,
    publishedTime: p.fecha,
    authors: [p.autor],
  });
}

export default async function PostPage({ params }: { params: Params }) {
  const p = getPost((await params).slug);
  if (!p) notFound();
  const body = getPostBody(p.slug);
  const url = `${SITE_URL}/blog/${p.slug}`;

  return (
    <>
      <PageHero
        crumbs={[
          { label: "Blog", href: "/blog" },
          { label: p.titulo, href: `/blog/${p.slug}` },
        ]}
        kicker={categoryLabel(p.categoria)}
        title={p.titulo}
        titleClassName="article-title"
        image={p.portada}
      >
        <p className="article-byline">
          Por <strong>{p.autor}</strong> — {p.cargo} · <time dateTime={p.fecha}>{formatDate(p.fecha)}</time>
        </p>
      </PageHero>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "TechArticle",
          "@id": `${url}#article`,
          headline: p.titulo,
          description: p.metaDescripcion || p.resumen,
          image: `${SITE_URL}${p.portada}`,
          datePublished: p.fecha,
          dateModified: p.fecha,
          inLanguage: "es-PE",
          mainEntityOfPage: url,
          author: { "@type": "Person", name: p.autor, jobTitle: p.cargo },
          publisher: { "@type": "Organization", "@id": `${SITE_URL}/#organization`, name: "Grupo GESITEC" },
          about: p.temas,
          keywords: p.keywords,
        }}
      />
      <article className="section section--tight-top article">
        <div className="container article__inner">
          {/* Cuerpo migrado tal cual desde la web anterior (contenido propio, no de usuarios). */}
          <div className="article-body" dangerouslySetInnerHTML={{ __html: body }} />
          <footer className="article-footer">
            <Link href="/blog" className="link-arrow">← Volver al blog</Link>
            {p.cta && (
              <Link href={p.cta.href} className="btn btn--primary">
                {p.cta.texto} <ArrowRight size={16} />
              </Link>
            )}
          </footer>
        </div>
      </article>
      <ContactSection />
    </>
  );
}
