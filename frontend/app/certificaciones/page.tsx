import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { ContactSection } from "@/components/ContactSection";
import { CertLogo } from "@/components/CertLogo";
import { PageHero } from "@/components/PageHero";
import { certifications } from "@/lib/content";

export const metadata: Metadata = pageMeta({
  title: "Certificaciones — ISO 27001, ITIL, CCNA, eWPTX, CEH",
  description: "Certificaciones del equipo de Grupo GESITEC: ISO 27001, ITIL, CCNA, eWPTX y CEH.",
  path: "/certificaciones",
});

export default function CertificacionesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Certificaciones", href: "/certificaciones" }]}
        kicker="Respaldo técnico"
        title="Certificados para proteger tu operación"
        lead="Nuestro equipo trabaja con marcos y certificaciones reconocidas internacionalmente en seguridad, redes, gestión de servicios y desarrollo."
      />
      <section className="section">
        <div className="container">
          <div className="grid grid-3">
            {certifications.map((c, i) => (
              <div className="card" key={c.name} data-reveal="" style={{ ["--reveal-delay" as string]: `${(i % 3) * 80}ms` }}>
                <CertLogo cert={c} />
                <span className="chip" style={{ alignSelf: "flex-start" }}>{c.area}</span>
                <h2 style={{ fontSize: "1.5rem" }}>{c.name}</h2>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ContactSection />
    </>
  );
}
