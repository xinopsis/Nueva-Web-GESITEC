import type { Metadata } from "next";
import { UNIT_META, pageMeta } from "@/lib/seo";
import { notFound } from "next/navigation";
import { UnitPage } from "@/components/UnitPage";
import { strategicUnits, units, type UnitSlug } from "@/lib/content";

// Una página propia por unidad estratégica: /technology, /advisory, /security, /innova.
const find = (slug: string) => ((strategicUnits as string[]).includes(slug) ? units[slug as UnitSlug] : undefined);

export const dynamicParams = false;

export function generateStaticParams() {
  return strategicUnits.map((unit) => ({ unit }));
}

type Params = Promise<{ unit: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const u = find((await params).unit);
  if (!u) return {};
  const old = UNIT_META[u.slug];
  return old
    ? pageMeta({ title: old.title, absoluteTitle: true, description: old.description, path: u.href, ogTitle: old.ogTitle, ogDescription: old.ogDescription })
    : pageMeta({ title: `${u.name} — ${u.tagline}`, description: u.intro, path: u.href });
}

export default async function Page({ params }: { params: Params }) {
  const u = find((await params).unit);
  if (!u) notFound();
  return <UnitPage unit={u} />;
}
