import { units, type UnitSlug } from "@/lib/content";

/** Opción A de color: la unidad se distingue por nombre + inicial, no por color. */
export function UnitChip({ unit }: { unit: UnitSlug }) {
  const u = units[unit];
  return (
    <span className="unit-chip">
      <span className="unit-chip__mark" aria-hidden="true">
        {u.initial}
      </span>
      {u.name}
    </span>
  );
}
