"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

/**
 * Título que aparece palabra por palabra mientras se hace scroll (GSAP + ScrollTrigger).
 * Cada palabra pasa de tenue, desplazada y desenfocada a su estado final, en secuencia,
 * siguiendo el avance del scroll (hacia adelante y hacia atrás).
 * Sin JS o con prefers-reduced-motion el título se ve completo.
 */
export function ScrollWords({ text, as: Tag = "h2", className }: { text: string; as?: "h1" | "h2" | "h3"; className?: string }) {
  const ref = useRef<HTMLHeadingElement>(null);
  const words = text.split(" ");

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el.querySelectorAll(".scroll-words__w"),
        { opacity: 0.08, yPercent: 60, rotateX: -50, filter: "blur(6px)" },
        {
          opacity: 1,
          yPercent: 0,
          rotateX: 0,
          filter: "blur(0px)",
          ease: "power2.out",
          stagger: 0.12,
          // Se calcula después del pin del hero, que agrega altura a la página.
          scrollTrigger: { trigger: el, start: "top 88%", end: "top 45%", scrub: 0.5, refreshPriority: -1 },
        },
      );
    }, el);
    const raf = requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => {
      cancelAnimationFrame(raf);
      ctx.revert();
    };
  }, [text]);

  return (
    <Tag ref={ref} className={`scroll-words${className ? ` ${className}` : ""}`} aria-label={text}>
      {words.map((w, i) => (
        <span key={i} aria-hidden="true">
          <span className="scroll-words__w">{w}</span>
          {i < words.length - 1 ? " " : null}
        </span>
      ))}
    </Tag>
  );
}
