import { ContactWithUsProps } from "@/components/sections/ContactWithUs";
import { FaqSectionProps } from "@/components/sections/FaqSection";
import { ServicesHeroProps } from "@/components/sections/ServicesHero";
import { ServicesListProps } from "@/components/sections/ServicesList";
import { TextSplitSectionProps } from "@/components/sections/TextSplitSection";

/** Content object for a service page – keys match section components, values are their props */
export type ServicePageContent = {
  ServicesHero?: ServicesHeroProps;
  TextSplitSection?: TextSplitSectionProps;
  ServicesList?: ServicesListProps;
  FaqSection?: FaqSectionProps;
  ContactWithUs?: ContactWithUsProps;
};