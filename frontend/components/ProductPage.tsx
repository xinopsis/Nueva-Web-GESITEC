import Link from "next/link";
import { SHOW_PRICES, SITE_URL, company, products, units, type Product } from "@/lib/content";
import { ContactSection } from "./ContactSection";
import { Deliverable } from "./Deliverable";
import { Faq } from "./Faq";
import { ArrowRight, Check } from "./Icons";
import { JsonLd } from "./JsonLd";
import { Kicker } from "./Kicker";
import { PageHero, type Crumb } from "./PageHero";
import { ProductCard } from "./ProductCard";
import { UnitChip } from "./UnitChip";

/** Plantilla de ficha de producto (benchmark, sección 7). */
export function ProductPage({ product }: { product: Product }) {
  const unit = units[product.unit];
  const crumbs: Crumb[] = [{ label: unit.name, href: unit.href }];
  crumbs.push({ label: product.name, href: product.href });
  const related = products.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <>
      <PageHero
        crumbs={crumbs}
        kicker={<UnitChip unit={product.unit} />}
        title={product.promise}
        titleClassName="quote-headline"
        lead={product.description}
      >
        <div className="btn-row">
          <Link href="#contacto" className="btn btn--accent">
            Solicitar propuesta <ArrowRight size={16} />
          </Link>
          <Link href="#como-funciona" className="btn btn--ghost">Cómo funciona</Link>
        </div>
        <span className="product-name-tag">{product.name}</span>
      </PageHero>

      <section className="section" id="como-funciona">
        <div className="container">
          <div className="section-head" data-reveal="">
            <Kicker>Cómo funciona</Kicker>
            <h2>¿Cómo funciona {product.name}?</h2>
          </div>
          <div className="steps">
            {product.howItWorks.map((s, i) => (
              <div className="step" key={s.title} data-reveal="" style={{ ["--reveal-delay" as string]: `${i * 90}ms` }}>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container split">
          <div data-reveal="left">
            <Kicker>Qué incluye</Kicker>
            <h2>Qué incluye</h2>
            <ul className="check-list" style={{ marginTop: 32 }}>
              {product.includes.map((i) => (
                <li key={i}><Check /> {i}</li>
              ))}
            </ul>
          </div>
          <div data-reveal="" style={{ display: "grid", gap: 20 }}>
            <h2 className="sr-only">Entregable</h2>
            <Deliverable text={product.deliverable} large />
            <dl className="facts">
              <div className="fact"><dt>Herramienta propia</dt><dd>{product.tool}</dd></div>
              <div className="fact"><dt>Unidad de venta</dt><dd>{product.saleUnit}</dd></div>
              <div className="fact">
                <dt>Inversión</dt>
                <dd>{SHOW_PRICES ? `Desde ${product.priceFrom}` : "Suscripción mensual — cotiza sin compromiso"}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head" data-reveal="">
            <Kicker>Preguntas frecuentes</Kicker>
            <h2>Preguntas frecuentes</h2>
          </div>
          <Faq items={product.faqs} />
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <div className="section-head" data-reveal="">
            <Kicker>Más del catálogo</Kicker>
            <h2>Otros productos del grupo</h2>
          </div>
          <div className="grid grid-3">
            {related.map((p, i) => (
              <ProductCard key={p.slug} product={p} delay={i * 90} />
            ))}
          </div>
        </div>
      </section>

      <ContactSection title={`Conversemos sobre ${product.name}`} defaultService={product.name} />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: product.name,
          description: `${product.promise}. ${product.short}`,
          serviceType: product.short,
          url: `${SITE_URL}${product.href}`,
          areaServed: { "@type": "Country", name: "Perú" },
          provider: { "@type": "Organization", name: company.name, url: SITE_URL },
          ...(SHOW_PRICES ? { offers: { "@type": "Offer", priceCurrency: "PEN", description: `Desde ${product.priceFrom}` } } : {}),
        }}
      />
    </>
  );
}
