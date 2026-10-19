import type { certifications } from "@/lib/content";

type Cert = (typeof certifications)[number];

/** Logo de la entidad certificadora; sin archivo, el nombre como marca tipográfica. */
export function CertLogo({ cert }: { cert: Cert }) {
  return (
    <span className="cert-logo">
      {cert.logo ? (
        // eslint-disable-next-line @next/next/no-img-element -- export estático, sin optimizador de imágenes
        <img src={cert.logo} alt={cert.issuer ?? cert.name} loading="lazy" decoding="async" />
      ) : (
        <span className="cert-logo__word" aria-hidden="true">{cert.name}</span>
      )}
    </span>
  );
}
