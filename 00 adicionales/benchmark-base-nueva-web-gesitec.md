# Benchmark Delta Protect → Base de contenido para la nueva web de Grupo GESITEC

**Fecha:** 28 de septiembre de 2026 (v1.1) · **Autor:** Renzo (Jefe de Innova) + Claude · **Uso interno**
**Fuentes:** deltaprotect.com (fetch en vivo, sep-2026) · `Copia de GST SOPORTE 2.pdf` (última presentación, subida 28-sep-2026) · `plan-productizacion-catalogo.md` (10-sep-2026, fuente prioritaria para textos de producto) · `LOGOGRUPOGESITEC.png` / `ISOTIPO_azul.jpg`

> **Cómo usar este documento:** es el brief de contenido + arquitectura para el equipo que construya la nueva web de gesitec.pe. No es diseño visual ni código: es la capa de mensajes, estructura de información y reglas de redacción que el sitio debe cumplir para leerse bien en tres audiencias a la vez — personas no técnicas, buscadores (Google) y modelos de lenguaje (ChatGPT, Perplexity, Gemini, Claude).
>
> **v1.1 — cambios sobre la versión anterior:** (1) se confirma el layout de la lámina "Unidades Estratégicas" del PDF, sin ambigüedad; (2) el producto de gobierno de TI queda fijado como **GST Guía**; (3) los textos de promesa/herramienta/unidad de venta de cada producto se corrigen para priorizar el `plan-productizacion-catalogo.md` sobre la presentación final; (4) se entrega el archivo `llms.txt` implementado, listo para publicar; (5) se añade el requisito de scroll dinámico funcional en toda la web (sección 10).

---

## 1. Resumen ejecutivo

Delta Protect (ciberseguridad/cumplimiento, LATAM) resuelve un problema parecido al de GESITEC: vender servicios técnicos complejos (pentesting, SOC, cumplimiento) a compradores que no siempre son técnicos, y hacerlo de forma que el contenido sea consumible tanto por humanos como por IA. Su web funciona porque cada servicio está empaquetado como **producto con nombre propio** (dATTACK, dSOC, dCISO...), respaldado por **prueba social cuantificada** (+350 empresas, 15,000 endpoints, 8 países) y estructurado en **capas de profundidad** (titular en una frase → página de servicio → glosario → blog técnico), con arquitectura pensada explícitamente para IA (archivo `llms.txt`, glosario de 120+ términos, FAQ estructuradas).

GESITEC ya tiene la materia prima para lo mismo: identidad visual nueva (isotipo tipo escudo, azul marino, tipografía geométrica en mayúsculas), una estructura de grupo confirmada (Technology como pilar con tres unidades estratégicas + Caligo como submarca de marketing), y un catálogo de productos GST con la fórmula **Promesa + Herramienta propia + Unidad de venta + Precio + Entregable** ya trabajada en el plan de productización. Lo que falta es trasladar eso a una arquitectura web completa, con las reglas de redacción y metadatos que lo hagan legible para Google y para LLMs, no solo para un PDF comercial o un documento interno.

---

## 2. Identidad visual detectada (línea gráfica nueva)

De `LOGOGRUPOGESITEC.png` e `ISOTIPO_azul.jpg`:

| Elemento | Descripción |
|---|---|
| **Isotipo** | Escudo construido con trazos geométricos (corchetes/brackets que se cierran en una forma de escudo) — connota protección, estructura, seguridad. Funciona sólo en una tinta. |
| **Paleta** | Azul marino/pizarra (`#2C4A63` aprox. en el fondo del isotipo, `#333F52` aprox. en el logotipo sobre blanco). Monocromática, corporativa, sin colores de acento visibles en estas piezas. |
| **Tipografía** | Sans-serif geométrica, todo en mayúsculas, alto peso (bold) para "GESITEC", versión ligera con tracking amplio para "GRUPO". |
| **Relación con producto** | El shield del isotipo es coherente con el naming de producto **GST Escudo** y con el posicionamiento de seguridad — hay una oportunidad de usar el mismo lenguaje visual (formas que se "cierran"/protegen) como motivo recurrente en iconografía de producto y en las micro-interacciones de scroll (ver sección 10). |

**Implicación para la web:** el diseño puede y debe mantenerse sobrio/monocromático en la marca corporativa, pero cada unidad de negocio (Technology, Advisory, Security, Innova, Caligo) necesita un color de acento propio para que el usuario — y un LLM leyendo la página — puedan distinguir "en qué división estoy" de un vistazo. Delta Protect resuelve esto con una letra minúscula prefijo ("d") + nombre; GESITEC ya resolvió el naming (GST + nombre), falta el código de color por unidad.

---

## 3. Benchmark: qué hace Delta Protect y qué le falta a gesitec.pe

| Elemento | Delta Protect | Estado actual de GESITEC (según auditoría previa) | Recomendación |
|---|---|---|---|
| **Propuesta de valor en el hero** | Una frase, sin jerga: *"El Centro de Comando de Ciberseguridad, impulsado por IA, que tu Empresa necesita"* + CTA único | Mensaje genérico, no refleja la profundidad real de servicios (hallazgo de auditoría previa) | Una frase por unidad de negocio, sin acrónimos técnicos en el H1 |
| **Prueba social cuantificada** | "+350 empresas", "+15,000 endpoints", "8 países", logos de clientes (Bitso, Office Depot, Foxconn) | No se usa on-page (aunque el grupo sí atiende JNE, Ministerio de Educación, CONIDA, CONCYTEC) | Poner cifras reales arriba del fold: nº de clientes activos, años de operación, nodos monitoreados, tickets resueltos/mes |
| **Productos con nombre propio** | dATTACK, dSTANDARD, dSOC, dTOOLS, dCLOUD, dCISO — cada uno con promesa en una frase | Ya existe: GST Vigía, GST Soporte, GST Guía, GST Escudo, GST Innova, CALIGO Presencia, CALIGO Reputación | Reutilizar el naming GST/CALIGO tal cual, con los textos de promesa del plan de productización (sección 5) — no reinventar copy |
| **Ficha de producto repetible** | Misma estructura para los 6 servicios: problema → cómo lo resuelven → entregable → CTA | Definida en el plan de productización (Promesa + Rol + Herramienta + SLA + Unidad de venta + Precio) | Formalizarla como plantilla web (sección 7) |
| **Certificaciones/respaldo** | 14 logos: ISO 27001, SOC 2, PCI DSS, HIPAA, NIST, AWS, Azure, GCP | GESITEC tiene ISO 27001, ITIL, CCNA, eWPTX, CEH, Design Thinking, Scrum (según auditoría previa) — no visibles en el naming actual del grupo | Franja de logos de certificaciones + pertenencia a Grupo Coril como respaldo corporativo |
| **Glosario técnico** | 120+ términos, filtrable por categoría, cada uno como página indexable | No existe | Sección `/glosario` con 40-60 términos de TI/ciberseguridad/marketing digital en español peruano (ver sección 8) |
| **Legibilidad para IA** | Archivo `llms.txt` con resumen de la empresa en texto plano; contenido con jerarquía de encabezados limpia; FAQ estructuradas | No existía — **ya implementado para GESITEC en esta entrega** (sección 9.3) | Publicarlo en la raíz del dominio y mantenerlo sincronizado con cambios de catálogo |
| **FAQ en cada página clave** | 6 preguntas expandibles en home, orientadas a objeciones de compra | No existe | FAQ de 4-6 preguntas por unidad de negocio, en lenguaje llano |
| **Arquitectura multi-país/multi-marca** | Selector de país, trust centers por cliente | Grupo con pilar Technology (3 unidades) + Caligo, sin jerarquía clara en el dominio actual | Subrutas anidadas bajo `/technology` + `/caligo` en `gesitec.pe` (ver sección 6) |
| **CTA final** | Formulario corto: correo corporativo, tamaño de empresa, servicio de interés, cómo nos conociste | No definido | Replicar ese formulario — son los 4 campos mínimos para calificar un lead B2B |
| **Blog/recursos** | Categorías: Ciberseguridad, Cumplimiento, Ciberataques | No existe como estrategia formal | Blog con categorías espejo de las unidades: Infraestructura, Seguridad, Software/IA, Marketing digital |
| **Dinamismo visual** | Transiciones y microinteracciones consistentes en toda la web | No evaluado | Scroll-reveal funcional en todas las páginas, no solo en el home (ver sección 10) |

---

## 4. Estructura del grupo (confirmada — para la navegación del sitio)

El layout de la lámina "Unidades Estratégicas" del PDF es correcto tal como aparece, sin artefactos de maquetación: **Technology** es el pilar central de servicios gestionados de TI, con **tres unidades estratégicas** operando dentro de él — Advisory, Security e Innova. **Caligo** es la submarca independiente de marketing digital y reputación.

```
GRUPO GESITEC (parte del Grupo Coril, +25 empresas; respaldo directo de
Talent Hunters [selección de personal] y Banco Alfin [cartas fianza])
│
├── TECHNOLOGY — pilar central: "Operación TI bajo SLAs y KPIs"
│     ├── ADVISORY  — Gobierno y estrategia corporativa
│     ├── SECURITY  — Ciberseguridad ofensiva y defensiva
│     └── INNOVA    — Software inteligente e IA aplicada
│
└── CALIGO — Marketing digital y reputación ("Estrategia imparable, reputación intocable")
```

Esta es la navegación principal del sitio: "Technology" se despliega como pilar con acceso a sus tres unidades estratégicas, y "Caligo" vive como sección propia, al mismo nivel que Technology.

---

## 5. Catálogo de productos (textos corregidos según el plan de productización)

Por indicación de Renzo, los textos de cada producto priorizan el `plan-productizacion-catalogo.md` (10-sep) sobre la presentación final (28-sep), que solo aporta el naming definitivo y el concepto de "entregable" visible. El nombre del producto de gobierno de TI queda fijado como **GST Guía** (unifica el "Timón" del plan de productización con el naming GST de la presentación).

| Producto | Unidad | Promesa (plan de productización) | Herramienta propia | Unidad de venta | Precio orientativo (desde, S/ mes) | Entregable |
|---|---|---|---|---|---|---|
| **GST Vigía** | Technology | "Saber desde el celular si tu operación está arriba" | noc.gesitec.pe | Nodo monitoreado | 1,800 | Mesa de soporte interno + dashboard de incidencias |
| **GST Soporte** | Technology | "Tu personal tiene a quién llamar y tú ves cuánto tarda" | Backbone ITSM | Usuario | 55/usuario | Mesa de soporte interno + dashboard de incidencias |
| **GST Guía** | Advisory | "Un director de TI sin contratar uno" | Tablero KPI TI | Empresa | 3,500 | Mapa tecnológico completo + plan de mejora |
| **GST Escudo** | Security | "Reduces tu exposición y lo puedes demostrar" | Consola + PhaaS | Usuario + activo | 35/usuario | Seguridad de accesos y equipos remotos |
| **GST Innova** | Innova | "Tu software evoluciona todos los meses" | GST Platform | Célula / bolsa | 3,400 | Desarrollo de sistemas a medida |
| **CALIGO Presencia** | Caligo | "Tu marca publica, mide y mejora cada mes" | Stack CALIGO | Marca | 3,500 | Presencia digital profesional y posicionada |
| **CALIGO Reputación** | Caligo | "Lo que aparece cuando te buscan lo decides tú" | Monitoreo SERP | Persona/marca | 2,500 + onboarding | Monitoreo y gestión activa de reputación |

**Mapeo producto → unidad:** es una propuesta razonada (Guía calza con Advisory por su enfoque de gobierno/estrategia; Escudo con Security; Innova con Innova; Vigía y Soporte quedan al nivel del pilar Technology por ser operación general de TI) — **validar con Renzo/Comercial** antes de fijarlo en la arquitectura de URLs.

⚠️ **Nota sobre precios:** las cifras de la tabla son el tarifario interno del plan de productización (pensado para el cotizador/calculadora), no necesariamente para mostrarse públicamente. Definir con Comercial si el sitio muestra "desde S/ X/mes" en abierto o si el precio queda solo detrás de un formulario de cotización.

---

## 6. Arquitectura de información propuesta (sitemap)

```
/                                     → Home: propuesta de valor del grupo + Technology (3 unidades) + Caligo + prueba social
/nosotros                            → Grupo Coril, +25 empresas, respaldo (Talent Hunters, Banco Alfin), historia
/technology                          → Pilar Technology: "Operación TI bajo SLAs y KPIs"
  /technology/gst-vigia
  /technology/gst-soporte
  /technology/advisory              → Unidad Advisory: gobierno y estrategia corporativa
    /technology/advisory/gst-guia
  /technology/security              → Unidad Security: ciberseguridad ofensiva y defensiva
    /technology/security/gst-escudo
  /technology/innova                → Unidad Innova: software e IA aplicada
    /technology/innova/gst-innova
/caligo                              → Submarca de marketing digital
  /caligo/presencia
  /caligo/reputacion
/clientes                            → Portafolio (incluye sector público: JNE, MINEDU, CONIDA, CONCYTEC) + testimonios
/certificaciones                     → ISO 27001, ITIL, CCNA, eWPTX, CEH, Design Thinking, Scrum
/glosario                            → Términos técnicos (TI, ciberseguridad, marketing digital) — 1 página indexable por término
/blog                                → Categorías: Infraestructura, Seguridad, Software/IA, Marketing digital
/contacto                            → Formulario corto (correo corporativo, tamaño de empresa, servicio de interés, cómo nos conociste)
/llms.txt                            → Resumen en texto plano para modelos de lenguaje (ver sección 9.3 — ya implementado)
```

Cada producto GST/CALIGO vive como página propia bajo su unidad (URL semántica, indexable, enlazable), replicando exactamente el patrón de Delta Protect (`/services/pentesting`, `/services/ciso-as-a-service`, etc.).

---

## 7. Plantilla de página de producto (repetible para los 7 productos)

Basada en la estructura que Delta Protect usa en sus páginas de servicio y en la fórmula del plan de productización:

1. **H1:** Nombre del producto + promesa (ej. "GST Vigía — Saber desde el celular si tu operación está arriba")
2. **Párrafo de apertura (2-3 líneas, sin jerga):** qué problema resuelve, para quién es
3. **H2 "¿Cómo funciona?"**: 3-4 pasos o bullets, lenguaje llano
4. **H2 "Qué incluye"**: alcance ligado a la unidad de venta y el SLA del plan de productización (ej. "por nodo monitoreado", "por usuario")
5. **H2 "Entregable"**: una frase concreta y verificable, tomada de la presentación (es el elemento más "creíble" del copy actual)
6. **Bloque de precio** (si Comercial aprueba mostrarlo): "Desde S/ X / [unidad de venta]"
7. **Bloque de prueba social**: testimonio o cifra relacionada a ese producto específico, no genérica
8. **H2 "Preguntas frecuentes"**: 3-5 preguntas en formato `<details>`/acordeón, marcadas con `FAQPage` schema
9. **CTA final**: mismo formulario corto en toda la web

Cada uno de estos bloques debe entrar en viewport con el scroll-reveal definido en la sección 10 — no se muestran todos de golpe al cargar la página.

---

## 8. Glosario propuesto (arranque, ampliable)

Para igualar la jugada de SEO/LLM de Delta Protect sin partir de cero, un primer lote de 20-25 términos por categoría, con la misma lógica (término + definición de 2-4 frases + categoría):

- **Infraestructura/Operación:** SLA, KPI de TI, NOC, mesa de ayuda (help desk), ITIL, monitoreo de red, uptime, ticket de incidencia.
- **Seguridad:** Ciberseguridad ofensiva, Red Team, pentesting, OSINT, PhaaS (Phishing as a Service), forense digital, MDM, VPN.
- **Software/IA:** Desarrollo a medida, IA aplicada, integración de sistemas, arquitectura multi-tenant, BFF (Backend for Frontend).
- **Marketing digital (Caligo):** SEO, SEO reputacional, growth marketing, escucha social, content studio, autoridad de dominio.

Cada término = 1 URL indexable, igual que `/glosario/` en Delta Protect. Es contenido de bajo costo de producción y alto valor para posicionamiento orgánico de cola larga y para que un LLM entienda el vocabulario propio del grupo cuando lo cite.

---

## 9. Reglas técnicas para que el sitio se lea bien en Google, en LLMs y en personas no técnicas

### 9.1 Para personas no técnicas
- Un H1 = una idea, sin acrónimos sin explicar en la primera pantalla.
- Frases de 20 palabras o menos en los párrafos de apertura.
- Cada beneficio se explica con una consecuencia concreta ("sabrás si tu operación está caída desde el celular"), no con la característica técnica sola ("monitoreo 24/7").

### 9.2 Para Google (SEO clásico)
- Un `<title>` y `meta description` únicos por página de producto, con la promesa + el nombre del producto.
- Jerarquía estricta H1 → H2 → H3 (sin saltos), un H1 por página.
- URLs limpias y semánticas (`/technology/security/gst-escudo`, no `/producto?id=4`).
- Sitemap XML actualizado y `robots.txt` sin bloquear rutas de contenido.
- Corregir antes que nada el bug ya detectado en la auditoría previa: canonical de gesitec.pe apuntando a gesitec.com.

### 9.3 Para LLMs (AEO / "answer engine optimization") — `llms.txt` implementado

Se entrega junto a este documento el archivo `llms.txt` listo para publicar en `https://gesitec.pe/llms.txt` (estándar propuesto por Jeremy Howard, que Delta Protect ya implementa). Contenido:

```markdown
# Grupo GESITEC

> Grupo tecnológico peruano con sede en Lima (Av. La Encalada 1257, Of. 305, Santiago de Surco),
> parte del Grupo Coril (+25 empresas). Ofrece servicios gestionados de TI, ciberseguridad
> ofensiva y defensiva, desarrollo de software a medida, y marketing digital/reputación online
> bajo modelos de suscripción mensual con SLA y entregable definido.

Grupo GESITEC organiza su oferta en un pilar tecnológico (Technology) — cuya capacidad central
es la operación de TI bajo SLAs y KPIs — con tres unidades estratégicas: Advisory, Security e
Innova. Una submarca independiente, Caligo, cubre marketing digital y gestión de reputación
online. El respaldo corporativo del grupo incluye soporte directo de Talent Hunters (selección
de personal) y Banco Alfin (cartas fianza), ambas parte del Grupo Coril.

## Unidades

- [Technology](https://gesitec.pe/technology): Operación TI bajo SLAs y KPIs. Pilar que agrupa a Advisory, Security e Innova.
- [Advisory](https://gesitec.pe/technology/advisory): Gobierno y estrategia corporativa de TI.
- [Security](https://gesitec.pe/technology/security): Ciberseguridad ofensiva y defensiva.
- [Innova](https://gesitec.pe/technology/innova): Software inteligente e IA aplicada. Fábrica de desarrollo del grupo.
- [Caligo](https://gesitec.pe/caligo): Marketing digital y gestión de reputación online.

## Productos (catálogo GST)

- [GST Vigía](https://gesitec.pe/technology/gst-vigia): Monitoreo permanente de red y correo. Promesa: "saber desde el celular si tu operación está arriba". Herramienta propia: noc.gesitec.pe. Unidad de venta: nodo monitoreado.
- [GST Soporte](https://gesitec.pe/technology/gst-soporte): Mesa de soporte técnico medible. Promesa: "tu personal tiene a quién llamar y tú ves cuánto tarda". Unidad de venta: usuario.
- [GST Guía](https://gesitec.pe/technology/advisory/gst-guia): Dirección de TI as a service. Promesa: "un director de TI sin contratar uno". Herramienta propia: tablero de KPIs de TI. Unidad de venta: empresa.
- [GST Escudo](https://gesitec.pe/technology/security/gst-escudo): Seguridad para trabajo remoto (accesos, dispositivos, políticas). Promesa: "reduces tu exposición y lo puedes demostrar". Herramienta propia: consola + PhaaS. Unidad de venta: usuario + activo.
- [GST Innova](https://gesitec.pe/technology/innova/gst-innova): Desarrollo de software a medida (webs, plataformas, módulos). Promesa: "tu software evoluciona todos los meses". Herramienta propia: GST Platform. Unidad de venta: célula / bolsa de horas.
- [Caligo Presencia](https://gesitec.pe/caligo/presencia): Marketing digital y SEO. Promesa: "tu marca publica, mide y mejora cada mes". Herramienta propia: stack Caligo. Unidad de venta: marca.
- [Caligo Reputación](https://gesitec.pe/caligo/reputacion): SEO reputacional, gestión de reseñas y escucha social. Promesa: "lo que aparece cuando te buscan lo decides tú". Herramienta propia: monitoreo SERP. Unidad de venta: persona/marca.

## Confianza

- [Clientes](https://gesitec.pe/clientes): Portafolio de clientes, incluido sector público (JNE, Ministerio de Educación, CONIDA, CONCYTEC).
- [Certificaciones](https://gesitec.pe/certificaciones): ISO 27001, ITIL, CCNA, eWPTX, CEH, Design Thinking, Scrum.
- [Nosotros](https://gesitec.pe/nosotros): Pertenencia al Grupo Coril y respaldo corporativo del grupo económico.

## Recursos

- [Glosario](https://gesitec.pe/glosario): Definiciones de términos de TI, ciberseguridad y marketing digital.
- [Blog](https://gesitec.pe/blog): Contenido por categoría — Infraestructura, Seguridad, Software/IA, Marketing digital.

## Optional

- [Contacto](https://gesitec.pe/contacto): Formulario de contacto comercial (correo corporativo, tamaño de empresa, servicio de interés, cómo nos conoció).
```

Adicionalmente:

- **Datos estructurados (`schema.org` vía JSON-LD)** en cada página:
  - `Organization` en el home (nombre, logo, `sameAs` a redes, dirección: Av. La Encalada 1257, Of. 305, Surco, Lima).
  - `Service` en cada página de producto (nombre, proveedor, área de servicio, descripción = la promesa del plan de productización).
  - `FAQPage` en cada bloque de preguntas frecuentes.
  - `BreadcrumbList` para reforzar la jerarquía Technology → Unidad → Producto.
- Contenido en HTML renderizado en el servidor (SSR/SSG), no solo detrás de JavaScript del lado del cliente — los crawlers de LLM (GPTBot, ClaudeBot, PerplexityBot) suelen tener menor tolerancia a ejecutar JS que Googlebot. Esto es especialmente relevante si el scroll dinámico de la sección 10 se implementa con librerías pesadas de animación: el contenido textual no debe depender de que esas librerías carguen para ser legible.
- No bloquear en `robots.txt` a los user-agents de IA si el objetivo es que citen a GESITEC (decisión de negocio a confirmar: permitir `GPTBot`, `ClaudeBot`, `PerplexityBot`, `CCBot` salvo que haya razón competitiva para lo contrario).
- Frases "citables": cada producto necesita una definición de una sola oración, autocontenida, que un LLM pueda extraer y repetir sin depender del contexto de la página — ya definidas en la tabla de la sección 5 y reflejadas en el `llms.txt`.

---

## 10. Interacción y scroll dinámico (requisito de experiencia — nuevo)

Instrucción de Renzo: **los efectos de scroll deben ser funcionales en toda la web**, no solo en el home, para que el sitio se sienta visualmente dinámico. Esto aplica a las páginas de Technology, cada unidad, cada producto GST/CALIGO, el blog y el glosario — no es un efecto exclusivo de la landing.

- **Scroll-reveal en cada sección:** los bloques de contenido (H2, tarjetas de producto, cifras de prueba social, FAQ) entran con una transición sutil (fade + translateY) al llegar al viewport, en vez de mostrarse todos de golpe al cargar. Aplica a la plantilla de producto completa (sección 7).
- **Micro-interacción de marca:** el isotipo del escudo "cerrándose" o completándose a medida que se hace scroll en el home es coherente con la identidad visual (sección 2) y puede reforzar el mensaje de protección/estructura del grupo.
- **Indicador de progreso** en páginas largas (ficha de producto extensa, artículos de blog) para orientar al usuario.
- **Implementación técnica recomendada:**
  - Reveal-on-scroll simple: `IntersectionObserver` nativo (sin dependencias, buen rendimiento).
  - Como mejora progresiva en navegadores compatibles: `animation-timeline: scroll()` (CSS scroll-driven animations, ya soportado en Chrome/Edge).
  - Para orquestación más compleja (parallax, scrub de timeline, transiciones entre secciones): GSAP + ScrollTrigger.
- **Rendimiento:** animar solo `transform` y `opacity` (evitar `top/left/width`, que disparan reflow); usar `will-change` con moderación; lazy-load de imágenes y video fuera del viewport inicial.
- **Accesibilidad — no negociable:** respetar `prefers-reduced-motion: reduce` y reducir o desactivar las animaciones de scroll para quienes lo soliciten a nivel de sistema operativo (WCAG 2.2, criterio 2.3.3). El contenido y la navegación deben seguir siendo 100% funcionales con las animaciones desactivadas.
- Documentar este comportamiento en la guía de estilo/design system que reciba el equipo de desarrollo, para que se aplique de forma consistente en todas las secciones del sitio y no quede como un efecto aislado del home.

---

## 11. Elementos de confianza a construir (equivalente a la prueba social de Delta Protect)

- Cifras reales del grupo arriba del fold: años operando, nº de clientes activos, nodos monitoreados, tickets/mes resueltos, uptime promedio.
- Logos de certificaciones: ISO 27001, ITIL, CCNA, eWPTX, CEH, Design Thinking, Scrum.
- Respaldo corporativo: pertenencia a Grupo Coril (+25 empresas), soporte directo de Talent Hunters y Banco Alfin — esto es un diferenciador que Delta Protect no tiene y GESITEC sí (parece "empresa chica" sin este dato visible en el sitio actual).
- Portafolio de clientes segmentado, incluyendo sector público (JNE, Ministerio de Educación, CONIDA, CONCYTEC) como sello de confiabilidad.
- Testimonios por producto, no solo genéricos de "la empresa".

---

## 12. Próximos pasos sugeridos

1. Validar con diseño/Comercial el mapeo propuesto de productos por unidad (sección 5): Advisory → GST Guía, Security → GST Escudo, Innova → GST Innova, Technology (pilar) → GST Vigía y GST Soporte.
2. Decidir si los precios "desde S/ X/mes" se muestran públicamente o quedan solo en el cotizador/formulario.
3. Redactar el contenido extendido de cada ficha de producto ("Cómo funciona" y "Qué incluye"), ahora con base en el tarifario/SLA del plan de productización.
4. Producir el primer lote de 20-25 términos del glosario.
5. Publicar el archivo `llms.txt` (adjunto, ya implementado) en la raíz del dominio; agregar JSON-LD; corregir el canonical bug antes del lanzamiento.
6. Elegir la librería/patrón de scroll-reveal (IntersectionObserver nativo vs. GSAP ScrollTrigger) y documentarlo en el design system, validando `prefers-reduced-motion`.
7. Definir los 4 campos del formulario de contacto y el copy del CTA final.

---

*Documento generado a partir de fuentes vivas (deltaprotect.com) y archivos del proyecto "Gesitec" en Claude. Guardarlo junto a `plan-productizacion-catalogo.md` y `llms.txt` como insumo para el equipo de diseño/desarrollo web.*
