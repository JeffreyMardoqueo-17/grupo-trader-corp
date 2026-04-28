import type { Metadata } from "next";
import Link from "next/link";
import { LandingHeader } from "@/components/landing/landing-header";
import { LandingCopyTrading } from "@/components/landing/landing-copytrading";

export const metadata: Metadata = {
  title: "CopyTrading | Grupo Trade Corp",
  description: "Conoce cómo funciona CopyTrading y cómo puede complementar tu aprendizaje en trading.",
};

export default function CopyTradingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <LandingHeader />
      <main className="pt-16">
        <div className="mx-auto max-w-6xl px-4 pt-8 sm:px-6 lg:px-8">
          <Link href="/#explora" className="inline-flex rounded-full border border-border px-4 py-2 text-sm text-muted-foreground transition hover:border-[var(--brand-gold)] hover:text-foreground">
            Volver a las cards
          </Link>
        </div>
        <LandingCopyTrading />
      </main>
    </div>
  );
}