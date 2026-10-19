import { readFileSync } from "node:fs";
import { join } from "node:path";
import data from "@/content/blog/articulos.json";

/**
 * Blog generado desde content/blog/articulos.json (misma estructura que el
 * articulos.xml de la web anterior). El cuerpo de cada artículo vive en
 * content/blog/<slug>.html y la portada en public/blog/covers/.
 */
export interface Post {
  id: string;
  titulo: string;
  slug: string;
  portada: string;
  portadaAlt: string;
  fecha: string;
  autor: string;
  cargo: string;
  categoria: "Articulo" | "Opinión" | "Nota de Prensa" | "Noticia" | string;
  resumen: string;
  metaDescripcion: string;
  keywords: string;
  temas: string[];
  cta: { href: string; texto: string } | null;
}

export const posts: Post[] = [...(data.articulos as Post[])].sort((a, b) => b.fecha.localeCompare(a.fecha));

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);

export const getPostBody = (slug: string) => readFileSync(join(process.cwd(), "content", "blog", `${slug}.html`), "utf8");

/** Resumen corto para el listado: corta en una palabra y termina en "...". */
export const excerpt = (text: string, max = 120) => {
  if (text.length <= max) return text.replace(/[.\s]+$/, "") + "...";
  const cut = text.slice(0, max);
  return cut.slice(0, cut.lastIndexOf(" ")).replace(/[,;:.\s—-]+$/, "") + "...";
};

/** "Articulo" (sin tilde en el XML original) se muestra como "Artículo". */
export const categoryLabel = (c: string) => (c === "Articulo" ? "Artículo" : c);

export const formatDate = (iso: string) =>
  new Date(`${iso}T12:00:00`).toLocaleDateString("es-PE", { day: "numeric", month: "long", year: "numeric" });
