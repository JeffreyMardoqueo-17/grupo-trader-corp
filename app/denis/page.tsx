import type { Metadata } from "next";
import Link from "next/link";
import { LandingHeader } from "@/components/landing/landing-header";
import { LandingDenis } from "@/components/landing/landing-denis";
import { LandingContact } from "@/components/landing/landing-contact";
import { LandingFooter } from "@/components/landing/landing-footer";

export const metadata: Metadata = {
  title: "Sobre Denis | Grupo Trade Corp",
  description: "Conoce la visión, experiencia y enfoque de Denis Gutiérrez dentro de Grupo Trade Corp.",
};

export default function DenisPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <LandingHeader />
      <main className="overflow-x-hidden pt-16">
        {/* <div className="mx-auto max-w-6xl px-4 pt-8 sm:px-6 lg:px-8">
          <Link href="/#explora" className="inline-flex rounded-full border border-border px-4 py-2 text-sm text-muted-foreground transition hover:border-[var(--brand-gold)] hover:text-foreground">
            Volver a las cards
          </Link>
        </div> */}
        <LandingDenis />
        <LandingContact />
        <LandingFooter />
      </main>
    </div>
  );
}