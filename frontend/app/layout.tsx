import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { ScrollEffects } from "@/components/ScrollEffects";
import { SITE_URL, company } from "@/lib/content";
import { HOME_META, LLMS_ALTERNATE, OG_IMAGE, SITE_NAME } from "@/lib/seo";
import "./globals.css";

// Solo los pesos que se usan (look & feel 4.2): 400/500/600/700.
const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

const GA_ID = "G-GP4T0NJ6WX";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: HOME_META.title,
    template: "%s | Grupo GESITEC",
  },
  description: HOME_META.description,
  keywords: HOME_META.keywords,
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  robots: { index: true, follow: true },
  alternates: {
    canonical: "/",
    types: LLMS_ALTERNATE,
  },
  // Valores por defecto; cada página los completa con pageMeta() (lib/seo.ts).
  openGraph: {
    type: "website",
    locale: "es_PE",
    siteName: SITE_NAME,
    url: SITE_URL,
    title: HOME_META.ogTitle,
    description: HOME_META.ogDescription,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_META.ogTitle,
    description: HOME_META.twitterDescription,
    images: [OG_IMAGE.url],
  },
  // Favicon de la web anterior (isotipo oficial).
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
  },
};

export const viewport: Viewport = {
  themeColor: "#0f1a2a",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-PE" className={poppins.variable} data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        {/* Activa el scroll-reveal solo si hay JS; sin JS el contenido queda visible. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        {/* Google Analytics 4 */}
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="ga4" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', '${GA_ID}');`}
        </Script>
        <a href="#main" className="skip-link">Saltar al contenido</a>
        <ScrollEffects />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Organization",
            name: company.name,
            url: SITE_URL,
            logo: `${SITE_URL}/android-chrome-512x512.png`,
            slogan: company.tagline,
            description: company.description,
            address: {
              "@type": "PostalAddress",
              streetAddress: company.street,
              addressLocality: company.locality,
              addressRegion: company.region,
              addressCountry: company.country,
            },
          }}
        />
      </body>
    </html>
  );
}
