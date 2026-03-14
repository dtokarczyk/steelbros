import type { ServicesHeroProps } from "./ServicesHero";
import type { TextSplitSectionProps } from "./TextSplitSection";
import type { ServicesListProps } from "./ServicesList";

export type FaqSectionProps = {
  title: string;
  faqs: Array<{ question: string; answer: string }>;
};

export type ContactWithUsProps = {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
};

/** Content object for a service page – keys match section components, values are their props */
export type ServicePageContent = {
  ServicesHero?: ServicesHeroProps;
  TextSplitSection?: TextSplitSectionProps;
  ServicesList?: ServicesListProps;
  FaqSection?: FaqSectionProps;
  ContactWithUs?: ContactWithUsProps;
};
