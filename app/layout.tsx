import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeInitializer } from "@/components/theme-initializer";
import { FloatingWhatsAppButton } from "@/components/floating-whatsapp-button";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Grupo Trade Corp | Trading Profesional",
  description:
    "Grupo Trade Corp es una comunidad privada donde aprendes, entiendes y ejecutas con criterio. Combinamos formación profesional con herramientas como CopyTrading para que avances incluso si estás empezando. Aquí no se trata de improvisar. Se trata de construir disciplina y tomar decisiones financieras con claridad.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "Grupo Trade Corp",
    title: "Grupo Trade Corp | Trading Profesional",
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
    title: "Grupo Trade Corp | Trading Profesional",
    description:
      "Grupo Trade Corp es una comunidad privada donde aprendes, entiendes y ejecutas con criterio. Combinamos formación profesional con herramientas como CopyTrading para que avances incluso si estás empezando. Aquí no se trata de improvisar. Se trata de construir disciplina y tomar decisiones financieras con claridad.",
    images: ["/images/inversionistas.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `const theme = localStorage.getItem('theme') || 'light'; if (theme === 'dark') document.documentElement.classList.add('dark');`,
          }}
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `html { background-color: #ffffff; color: #000418; color-scheme: light; } html.dark { background-color: #000208; color: #ffffff; color-scheme: dark; } body { margin: 0; padding: 0; }`,
          }}
        />
      </head>
      <body className={`${manrope.variable} min-h-screen bg-background text-foreground transition-colors duration-300`} suppressHydrationWarning>
        <ThemeProvider>
          <ThemeInitializer />
          {children}
          <FloatingWhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
