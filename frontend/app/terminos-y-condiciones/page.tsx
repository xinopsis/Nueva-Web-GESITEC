import type { Metadata } from "next";
import Link from "next/link";
import { ClaimsBookLink } from "@/components/ClaimsBookLink";
import { PageHero } from "@/components/PageHero";
import { company } from "@/lib/content";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Términos y condiciones",
  description: `Condiciones de uso de gesitec.pe, operado por ${company.legalName}, RUC ${company.ruc}.`,
  path: "/terminos-y-condiciones",
});

export default function TerminosYCondicionesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Términos y condiciones", href: "/terminos-y-condiciones" }]}
        kicker="Uso del sitio"
        title="Términos y condiciones"
        lead="Estas condiciones regulan el uso de gesitec.pe y la información comercial que publicamos."
      />
      <section className="section">
        <div className="container article__inner article-body">
          <p className="article-lead">
            Titular del sitio: {company.legalName}, RUC {company.ruc}, domicilio en {company.address}. Contacto:{" "}
            <a href={`mailto:${company.email}`}>{company.email}</a>.
          </p>
          <p>Vigentes desde el 19 de octubre de 2026. Al navegar este sitio aceptas estas condiciones.</p>

          <h2>Qué es este sitio</h2>
          <p>
            gesitec.pe presenta los servicios de {company.name}: operación de TI, gobierno y estrategia, ciberseguridad y software. El contenido es informativo. Una propuesta comercial solo obliga cuando ambas partes la aceptan por escrito, con alcance, precio y nivel de servicio definidos.
          </p>

          <h2>Uso permitido</h2>
          <p>Puedes consultar el sitio para evaluar nuestros servicios. No está permitido:</p>
          <ul>
            <li>Usar el sitio para enviar spam, malware o contenido ilícito.</li>
            <li>Intentar acceder a sistemas, cuentas o datos que no te correspondan.</li>
            <li>Copiar el contenido para explotarlo comercialmente sin autorización.</li>
          </ul>

          <h2>Propiedad intelectual</h2>
          <p>
            Los textos, marcas, logotipos y el diseño de este sitio pertenecen a {company.legalName} o a sus licenciantes. Las marcas de terceros que aparecen (certificaciones, clientes o herramientas) pertenecen a sus titulares.
          </p>

          <h2>Servicios</h2>
          <p>
            Los servicios se contratan mediante propuesta o contrato. Los plazos, entregables y niveles de servicio son los que figuren en ese documento. Lo publicado en el sitio no reemplaza esas condiciones particulares.
          </p>

          <h2>Enlaces</h2>
          <p>
            El sitio puede enlazar a páginas de terceros, incluida la submarca Caligo. Esas páginas tienen sus propias condiciones. {company.name} no controla su contenido.
          </p>

          <h2>Libro de Reclamaciones</h2>
          <p>
            Conforme al Código de Protección y Defensa del Consumidor, ponemos a tu disposición un Libro de Reclamaciones virtual. El enlace es el aviso que indica INDECOPI para portales web. Atendemos el reclamo o la queja en el plazo que fija esa norma y su reglamento, y la atención no está condicionada a un pago.
          </p>
          <p>
            <ClaimsBookLink className="book-claim book-claim--page" />
          </p>

          <h2>Responsabilidad</h2>
          <p>
            Procuramos que la información esté actualizada, pero el sitio puede contener errores o interrupciones. No respondemos por decisiones tomadas solo con base en el contenido público, ni por daños derivados del uso de enlaces externos.
          </p>

          <h2>Datos personales</h2>
          <p>
            El tratamiento de los datos que nos envías se describe en la <Link href="/politica-de-privacidad">Política de privacidad</Link>.
          </p>

          <h2>Ley aplicable</h2>
          <p>
            Estas condiciones se rigen por las leyes de la República del Perú. Cualquier controversia se somete a los jueces y tribunales de Lima.
          </p>
        </div>
      </section>
    </>
  );
}
