import { ContactForm } from "./ContactForm";
import { Check } from "./Icons";
import { Kicker } from "./Kicker";

export function ContactSection({
  title = "Conversemos sobre tu operación",
  lead = "Cuéntanos qué necesitas proteger. Te respondemos en menos de un día hábil con una propuesta concreta.",
  defaultService,
}: {
  title?: string;
  lead?: string;
  defaultService?: string;
}) {
  return (
    <section className="section" id="contacto">
      <div className="container">
        <div className="cta-block" data-reveal="scale">
          <div>
            <Kicker>Hablemos</Kicker>
            <h2>{title}</h2>
            <p className="cta-block__lead">{lead}</p>
            <ul className="check-list cta-block__points">
              <li><Check /> Una sola conversación para TI, seguridad, software y marketing.</li>
              <li><Check /> Propuesta con SLA, entregable y precio mensual claro.</li>
              <li><Check /> Un equipo certificado en seguridad, redes y gestión de TI.</li>
            </ul>
          </div>
          <ContactForm defaultService={defaultService} />
        </div>
      </div>
    </section>
  );
}
