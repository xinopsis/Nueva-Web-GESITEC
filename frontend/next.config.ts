import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants";

// Producción: exportación estática (carpeta out/) que se sube por FTP junto al
// backend PHP; el formulario llama a /api/contact.php en el mismo dominio.
// Desarrollo: Next.js reenvía /api/* al servidor PHP local.
const PHP_API_URL = process.env.PHP_API_URL ?? "http://localhost:8000";

export default function config(phase: string): NextConfig {
  const base: NextConfig = { poweredByHeader: false, trailingSlash: true };
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      ...base,
      async rewrites() {
        return [{ source: "/api/:path*", destination: `${PHP_API_URL}/api/:path*` }];
      },
    };
  }
  return { ...base, output: "export" };
}
