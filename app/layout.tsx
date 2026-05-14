import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeInitializer } from "@/components/theme-initializer";
import { FloatingWhatsAppButton } from "@/components/floating-whatsapp-button";
import { RouterMonitor } from "@/components/router-monitor";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Grupo Trade Corp",
  url: siteUrl,
  logo: `${siteUrl}/images/logo.jpg`,
};

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Grupo Trade Corp",
    template: "%s | Grupo Trade Corp",
  },
  description:
    "Grupo Trade Corp es una comunidad privada donde aprendes, entiendes y ejecutas con criterio. Combinamos formación profesional con herramientas como CopyTrading para que avances incluso si estás empezando. Aquí no se trata de improvisar. Se trata de construir disciplina y tomar decisiones financieras con claridad.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "Grupo Trade Corp",
    title: "Grupo Trade Corp",
    description:
      "Grupo Trade Corp es una comunidad privada donde aprendes, entiendes y ejecutas con criterio. Combinamos formación profesional con herramientas como CopyTrading para que avances incluso si estás empezando. Aquí no se trata de improvisar. Se trata de construir disciplina y tomar decisiones financieras con claridad.",
    images: [
      {
        url: "/images/inversionistas.jpeg",
        width: 1200,
        height: 630,
        alt: "Inversionistas de Grupo Trade Corp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grupo Trade Corp",
    description:
      "Grupo Trade Corp es una comunidad privada donde aprendes, entiendes y ejecutas con criterio. Combinamos formación profesional con herramientas como CopyTrading para que avances incluso si estás empezando. Aquí no se trata de improvisar. Se trata de construir disciplina y tomar decisiones financieras con claridad.",
    images: ["/images/inversionistas.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('dark');`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `html { background-color: #000208; color: #ffffff; color-scheme: dark; } body { margin: 0; padding: 0; background-color: #000208; color: #ffffff; }`,
          }}
        />
      </head>
      <body className={`${manrope.variable} min-h-screen bg-background text-foreground`}>
        <ThemeProvider>
          <ThemeInitializer />
          <RouterMonitor />
          {children}
          <FloatingWhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
