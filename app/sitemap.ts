import type { MetadataRoute } from "next";
import { getAdvisorLandingSlugs } from "@/components/landing/team-data";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { url: siteUrl, priority: 1, changeFrequency: "weekly" as const },
    { url: `${siteUrl}/academia`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${siteUrl}/copytrading`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${siteUrl}/us`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${siteUrl}/team/mariarenee`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${siteUrl}/privacidad`, priority: 0.3, changeFrequency: "yearly" as const },
    { url: `${siteUrl}/terminos-condiciones`, priority: 0.3, changeFrequency: "yearly" as const },
  ];

  const advisorRoutes = getAdvisorLandingSlugs().map((slug) => ({
    url: `${siteUrl}/team/${slug}`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
  }));

  return [...staticRoutes, ...advisorRoutes].map((entry) => ({
    ...entry,
    lastModified: new Date(),
  }));
}