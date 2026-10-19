import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement> & { size?: number };

const base = (size: number): SVGProps<SVGSVGElement> => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "square",
  strokeLinejoin: "miter",
  "aria-hidden": true,
});

export const ArrowRight = ({ size = 18, ...p }: P) => (
  <svg {...base(size)} {...p}>
    <path d="M4 12h15M13 6l6 6-6 6" />
  </svg>
);
export const ChevronDown = ({ size = 14, ...p }: P) => (
  <svg {...base(size)} {...p}>
    <path d="M6 9l6 6 6-6" />
  </svg>
);
/** Check con la geometría del escudo: trazos rectos que se cierran. */
export const Check = ({ size = 20, ...p }: P) => (
  <svg {...base(size)} {...p}>
    <path d="M4 4h16v9l-8 8-8-8z" strokeWidth={1.6} />
    <path d="M8.5 11.5l2.5 2.5 4.5-5" />
  </svg>
);
export const Plus = ({ size = 16, ...p }: P) => (
  <svg {...base(size)} {...p}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);
export const Search = ({ size = 18, ...p }: P) => (
  <svg {...base(size)} {...p}>
    <circle cx="11" cy="11" r="7" />
    <path d="M20 20l-4-4" />
  </svg>
);
export const Menu = ({ size = 22, ...p }: P) => (
  <svg {...base(size)} {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);
export const Close = ({ size = 22, ...p }: P) => (
  <svg {...base(size)} {...p}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);
export const Badge = ({ size = 20, ...p }: P) => (
  <svg {...base(size)} {...p}>
    <path d="M5 3h14v10l-7 8-7-8z" />
    <path d="M9 10l2 2 4-4" />
  </svg>
);
