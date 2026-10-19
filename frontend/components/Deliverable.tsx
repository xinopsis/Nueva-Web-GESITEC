import { Check } from "./Icons";

export function Deliverable({ text, large = false }: { text: string; large?: boolean }) {
  return (
    <div className={`deliverable${large ? " deliverable--lg" : ""}`}>
      <span className="deliverable__label">
        <Check size={14} /> Entregable
      </span>
      <span className="deliverable__text">{text}</span>
    </div>
  );
}
