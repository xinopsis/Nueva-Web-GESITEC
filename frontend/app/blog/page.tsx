import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import { ArrowRight } from "@/components/Icons";
import { PageHero } from "@/components/PageHero";
import { categoryLabel, excerpt, formatDate, posts } from "@/lib/blog";

export const metadata: Metadata = pageMeta({
  title: "Blog | Grupo Gesitec",
  absoluteTitle: true,
  description:
    "Artículos, guías y recursos sobre gobierno corporativo TI, ciberseguridad, transformación digital y marketing estratégico del Grupo Gesitec.",
  path: "/blog",
  ogDescription: "Recursos, artículos y guías del Grupo Gesitec sobre TI, ciberseguridad y transformación digital.",
  twitterDescription: "Recursos, artículos y guías del Grupo Gesitec.",
});

export default function BlogPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Blog", href: "/blog" }]}
        kicker="Recursos"
        title="Blog"
        lead="Ideas prácticas para proteger y hacer crecer tu operación, escritas por nuestro equipo."
        compact
      />
      <section className="section section--tight-top">
        <div className="container">
          <div className="grid grid-3">
            {posts.map((p, i) => (
              <Link
                href={`/blog/${p.slug}`}
                className="card post-card"
                key={p.slug}
                data-reveal=""
                style={{ ["--reveal-delay" as string]: `${(i % 3) * 90}ms` }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element -- export estático, sin optimizador de imágenes */}
                <img className="post-card__cover" src={p.portada} alt={p.portadaAlt} width={1600} height={900} loading="lazy" />
                <span className="chip" style={{ alignSelf: "flex-start" }}>{categoryLabel(p.categoria)}</span>
                <h2 className="post-card__title">{p.titulo}</h2>
                <p className="post-card__excerpt">{excerpt(p.resumen)}</p>
                <span className="post-card__meta">
                  {p.autor} · <time dateTime={p.fecha}>{formatDate(p.fecha)}</time>
                </span>
                <span className="link-arrow">
                  Leer artículo <ArrowRight size={16} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
