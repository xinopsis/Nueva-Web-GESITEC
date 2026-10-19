"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

/**
 * Hero del home con video a pantalla completa (00 adicionales/soc-monitoreo.mp4, 12 s).
 * 1. Al cargar, el video se reproduce solo desde 0 s y se detiene en INTRO_END.
 * 2. Desde ahí, GSAP + ScrollTrigger fijan (pin) el hero y el scroll recorre los
 *    últimos 3 s del video (INTRO_END → SCRUB_END), hacia adelante y hacia atrás.
 * El original viene en HEVC 10-bit; está recodificado a H.264 con un keyframe cada 4 fotogramas para que el
 * seek por scroll sea fluido. Con prefers-reduced-motion no hay autoplay ni pin.
 */
const INTRO_END = 9;
const SCRUB_END = 12 - 1 / 24; // último fotograma del video (12 s a 24 fps)
const SRC_DESKTOP = "/video/soc-monitoreo-1600.mp4";
const SRC_MOBILE = "/video/soc-monitoreo-960.mp4";
const POSTER = "/video/soc-monitoreo-poster.jpg";

type FrameCallbackVideo = HTMLVideoElement & {
  requestVideoFrameCallback?: (cb: (now: number, meta: { mediaTime: number }) => void) => number;
};

export function VideoHero({ children }: { children: React.ReactNode }) {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const hintRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current as FrameCallbackVideo | null;
    if (!section || !video) return;

    const src = window.matchMedia("(max-width: 767px)").matches ? SRC_MOBILE : SRC_DESKTOP;
    if (!video.src.endsWith(src)) video.src = src;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      // Sin animación: fotograma fijo al final de la intro.
      const still = () => (video.currentTime = INTRO_END);
      video.addEventListener("loadedmetadata", still, { once: true });
      return () => video.removeEventListener("loadedmetadata", still);
    }

    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.config({ ignoreMobileResize: true });

    let introDone = false;
    let target = INTRO_END;
    let raf = 0;
    let disposed = false;

    // Lleva el video al tiempo pedido por el scroll sin encolar seeks.
    const seekLoop = () => {
      if (disposed) return;
      if (!video.seeking && video.readyState >= 1 && Math.abs(video.currentTime - target) > 0.02) {
        video.currentTime = target;
      }
      raf = requestAnimationFrame(seekLoop);
    };

    const endIntro = () => {
      if (introDone || disposed) return;
      introDone = true;
      video.pause();
      section.classList.add("is-scrubbing");
      seekLoop();
    };

    // Detener exactamente en INTRO_END (rVFC es preciso por fotograma; timeupdate es el respaldo).
    const watchFrame = () => {
      video.requestVideoFrameCallback?.((_, meta) => {
        if (introDone || disposed) return;
        if (meta.mediaTime >= INTRO_END - 1 / 24) endIntro();
        else watchFrame();
      });
    };
    const onTimeUpdate = () => {
      if (video.currentTime >= INTRO_END) endIntro();
    };
    video.addEventListener("timeupdate", onTimeUpdate);
    watchFrame();

    const playIntro = () => {
      if (introDone || disposed) return;
      video.play().catch((err: DOMException) => {
        // Si el navegador bloquea el autoplay, pasa directo al modo scroll.
        if (err.name === "NotAllowedError") endIntro();
      });
    };
    // Chrome pausa videos silenciados en pestañas ocultas: retomar la intro al volver.
    const onVisible = () => {
      if (document.visibilityState === "visible" && video.paused) playIntro();
    };
    document.addEventListener("visibilitychange", onVisible);

    video.currentTime = 0;
    playIntro();

    const proxy = { t: INTRO_END };
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=130%", // 3 s de video: recorrido corto para que no se sienta lento
          pin: true,
          scrub: 0.6,
          onUpdate: (self) => {
            // Si el usuario hace scroll durante la intro, el scroll toma el control.
            if (!introDone && self.progress > 0.01) endIntro();
          },
        },
      });
      tl.to(proxy, { t: SCRUB_END, duration: 1, onUpdate: () => (target = proxy.t) }, 0)
        .to(hintRef.current, { autoAlpha: 0, duration: 0.1 }, 0)
        .to(contentRef.current, { autoAlpha: 0, y: -80, duration: 0.3, ease: "power1.in" }, 0.7);
    }, section);

    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      video.removeEventListener("timeupdate", onTimeUpdate);
      document.removeEventListener("visibilitychange", onVisible);
      ctx.revert();
    };
  }, []);

  // El pin de ScrollTrigger envuelve el <section> en un .pin-spacer fuera de React.
  // Este <div> es el nodo que React desmonta al cambiar de página, así no falla
  // con "removeChild: the node to be removed is not a child of this node".
  return (
    <div className="hero-pin">
      <section ref={sectionRef} className="hero hero--video">
        <div className="hero__media" aria-hidden="true">
          <video ref={videoRef} className="hero__video" poster={POSTER} muted playsInline preload="auto" disablePictureInPicture />
          <div className="hero__overlay" />
        </div>
        <div ref={contentRef} className="hero__content">
          {children}
        </div>
        <div ref={hintRef} className="hero__hint" aria-hidden="true">
          <span>Desliza</span>
          <span className="hero__hint-line" />
        </div>
      </section>
    </div>
  );
}
