"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

/**
 * Fondo de video fijo para una sección (00 adicionales/logo_liquido_azul_revisado.mp4, 8 s):
 * el video queda pegado al viewport mientras se recorre la sección y GSAP + ScrollTrigger
 * avanzan sus fotogramas con el scroll (hacia adelante y hacia atrás), como el hero.
 * El recorrido va desde que la sección llega arriba hasta que aparece `endSelector`,
 * así el logo termina de formarse antes de que entren las tarjetas.
 * Recodificado a H.264 sin audio con un keyframe cada 4 fotogramas para un seek fluido.
 */
const DURATION = 8 - 1 / 24;
const SRC_DESKTOP = "/video/logo-liquido-1280.mp4";
const SRC_MOBILE = "/video/logo-liquido-854.mp4";
const POSTER = "/video/logo-liquido-poster.jpg";

export function ScrubVideoBackground({ endSelector }: { endSelector: string }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const video = videoRef.current;
    const section = root?.parentElement;
    if (!root || !video || !section) return;

    const src = window.matchMedia("(max-width: 767px)").matches ? SRC_MOBILE : SRC_DESKTOP;
    if (!video.src.endsWith(src)) video.src = src;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      // Sin animación: logo ya formado.
      const still = () => (video.currentTime = DURATION);
      video.addEventListener("loadedmetadata", still, { once: true });
      return () => video.removeEventListener("loadedmetadata", still);
    }

    gsap.registerPlugin(ScrollTrigger);

    let target = 0;
    let raf = 0;
    let active = false;

    // Lleva el video al tiempo pedido por el scroll sin encolar seeks.
    const seekLoop = () => {
      if (!video.seeking && video.readyState >= 1 && Math.abs(video.currentTime - target) > 0.02) {
        video.currentTime = target;
      }
      raf = active ? requestAnimationFrame(seekLoop) : 0;
    };
    const setActive = (on: boolean) => {
      active = on;
      if (on && !raf) raf = requestAnimationFrame(seekLoop);
    };

    const proxy = { t: 0 };
    const ctx = gsap.context(() => {
      gsap.to(proxy, {
        t: DURATION,
        ease: "none",
        onUpdate: () => (target = proxy.t),
        scrollTrigger: {
          trigger: section,
          start: "top 60%",
          endTrigger: section.querySelector(endSelector) ?? section,
          end: "top 55%",
          scrub: 0.6,
        },
      });
      // Solo se hace seek mientras la sección está en pantalla.
      ScrollTrigger.create({ trigger: section, start: "top bottom", end: "bottom top", onToggle: (self) => setActive(self.isActive) });
    }, section);

    return () => {
      active = false;
      cancelAnimationFrame(raf);
      ctx.revert();
    };
  }, [endSelector]);

  return (
    <div ref={rootRef} className="scrub-bg" aria-hidden="true">
      <div className="scrub-bg__sticky">
        <video ref={videoRef} className="scrub-bg__video" poster={POSTER} muted playsInline preload="auto" disablePictureInPicture />
        <div className="scrub-bg__overlay" />
      </div>
    </div>
  );
}
