import Link from "next/link";
import { JsonLd } from "./JsonLd";
import { SITE_URL } from "@/lib/content";

export interface Crumb {
  label: string;
  href: string;
}

export function PageHero({
  kicker,
  title,
  lead,
  crumbs = [],
  children,
  titleClassName,
  compact = false,
  image,
  decor,
}: {
  kicker?: React.ReactNode;
  title: React.ReactNode;
  lead?: React.ReactNode;
  crumbs?: Crumb[];
  children?: React.ReactNode;
  titleClassName?: string;
  /** Cabecera más baja (p. ej. listado del blog) para dar protagonismo al contenido. */
  compact?: boolean;
  /** Imagen de fondo del banner (p. ej. la portada de un artículo), con velo azul para legibilidad. */
  image?: string;
  /** Ícono decorativo a la derecha, a todo lo alto (p. ej. el ícono de la unidad). */
  decor?: string;
}) {
  const trail = [{ label: "Inicio", href: "/" }, ...crumbs];
  return (
    <section
      className={`page-hero${compact ? " page-hero--compact" : ""}${image ? " page-hero--image" : ""}`}
      style={image ? { ["--hero-image" as string]: `url(${image})` } : undefined}
    >
      {decor ? (
        // eslint-disable-next-line @next/next/no-img-element -- export estático
        <img className="page-hero__decor" src={decor} alt="" aria-hidden="true" width={512} height={512} />
      ) : null}
      <div className="container">
        {crumbs.length > 0 && (
          <nav aria-label="Ruta de navegación">
            <ol className="breadcrumbs">
              {trail.map((c, i) => (
                <li key={c.href}>
                  {i === trail.length - 1 ? <span aria-current="page">{c.label}</span> : <Link href={c.href}>{c.label}</Link>}
                </li>
              ))}
            </ol>
            <JsonLd
              data={{
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: trail.map((c, i) => ({
                  "@type": "ListItem",
                  position: i + 1,
                  name: c.label,
                  item: `${SITE_URL}${c.href === "/" ? "" : c.href}`,
                })),
              }}
            />
          </nav>
        )}
        <div data-reveal="">
          {kicker && <div className="kicker">{kicker}</div>}
          <h1 className={titleClassName}>{title}</h1>
          {lead && <p className="page-hero__lead">{lead}</p>}
          {children}
        </div>
      </div>
    </section>
  );
}
