import type { Metadata } from "next";
import { LandingHeader } from "@/components/landing/landing-header";
import { LandingAcademia } from "@/components/landing/landing-academia";
import { LandingFooter } from "@/components/landing/landing-footer";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const description = "Formación estructurada para aprender trading con contexto real, disciplina y criterio.";

export const metadata: Metadata = {
  title: "Academia de Trading | Grupo Trade Corp",
  description,
  alternates: {
    canonical: "/academia",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: `${siteUrl}/academia`,
    siteName: "Grupo Trade Corp",
    title: "Academia de Trading | Grupo Trade Corp",
    description,
    images: [
      {
        url: "/images/hero.avif",
        width: 1200,
        height: 630,
        alt: "Academia de Trading | Grupo Trade Corp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Academia de Trading | Grupo Trade Corp",
    description,
    images: ["/images/hero.avif"],
  },
};

export default function AcademiaPage() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 -z-10 bg-background" />
      <div 
        className="absolute inset-0 -z-10 opacity-[0.03] dark:opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: '64px 64px'
        }}
      />
      <div className="absolute inset-0 -z-10 hidden dark:block bg-[radial-gradient(circle_at_top,rgba(74,144,226,0.08),transparent_45%),linear-gradient(180deg,#000208,#050b18)]" />
      <div className="absolute inset-0 -z-10 dark:hidden bg-[radial-gradient(circle_at_top,rgba(214,165,86,0.06),transparent_45%),linear-gradient(180deg,#ffffff,#fafafa)]" />
      
      <LandingHeader />
      <main className="relative z-10 pt-16">
        <LandingAcademia />
        <LandingFooter />
      </main>
    </div>
  );
}