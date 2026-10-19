# Look & Feel — Nueva web de Grupo GESITEC

**Fecha:** 28 de septiembre de 2026 · **Autor:** Renzo (Jefe de Innova) + Claude · **Uso interno**
**Fuentes:** `Copia de GST SOPORTE 2.pdf` (presentación final, línea gráfica nueva) · `LOGOGRUPOGESITEC.png` · `ISOTIPO_azul.jpg` (colores extraídos por muestreo de píxeles, no a ojo) · tipografía principal indicada por Renzo: **Poppins**

> **Qué es este documento:** la guía de identidad visual y tono para el equipo de diseño/desarrollo que construya la nueva web. Traduce lo que ya está validado en la presentación final (línea gráfica, uso del logo, concepto de grupo) a reglas aplicables en pantalla — color, tipografía, construcción del logo, patrones de layout y tono de voz. Complementa a `benchmark-base-nueva-web-gesitec.md` (arquitectura y contenido) y a `plan-productizacion-catalogo.md` (catálogo de producto).
>
> **Alcance y límite:** el color y la tipografía de marca se extrajeron con precisión de los dos archivos de logo del proyecto (muestreo de píxeles, no estimación visual). Los patrones de layout (ficha de producto, kickers, marca de agua) se identificaron a partir de la estructura y repetición del texto de la presentación final. Lo que este documento **no** puede confirmar por no tener acceso visual a las láminas completas es fotografía, iconografía adicional o tratamiento de imágenes del PDF — eso queda como pendiente de validación visual directa con diseño (sección 9).

---

## 1. El nuevo concepto de Grupo GESITEC

La presentación final no vende a GESITEC como una empresa de soporte técnico más: la presenta como **un grupo estructurado, con respaldo corporativo real, organizado en un sistema claro de unidades**. Tres ideas sostienen el concepto y deben quedar visibles en cada pantalla de la web, no solo en el "Nosotros":

1. **Respaldo, no informalidad.** La primera lámina de la presentación no abre con un producto, abre con el **Grupo Económico**: GESITEC como socio estratégico del Grupo Coril, +25 empresas, respaldo directo de Talent Hunters (selección de personal) y Banco Alfin (cartas fianza). El mensaje de fondo es "esto no es una empresa de 5 personas" — la web debe abrir esa credencial temprano, no esconderla en el footer.
2. **Estructura, no caos de servicios sueltos.** El grupo se organiza en un pilar (**Technology**, con sus tres unidades estratégicas — Advisory, Security, Innova) y una submarca (**Caligo**, marketing y reputación). Cada oferta tiene nombre, promesa, herramienta y entregable propios (formato **GST + nombre**). La sensación que debe transmitir el sitio es la de un sistema ordenado, no un catálogo improvisado de servicios de TI.
3. **Protección como hilo conductor.** El isotipo es un escudo. El producto más asociado a esa forma es **GST Escudo**. La metáfora de "algo que se cierra y protege" es el concepto de marca completo, no solo el nombre de un producto — vale para ciberseguridad, para SLAs de soporte, para reputación online. Es el concepto que debe inspirar tanto el copy (ver sección 7) como las micro-interacciones (ver `benchmark-base-nueva-web-gesitec.md`, sección 10).

**Una frase de posicionamiento que resume esto para el equipo de diseño:** *Un grupo, con respaldo real, que se organiza para proteger la operación de sus clientes — en TI, en seguridad, en software y en reputación.*

---

## 2. El logo: construcción y uso

### 2.1 Componentes

El sistema de marca tiene **dos piezas**, no una sola:

- **Isotipo** (`ISOTIPO_azul.jpg`): un escudo construido con trazos geométricos tipo corchete/bracket que se cierran hacia abajo formando el símbolo de protección. Funciona a una sola tinta (blanco sobre fondo de color, o color de marca sobre blanco).
- **Logotipo completo** (`LOGOGRUPOGESITEC.png`): el isotipo + el lockup tipográfico en dos niveles — "GRUPO" (peso ligero, versalitas, tracking amplio) arriba, "GESITEC" (peso bold, mayúsculas, sin tracking extra) abajo, en mayor tamaño.

### 2.2 Patrón de uso observado en la presentación (replicar en la web)

La presentación no usa el logo solo en la portada: **repite una versión reducida del lockup "GRUPO GESITEC" al pie de cada lámina**, de forma consistente, como firma. Esto es un patrón de marca a preservar en la web:

- **Header:** logotipo completo (isotipo + wordmark), tamaño normal, enlaza a home.
- **Pie de cada sección / footer de página:** versión reducida del lockup, discreta, en baja opacidad o en el tono de marca sin contraste agresivo — actúa como firma recurrente, igual que en el PDF. No es decorativo: refuerza "esto es Grupo GESITEC" en cada scroll, sin competir con el contenido.
- **Isotipo solo:** para favicon, avatar de redes sociales, watermark de fondo en hero o secciones divisorias (a baja opacidad, nunca como elemento que reduzca la legibilidad del texto encima).

### 2.3 Área de protección y tamaño mínimo

No se dispone del archivo vectorial fuente para medir exactamente, así que se aplica la convención estándar de diseño de marca hasta que diseño confirme con el archivo original:

- **Área de protección (clear space):** como mínimo, la altura del isotipo (el escudo) alrededor de todo el logotipo — ningún elemento de UI (texto, imagen, borde) debe invadir ese margen.
- **Tamaño mínimo digital:** isotipo no menor a 24×24 px (favicon puede bajar a 16×16 solo en su versión simplificada); logotipo completo no menor a 120 px de ancho para que "GRUPO" siga siendo legible.

### 2.4 Versiones por fondo

| Fondo | Versión del logo |
|---|---|
| Blanco / claro | Logotipo en tinta oscura (`#373F52`) |
| Azul de marca / oscuro | Logotipo e isotipo en blanco (`#FFFFFF`) |
| Fotografía o imagen | Isotipo blanco sobre una placa sólida de color de marca (nunca directamente sobre una foto sin placa de contraste) |

### 2.5 Usos incorrectos

- No separar el isotipo del wordmark cuando se usa como "logotipo completo" en el header — se usan juntos o el isotipo va solo, nunca el wordmark solo.
- No aplicar el isotipo o el logotipo sobre colores fuera de la paleta de marca (sección 3), ni sobre fondos con bajo contraste.
- No deformar (estirar, comprimir) ni rotar el escudo.
- No recolorear el escudo con gradientes o colores de acento de unidad (Advisory/Security/Innova/Caligo) — el logo del grupo es siempre monocromático; el color de unidad vive en la UI alrededor del logo, nunca dentro de él.

---

## 3. Paleta de color (valores extraídos por muestreo de píxeles)

### 3.1 Colores de marca

| Token | Hex | RGB | Origen | Uso |
|---|---|---|---|---|
| `--gst-azul-marino` | `#28435E` → `#2D4A68` (degradado sutil) | 40,67,94 → 45,74,104 | Fondo del isotipo (`ISOTIPO_azul.jpg`) | Fondos de marca: hero, footer, secciones divisorias, botones primarios |
| `--gst-tinta` | `#373F52` | 55,63,82 | Tinta del logotipo (`LOGOGRUPOGESITEC.png`) | Texto de marca sobre fondo claro, logotipo sobre blanco |
| `--gst-blanco` | `#FFFFFF` | 255,255,255 | Isotipo sobre fondo azul | Texto/isotipo sobre fondo de marca |

**Nota técnica:** `--gst-azul-marino` y `--gst-tinta` son dos navys distintos y ambos son intencionales en el material fuente (no es un error de escaneo): el primero es más "océano" (usado en fondos), el segundo más "pizarra" (usado en tipografía). Mantener ambos como tokens separados en el design system, no unificarlos en un solo azul.

### 3.2 Contraste (WCAG 2.2) — verificado

| Combinación | Ratio | Cumple |
|---|---|---|
| `--gst-tinta` sobre blanco | 10.5:1 | AAA (texto normal y pequeño) |
| Blanco sobre `--gst-azul-marino` | 9.6–10.2:1 | AAA (texto normal y pequeño) |
| `--gst-tinta` sobre `--gst-azul-marino` | 1.0:1 | ❌ No usar — combinación inválida |

### 3.3 Color de acento por unidad — dos caminos a decidir con Renzo

El material fuente (logo e isotipo) es **estrictamente monocromático** — no trae colores de acento. Para diferenciar Technology/Advisory/Security/Innova/Caligo en la web hay dos caminos válidos; recomiendo el primero por ser más fiel a la sobriedad de la marca ya definida:

- **Opción A — recomendada (monocromática con un solo acento funcional):** todo el sitio se mantiene en la familia de azules de marca + neutros (grises); un único color de acento "de sistema" (ej. un cian/verde señal, a definir) se usa exclusivamente para CTAs, links y estados interactivos, igual en todas las unidades. La diferenciación entre Technology/Advisory/Security/Innova/Caligo se resuelve con el nombre + un pequeño distintivo tipográfico o de ícono (ej. la inicial de la unidad en una chip), no con colores distintos por sección. Mantiene la coherencia "un solo grupo" del concepto de marca (sección 1).
- **Opción B — diferenciación por tinte:** cada unidad recibe una variación tonal (tinte/sombra) del mismo azul de marca — nunca un matiz (hue) completamente distinto — para no fragmentar la identidad. Ej.: Technology en el azul base, Security en una variante más oscura/fría, Innova en una variante ligeramente más clara, Caligo en un tono complementario suave (no saturado). Requiere que diseño defina la escala exacta.

**Pendiente:** decidir opción A o B antes de tokenizar el design system.

---

## 4. Tipografía: Poppins

Poppins (geométrica, humanista) es coherente con la tipografía ya usada en el logotipo (sans-serif geométrica en mayúsculas) — se convierte en la tipografía de todo el sitio, no solo de los títulos.

### 4.1 Jerarquía y pesos

| Uso | Peso Poppins | Tratamiento |
|---|---|---|
| Kickers / etiquetas de sección (ej. "PRODUCTOS", "UNIDADES ESTRATÉGICAS") | SemiBold 600, mayúsculas, tracking amplio (+0.05em–0.08em) | Replica el tratamiento de "GRUPO" en el logotipo |
| H1 / titulares de producto (la "promesa" entre comillas) | Bold 700 o SemiBold 600, size grande | Frase corta, como cita — ver sección 7 |
| H2 / subtítulos de sección | SemiBold 600 | — |
| Cuerpo de texto | Regular 400 | Line-height 1.5–1.6 para legibilidad en párrafos cortos |
| Etiquetas tipo "ENTREGABLE" | Medium 500, mayúsculas, tamaño pequeño, tracking amplio | Tratar como "tag"/chip de UI, no como texto corrido |
| Botones / CTA | SemiBold 600 | — |

### 4.2 Implementación técnica

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
```

```css
:root {
  --font-primary: 'Poppins', -apple-system, 'Segoe UI', sans-serif;

  --gst-azul-marino: #28435E;
  --gst-azul-marino-claro: #2D4A68;
  --gst-tinta: #373F52;
  --gst-blanco: #FFFFFF;
}

body {
  font-family: var(--font-primary);
  color: var(--gst-tinta);
  background: var(--gst-blanco);
}
```

- Cargar solo los pesos que realmente se usan (400/500/600/700) para no penalizar el performance — cada peso adicional de Poppins vía Google Fonts suma una descarga.
- `font-display: swap` (ya incluido en el enlace de arriba) evita bloqueo de renderizado de texto mientras carga la fuente — relevante para Core Web Vitals (CLS/LCP).

---

## 5. Patrones de layout observados en la presentación (a replicar en la web)

La presentación final tiene un lenguaje de diseño consistente, lámina a lámina, que debe traducirse a componentes web reutilizables:

| Patrón en el PDF | Componente web equivalente |
|---|---|
| Kicker corto en mayúsculas por sección ("GRUPO ECONÓMICO", "UNIDADES ESTRATÉGICAS", "PRODUCTOS") | Eyebrow/kicker component sobre cada H2 |
| Titular entre comillas, corto, en primera persona del lector ("Un analista despierto las 24 horas, cuidando tu red") | Bloque de cita/headline en la ficha de producto (H1 de la página, ver plantilla en `benchmark-base-nueva-web-gesitec.md` sección 7) |
| Párrafo descriptivo breve inmediatamente debajo del titular | Párrafo de apertura de la ficha de producto |
| Etiqueta "ENTREGABLE" + una frase concreta | Chip/tag de UI + texto — elemento visualmente distinto del resto (fondo de color, texto en mayúscula pequeña) |
| Nombre del producto en mayúsculas como cierre de la lámina ("GST VIGÍA") | Título/badge del producto, reutilizable como nombre de card en listados |
| Firma "GRUPO GESITEC" repetida al pie de cada lámina | Footer de marca discreto, presente en toda página (sección 2.2) |
| Tagline de sección repetido en Caligo ("ESTRATEGIA IMPARABLE, REPUTACIÓN INTOCABLE") | Banner/franja de unidad, reutilizable como cabecera de cada unidad de negocio (Technology también podría tener su propio tagline equivalente) |
| Mucho espacio en blanco, un mensaje por lámina | Secciones de la web generosas en espaciado vertical; evitar apilar demasiados mensajes en un mismo viewport — coherente con el scroll-reveal ya definido en el documento de benchmark |

---

## 6. Iconografía y motivo visual

El único elemento gráfico confirmado en el material fuente es el **escudo geométrico del isotipo** (trazos tipo corchete que se cierran). Recomendación de sistema, a falta de un kit de iconos propio confirmado por diseño:

- Usar el motivo de "trazos que se cierran/protegen" como base para iconos simples y lineales del sitio (ej. un ícono de check, de candado, de monitoreo) — mantiene coherencia con el isotipo sin necesitar un ícono distinto por cada producto.
- Evitar ilustraciones o iconografía redondeada/orgánica — no es coherente con la geometría angular del isotipo.
- El escudo puede usarse como elemento de fondo (línea, contorno, muy baja opacidad) en secciones divisorias del sitio, nunca como decoración compitiendo con contenido.

**Pendiente de validar con diseño:** si la presentación final incluye un set de iconos propio para cada producto (más allá del texto e isotipo), debe revisarse visualmente el PDF (no accesible como imagen en esta sesión) para no reinventar un sistema que ya exista.

---

## 7. Tono de voz (derivado del copy de la presentación)

El copy de producto en la presentación sigue un patrón de voz consistente que debe mantenerse en toda la web, no solo en las fichas de producto:

- **Segunda persona, directa:** "tu red", "tu equipo", "tu marca" — nunca "los usuarios" o "las empresas" en abstracto.
- **Beneficio como titular, característica como explicación:** el titular es la consecuencia para el cliente ("Saber desde el celular si tu operación está arriba"), no la característica técnica ("monitoreo 24/7 con Zabbix").
- **Frases cortas, casi de eslogan:** los titulares de producto son citas breves, no descripciones — funcionan solas, fuera de contexto (esto además ayuda a que un LLM las cite tal cual, ver sección de AEO en `benchmark-base-nueva-web-gesitec.md`).
- **Concreto por encima de abstracto:** "un director de TI sin contratar uno" en vez de "servicios de asesoría estratégica en tecnología".

---

## 8. Checklist rápido para diseño/desarrollo

- [ ] Isotipo y logotipo completo disponibles en SVG (vectorial) — pedir el archivo fuente a quien diseñó la presentación; los PNG/JPG actuales alcanzan para extraer color pero no para producción en pantalla de alta densidad.
- [ ] Definir opción A o B de color de acento por unidad (sección 3.3).
- [ ] Cargar Poppins con los pesos 400/500/600/700 únicamente.
- [ ] Implementar el footer de marca recurrente ("GRUPO GESITEC" reducido) en toda página, replicando el patrón de la presentación.
- [ ] Construir los componentes reutilizables de la sección 5 (kicker, cita-titular, chip "ENTREGABLE", banner de unidad) antes de maquetar páginas individuales.
- [ ] Validar contraste de cualquier color de acento nuevo contra `--gst-blanco` y `--gst-azul-marino` antes de aprobarlo (mínimo 4.5:1 para texto normal, WCAG AA).
- [ ] Revisar visualmente las láminas completas del PDF con diseño para confirmar iconografía/fotografía no capturada en este documento (ver limitación en el encabezado).

---

## 9. Pendientes de validación visual directa

Este documento se construyó a partir del texto extraído de la presentación (estructura, repetición, orden) y de los dos archivos de logo (color exacto por muestreo de píxeles). No hubo acceso a una vista renderizada de cada lámina completa, por lo que quedan pendientes de confirmar con el archivo original o con quien diseñó la presentación:

1. Si existe fotografía o ilustración además del isotipo (personas, oficinas, capturas de dashboard).
2. El grid/composición exacto de cada lámina (columnas, alineación).
3. Si "UNIDADES ESTRATÉGICAS" (Advisory, Security, Innova) tiene un tratamiento visual diferenciado por unidad dentro del PDF (color, ícono) que no se haya capturado en el texto.
4. Los tamaños tipográficos reales usados (aquí se proponen jerarquías relativas, no puntajes exactos en pt/px).

---

*Documento generado a partir de `Copia de GST SOPORTE 2.pdf`, `LOGOGRUPOGESITEC.png` e `ISOTIPO_azul.jpg` del proyecto "Gesitec" en Claude. Guardarlo junto a `benchmark-base-nueva-web-gesitec.md`, `plan-productizacion-catalogo.md` y `llms.txt` como insumo para el equipo de diseño/desarrollo web.*
