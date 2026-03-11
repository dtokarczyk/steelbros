import {
  ServicesHero,
  ServicesList,
  FaqSection,
  SegmentsSection,
  ContactWithUs,
} from "@/components/sections";
import TextSplitSection from "@/components/sections/TextSplitSection";

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />

      <TextSplitSection
        eyebrow="La régularisation urbanistique"
        title="La régularisation urbanistique au cœur de nos fonctions"
        body="Dans notre bureau d’architecture, nous concentrons notre énergie et nos efforts autour de la régularisation d’infractions urbanistiques. Divisions de logements, changement d’affectation, aménagements intérieurs, constructions, extensions et modifications architecturales non conformes aux règles d’urbanisme en vigueur : KS ARCHITECTES œuvre sans relâche pour vous permettre d’obtenir le permis de régularisation à Bruxelles. Et parce que nous avons conscience que ces situations peuvent engendrer beaucoup de stress et impacter le quotidien de nos clients, nous veillons à assurer une présence continue et fiable tout au long du processus de mise en conformité."
      />

      <ServicesList />

      <FaqSection />

      <ContactWithUs />

      <SegmentsSection />
    </>
  );
}
