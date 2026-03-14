import { notFound } from "next/navigation";
import {
  ServicesHero,
  ServicesList,
  FaqSection,
  SegmentsSection,
  ContactWithUs,
} from "@/components/sections";
import TextSplitSection from "@/components/sections/TextSplitSection";
import { pages } from "@/app/oferta/(content)";

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
      <ServicesHero
        {...content.ServicesHero}
      />
      <TextSplitSection
        {...content.TextSplitSection}
      />
      <ServicesList {...content.ServicesList} />
      <FaqSection {...content.FaqSection} />
      <ContactWithUs {...content.ContactWithUs} />
      <SegmentsSection segments={pages} />
    </>
  );
}
