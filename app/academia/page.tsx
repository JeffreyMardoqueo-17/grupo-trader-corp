import type { Metadata } from "next";
import Link from "next/link";
import { LandingHeader } from "@/components/landing/landing-header";
import { LandingAcademia } from "@/components/landing/landing-academia";

export const metadata: Metadata = {
  title: "Academia de Trading | Grupo Trade Corp",
  description: "Formación estructurada para aprender trading con contexto real, disciplina y criterio.",
};

export default function AcademiaPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <LandingHeader />
      <main className="pt-16">
        <div className="mx-auto max-w-6xl px-4 pt-8 sm:px-6 lg:px-8">
          <Link href="/#explora" className="inline-flex rounded-full border border-border px-4 py-2 text-sm text-muted-foreground transition hover:border-[var(--brand-gold)] hover:text-foreground">
            Volver a las cards
          </Link>
        </div>
        <LandingAcademia />
      </main>
    </div>
  );
}