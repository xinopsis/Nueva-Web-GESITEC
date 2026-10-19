import type { Metadata } from "next";
import Link from "next/link";
import { ClaimsBookLink } from "@/components/ClaimsBookLink";
import { PageHero } from "@/components/PageHero";
import { company } from "@/lib/content";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Política de privacidad",
  description: `Cómo ${company.legalName} (RUC ${company.ruc}) trata los datos personales que recibimos a través de gesitec.pe.`,
  path: "/politica-de-privacidad",
});

export default function PoliticaDePrivacidadPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Política de privacidad", href: "/politica-de-privacidad" }]}
        kicker="Datos personales"
        title="Política de privacidad"
        lead="Esta política explica qué datos recogemos en gesitec.pe, para qué los usamos y cómo ejercer tus derechos."
      />
      <section className="section">
        <div className="container article__inner article-body">
          <p className="article-lead">
            Responsable: {company.legalName}, RUC {company.ruc}, con domicilio en {company.address}. Correo de contacto:{" "}
            <a href={`mailto:${company.email}`}>{company.email}</a>.
          </p>
          <p>Vigente desde el 19 de octubre de 2026. El tratamiento se rige por la Ley N.° 29733, Ley de Protección de Datos Personales, y su reglamento.</p>

          <h2>Qué datos recogemos</h2>
          <p>Si escribes por el formulario de contacto, pedimos:</p>
          <ul>
            <li>Nombre y apellido.</li>
            <li>Correo electrónico.</li>
            <li>Empresa y tamaño de la organización, si los indicas.</li>
            <li>Servicio de interés, cómo nos conociste y el mensaje que nos dejas.</li>
            <li>La página desde la que enviaste el formulario.</li>
          </ul>
          <p>No pedimos datos sensibles ni datos de menores. El sitio no usa cookies de publicidad ni de analítica de terceros.</p>

          <h2>Para qué los usamos</h2>
          <p>Usamos esos datos para responder tu consulta, preparar una propuesta y, si lo autorizas, mantener la conversación comercial. No los vendemos ni los usamos para enviar publicidad ajena a esa solicitud.</p>
          <p>La base del tratamiento es tu consentimiento, que das al marcar la casilla del formulario. Puedes retirarlo cuando quieras, sin que eso afecte la licitud del uso anterior.</p>

          <h2>Cuánto tiempo los conservamos</h2>
          <p>
            Conservamos la consulta el tiempo necesario para atenderla. Si luego hay un contrato, conservamos los datos de esa relación durante su vigencia y los plazos de prescripción y las obligaciones contables que correspondan.
          </p>

          <h2>Quién puede verlos</h2>
          <p>
            El formulario se procesa en la infraestructura de {company.name}. Solo accede el personal que necesita responderte. Podemos entregarlos si una autoridad competente lo exige por ley.
          </p>

          <h2>Tus derechos</h2>
          <p>
            Puedes pedir acceso, rectificación, cancelación u oposición al tratamiento, y solicitar información sobre el uso de tus datos. Escríbenos a{" "}
            <a href={`mailto:${company.email}`}>{company.email}</a> con el asunto “Datos personales” e indica tu nombre y el derecho que quieres ejercer. También puedes acudir a la Autoridad Nacional de Protección de Datos Personales.
          </p>

          <h2>Seguridad</h2>
          <p>Aplicamos medidas razonables para evitar el acceso, la pérdida o el uso no autorizado de los datos que recibimos por este sitio.</p>

          <h2>Reclamos</h2>
          <p>
            Si tu reclamo es de consumo sobre un producto o servicio, puedes usar el Libro de Reclamaciones. El aviso es el que indica INDECOPI para portales web y abre el libro virtual.
          </p>
          <p>
            <ClaimsBookLink className="book-claim book-claim--page" />
          </p>
          <p>
            Esta política puede actualizarse cuando cambie el sitio o la norma. La versión vigente es la publicada en esta página. El uso del sitio se rige también por los{" "}
            <Link href="/terminos-y-condiciones">Términos y condiciones</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
