/**
 * Contenido del sitio de Grupo GESITEC.
 *
 * Fuentes: benchmark-base-nueva-web-gesitec.md (v1.1), look-and-feel-nueva-web-gesitec.md
 * y llms.txt. Promesa, herramienta, unidad de venta, precio y entregable salen literalmente
 * del catálogo (sección 5 del benchmark). "Cómo funciona", "Qué incluye" y las FAQ son un
 * BORRADOR redactado a partir de esos datos: validarlos con Comercial antes de publicar.
 */

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://gesitec.pe";
export const SHOW_PRICES = process.env.NEXT_PUBLIC_SHOW_PRICES === "true";

/** Caligo tiene su propia web: todo lo que se refiere a Caligo enlaza aquí. */
export const CALIGO_URL = "https://caligo.pe";
export const isExternal = (href: string) => /^https?:\/\//.test(href);

export const company = {
  name: "Grupo GESITEC",
  legalName: "Gestión Estratégica de Innovación y Desarrollo Tecnológico SAC",
  ruc: "20546993443",
  email: "info@gesitec.pe",
  tagline: "Tecnología con visión de negocio",
  description:
    "Protegemos y hacemos crecer la operación de nuestros clientes — en TI, en seguridad, en software y en reputación — con servicios medibles y un entregable definido.",
  address: "Av. La Encalada 1257, Of. 305, Santiago de Surco, Lima, Perú",
  street: "Av. La Encalada 1257, Of. 305",
  locality: "Santiago de Surco",
  region: "Lima",
  country: "PE",
  /** Libro de Reclamaciones virtual (aviso del Anexo III, INDECOPI). */
  claimsBookUrl: "https://librodereclamaciones.xinopsis.com/?codigo=gesitec",
  claimsBookImage: "/legal/libro-de-reclamaciones.png",
};

export type UnitSlug = "technology" | "advisory" | "security" | "innova" | "caligo";

export interface Unit {
  slug: UnitSlug;
  name: string;
  initial: string;
  /** Logo de la unidad (sobre fondo blanco) e ícono de línea, migrados de la web anterior. */
  logo: string;
  icon?: string;
  kicker: string;
  tagline: string;
  summary: string;
  href: string;
  intro: string;
  pillars: { title: string; text: string }[];
}

export const units: Record<UnitSlug, Unit> = {
  technology: {
    slug: "technology",
    name: "Technology",
    logo: "/unidades/logo-technology.png",
    icon: "/unidades/icon-technology.png",
    initial: "T",
    kicker: "UNIDAD ESTRATÉGICA",
    tagline: "Operación TI bajo SLAs y KPIs",
    summary: "La unidad que mantiene tu tecnología funcionando, medida y bajo control.",
    href: "/technology",
    intro:
      "Technology es la unidad de servicios gestionados de TI del grupo. Operamos tu red, tu correo y tu mesa de ayuda con acuerdos de nivel de servicio que puedes ver y medir.",
    pillars: [
      { title: "SLAs que se cumplen", text: "Cada servicio tiene tiempos de respuesta pactados y visibles." },
      { title: "KPIs a la vista", text: "Tú ves los indicadores de tu operación, no solo nosotros." },
      { title: "Un solo equipo", text: "Soporte, seguridad, estrategia y software bajo el mismo grupo." },
    ],
  },
  advisory: {
    slug: "advisory",
    name: "Advisory",
    logo: "/unidades/logo-advisory.png",
    icon: "/unidades/icon-advisory.png",
    initial: "A",
    kicker: "UNIDAD ESTRATÉGICA",
    tagline: "Gobierno y estrategia corporativa",
    summary: "Decisiones de tecnología alineadas al negocio, con dirección clara.",
    href: "/advisory",
    intro:
      "Advisory ordena la tecnología de tu empresa desde arriba: qué tienes, qué te falta y en qué invertir primero. Te damos la dirección de un gerente de TI con experiencia, sin el costo de contratarlo a tiempo completo.",
    pillars: [
      { title: "Diagnóstico", text: "Mapa completo de tu tecnología actual y sus riesgos." },
      { title: "Plan de mejora", text: "Prioridades claras, con presupuesto y plazos." },
      { title: "Seguimiento", text: "Tablero de KPIs de TI para ver el avance mes a mes." },
    ],
  },
  security: {
    slug: "security",
    name: "Security",
    logo: "/unidades/logo-security.png",
    icon: "/unidades/icon-security.png",
    initial: "S",
    kicker: "UNIDAD ESTRATÉGICA",
    tagline: "Ciberseguridad ofensiva y defensiva",
    summary: "Atacamos como lo haría un intruso para cerrar las puertas antes que él.",
    href: "/security",
    intro:
      "Security protege a tu empresa desde los dos lados: probamos tus defensas como lo haría un atacante (ofensiva) y blindamos accesos, equipos y personas (defensiva). El objetivo no es solo estar más seguro, sino poder demostrarlo.",
    pillars: [
      { title: "Ofensiva", text: "Pentesting, Red Team y simulaciones de phishing." },
      { title: "Defensiva", text: "Control de accesos, dispositivos y políticas de uso." },
      { title: "Evidencia", text: "Reportes que muestran cuánto se redujo tu exposición." },
    ],
  },
  innova: {
    slug: "innova",
    name: "Innova",
    logo: "/unidades/logo-innova.png",
    icon: "/unidades/icon-innova.png",
    initial: "I",
    kicker: "UNIDAD ESTRATÉGICA",
    tagline: "Software inteligente e IA aplicada",
    summary: "La fábrica de software del grupo: sistemas a medida que evolucionan cada mes.",
    href: "/innova",
    intro:
      "Innova es la fábrica de desarrollo del grupo. Construimos webs, plataformas y módulos a medida, e incorporamos inteligencia artificial donde de verdad aporta. Trabajamos por suscripción: tu software no se congela el día de la entrega.",
    pillars: [
      { title: "A medida", text: "Sistemas pensados para tu proceso, no al revés." },
      { title: "IA aplicada", text: "Automatización y asistentes donde generan valor medible." },
      { title: "Evolución continua", text: "Una célula de desarrollo que mejora tu software cada mes." },
    ],
  },
  caligo: {
    slug: "caligo",
    name: "Caligo",
    logo: "/brand/caligo-logo.svg",
    initial: "C",
    kicker: "SUBMARCA",
    tagline: "Estrategia imparable, reputación intocable",
    summary: "Marketing digital y gestión de reputación online.",
    href: CALIGO_URL,
    intro:
      "Caligo es la submarca de marketing digital y reputación de Grupo GESITEC. Hacemos que tu marca publique, mida y mejore cada mes, y cuidamos lo que aparece cuando alguien te busca en internet.",
    pillars: [
      { title: "Presencia", text: "Contenido, redes y SEO con métricas mensuales." },
      { title: "Reputación", text: "SEO reputacional, reseñas y escucha social." },
      { title: "Protección de marca", text: "Tu nombre en internet también se cuida y se defiende." },
    ],
  },
};

/** Las cuatro unidades estratégicas, cada una con su propia página y productos. */
export const strategicUnits: UnitSlug[] = ["technology", "advisory", "security", "innova"];

export interface Faq {
  q: string;
  a: string;
}

export interface Product {
  slug: string;
  name: string;
  unit: UnitSlug;
  href: string;
  promise: string;
  short: string;
  description: string;
  tool: string;
  saleUnit: string;
  priceFrom: string;
  deliverable: string;
  howItWorks: { title: string; text: string }[];
  includes: string[];
  faqs: Faq[];
}

export const products: Product[] = [
  {
    slug: "gst-vigia",
    name: "GST Vigía",
    unit: "technology",
    href: "/technology/gst-vigia",
    promise: "Saber desde el celular si tu operación está arriba",
    short: "Monitoreo permanente de red y correo.",
    description:
      "Vigilamos tu red y tu correo todo el día, todos los días. Si algo se cae, lo sabemos antes que tus clientes, y tú lo ves desde el celular.",
    tool: "noc.gesitec.pe",
    saleUnit: "Nodo monitoreado",
    priceFrom: "S/ 1,800 / mes",
    deliverable: "Mesa de soporte interno + dashboard de incidencias",
    howItWorks: [
      { title: "Conectamos tus equipos", text: "Registramos cada servidor, enlace y servicio crítico como un nodo monitoreado." },
      { title: "Vigilamos 24/7", text: "Nuestro NOC revisa disponibilidad y rendimiento de forma continua." },
      { title: "Te avisamos y actuamos", text: "Ante una caída, alertamos y abrimos la incidencia sin que tengas que llamar." },
      { title: "Lo ves todo", text: "Consultas el estado de tu operación en noc.gesitec.pe, desde cualquier dispositivo." },
    ],
    includes: [
      "Monitoreo de red, enlaces y correo por nodo",
      "Alertas automáticas ante caídas o degradación",
      "Acceso a noc.gesitec.pe con el estado en tiempo real",
      "Registro de incidencias con tiempos de atención",
      "Reporte mensual de disponibilidad (uptime)",
    ],
    faqs: [
      { q: "¿Qué es un nodo monitoreado?", a: "Es cada equipo o servicio que vigilamos: un servidor, un enlace de internet, un firewall o tu servicio de correo. El precio se calcula por nodo." },
      { q: "¿Necesito instalar algo?", a: "Configuramos un agente o sonda ligera según tu infraestructura. Lo hace nuestro equipo durante la puesta en marcha." },
      { q: "¿Puedo ver el estado sin llamar a nadie?", a: "Sí. Tienes acceso al tablero en noc.gesitec.pe desde el celular o la computadora." },
      { q: "¿Qué pasa si detectan una caída?", a: "Recibes una alerta y se abre una incidencia con seguimiento hasta que el servicio vuelve a estar arriba." },
    ],
  },
  {
    slug: "gst-soporte",
    name: "GST Soporte",
    unit: "technology",
    href: "/technology/gst-soporte",
    promise: "Tu personal tiene a quién llamar y tú ves cuánto tarda",
    short: "Mesa de soporte técnico medible.",
    description:
      "Una mesa de ayuda para tu equipo con tiempos de respuesta pactados. Cada pedido queda registrado y tú ves cuánto tardamos en resolverlo.",
    tool: "Backbone ITSM",
    saleUnit: "Usuario",
    priceFrom: "S/ 55 / usuario / mes",
    deliverable: "Mesa de soporte interno + dashboard de incidencias",
    howItWorks: [
      { title: "Un solo canal", text: "Tu personal reporta por correo, teléfono o portal: todo llega a la misma mesa." },
      { title: "Cada pedido es un ticket", text: "Registramos, priorizamos y asignamos según el SLA acordado." },
      { title: "Resolvemos", text: "Soporte remoto o presencial, con escalamiento cuando hace falta." },
      { title: "Medimos", text: "Ves en el dashboard cuántos tickets hubo y cuánto tardó cada uno." },
    ],
    includes: [
      "Mesa de ayuda con SLA por prioridad",
      "Gestión de tickets sobre Backbone ITSM (buenas prácticas ITIL)",
      "Soporte remoto y presencial según plan",
      "Dashboard de incidencias y tiempos de atención",
      "Informe mensual de servicio",
    ],
    faqs: [
      { q: "¿Cómo se cobra?", a: "Por usuario atendido al mes. Así el costo crece o baja con tu equipo." },
      { q: "¿Qué es un SLA?", a: "Es el acuerdo de nivel de servicio: el tiempo máximo en que nos comprometemos a responder y resolver según la prioridad del problema." },
      { q: "¿Puedo ver el desempeño de la mesa?", a: "Sí. El dashboard muestra tickets abiertos, cerrados y tiempos de atención." },
      { q: "¿Atienden también en sitio?", a: "Sí, cuando el problema lo requiere y según el alcance acordado." },
    ],
  },
  {
    slug: "gst-guia",
    name: "GST Guía",
    unit: "advisory",
    href: "/advisory/gst-guia",
    promise: "Un director de TI sin contratar uno",
    short: "Dirección de TI as a service.",
    description:
      "Te damos la mirada de un director de TI con experiencia: qué tienes, qué riesgos corres y en qué conviene invertir, con un plan que se mide mes a mes.",
    tool: "Tablero KPI TI",
    saleUnit: "Empresa",
    priceFrom: "S/ 3,500 / mes",
    deliverable: "Mapa tecnológico completo + plan de mejora",
    howItWorks: [
      { title: "Diagnóstico", text: "Levantamos tu infraestructura, sistemas, proveedores y contratos." },
      { title: "Mapa tecnológico", text: "Te entregamos una foto clara de dónde estás y qué riesgos tienes." },
      { title: "Plan de mejora", text: "Priorizamos inversiones por impacto en el negocio, con presupuesto." },
      { title: "Gobierno continuo", text: "Acompañamos la ejecución y reportamos avance en el tablero de KPIs." },
    ],
    includes: [
      "Mapa tecnológico completo de la empresa",
      "Plan de mejora priorizado y presupuestado",
      "Tablero de KPIs de TI",
      "Comité mensual con la gerencia",
      "Acompañamiento en la relación con proveedores",
    ],
    faqs: [
      { q: "¿Reemplaza a mi área de TI?", a: "No. La dirige y la ordena. Tu equipo sigue operando, con objetivos y prioridades claras." },
      { q: "¿Para qué tamaño de empresa sirve?", a: "Para empresas que ya dependen de la tecnología pero no justifican un director de TI a tiempo completo." },
      { q: "¿Qué recibo en el primer mes?", a: "El diagnóstico y el mapa tecnológico, base para el plan de mejora." },
    ],
  },
  {
    slug: "gst-escudo",
    name: "GST Escudo",
    unit: "security",
    href: "/security/gst-escudo",
    promise: "Reduces tu exposición y lo puedes demostrar",
    short: "Seguridad para trabajo remoto: accesos, dispositivos y políticas.",
    description:
      "Protegemos los accesos y equipos de tu gente, estén donde estén. Y te damos la evidencia para demostrar que tu empresa está más segura.",
    tool: "Consola + PhaaS",
    saleUnit: "Usuario + activo",
    priceFrom: "S/ 35 / usuario / mes",
    deliverable: "Seguridad de accesos y equipos remotos",
    howItWorks: [
      { title: "Medimos tu exposición", text: "Identificamos accesos, equipos y hábitos que hoy te ponen en riesgo." },
      { title: "Cerramos accesos", text: "Aplicamos políticas a dispositivos, cuentas y conexiones remotas." },
      { title: "Entrenamos a tu gente", text: "Simulaciones de phishing (PhaaS) para que el equipo aprenda a detectarlo." },
      { title: "Demostramos el avance", text: "Reportes desde la consola que muestran cómo baja el riesgo." },
    ],
    includes: [
      "Gestión de dispositivos y políticas (MDM)",
      "Control de accesos remotos seguros",
      "Campañas de phishing simulado (PhaaS)",
      "Consola centralizada de seguridad",
      "Reporte de exposición para gerencia o auditoría",
    ],
    faqs: [
      { q: "¿Qué es PhaaS?", a: "Phishing as a Service: campañas de correos falsos controlados para medir y entrenar a tu equipo frente a engaños reales." },
      { q: "¿Sirve si mi equipo trabaja desde casa?", a: "Sí, está diseñado precisamente para accesos y equipos fuera de la oficina." },
      { q: "¿Cómo demuestro que estoy más seguro?", a: "Con los reportes de la consola: equipos protegidos, políticas aplicadas y resultados de las simulaciones." },
    ],
  },
  {
    slug: "gst-innova",
    name: "GST Innova",
    unit: "innova",
    href: "/innova/gst-innova",
    promise: "Tu software evoluciona todos los meses",
    short: "Desarrollo de software a medida: webs, plataformas y módulos.",
    description:
      "Una célula de desarrollo dedicada a tu negocio. Construimos y mejoramos tus sistemas cada mes, en vez de entregarlos y olvidarlos.",
    tool: "GST Platform",
    saleUnit: "Célula / bolsa de horas",
    priceFrom: "S/ 3,400 / mes",
    deliverable: "Desarrollo de sistemas a medida",
    howItWorks: [
      { title: "Entendemos el proceso", text: "Partimos de cómo trabaja tu equipo, no de una plantilla." },
      { title: "Priorizamos", text: "Definimos juntos qué construir primero, en ciclos cortos." },
      { title: "Construimos sobre GST Platform", text: "Base propia y probada que acelera cada entrega." },
      { title: "Evolucionamos", text: "Cada mes hay mejoras visibles, medidas y documentadas." },
    ],
    includes: [
      "Célula de desarrollo o bolsa de horas mensual",
      "Webs, plataformas y módulos a medida",
      "Integración con tus sistemas actuales",
      "IA aplicada donde aporte valor",
      "Entregas mensuales con demo y documentación",
    ],
    faqs: [
      { q: "¿Qué diferencia hay entre célula y bolsa de horas?", a: "La célula es un equipo dedicado de forma continua; la bolsa de horas es un volumen mensual que usas según tus prioridades." },
      { q: "¿El software es mío?", a: "Las condiciones de propiedad se definen en el contrato; consúltalas con nuestro equipo comercial." },
      { q: "¿Trabajan con inteligencia artificial?", a: "Sí, integramos IA cuando resuelve un problema concreto: automatizar tareas, clasificar información o asistir a usuarios." },
    ],
  },
  {
    slug: "presencia",
    name: "Caligo Presencia",
    unit: "caligo",
    href: CALIGO_URL,
    promise: "Tu marca publica, mide y mejora cada mes",
    short: "Marketing digital y SEO.",
    description:
      "Tu marca aparece, comunica y se mide cada mes. Contenido, redes y posicionamiento en buscadores con resultados que puedes revisar.",
    tool: "Stack Caligo",
    saleUnit: "Marca",
    priceFrom: "S/ 3,500 / mes",
    deliverable: "Presencia digital profesional y posicionada",
    howItWorks: [
      { title: "Estrategia", text: "Definimos a quién le hablas, dónde y con qué mensaje." },
      { title: "Publicamos", text: "Producimos contenido para redes y web con calendario mensual." },
      { title: "Posicionamos", text: "Trabajamos SEO para que te encuentren cuando te buscan." },
      { title: "Medimos y mejoramos", text: "Reporte mensual con lo que funcionó y lo que ajustamos." },
    ],
    includes: [
      "Estrategia y calendario de contenidos",
      "Producción de contenido (content studio)",
      "Gestión de redes sociales",
      "SEO para tu web",
      "Reporte mensual de resultados",
    ],
    faqs: [
      { q: "¿En qué redes trabajan?", a: "En las que tengan sentido para tu público. Lo definimos en la estrategia inicial." },
      { q: "¿Cuándo se ven resultados de SEO?", a: "El SEO es acumulativo: las primeras mejoras suelen verse en semanas y se consolidan en meses." },
      { q: "¿Cómo sé si funciona?", a: "Cada mes recibes un reporte con alcance, interacción, tráfico y posiciones." },
    ],
  },
  {
    slug: "reputacion",
    name: "Caligo Reputación",
    unit: "caligo",
    href: CALIGO_URL,
    promise: "Lo que aparece cuando te buscan lo decides tú",
    short: "SEO reputacional, gestión de reseñas y escucha social.",
    description:
      "Monitoreamos qué se dice de ti o de tu marca en internet y trabajamos para que lo primero que vean sea lo que te representa.",
    tool: "Monitoreo SERP",
    saleUnit: "Persona / marca",
    priceFrom: "S/ 2,500 / mes + onboarding",
    deliverable: "Monitoreo y gestión activa de reputación",
    howItWorks: [
      { title: "Auditoría de reputación", text: "Revisamos qué aparece hoy cuando buscan tu nombre o tu marca." },
      { title: "Escucha social", text: "Monitoreamos menciones, reseñas y conversaciones relevantes." },
      { title: "SEO reputacional", text: "Impulsamos contenido que te representa en los primeros resultados." },
      { title: "Gestión activa", text: "Respondemos reseñas y actuamos rápido ante una crisis." },
    ],
    includes: [
      "Monitoreo de resultados de búsqueda (SERP)",
      "Escucha social y alertas de menciones",
      "Gestión de reseñas",
      "SEO reputacional",
      "Reporte mensual de reputación",
    ],
    faqs: [
      { q: "¿Pueden borrar contenido negativo?", a: "No prometemos borrar lo que no controlamos. Trabajamos para que el contenido que te representa ocupe los primeros resultados, y usamos los canales formales cuando corresponde." },
      { q: "¿Sirve para personas o solo para empresas?", a: "Para ambos: la unidad de venta es persona o marca." },
      { q: "¿Qué incluye el onboarding?", a: "La auditoría inicial de reputación y la configuración del monitoreo." },
    ],
  },
];

export const productsByUnit = (unit: UnitSlug) => products.filter((p) => p.unit === unit);
export const getProduct = (slug: string) => products.find((p) => p.slug === slug);

export const publicClients = [
  { name: "JNE", full: "Jurado Nacional de Elecciones" },
  { name: "MINEDU", full: "Ministerio de Educación" },
  { name: "CONIDA", full: "Agencia Espacial del Perú" },
  { name: "CONCYTEC", full: "Consejo Nacional de Ciencia, Tecnología e Innovación Tecnológica" },
];

/** logo: archivo en public/certificaciones/. Sin logo se muestra el nombre como marca tipográfica. */
export const certifications: { name: string; area: string; text: string; issuer?: string; logo?: string }[] = [
  { name: "ISO 27001", issuer: "ISO", logo: "/certificaciones/iso.svg", area: "Seguridad de la información", text: "Norma internacional para gestionar la seguridad de la información de forma sistemática." },
  { name: "ITIL", issuer: "PeopleCert · AXELOS", area: "Gestión de servicios de TI", text: "Marco de buenas prácticas para operar servicios de TI con procesos y niveles de servicio." },
  { name: "CCNA", issuer: "Cisco", logo: "/certificaciones/cisco.svg", area: "Redes", text: "Certificación de Cisco en diseño, operación y solución de problemas de redes." },
  { name: "eWPTX", issuer: "INE Security", logo: "/certificaciones/ewptx.png", area: "Pentesting web", text: "Certificación avanzada en pruebas de penetración de aplicaciones web." },
  { name: "CEH", issuer: "EC-Council", logo: "/certificaciones/ec-council.png", area: "Hacking ético", text: "Certified Ethical Hacker: técnicas ofensivas aplicadas a la defensa." },
];

/**
 * Clientes (public/clientes/). Sin `logo` se muestra el nombre como marca tipográfica:
 * al tener el archivo, copiarlo a public/clientes/ y agregar `logo`.
 */
export const clientLogos: { name: string; logo?: string }[] = [
  { name: "Alianza", logo: "/clientes/alianza.webp" },
  { name: "Cleaned Services", logo: "/clientes/cleaned.webp" },
  { name: "Compañía Minera Santander", logo: "/clientes/santander.webp" },
  { name: "Grupo Efide", logo: "/clientes/efide.webp" },
  { name: "Tigo", logo: "/clientes/tigo.webp" },
  { name: "Kairum Investments", logo: "/clientes/kairum.webp" },
  { name: "AssetxFlex", logo: "/clientes/assetxflex.webp" },
  { name: "Quinta Derby", logo: "/clientes/quintaderby.webp" },
  { name: "Cobros Seguros", logo: "/clientes/cobros.webp" },
  { name: "Amauta", logo: "/clientes/amauta.webp" },
  { name: "Open Comb Systems", logo: "/clientes/open.webp" },
  { name: "DataConsulting", logo: "/clientes/data.webp" },
  { name: "INACAL", logo: "/clientes/inacal.webp" },
  { name: "ConfIA+", logo: "/clientes/confia.webp" },
  { name: "CONCYTEC", logo: "/clientes/concytec.webp" },
  { name: "Meet Coworking", logo: "/clientes/meetcoworking.webp" },
  { name: "Caja Inca Sur", logo: "/clientes/inca.webp" },
  { name: "ISAF", logo: "/clientes/isaf.webp" },
  { name: "Trust House Management", logo: "/clientes/trusthouse.webp" },
  { name: "CONIDA — Agencia Espacial del Perú", logo: "/clientes/conida.webp" },
];

/** Respaldo institucional (public/respaldo/). */
export const institutions = [
  { name: "Cámara de Comercio de Lima", logo: "/respaldo/camara-de-comercio.png" },
  { name: "OECE — Organismo Especializado para las Contrataciones Públicas Eficientes", logo: "/respaldo/oece.png" },
  { name: "Fortinet Partner", logo: "/respaldo/fortinet.jpg" },
  { name: "CodeTwo", logo: "/respaldo/codetwo.webp" },
  { name: "Kaspersky Registered B2B Partner", logo: "/respaldo/kaspersky-partner.png" },
];

export const homeFaqs: Faq[] = [
  { q: "¿Qué es Grupo GESITEC?", a: "Una empresa tecnológica peruana con más de 14 años de trayectoria, que hoy está impulsada por un grupo corporativo sólido, integrado por varias empresas que brindan servicios conexos. Ofrecemos servicios gestionados de TI, ciberseguridad, desarrollo de software y marketing digital bajo suscripción mensual, con SLA y entregable definido." },
  { q: "¿Cómo se organiza la oferta?", a: "En cuatro unidades estratégicas —Technology, Advisory, Security e Innova—, cada una con sus propios productos." },
  { q: "¿Qué significa que cada producto tenga un entregable?", a: "Que sabes desde el inicio qué vas a recibir: un dashboard, un mapa tecnológico, un sistema a medida o un reporte de reputación, no horas sueltas." },
  { q: "¿Trabajan con el sector público?", a: "Sí. Entre nuestros clientes están el JNE, el Ministerio de Educación, CONIDA y CONCYTEC." },
  { q: "¿Cómo se contrata?", a: "Por suscripción mensual. Cada producto tiene su unidad de venta (nodo, usuario, empresa o marca), un SLA y un entregable concreto." },
];

export type GlossaryCategory = "Infraestructura" | "Seguridad" | "Software/IA" | "Marketing digital";

export interface Term {
  slug: string;
  term: string;
  category: GlossaryCategory;
  definition: string;
  related?: string;
}

export const glossary: Term[] = [
  { slug: "sla", term: "SLA", category: "Infraestructura", definition: "Acuerdo de nivel de servicio (Service Level Agreement). Define los tiempos máximos de respuesta y resolución que un proveedor se compromete a cumplir, según la prioridad de cada incidencia.", related: "gst-soporte" },
  { slug: "kpi-de-ti", term: "KPI de TI", category: "Infraestructura", definition: "Indicador clave de desempeño aplicado a tecnología: disponibilidad, tiempo de resolución, tickets por usuario, avance de proyectos. Permite gestionar la TI con datos en lugar de percepciones.", related: "gst-guia" },
  { slug: "noc", term: "NOC", category: "Infraestructura", definition: "Centro de operaciones de red (Network Operations Center). Equipo y herramientas que vigilan de forma continua la disponibilidad y el rendimiento de redes y servicios.", related: "gst-vigia" },
  { slug: "mesa-de-ayuda", term: "Mesa de ayuda (help desk)", category: "Infraestructura", definition: "Punto único de contacto donde los usuarios reportan problemas o solicitudes de TI. Cada pedido se registra como ticket y se atiende según prioridad.", related: "gst-soporte" },
  { slug: "itil", term: "ITIL", category: "Infraestructura", definition: "Marco de buenas prácticas para la gestión de servicios de TI. Ordena procesos como incidencias, cambios y niveles de servicio." },
  { slug: "monitoreo-de-red", term: "Monitoreo de red", category: "Infraestructura", definition: "Supervisión continua de equipos, enlaces y servicios para detectar caídas o degradación antes de que afecten a los usuarios.", related: "gst-vigia" },
  { slug: "uptime", term: "Uptime", category: "Infraestructura", definition: "Porcentaje de tiempo en que un servicio está disponible. Un 99.9% de uptime equivale a menos de 9 horas de caída al año." },
  { slug: "ticket-de-incidencia", term: "Ticket de incidencia", category: "Infraestructura", definition: "Registro de un problema o solicitud en la mesa de ayuda. Guarda quién lo reportó, su prioridad, quién lo atiende y cuánto tardó en resolverse." },
  { slug: "ciberseguridad-ofensiva", term: "Ciberseguridad ofensiva", category: "Seguridad", definition: "Enfoque que evalúa las defensas simulando ataques reales, para encontrar y corregir vulnerabilidades antes que un atacante." },
  { slug: "red-team", term: "Red Team", category: "Seguridad", definition: "Equipo que simula a un adversario real con objetivos concretos, combinando técnicas técnicas, físicas y de ingeniería social para probar la capacidad de detección y respuesta." },
  { slug: "pentesting", term: "Pentesting", category: "Seguridad", definition: "Prueba de penetración: evaluación autorizada que intenta explotar vulnerabilidades de sistemas, redes o aplicaciones para medir su nivel real de exposición." },
  { slug: "osint", term: "OSINT", category: "Seguridad", definition: "Inteligencia de fuentes abiertas. Recolección y análisis de información pública (web, redes, registros) para evaluar la exposición de una organización o persona." },
  { slug: "phaas", term: "PhaaS", category: "Seguridad", definition: "Phishing as a Service aplicado a la defensa: campañas de phishing simulado y controlado para medir y entrenar la capacidad del personal de reconocer engaños.", related: "gst-escudo" },
  { slug: "forense-digital", term: "Forense digital", category: "Seguridad", definition: "Análisis de evidencia digital para reconstruir qué ocurrió en un incidente de seguridad, preservando la información con validez técnica y legal." },
  { slug: "mdm", term: "MDM", category: "Seguridad", definition: "Gestión de dispositivos móviles (Mobile Device Management). Permite aplicar políticas, instalar aplicaciones y bloquear o borrar equipos de la empresa de forma remota.", related: "gst-escudo" },
  { slug: "vpn", term: "VPN", category: "Seguridad", definition: "Red privada virtual. Crea un canal cifrado entre el equipo del usuario y la red de la empresa para acceder de forma segura desde cualquier lugar." },
  { slug: "desarrollo-a-medida", term: "Desarrollo a medida", category: "Software/IA", definition: "Software construido para los procesos específicos de una organización, en lugar de adaptar la organización a un producto genérico.", related: "gst-innova" },
  { slug: "ia-aplicada", term: "IA aplicada", category: "Software/IA", definition: "Uso de inteligencia artificial para resolver un problema concreto del negocio: clasificar documentos, responder consultas, predecir demanda o automatizar tareas repetitivas.", related: "gst-innova" },
  { slug: "integracion-de-sistemas", term: "Integración de sistemas", category: "Software/IA", definition: "Conexión entre aplicaciones distintas para que compartan datos de forma automática, evitando la doble digitación y los errores manuales." },
  { slug: "arquitectura-multi-tenant", term: "Arquitectura multi-tenant", category: "Software/IA", definition: "Diseño de software en el que una misma instancia atiende a varios clientes (tenants), manteniendo sus datos separados y seguros." },
  { slug: "bff", term: "BFF (Backend for Frontend)", category: "Software/IA", definition: "Patrón de arquitectura en el que cada interfaz (web, móvil) tiene una capa de backend propia que adapta los datos a lo que esa interfaz necesita." },
  { slug: "seo", term: "SEO", category: "Marketing digital", definition: "Optimización para motores de búsqueda. Conjunto de prácticas técnicas y de contenido para que una web aparezca en mejores posiciones en Google.", related: "presencia" },
  { slug: "seo-reputacional", term: "SEO reputacional", category: "Marketing digital", definition: "Aplicación del SEO para que los primeros resultados al buscar una persona o marca reflejen contenido que la representa de forma fiel y positiva.", related: "reputacion" },
  { slug: "growth-marketing", term: "Growth marketing", category: "Marketing digital", definition: "Enfoque de marketing basado en experimentos rápidos y métricas, orientado a crecer en todas las etapas del embudo, no solo en la captación." },
  { slug: "escucha-social", term: "Escucha social", category: "Marketing digital", definition: "Monitoreo de conversaciones y menciones sobre una marca en redes e internet para entender la percepción y reaccionar a tiempo.", related: "reputacion" },
  { slug: "content-studio", term: "Content studio", category: "Marketing digital", definition: "Equipo y proceso dedicados a producir contenido (texto, gráficos, video) de forma constante y con una línea editorial definida.", related: "presencia" },
  { slug: "autoridad-de-dominio", term: "Autoridad de dominio", category: "Marketing digital", definition: "Métrica que estima la fuerza de un sitio web para posicionar en buscadores, en función de la cantidad y calidad de enlaces que recibe." },
];

export const glossaryCategories: GlossaryCategory[] = ["Infraestructura", "Seguridad", "Software/IA", "Marketing digital"];

export const serviceOptions = [
  ...products.filter((p) => p.unit !== "caligo").map((p) => p.name),
  "Aún no lo sé / asesoría",
];

export const companySizes = ["1 a 10 personas", "11 a 50 personas", "51 a 200 personas", "201 a 1,000 personas", "Más de 1,000 personas"];

export const referralSources = ["Google u otro buscador", "Recomendación", "LinkedIn", "Redes sociales", "Evento", "Otro"];

export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string; note?: string }[];
}

export const mainNav: NavItem[] = [
  {
    label: "Unidades Estratégicas",
    href: "/#unidades",
    children: [
      { label: "Technology", href: "/technology", note: "Operación TI bajo SLAs y KPIs" },
      { label: "Advisory", href: "/advisory", note: "Gobierno y estrategia corporativa" },
      { label: "Security", href: "/security", note: "Ciberseguridad ofensiva y defensiva" },
      { label: "Innova", href: "/innova", note: "Software inteligente e IA aplicada" },
    ],
  },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Blog", href: "/blog" },
  {
    label: "Recursos",
    href: "/glosario",
    children: [
      { label: "Glosario", href: "/glosario", note: "Términos de TI, seguridad y marketing" },
      { label: "Certificaciones", href: "/certificaciones", note: "Nuestro respaldo técnico" },
    ],
  },
];
