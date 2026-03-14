import {
  HeroSection,
  KeywordsSection,
  SegmentsSection,
  AboutSection,
  CaseStudyCarousel,
  TrustSection,
  ProcessCircle,
} from "@/components/sections";
import { homeContent } from "./(content)";
import { pages } from "./oferta/(content)";

export default function HomePage() {
  const content = homeContent;

  return (
    <>
      <HeroSection
        {...content.hero}
      />
      <KeywordsSection {...content.keywords} />
      <AboutSection {...content.about} />
      <SegmentsSection segments={pages} />
      <CaseStudyCarousel
        {...content.caseStudyCarousel}
      />
      <ProcessCircle {...content.process} />
      <TrustSection {...content.trust} />
    </>
  );
}
