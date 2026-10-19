import Link from "next/link";

const LOGO_W = 504;
const LOGO_H = 176;

/** Logo oficial de Grupo GESITEC: blanco sobre fondo de marca, tinta sobre fondo claro. */
export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className={`brand${light ? " brand--light" : ""}`} aria-label="Grupo GESITEC — inicio">
      {/* eslint-disable-next-line @next/next/no-img-element -- export estático, sin optimizador de imágenes */}
      <img className="brand__img brand__img--white" src="/brand/logo-grupo-gesitec-blanco.png" alt="" width={LOGO_W} height={LOGO_H} />
      {!light && (
        // eslint-disable-next-line @next/next/no-img-element
        <img className="brand__img brand__img--ink" src="/brand/logo-grupo-gesitec-tinta.png" alt="" width={LOGO_W} height={LOGO_H} />
      )}
    </Link>
  );
}
