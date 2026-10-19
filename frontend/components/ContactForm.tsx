"use client";

import { useState } from "react";
import Link from "next/link";
import { companySizes, referralSources, serviceOptions } from "@/lib/content";
import { ArrowRight, Check } from "./Icons";

type Errors = Partial<Record<string, string>>;

const FREE_DOMAINS = ["gmail.com", "hotmail.com", "outlook.com", "yahoo.com", "live.com", "icloud.com"];

/**
 * Formulario corto de calificación B2B (benchmark, sección 3 y 12.7):
 * correo corporativo, tamaño de empresa, servicio de interés, cómo nos conociste.
 * Envía a /api/contact.php (backend PHP, proxied por next.config.ts).
 */
export function ContactForm({ defaultService = "" }: { defaultService?: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [emailHint, setEmailHint] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;

    const errs: Errors = {};
    if (!data.name?.trim()) errs.name = "Cuéntanos tu nombre.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.email ?? "")) errs.email = "Ingresa un correo válido.";
    if (!data.company_size) errs.company_size = "Elige un rango.";
    if (!data.service) errs.service = "Elige un servicio.";
    if (!data.consent) errs.consent = "Necesitamos tu autorización para contactarte.";
    setErrors(errs);
    if (Object.keys(errs).length) return;

    setStatus("sending");
    try {
      const res = await fetch("/api/contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...data, page: window.location.pathname }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json.ok) {
        if (json.errors) setErrors(json.errors);
        throw new Error(json.message || "No pudimos enviar tu mensaje.");
      }
      setStatus("ok");
      form.reset();
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "No pudimos enviar tu mensaje.");
    }
  }

  function onEmailBlur(e: React.FocusEvent<HTMLInputElement>) {
    const domain = e.target.value.split("@")[1]?.toLowerCase();
    setEmailHint(domain && FREE_DOMAINS.includes(domain) ? "Si tienes un correo de empresa, te responderemos más rápido." : "");
  }

  if (status === "ok") {
    return (
      <div className="form" role="status">
        <div className="form-success">
          <Check size={48} />
          <h3>¡Gracias! Recibimos tu mensaje.</h3>
          <p>Un especialista de Grupo GESITEC te escribirá en menos de un día hábil.</p>
          <button type="button" className="btn btn--outline" onClick={() => setStatus("idle")}>
            Enviar otro mensaje
          </button>
        </div>
      </div>
    );
  }

  const invalid = (k: string) => (errors[k] ? true : undefined);

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <div className="form__row">
        <div className="field">
          <label htmlFor="cf-name">Nombre y apellido</label>
          <input id="cf-name" name="name" autoComplete="name" required aria-invalid={invalid("name")} aria-describedby="cf-name-err" />
          {errors.name && <span id="cf-name-err" className="field__error">{errors.name}</span>}
        </div>
        <div className="field">
          <label htmlFor="cf-email">Correo corporativo</label>
          <input
            id="cf-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            onBlur={onEmailBlur}
            aria-invalid={invalid("email")}
            aria-describedby="cf-email-err cf-email-hint"
          />
          {errors.email && <span id="cf-email-err" className="field__error">{errors.email}</span>}
          {emailHint && <span id="cf-email-hint" className="field__hint">{emailHint}</span>}
        </div>
      </div>
      <div className="form__row">
        <div className="field">
          <label htmlFor="cf-company">Empresa</label>
          <input id="cf-company" name="company" autoComplete="organization" />
        </div>
        <div className="field">
          <label htmlFor="cf-size">Tamaño de empresa</label>
          <select id="cf-size" name="company_size" defaultValue="" required aria-invalid={invalid("company_size")}>
            <option value="" disabled>Selecciona</option>
            {companySizes.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
          {errors.company_size && <span className="field__error">{errors.company_size}</span>}
        </div>
      </div>
      <div className="form__row">
        <div className="field">
          <label htmlFor="cf-service">Servicio de interés</label>
          <select id="cf-service" name="service" defaultValue={defaultService} required aria-invalid={invalid("service")}>
            <option value="" disabled>Selecciona</option>
            {serviceOptions.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
          {errors.service && <span className="field__error">{errors.service}</span>}
        </div>
        <div className="field">
          <label htmlFor="cf-source">¿Cómo nos conociste?</label>
          <select id="cf-source" name="source" defaultValue="">
            <option value="">Selecciona</option>
            {referralSources.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="field">
        <label htmlFor="cf-message">¿En qué te ayudamos? (opcional)</label>
        <textarea id="cf-message" name="message" maxLength={2000} />
      </div>
      {/* Honeypot anti-spam: los humanos no lo ven */}
      <div className="hp" aria-hidden="true">
        <label htmlFor="cf-website">No llenar</label>
        <input id="cf-website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <label className="form__legal" style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
        <input type="checkbox" name="consent" value="1" aria-invalid={invalid("consent")} style={{ marginTop: 3 }} />
        <span>
          Autorizo a Grupo GESITEC a usar estos datos para responder mi consulta, conforme a la Ley N.° 29733 de Protección de Datos Personales y a la{" "}
          <Link href="/politica-de-privacidad">Política de privacidad</Link>.
        </span>
      </label>
      {errors.consent && <span className="field__error">{errors.consent}</span>}
      {status === "error" && (
        <p className="form__status form__status--error" role="alert">
          {message} Escríbenos directamente o inténtalo de nuevo en unos minutos.
        </p>
      )}
      <button type="submit" className="btn btn--primary" disabled={status === "sending"}>
        {status === "sending" ? "Enviando…" : "Quiero que me contacten"} <ArrowRight size={16} />
      </button>
    </form>
  );
}
