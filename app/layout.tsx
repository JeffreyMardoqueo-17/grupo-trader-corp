import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeInitializer } from "@/components/theme-initializer";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Grupo Trade Corp | Trading Profesional",
  description: "Educación y CopyTrading con estructura y criterio.",
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
        </ThemeProvider>
      </body>
    </html>
  );
}
