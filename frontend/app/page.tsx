import type { Metadata } from "next";
import Link from "next/link";
import { HOME_META, pageMeta } from "@/lib/seo";
import { ContactSection } from "@/components/ContactSection";
import { Faq } from "@/components/Faq";
import { CertLogo } from "@/components/CertLogo";
import { ArrowRight } from "@/components/Icons";
import { Kicker } from "@/components/Kicker";
import { ProductGrid } from "@/components/ProductGrid";
import { LogoGrid } from "@/components/LogoGrid";
import { ScrollWords } from "@/components/ScrollWords";
import { ScrubVideoBackground } from "@/components/ScrubVideoBackground";
import { UnitGrid } from "@/components/UnitCard";
import { VideoHero } from "@/components/VideoHero";
import { certifications, clientLogos, homeFaqs, institutions, strategicUnits, units } from "@/lib/content";

export const metadata: Metadata = pageMeta({
  title: HOME_META.title,
  absoluteTitle: true,
  description: HOME_META.description,
  path: "/",
  keywords: HOME_META.keywords,
  ogTitle: HOME_META.ogTitle,
  ogDescription: HOME_META.ogDescription,
  twitterDescription: HOME_META.twitterDescription,
});

const d = (ms: number) => ({ ["--reveal-delay" as string]: `${ms}ms` });

export default function Home() {
  return (
    <>
      {/* HERO — video a pantalla completa: intro de 5 s y luego se recorre con el scroll */}
      <VideoHero>
        <div className="container">
          <p className="kicker" data-reveal="">Grupo GESITEC</p>
          <h1 data-reveal="" style={d(80)}>
            Tecnología con <em>visión de negocio</em>
          </h1>
          <p className="hero__lead" data-reveal="" style={d(160)}>
            Protegemos y hacemos crecer tu operación en TI, seguridad, software y reputación, con SLA, herramienta propia y un
            entregable que puedes ver.
          </p>
          <div className="btn-row" data-reveal="" style={d(240)}>
            <Link href="/contacto" className="btn btn--accent">
              Hablemos de tu operación <ArrowRight size={16} />
            </Link>
            <Link href="#productos" className="btn btn--ghost">Ver productos</Link>
          </div>
        </div>
      </VideoHero>

      <div className="home-scroll">

      {/* CIFRAS */}
      <section className="credentials-band">
        <div className="container">
          <div className="credentials">
            {[
              ["4", "unidades especializadas"],
              ["5", "productos con entregable definido"],
              ["24/7", "monitoreo de tu operación"],
              ["SLA", "en cada servicio"],
            ].map(([v, l], i) => (
              <div className="credential" key={l} data-reveal="" style={{ ...d(i * 80), ["--i" as string]: i }}>
                <div className="credential__value">{v}</div>
                <div className="credential__label">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UNIDADES ESTRATÉGICAS */}
      <section className="section section--units" id="unidades">
        <div className="container">
          <div className="section-head">
            <div data-reveal=""><Kicker>Unidades estratégicas</Kicker></div>
            <ScrollWords text="Un sistema ordenado, no un catálogo de servicios sueltos" />
            <p data-reveal="">Cuatro unidades estratégicas, cada una con su especialidad y sus productos.</p>
          </div>
        </div>
        <UnitGrid units={strategicUnits.map((slug) => units[slug])} />
      </section>

      {/* PRODUCTOS */}
      <section className="section section--dark section--video" id="productos">
        <ScrubVideoBackground endSelector=".filter" />
        <div className="container">
          <div className="section-head products-intro" data-reveal="">
            <Kicker>Productos</Kicker>
            <h2>Cinco productos. Cada uno con una promesa y un entregable.</h2>
            <p>Sabes desde el primer día qué vas a recibir: nada de horas sueltas ni alcances difusos.</p>
          </div>
          <ProductGrid />
        </div>
      </section>

      {/* CLIENTES — logos sobre blanco, cuadrícula a sangre */}
      <section className="section section--clients" id="clientes">
        <div className="container">
          <div className="section-head">
            <div data-reveal=""><Kicker>Confían en nosotros</Kicker></div>
            <ScrollWords text="Organizaciones que exigen continuidad eligen a GESITEC" />
            <p data-reveal="">Sector financiero, gobierno, tecnología, telecomunicaciones y servicios: operamos donde una caída no es una opción.</p>
          </div>
        </div>
        <div data-reveal="">
          <LogoGrid items={clientLogos} label="Clientes de Grupo GESITEC" />
        </div>
        <div className="container">
          <div className="section-subhead" data-reveal="">
            <Kicker>Respaldo institucional</Kicker>
          </div>
        </div>
        <div data-reveal="">
          <LogoGrid items={institutions} label="Respaldo institucional" compact />
        </div>
      </section>

      {/* CERTIFICACIONES */}
      <section className="section section--tint">
        <div className="container">
          <div className="section-head section-head--center" data-reveal="">
            <Kicker>Certificaciones</Kicker>
            <h2>Respaldo técnico certificado</h2>
          </div>
          <div className="cert-grid">
            {certifications.map((c, i) => (
              <Link href="/certificaciones" className="cert-tile" key={c.name} data-reveal="" style={{ ...d(i * 50), ["--i" as string]: i }}>
                <CertLogo cert={c} />
                <span className="cert-tile__name">{c.name}</span>
                <span className="cert-tile__area">{c.area}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <div className="section-head section-head--center" data-reveal="">
            <Kicker>Preguntas frecuentes</Kicker>
            <h2>Lo que suelen preguntarnos</h2>
          </div>
          <Faq items={homeFaqs} center />
        </div>
      </section>

      <ContactSection />
      </div>
    </>
  );
}
