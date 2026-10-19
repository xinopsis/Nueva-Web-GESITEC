/**
 * Cuadrícula de logos a sangre: celdas blancas separadas por líneas suaves,
 * logos en escala de grises que recuperan su color al pasar el cursor.
 */
export function LogoGrid({
  items,
  label,
  compact = false,
}: {
  items: { name: string; logo?: string }[];
  label: string;
  compact?: boolean;
}) {
  return (
    <ul className={`logo-grid${compact ? " logo-grid--compact" : ""}`} aria-label={label}>
      {items.map((c) => (
        <li className="logo-grid__cell" key={c.name}>
          {c.logo ? (
            // eslint-disable-next-line @next/next/no-img-element -- export estático, sin optimizador de imágenes
            <img src={c.logo} alt={c.name} title={c.name} loading="lazy" decoding="async" />
          ) : (
            <span className="logo-grid__word">{c.name}</span>
          )}
        </li>
      ))}
    </ul>
  );
}
