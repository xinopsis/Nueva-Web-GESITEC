import type { MetadataRoute } from "next";
import { posts } from "@/lib/blog";
import { SITE_URL, glossary, isExternal, products, strategicUnits, units } from "@/lib/content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/nosotros",
    ...strategicUnits.map((u) => units[u].href),
    ...products.map((p) => p.href).filter((href) => !isExternal(href)),
    "/certificaciones",
    "/glosario",
    ...glossary.map((t) => `/glosario/${t.slug}`),
    "/blog",
    ...posts.map((p) => `/blog/${p.slug}`),
    "/contacto",
    "/politica-de-privacidad",
    "/terminos-y-condiciones",
  ];
  return paths.map((p) => ({
    url: `${SITE_URL}${p === "/" ? "" : p}`,
    changeFrequency: "monthly",
    priority: p === "/" ? 1 : p.split("/").length <= 2 ? 0.8 : 0.6,
  }));
}
