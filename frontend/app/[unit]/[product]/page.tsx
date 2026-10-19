import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { notFound } from "next/navigation";
import { ProductPage } from "@/components/ProductPage";
import { products, strategicUnits } from "@/lib/content";

// Fichas de producto bajo su unidad: /technology/gst-vigia, /security/gst-escudo…
// Los productos de Caligo no tienen ficha aquí: enlazan a la web de Caligo.
const own = products.filter((p) => (strategicUnits as string[]).includes(p.unit));
const find = (unit: string, slug: string) => own.find((p) => p.unit === unit && p.slug === slug);

export const dynamicParams = false;

export function generateStaticParams() {
  return own.map((p) => ({ unit: p.unit, product: p.slug }));
}

type Params = Promise<{ unit: string; product: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { unit, product } = await params;
  const p = find(unit, product);
  if (!p) return {};
  return pageMeta({ title: `${p.name} — ${p.promise}`, description: `${p.short} ${p.description}`, path: p.href });
}

export default async function Page({ params }: { params: Params }) {
  const { unit, product } = await params;
  const p = find(unit, product);
  if (!p) notFound();
  return <ProductPage product={p} />;
}
