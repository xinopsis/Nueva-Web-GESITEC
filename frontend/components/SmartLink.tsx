import Link from "next/link";
import type { AnchorHTMLAttributes } from "react";
import { isExternal } from "@/lib/content";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

/**
 * Enlace interno (next/link) o externo. Los externos —como la web de Caligo—
 * se abren en una pestaña nueva, sin pasar el contexto de la página (noopener).
 */
export function SmartLink({ href, children, ...rest }: Props) {
  if (isExternal(href)) {
    return (
      <a href={href} target="_blank" rel="noopener" {...rest}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} {...rest}>
      {children}
    </Link>
  );
}
