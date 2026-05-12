import type { Metadata } from "next";
import { LandingHeader } from "@/components/landing/landing-header";
import { LandingDenis } from "@/components/landing/landing-denis";
import { LandingMissionVisionValues } from "@/components/landing/landing-mission-vision-values";
import type { MissionVisionValuesData } from "@/components/landing/landing-mission-vision-values";
import { LandingContact } from "@/components/landing/landing-contact";
import { LandingFooter } from "@/components/landing/landing-footer";
import { LandingFocusCards } from "@/components/landing/landing-focus-cards";
import { LandingTeam } from "@/components/landing/landing-team";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const description = "Conoce la visión, experiencia y enfoque de Denis Gutiérrez dentro de Grupo Trade Corp.";

export const metadata: Metadata = {
  title: "Sobre Denis | Grupo Trade Corp",
  description,
  alternates: {
    canonical: "/denis",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: `${siteUrl}/denis`,
    siteName: "Grupo Trade Corp",
    title: "Sobre Denis | Grupo Trade Corp",
    description,
    images: [
      {
        url: "/images/denis.jpg",
        width: 1200,
        height: 630,
        alt: "Sobre Denis | Grupo Trade Corp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sobre Denis | Grupo Trade Corp",
    description,
    images: ["/images/denis.jpg"],
  },
};

const missionVisionData: MissionVisionValuesData = {
  badge: "La base del trabajo",
  title: "Misión, visión y valores",
  mission: {
    label: "Misión",
    title: "Desarrollar estrategias que impulsen crecimiento",
    description:
      "Fundamentadas en disciplina, experiencia y resultados comprobables que generen oportunidades y construyan un patrimonio sólido y sostenible.",
  },
  vision: {
    label: "Visión",
    title: "Ser referente en disciplina y estrategia",
    description:
      "Convertirnos en guía para personas y empresas disciplinadas, capaces de tomar decisiones inteligentes y construir crecimiento con consistencia.",
  },
  values: {
    label: "Valores",
    title: "Principios que nos guían",
    items: [
      { icon: "✓", title: "Disciplina", description: "Hacemos lo necesario, incluso cuando no es fácil." },
      { icon: "✓", title: "Criterio", description: "No actuamos por impulso, sino por entendimiento." },
      { icon: "✓", title: "Responsabilidad", description: "Cada resultado es consecuencia de nuestras decisiones." },
      { icon: "✓", title: "Crecimiento continuo", description: "Nunca dejamos de aprender ni de mejorar." },
    ],
  },
};

export default function DenisPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <LandingHeader />
        <main className="overflow-x-hidden">
        <LandingDenis />
        <LandingMissionVisionValues data={missionVisionData} />
        <LandingFocusCards />
        <LandingTeam />
        <LandingContact />
        <LandingFooter />
      </main>
    </div>
  );
}