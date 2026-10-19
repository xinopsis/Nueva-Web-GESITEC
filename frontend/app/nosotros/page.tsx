import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { ContactSection } from "@/components/ContactSection";
import { Check } from "@/components/Icons";
import { Kicker } from "@/components/Kicker";
import { PageHero } from "@/components/PageHero";
import { UnitGrid } from "@/components/UnitCard";
import { company, strategicUnits, units } from "@/lib/content";

export const metadata: Metadata = pageMeta({
  title: "Nosotros — Tecnología con visión de negocio",
  description: company.description,
  path: "/nosotros",
});

export default function NosotrosPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Nosotros", href: "/nosotros" }]}
        kicker="Nosotros"
        title={company.tagline}
        lead={company.description}
      />

      <section className="section">
        <div className="container split">
          <div data-reveal="left">
            <Kicker>Quiénes somos</Kicker>
            <h2>Protección como hilo conductor</h2>
          </div>
          <div className="prose" data-reveal="">
            <p>
              Nuestro isotipo es un escudo: trazos que se cierran para proteger. Esa idea guía todo lo que hacemos, en TI, en
              ciberseguridad, en software y en la reputación de tu marca.
            </p>
            <p>
              Somos un grupo tecnológico peruano con sede en Santiago de Surco, Lima. Organizamos nuestra oferta en cuatro
              unidades estratégicas —Technology, Advisory, Security e Innova— y en Caligo, nuestra submarca de marketing
              digital y reputación.
            </p>
            <ul className="check-list" style={{ marginTop: 28 }}>
              <li><Check /> Servicios por suscripción mensual con SLA.</li>
              <li><Check /> Herramientas propias para que veas tu operación.</li>
              <li><Check /> Un entregable concreto en cada producto.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--tint section--units">
        <div className="container">
          <div className="section-head" data-reveal="">
            <Kicker>Estructura</Kicker>
            <h2>Cómo nos organizamos</h2>
          </div>
        </div>
        <UnitGrid units={[...strategicUnits.map((slug) => units[slug]), units.caligo]} />
      </section>

      <ContactSection />
    </>
  );
}
