"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { glossary, glossaryCategories, type GlossaryCategory } from "@/lib/content";
import { ArrowRight, Search } from "./Icons";

const normalize = (s: string) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

export function GlossaryBrowser() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<GlossaryCategory | "all">("all");

  const list = useMemo(() => {
    const nq = normalize(q.trim());
    return glossary
      .filter((t) => cat === "all" || t.category === cat)
      .filter((t) => !nq || normalize(t.term + " " + t.definition).includes(nq))
      .sort((a, b) => a.term.localeCompare(b.term, "es"));
  }, [q, cat]);

  return (
    <>
      <div className="glossary-tools">
        <div className="search">
          <Search />
          <label htmlFor="g-search" className="sr-only">Buscar término</label>
          <input id="g-search" type="search" placeholder="Buscar término…" value={q} onChange={(e) => setQ(e.target.value)} />
        </div>
        <div className="filter" role="group" aria-label="Filtrar por categoría" style={{ margin: 0 }}>
          <button type="button" aria-pressed={cat === "all"} onClick={() => setCat("all")}>Todas</button>
          {glossaryCategories.map((c) => (
            <button key={c} type="button" aria-pressed={cat === c} onClick={() => setCat(c)}>
              {c}
            </button>
          ))}
        </div>
      </div>
      {list.length === 0 ? (
        <p className="empty">No encontramos términos para “{q}”.</p>
      ) : (
        <div className="grid grid-3">
          {list.map((t) => (
            <Link key={t.slug} href={`/glosario/${t.slug}`} className="card term-card">
              <span className="chip">{t.category}</span>
              <h3>{t.term}</h3>
              <p>{t.definition.length > 130 ? t.definition.slice(0, 127).trimEnd() + "…" : t.definition}</p>
              <span className="link-arrow">Leer definición <ArrowRight size={16} /></span>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
