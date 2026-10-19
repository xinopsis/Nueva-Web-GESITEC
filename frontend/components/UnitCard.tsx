"use client";

import type { PointerEvent } from "react";
import { productsByUnit, type Unit } from "@/lib/content";
import { ArrowRight } from "./Icons";
import { SmartLink } from "./SmartLink";

/** Foco de luz que sigue al cursor dentro de la celda (variables CSS --mx / --my). */
const track = (e: PointerEvent<HTMLAnchorElement>) => {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
};

/**
 * Celda de unidad para la cuadrícula a sangre: cabecera blanca con el logo y
 * cuerpo azul con ícono, lema y productos. Caligo va en blanco, con búho y logo,
 * y enlaza a su web.
 */
export function UnitCard({ unit, index = 0 }: { unit: Unit; index?: number }) {
  const style = { ["--i" as string]: index, ["--reveal-delay" as string]: `${index * 90}ms` };

  if (unit.slug === "caligo") {
    return (
      <SmartLink href={unit.href} className="unit-cell unit-cell--caligo" data-reveal="" style={style} onPointerMove={track}>
        <span className="unit-cell__caligo">
          {/* eslint-disable-next-line @next/next/no-img-element -- export estático */}
          <img className="unit-cell__owl" src="/brand/caligo-buho.svg" alt="" width={120} height={120} />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="unit-cell__caligo-logo" src={unit.logo} alt="" width={250} height={64} />
        </span>
        <h3 className="sr-only">Caligo</h3>
        <span className="unit-cell__body">
          <p className="unit-cell__tagline">{unit.tagline}</p>
          <span className="link-arrow">
            Ir a la web de Caligo <ArrowRight size={16} />
          </span>
        </span>
      </SmartLink>
    );
  }

  return (
    <SmartLink href={unit.href} className="unit-cell" data-reveal="" style={style} onPointerMove={track}>
      <span className="unit-cell__head">
        {/* eslint-disable-next-line @next/next/no-img-element -- export estático */}
        <img src={unit.logo} alt="" width={600} height={162} />
      </span>
      <span className="unit-cell__body">
        <span className="unit-cell__lead">
          {unit.icon ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img className="unit-cell__icon" src={unit.icon} alt="" width={512} height={512} aria-hidden="true" />
          ) : null}
          <p className="unit-cell__tagline">{unit.tagline}</p>
        </span>
        <h3 className="sr-only">GESITEC {unit.name}</h3>
        <ul className="unit-cell__products">
          {productsByUnit(unit.slug).map((p) => (
            <li key={p.slug}>{p.name}</li>
          ))}
        </ul>
        <span className="link-arrow">
          Conocer {unit.name} <ArrowRight size={16} />
        </span>
      </span>
    </SmartLink>
  );
}

/** Cuadrícula a sangre (de lado a lado) con las unidades. */
export function UnitGrid({ units }: { units: Unit[] }) {
  return (
    <div className={`unit-grid unit-grid--${units.length}`}>
      {units.map((u, i) => (
        <UnitCard key={u.slug} unit={u} index={i} />
      ))}
    </div>
  );
}
