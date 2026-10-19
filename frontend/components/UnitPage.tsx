import Link from "next/link";
import { productsByUnit, strategicUnits, units, type Unit } from "@/lib/content";
import { ContactSection } from "./ContactSection";
import { ArrowRight } from "./Icons";
import { Kicker } from "./Kicker";
import { PageHero, type Crumb } from "./PageHero";
import { ProductCard } from "./ProductCard";
import { UnitGrid } from "./UnitCard";

export function UnitBanner({ text }: { text: string }) {
  const items = Array.from({ length: 8 }, () => text);
  return (
    <div className="unit-banner" aria-hidden="true">
      <div className="unit-banner__track">
        {items.map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </div>
    </div>
  );
}

export function UnitPage({ unit }: { unit: Unit }) {
  const crumbs: Crumb[] = [{ label: unit.name, href: unit.href }];
  const own = productsByUnit(unit.slug);
  const others = strategicUnits.filter((slug) => slug !== unit.slug).map((slug) => units[slug]);

  return (
    <>
      <PageHero crumbs={crumbs} kicker={unit.kicker} title={unit.name} lead={unit.intro} decor={unit.icon}>
        <p style={{ marginTop: 12, color: "var(--gst-acento-claro)", fontWeight: 600, fontSize: "1.1rem" }}>{unit.tagline}</p>
        <div className="btn-row">
          <Link href="#productos" className="btn btn--accent">
            Ver productos <ArrowRight size={16} />
          </Link>
          <Link href="#contacto" className="btn btn--ghost">Hablar con un especialista</Link>
        </div>
      </PageHero>
      <UnitBanner text={unit.tagline} />

      <section className="section">
        <div className="container">
          <div className="section-head" data-reveal="">
            <Kicker>Qué hacemos</Kicker>
            <h2>{unit.summary}</h2>
          </div>
          <div className="grid grid-3">
            {unit.pillars.map((p, i) => (
              <div className="card" key={p.title} data-reveal="" style={{ ["--reveal-delay" as string]: `${i * 90}ms` }}>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tint" id="productos">
        <div className="container">
          <div className="section-head" data-reveal="">
            <Kicker>Productos</Kicker>
            <h2>{own.length === 1 ? `El producto de ${unit.name}` : `Productos de ${unit.name}`}</h2>
            <p>Cada producto tiene promesa, herramienta propia, unidad de venta y un entregable concreto.</p>
          </div>
          <div className="grid grid-3">
            {own.map((p, i) => (
              <ProductCard key={p.slug} product={p} delay={i * 90} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--units">
        <div className="container">
          <div className="section-head" data-reveal="">
            <Kicker>Unidades estratégicas</Kicker>
            <h2>Conoce las otras unidades del grupo</h2>
          </div>
        </div>
        <UnitGrid units={others} />
      </section>

      <ContactSection />
    </>
  );
}
