import { LandingHeader } from "@/components/landing/landing-header";
import { LandingHero } from "@/components/landing/landing-hero";
import { LandingCompanySection } from "@/components/landing/landing-company-section";
import { LandingTimeline } from "@/components/landing/landing-timeline";
import { LandingBenefits } from "@/components/landing/landing-benefits";
import { LandingTestimonials } from "@/components/landing/landing-testimonials";
import { LandingContact } from "@/components/landing/landing-contact";
import { LandingFooter } from "@/components/landing/landing-footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <LandingHeader />
      <main>
        <LandingHero />
        <LandingCompanySection />
        <LandingTimeline />
        <LandingBenefits />
        <LandingTestimonials />
      </main>
      <LandingContact />
      <LandingFooter />
    </div>
  );
}