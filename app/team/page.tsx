import type { Metadata } from "next";
import { LandingHeader } from "@/components/landing/landing-header";
import { LandingTeam } from "@/components/landing/landing-team";
import { LandingFooter } from "@/components/landing/landing-footer";

export const metadata: Metadata = {
  title: "Nuestro Equipo | Grupo Trade Corp",
  description: "Conoce al equipo de Grupo Trade Corp: liderazgo, ventas, marketing, asesoría y soporte administrativo.",
};

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <LandingHeader />
      <main className="pt-16">
        <LandingTeam />
      </main>
      <LandingFooter />
    </div>
  );
}