import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export default function NotFound() {
  return (
    <PageHero kicker="Error 404" title="Esta página no existe" lead="Puede que el enlace haya cambiado con la nueva web. Vuelve al inicio o escríbenos.">
      <div className="btn-row">
        <Link href="/" className="btn btn--accent">Ir al inicio</Link>
        <Link href="/contacto" className="btn btn--ghost">Contacto</Link>
      </div>
    </PageHero>
  );
}
