import {
  HeroSection,
  SegmentsSection,
} from "@/components/sections";
import { getHomeContent } from "@/lib/content";
import { notFound } from "next/navigation";

export default function HomePage() {
  const content = getHomeContent();
  if (!content) notFound();

  return (
    <>
      <HeroSection
        title={content.hero.title}
        lead={content.hero.lead}
        ctaPrimary={content.hero.ctaPrimary}
        ctaPrimaryHref="/realizacje"
        ctaSecondary={content.hero.ctaSecondary}
        ctaSecondaryHref="/kontakt"
      />
      <SegmentsSection />
    </>
  );
}
