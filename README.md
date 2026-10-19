# Nueva web — Grupo GESITEC

Sitio construido a partir de `00 adicionales/` (look & feel, benchmark v1.1 y `llms.txt`).

```
frontend/   Next.js 16 + React 19 (App Router, TypeScript) — todo el sitio, prerenderizado (SSG)
backend/    PHP 8.1+ — API del formulario de contacto (leads a CSV + aviso por correo opcional)
```

## Levantar en local

```bash
cd backend && php -S localhost:8000 -t public
```

Si no tienes PHP instalado, la misma API corre con PHP compilado a WebAssembly:

```bash
cd backend && npx -y @php-wasm/cli -S localhost:8000 -t public
```

```bash
cd frontend && npm install && npm run dev
```

Abrir http://localhost:3000. Next.js reenvía `/api/*` al backend PHP (`PHP_API_URL`, ver `frontend/.env.example`).

## Producción

- **Frontend:** `npm run build && npm start` (Node). Variables: `NEXT_PUBLIC_SITE_URL=https://gesitec.pe` (corrige el canonical que apuntaba a gesitec.com), `PHP_API_URL`, `NEXT_PUBLIC_SHOW_PRICES`.
- **Backend:** document root = `backend/public`. Copiar `config/config.example.php` → `config/config.php` y definir `mail.to` y `allowed_origins`. Los leads quedan en `backend/storage/leads.csv` (fuera del document root).

## Cómo se aplicó el look & feel

| Guía | Implementación |
|---|---|
| Paleta (3.1) | Tokens en `app/globals.css`: `--gst-azul-marino`, `--gst-tinta`, `--gst-blanco` (+ azul profundo). Por indicación de Renzo, los azules de marca pasaron a un **azul casi negro** (`#0F1A2A` / `#16243A` / `#080F1A`) |
| Acento (3.3) | **Opción A** (la recomendada): un solo acento funcional cian, `#087684` sobre blanco (5.3:1) / `#5FD4E0` sobre azul (5.8:1). Las unidades se distinguen por nombre + chip con inicial, no por color |
| Tipografía (4) | Poppins 400/500/600/700 vía `next/font` (self-hosted, `display: swap`) |
| Logo (2) | Logo oficial en header y footer; sin marcas de agua de escudo (se retiraron de heros, contacto y footer) |
| Patrones (5) | Kicker, titular-cita de producto, bloque "ENTREGABLE", nombre de producto en mayúsculas, banner de unidad en movimiento (solo en páginas de unidad; se quitó del home) |
| Scroll (benchmark 10) | Aparición al entrar en pantalla (IntersectionObserver) en **todas** las páginas, barra de progreso. Hero del home con video a pantalla completa (`components/VideoHero.tsx`): se reproduce solo hasta el segundo 9 y luego GSAP + ScrollTrigger lo fijan y lo recorren con el scroll (últimos 3 s: 9 s → 12 s). Videos en `public/video/`, recodificados desde `00 adicionales/soc-monitoreo.mp4` (HEVC 10-bit → H.264) con un keyframe cada 4 fotogramas para que el seek sea fluido. Respeta `prefers-reduced-motion`; sin JS el contenido se ve completo |
| SEO / LLM (9) | SSG, un H1 por página, metadatos por página, JSON-LD (`Organization`, `Service`, `FAQPage`, `BreadcrumbList`, `DefinedTerm`), `sitemap.xml`, `robots.txt` que admite crawlers de IA, `/llms.txt` |

Rutas: `/`, `/nosotros`, cuatro unidades estratégicas independientes (`/technology`, `/advisory`, `/security`, `/innova`) con sus 5 fichas de producto debajo (`/security/gst-escudo`…); Caligo no tiene páginas aquí: todo enlaza a https://caligo.pe (constante `CALIGO_URL` en `lib/content.ts`, las URLs antiguas `/caligo/*` y `/technology/<unidad>/*` redirigen con 301 en `.htaccess`); `/certificaciones`, `/glosario` (+27 términos), `/blog`, `/contacto`.

## Pendientes antes de publicar

1. **Logo:** header y footer usan el logo oficial `2026-LOGO-Grupo-Gesitec.png` (`public/brand/`: versión blanca + versión en tinta `#373F52` derivada del mismo archivo). Favicon: el de la web anterior (`public/favicon.ico` y PNG).
2. **Acento:** confirmar la Opción A con Renzo (o pasar a B cambiando los tokens).
3. **Textos borrador:** "Cómo funciona", "Qué incluye" y las FAQ de cada producto (`lib/content.ts`) los redacté a partir del catálogo. Hay que validarlos con Comercial.
4. **Precios:** están ocultos (`NEXT_PUBLIC_SHOW_PRICES=false`). Activarlos solo si Comercial aprueba.
5. **Cifras del hero:** solo usé datos de los documentos (4 unidades, 7 productos, 24/7, SLA). Se retiraron las referencias al grupo económico y al Grupo Coril. Agregar cifras reales (clientes activos, nodos, tickets/mes) cuando estén.
6. **Clientes:** solo como sección del home (`#clientes`; `/clientes` redirige ahí). Logos en `public/clientes/` + respaldo institucional en `public/respaldo/` (incluye Kaspersky). Faltan testimonios por producto.
7. **Blog:** generado desde `content/blog/articulos.json` (misma estructura que el `articulos.xml` de la web anterior). Para publicar: agregar el objeto al JSON, el cuerpo en `content/blog/<slug>.html` y la portada en `public/blog/covers/`. Las URLs antiguas `blog/<slug>.html` redirigen con 301.
9. **Logos de certificaciones:** ISO, Cisco (CCNA), EC-Council (CEH) e INE (eWPTX) en `public/certificaciones/`. ITIL se muestra como marca tipográfica hasta tener el logo oficial (agregar `logo` en `certifications`).
8. **Mapeo producto → unidad:** validar con Comercial (benchmark, sección 5).
