import { company } from "@/lib/content";

/** Aviso del Libro de Reclamaciones para portales web (Anexo III, INDECOPI). */
export function ClaimsBookLink({ className = "book-claim" }: { className?: string }) {
  return (
    <a className={className} href={company.claimsBookUrl} target="_blank" rel="noopener noreferrer" aria-label="Libro de Reclamaciones">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={company.claimsBookImage} alt="Libro de Reclamaciones" width={840} height={474} />
    </a>
  );
}
