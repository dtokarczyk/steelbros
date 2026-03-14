import {
  ServicesHero,
  ServicesList,
  FaqSection,
  SegmentsSection,
  ContactWithUs,
} from "@/components/sections";
import TextSplitSection from "@/components/sections/TextSplitSection";
import { getSiloContent } from "@/lib/content";

const SILO_SLUG = "dom-i-ogrod";

export default function ServicesPage() {
  const content = getSiloContent(SILO_SLUG);

  return (
    <>
      <ServicesHero
        title={content?.hero.title}
        subtitle={content?.hero.lead}
      />

      <TextSplitSection
        title={content?.intro.title}
        body={content?.intro.body}
      />

      <ServicesList />

      <FaqSection />

      <ContactWithUs />

      <SegmentsSection />
    </>
  );
}
