import type { Metadata } from "next";
import { LandingHeader } from "@/components/landing/landing-header";
import { LandingCopyTrading } from "@/components/landing/landing-copytrading";
import { LandingFooter } from "@/components/landing/landing-footer";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const description = "Conoce cómo funciona CopyTrading y cómo puede complementar tu aprendizaje en trading.";

export const metadata: Metadata = {
  title: "CopyTrading | Grupo Trade Corp",
  description,
  alternates: {
    canonical: "/copytrading",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: `${siteUrl}/copytrading`,
    siteName: "Grupo Trade Corp",
    title: "CopyTrading | Grupo Trade Corp",
    description,
    images: [
      {
        url: "/images/copy/hero.jpg",
        width: 1200,
        height: 630,
        alt: "CopyTrading | Grupo Trade Corp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CopyTrading | Grupo Trade Corp",
    description,
    images: ["/images/copy/hero.jpg"],
  },
};

export default function CopyTradingPage() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 -z-10 bg-background" />
      <div 
        className="absolute inset-0 -z-10 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: '64px 64px'
        }}
      />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(74,144,226,0.08),transparent_45%),linear-gradient(180deg,#000208,#050b18)]" />
      
      <LandingHeader />
      <main className="relative z-10 pt-16">
        <LandingCopyTrading />
        <LandingFooter />
      </main>
    </div>
  );
}