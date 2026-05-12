import { LandingHeader } from "@/components/landing/landing-header";
import { LandingHero } from "@/components/landing/landing-hero";
import { LandingCompanySection } from "@/components/landing/landing-company-section";
import { LandingFocusCards } from "@/components/landing/landing-focus-cards";
// import { LandingBenefits } from "@/components/landing/landing-benefits";
import { LandingTestimonials } from "@/components/landing/landing-testimonials";
// import { LandingTeam } from "@/components/landing/landing-team";
import { LandingContact } from "@/components/landing/landing-contact";
import { LandingFooter } from "@/components/landing/landing-footer";
import { LandingMissionVisionValues, MissionVisionValuesData } from "@/components/landing/landing-mission-vision-values";

// /mision
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

export default function Home() {
  return (
    <div className="min-h-screen">
      <LandingHeader />
      <main>
        <LandingHero />
        <LandingCompanySection />
          <LandingMissionVisionValues data={missionVisionData} />
        <LandingFocusCards />
        {/* <LandingMissionVisionValues /> */}
        {/* <LandingBenefits /> */}
        <section className="bg-[#000208]">
          <LandingContact />
        </section>
        <LandingTestimonials />
        {/* <LandingTeam /> */}
      </main>
      <LandingFooter />
    </div>
  );
}