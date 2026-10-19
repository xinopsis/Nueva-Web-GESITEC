import type { Metadata } from "next";
import { SITE_URL, type UnitSlug } from "./content";

/** Imagen para compartir en redes (1200×630). */
export const OG_IMAGE = { url: "/og-gesitec.jpg", width: 1200, height: 630, alt: "Grupo GESITEC" };

export const SITE_NAME = "GRUPO GESITEC";

/** Enlace a /llms.txt (como en la web anterior) en todas las páginas. */
export const LLMS_ALTERNATE = { "text/plain": [{ url: "/llms.txt", title: "LLMs.txt — Resumen para modelos de lenguaje" }] };

/** Textos de la web anterior (index.htm). */
export const HOME_META = {
  title: "GRUPO GESITEC — Gobierno Corporativo TI, Ciberseguridad y Software Inteligente en Perú",
  description:
    "Grupo Gesitec: ecosistema corporativo con 4 divisiones — Advisory, Technology, Security e Innova. Gobierno TI, outsourcing, ethical hacking, software inteligente y marketing digital para organizaciones en Perú.",
  keywords: ["gobierno TI peru", "outsourcing TI lima", "ethical hacking peru", "ciberseguridad empresarial", "consultoría ISO 27001 lima"],
  ogTitle: "GRUPO GESITEC — Gobierno Corporativo TI, Ciberseguridad y Software Inteligente",
  ogDescription:
    "Ecosistema corporativo con 4 divisiones: Advisory, Technology, Security e Innova. Soluciones integrales de TI y Marketing para organizaciones en Perú.",
  twitterDescription: "Ecosistema corporativo con 4 divisiones: Advisory, Technology, Security e Innova.",
};

/** Metadatos de cada unidad, tomados de advisory.html, technology.html, etc. */
export const UNIT_META: Partial<Record<UnitSlug, { title: string; description: string; ogTitle: string; ogDescription: string }>> = {
  advisory: {
    title: "GESITEC Advisory — Gobierno Corporativo y Consultoría Estratégica TI | Grupo Gesitec",
    description:
      "GESITEC Advisory: consultoría en gobierno corporativo TI, diseño de estructuras organizacionales y auditoría de sistemas de control. Certificados ISO 27001 e ISO 9001.",
    ogTitle: "GESITEC Advisory — Gobierno Corporativo TI",
    ogDescription: "Definimos el rumbo estratégico y las reglas del juego antes de mover una sola pieza técnica.",
  },
  technology: {
    title: "GESITEC Technology — Outsourcing TI y Operación Controlada | Grupo Gesitec",
    description:
      "GESITEC Technology: outsourcing TI integral, gestión de servicios bajo SLAs y KPIs, soporte controlado bajo ITIL v4. Certificados ITIL, CCNA y Fortinet NSE 4.",
    ogTitle: "GESITEC Technology — Outsourcing TI y Operación Controlada",
    ogDescription: "Continuidad, eficiencia y control operacional absoluto basado en indicadores reales.",
  },
  security: {
    title: "GESITEC Security — Ethical Hacking, Red Team y Ciberseguridad en Perú | Grupo Gesitec",
    description:
      "GESITEC Security: ethical hacking, red team, pentesting de red y aplicaciones web, análisis de vulnerabilidades, OSINT, PhaaS y forense digital. Certificados eWPTX, eCPPT y CEH.",
    ogTitle: "GESITEC Security — Ethical Hacking y Ciberseguridad Ofensiva en Perú",
    ogDescription:
      "Generamos confianza y resiliencia a través del cumplimiento estricto y la mitigación proactiva de riesgos cibernéticos.",
  },
  innova: {
    title: "GESITEC Innova — Software Inteligente, IA y Automatización | Grupo Gesitec",
    description:
      "GESITEC Innova: ecosistemas de software inteligente, automatización de procesos (Hyper-automation), conectividad de APIs y laboratorio de productos digitales.",
    ogTitle: "GESITEC Innova — Software Inteligente e IA en Perú",
    ogDescription: "Innovación con propósito, integración sin fricción y escalabilidad absoluta.",
  },
};

/**
 * Metadatos completos de una página: title, description, canonical, Open Graph
 * y Twitter Card. Next.js no hereda og:title/og:url del layout por página, así que
 * cada página los declara aquí.
 */
export function pageMeta({
  title,
  absoluteTitle = false,
  description,
  path,
  ogTitle,
  ogDescription,
  twitterDescription,
  image,
  type = "website",
  keywords,
  publishedTime,
  authors,
}: {
  title: string;
  /** true: el title no lleva el sufijo "| Grupo GESITEC" del layout. */
  absoluteTitle?: boolean;
  description: string;
  path: string;
  ogTitle?: string;
  ogDescription?: string;
  twitterDescription?: string;
  image?: { url: string; width?: number; height?: number; alt?: string };
  type?: "website" | "article";
  keywords?: string[] | string;
  publishedTime?: string;
  authors?: string[];
}): Metadata {
  const url = `${SITE_URL}${path === "/" ? "/" : `${path.replace(/\/$/, "")}/`}`;
  const img = image ?? OG_IMAGE;
  const socialTitle = ogTitle ?? (absoluteTitle ? title : `${title} | Grupo GESITEC`);
  const socialDescription = ogDescription ?? description;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    ...(keywords ? { keywords } : {}),
    authors: (authors ?? [SITE_NAME]).map((name) => ({ name })),
    alternates: { canonical: path, types: LLMS_ALTERNATE },
    openGraph: {
      type,
      url,
      title: socialTitle,
      description: socialDescription,
      siteName: SITE_NAME,
      locale: "es_PE",
      images: [img],
      ...(type === "article" ? { publishedTime, authors } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description: twitterDescription ?? socialDescription,
      images: [img.url],
    },
  };
}
