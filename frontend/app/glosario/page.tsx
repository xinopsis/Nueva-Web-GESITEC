import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { GlossaryBrowser } from "@/components/GlossaryBrowser";
import { PageHero } from "@/components/PageHero";
import { glossary } from "@/lib/content";

export const metadata: Metadata = pageMeta({
  title: "Glosario de TI, ciberseguridad y marketing digital",
  description: `${glossary.length} términos explicados en lenguaje claro: SLA, NOC, pentesting, PhaaS, SEO reputacional y más.`,
  path: "/glosario",
});

export default function GlosarioPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Glosario", href: "/glosario" }]}
        kicker="Recursos"
        title="Glosario"
        lead="Los términos de TI, ciberseguridad, software y marketing digital que usamos, explicados sin jerga."
      />
      <section className="section">
        <div className="container">
          <GlossaryBrowser />
        </div>
      </section>
    </>
  );
}
