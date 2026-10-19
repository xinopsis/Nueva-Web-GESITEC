"use client";

import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef } from "react";

/**
 * Scroll dinámico en toda la web (benchmark, sección 10):
 * - reveal de cada [data-reveal] con IntersectionObserver (solo transform/opacity)
 * - barra de progreso de lectura
 * - vuelta al inicio de la página en cada cambio de ruta
 * Respeta prefers-reduced-motion vía CSS. Un MutationObserver cubre contenido
 * que aparece después (cambios de ruta, filtros).
 */
export function ScrollEffects() {
  const barRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const firstRender = useRef(true);
  const fromHistory = useRef(false);

  // Atrás/adelante del navegador: se respeta la posición que restaura el navegador.
  useEffect(() => {
    const onPop = () => (fromHistory.current = true);
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  // Al navegar a otra página, empezar desde el banner. Next.js no lo garantiza cuando
  // el nuevo contenido ya está parcialmente en pantalla o con scroll-behavior: smooth.
  useLayoutEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    if (fromHistory.current) {
      fromHistory.current = false;
      return;
    }
    if (window.location.hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("js");

    const reveal = (el: Element) => el.classList.add("is-visible");

    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll("[data-reveal]").forEach(reveal);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            reveal(e.target);
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    const scan = () => document.querySelectorAll("[data-reveal]:not(.is-visible)").forEach((el) => io.observe(el));
    scan();

    const mo = new MutationObserver(scan);
    mo.observe(document.body, { childList: true, subtree: true });

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const max = root.scrollHeight - window.innerHeight;
        const p = max > 0 ? Math.min(1, window.scrollY / max) : 0;
        barRef.current?.style.setProperty("--progress", p.toFixed(4));
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      io.disconnect();
      mo.disconnect();
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return <div ref={barRef} className="scroll-progress" aria-hidden="true" />;
}
