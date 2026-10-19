"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { isExternal, mainNav, type NavItem } from "@/lib/content";
import { Logo } from "./Brand";
import { ArrowRight, ChevronDown, Close, Menu } from "./Icons";
import { SmartLink } from "./SmartLink";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  // Submenú cerrado tras un clic: se mantiene oculto aunque el cursor siga encima
  // (la navegación es del lado del cliente y :hover / :focus-within no se reinician).
  const [dismissed, setDismissed] = useState<string | null>(null);

  useEffect(() => {
    // Sobre el hero con video fijado (pin de ScrollTrigger) el header sigue transparente.
    const onScroll = () => {
      const spacer = document.querySelector<HTMLElement>(".hero--video")?.closest<HTMLElement>(".pin-spacer");
      const threshold = spacer ? spacer.offsetHeight - window.innerHeight * 0.4 : 8;
      setScrolled(window.scrollY > threshold);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  useEffect(() => setMounted(true), []);
  useEffect(() => setOpen(false), [pathname]);

  const closeMenu = (label: string) => {
    setDismissed(label);
    (document.activeElement as HTMLElement | null)?.blur();
  };

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const matches = (href: string) => !isExternal(href) && !href.includes("#") && href !== "/" && pathname.startsWith(href);
  const isActive = (item: NavItem) => matches(item.href) || !!item.children?.some((c) => matches(c.href));

  return (
    <header className={`site-header${scrolled || open ? " is-scrolled" : " is-top"}${open ? " is-menu-open" : ""}`}>
      <div className="container site-header__inner">
        <Logo />
        <nav className="nav" aria-label="Principal">
          {mainNav.map((item) => (
            <div
              className={`nav__item${dismissed === item.label ? " is-dismissed" : ""}`}
              key={item.label}
              onMouseLeave={() => dismissed === item.label && setDismissed(null)}
              onFocus={(e) => e.target === e.currentTarget.firstElementChild && dismissed === item.label && setDismissed(null)}
            >
              {item.children ? (
                <>
                  <Link
                    href={item.href}
                    className="nav__link"
                    aria-current={isActive(item) ? "page" : undefined}
                    aria-haspopup="true"
                    onClick={() => closeMenu(item.label)}
                  >
                    {item.label} <ChevronDown />
                  </Link>
                  <div className="nav__menu">
                    {item.children.map((c) => (
                      <Link key={c.href + c.label} href={c.href} onClick={() => closeMenu(item.label)}>
                        {c.label}
                        {c.note && <span>{c.note}</span>}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <SmartLink href={item.href} className="nav__link" aria-current={isActive(item) ? "page" : undefined}>
                  {item.label}
                </SmartLink>
              )}
            </div>
          ))}
        </nav>
        <Link href="/contacto" className="btn btn--primary header-cta">
          Hablemos <ArrowRight size={16} />
        </Link>
        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <Close /> : <Menu />}
        </button>
      </div>
      {mounted
        ? createPortal(
            <div id="mobile-nav" className={`mobile-nav${open ? " is-open" : ""}`} hidden={!open}>
              {mainNav.map((item) => (
                <div className="mobile-nav__group" key={item.label}>
                  {item.children ? (
                    <>
                      <p className="mobile-nav__title">{item.label}</p>
                      {item.children.map((c) => (
                        <Link key={c.href + c.label} href={c.href} onClick={() => setOpen(false)}>
                          {c.label}
                          {c.note ? <span>{c.note}</span> : null}
                        </Link>
                      ))}
                    </>
                  ) : (
                    <SmartLink href={item.href} onClick={() => setOpen(false)}>
                      {item.label}
                    </SmartLink>
                  )}
                </div>
              ))}
              <Link href="/contacto" className="btn btn--primary" onClick={() => setOpen(false)}>
                Hablemos <ArrowRight size={16} />
              </Link>
            </div>,
            document.body,
          )
        : null}
    </header>
  );
}
