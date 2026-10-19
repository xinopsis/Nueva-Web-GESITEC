import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { ContactSection } from "@/components/ContactSection";
import { PageHero } from "@/components/PageHero";
import { company } from "@/lib/content";

export const metadata: Metadata = pageMeta({
  title: "Contacto — Hablemos de tu operación",
  description: "Escríbenos y un especialista de Grupo GESITEC te responde en menos de un día hábil.",
  path: "/contacto",
});

export default function ContactoPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Contacto", href: "/contacto" }]}
        kicker="Contacto"
        title="Hablemos de tu operación"
        lead={`Estamos en ${company.address}. Completa el formulario y te respondemos con una propuesta concreta.`}
      />
      <ContactSection title="Cuéntanos qué necesitas" />
    </>
  );
}
