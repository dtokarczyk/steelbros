import {
  HeroSection,
  KeywordsSection,
  SegmentsSection,
  AboutSection,
  CaseStudyCarousel,
  TrustSection,
  ProcessCircle,
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
      />
      <KeywordsSection />
      <AboutSection />
      <SegmentsSection />
      <CaseStudyCarousel />
      <ProcessCircle />
      <TrustSection />
    </>
  );
}
