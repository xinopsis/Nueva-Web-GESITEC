import Link from "next/link";
import { CALIGO_URL, company, strategicUnits, units } from "@/lib/content";
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
            <p>{company.tagline}. TI, ciberseguridad y software, con SLA y entregable definido.</p>
            <address>
              {company.address}
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </address>
            <Link className="btn btn--ghost btn--sm" href="/contacto">
              Hablemos
            </Link>
          </div>

          <nav aria-label="Unidades">
            <h2>Unidades</h2>
            <ul>
              {strategicUnits.map((slug) => (
                <li key={slug}>
                  <Link href={units[slug].href}>{units[slug].name}</Link>
                </li>
              ))}
              <li>
                <SmartLink href={CALIGO_URL}>Caligo ↗</SmartLink>
              </li>
            </ul>
          </nav>

          <nav aria-label="La empresa">
            <h2>La empresa</h2>
            <ul>
              <li><Link href="/nosotros">Nosotros</Link></li>
              <li><Link href="/#clientes">Clientes</Link></li>
              <li><Link href="/certificaciones">Certificaciones</Link></li>
              <li><Link href="/contacto">Contacto</Link></li>
            </ul>
          </nav>

          <nav aria-label="Recursos">
            <h2>Recursos</h2>
            <ul>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/glosario">Glosario</Link></li>
              <li><Link href="/politica-de-privacidad">Política de privacidad</Link></li>
              <li><Link href="/terminos-y-condiciones">Términos y condiciones</Link></li>
            </ul>
          </nav>
        </div>

        <div className="site-footer__bottom">
          <div className="site-footer__legal">
            <p className="site-footer__entity">{company.legalName}</p>
            <p>
              RUC {company.ruc}
              <span aria-hidden="true"> · </span>
              © {year} Grupo GESITEC. Todos los derechos reservados.
            </p>
          </div>
          <ClaimsBookLink className="book-claim book-claim--footer" />
        </div>
      </div>
    </footer>
  );
}
