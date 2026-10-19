import type { Faq as FaqItem } from "@/lib/content";
import { Plus } from "./Icons";
import { JsonLd } from "./JsonLd";

export function Faq({ items, center = false }: { items: FaqItem[]; center?: boolean }) {
  return (
    <div className={`faq${center ? " faq--center" : ""}`}>
      {items.map((f, i) => (
        <details key={f.q} data-reveal="" style={{ ["--reveal-delay" as string]: `${i * 60}ms` }}>
          <summary>
            {f.q}
            <span className="faq__icon">
              <Plus />
            </span>
          </summary>
          <p>{f.a}</p>
        </details>
      ))}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: items.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />
    </div>
  );
}
