import { isExternal, type Product } from "@/lib/content";
import { Deliverable } from "./Deliverable";
import { ArrowRight } from "./Icons";
import { SmartLink } from "./SmartLink";

export function ProductCard({ product, delay = 0 }: { product: Product; delay?: number }) {
  return (
    <SmartLink
      href={product.href}
      className="card product-card"
      data-reveal=""
      style={{ ["--reveal-delay" as string]: `${delay}ms` }}
    >
      <span className="product-card__name">{product.name}</span>
      <span className="product-card__promise">{product.promise}</span>
      <p>{product.short}</p>
      <Deliverable text={product.deliverable} />
      <span className="link-arrow">
        {isExternal(product.href) ? "Ver en la web de Caligo" : "Ver producto"} <ArrowRight size={16} />
      </span>
    </SmartLink>
  );
}
