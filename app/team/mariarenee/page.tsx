import { notFound } from "next/navigation";
import { getAdvisorLandingData } from "@/components/landing/team-data";
import { LandingAdvisorHero } from "@/components/landing/landing-advisor-hero";
import { LandingAdvisorAbout } from "@/components/landing/landing-advisor-about";
import { LandingAdvisorTestimonials } from "@/components/landing/landing-advisor-testimonials";
import { LandingAdvisorContact } from "@/components/landing/landing-advisor-contact";
import { LandingAdvisorFooter } from "@/components/landing/landing-advisor-footer";

export default function MariaReneePage() {
  const advisor = getAdvisorLandingData("mariarenee");

  if (!advisor) {
    notFound();
  }

  return (
    <>
      <LandingAdvisorHero data={advisor.hero} />
      <LandingAdvisorAbout
        about={advisor.about}
        mission={advisor.mission}
        values={advisor.values}
      />
      <LandingAdvisorTestimonials testimonials={advisor.testimonials} />
      <LandingAdvisorContact
        contact={advisor.contact}
        socialLinks={advisor.socialLinks}
        advisor={advisor.about}
      />
      <LandingAdvisorFooter
        name={advisor.about.name}
        role={advisor.about.role}
        socialLinks={advisor.socialLinks}
      />
    </>
  );
}
