import { notFound } from "next/navigation";
import {
  ServicesHero,
  ServicesList,
  FaqSection,
  SegmentsSection,
  ContactWithUs,
} from "@/components/sections";
import TextSplitSection from "@/components/sections/TextSplitSection";
import { pages } from "@/app/services/(content)";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug }));
}

export default async function ServiceSlugPage({ params }: Props) {
  const { slug } = await params;
  const content = pages[slug as keyof typeof pages];

  if (!content) {
    notFound();
  }

  return (
    <>
      {content.ServicesHero && (
        <ServicesHero
          title={content.ServicesHero.title}
          subtitle={content.ServicesHero.subtitle}
          imageSrc={content.ServicesHero.imageSrc}
          imageAlt={content.ServicesHero.imageAlt}
          caption={content.ServicesHero.caption}
        />
      )}

      {content.TextSplitSection && (
        <TextSplitSection
          eyebrow={content.TextSplitSection.eyebrow}
          title={content.TextSplitSection.title}
          body={content.TextSplitSection.body}
        />
      )}

      {content.ServicesList && (
        <ServicesList
          id={content.ServicesList.id}
          eyebrow={content.ServicesList.eyebrow}
          title={content.ServicesList.title}
          description={content.ServicesList.description}
          services={content.ServicesList.services}
        />
      )}

      <FaqSection />
      <ContactWithUs />
      <SegmentsSection />
    </>
  );
}
