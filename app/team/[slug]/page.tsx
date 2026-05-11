import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getAdvisorLandingData, getAdvisorLandingSlugs } from "@/components/landing/team-data";
import { LandingAdvisorHero } from "@/components/landing/landing-advisor-hero";
import { LandingAdvisorAbout } from "@/components/landing/landing-advisor-about";
import { LandingAdvisorTestimonials } from "@/components/landing/landing-advisor-testimonials";
import { LandingAdvisorContact } from "@/components/landing/landing-advisor-contact";
import { LandingAdvisorFooter } from "@/components/landing/landing-advisor-footer";

export async function generateStaticParams() {
  return getAdvisorLandingSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const advisor = getAdvisorLandingData(params.slug);

  if (!advisor) {
    return { title: "Asesor no encontrado" };
  }

  return {
    title: advisor.seo.title,
    description: advisor.seo.description,
    openGraph: {
      title: advisor.seo.title,
      description: advisor.seo.description,
      images: [{ url: advisor.seo.image, width: 1200, height: 630, alt: advisor.seo.title }],
      type: "website",
    },
  };
}

interface TeamAdvisorPageProps {
  params: { slug: string };
}

export default function TeamAdvisorPage({ params }: TeamAdvisorPageProps) {
  const advisor = getAdvisorLandingData(params.slug);

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
