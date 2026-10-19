import Link from "next/link";
import { CALIGO_URL, company, products, strategicUnits, units } from "@/lib/content";
import { Logo } from "./Brand";
import { ClaimsBookLink } from "./ClaimsBookLink";
import { SmartLink } from "./SmartLink";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__grid">
          <div className="site-footer__about">
            <Logo light />
            <p>
              {company.tagline}. Servicios gestionados de TI, ciberseguridad, software a medida y marketing digital, con SLA
              y entregable definido.
            </p>
            <p style={{ marginTop: 16 }}>{company.address}</p>
          </div>
          <div>
            <h2>Unidades Estratégicas</h2>
            <ul>
              {strategicUnits.map((slug) => (
                <li key={slug}><Link href={units[slug].href}>{units[slug].name}</Link></li>
              ))}
              <li><SmartLink href={CALIGO_URL}>Caligo ↗</SmartLink></li>
            </ul>
          </div>
          <div>
            <h2>Productos</h2>
            <ul>
              {products.map((p) => (
                <li key={p.slug}><SmartLink href={p.href}>{p.name}</SmartLink></li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Grupo</h2>
            <ul>
              <li><Link href="/nosotros">Nosotros</Link></li>
              <li><Link href="/#clientes">Clientes</Link></li>
              <li><Link href="/certificaciones">Certificaciones</Link></li>
              <li><Link href="/glosario">Glosario</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/contacto">Contacto</Link></li>
            </ul>
          </div>
        </div>
        <div className="site-footer__bottom">
          <div className="site-footer__legal">
            <p className="site-footer__entity">{company.legalName}</p>
            <p>RUC {company.ruc}</p>
            <p>© {year} Grupo GESITEC. Todos los derechos reservados.</p>
            <nav className="site-footer__legal-nav" aria-label="Información legal">
              <Link href="/politica-de-privacidad">Política de privacidad</Link>
              <Link href="/terminos-y-condiciones">Términos y condiciones</Link>
            </nav>
          </div>
          <div className="site-footer__marks">
            <ClaimsBookLink />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand/logo-grupo-gesitec-blanco.png" alt="" width={504} height={176} style={{ height: 28, width: "auto", opacity: 0.5 }} />
          </div>
        </div>
      </div>
    </footer>
  );
}
