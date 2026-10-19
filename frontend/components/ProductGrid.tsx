"use client";

import { useState } from "react";
import { products, units, type UnitSlug } from "@/lib/content";
import { ProductCard } from "./ProductCard";

const FILTERS: ("all" | UnitSlug)[] = ["all", "technology", "advisory", "security", "innova"];

export function ProductGrid() {
  const [filter, setFilter] = useState<"all" | UnitSlug>("all");
  const catalog = products.filter((p) => p.unit !== "caligo");
  const list = filter === "all" ? catalog : catalog.filter((p) => p.unit === filter);
  return (
    <>
      <div className="filter" role="group" aria-label="Filtrar productos por unidad">
        {FILTERS.map((f) => (
          <button key={f} type="button" aria-pressed={filter === f} onClick={() => setFilter(f)}>
            {f === "all" ? "Todos" : units[f].name}
          </button>
        ))}
      </div>
      <div className="grid grid-3">
        {list.map((p, i) => (
          <ProductCard key={p.slug} product={p} delay={(i % 3) * 90} />
        ))}
      </div>
    </>
  );
}
