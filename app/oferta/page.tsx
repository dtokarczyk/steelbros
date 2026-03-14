import { ServicesHero, SegmentsSection } from "@/components/sections";
import { pages } from "@/app/oferta/(content)";

export default function ServicesPage() {
  return (
    <>
      <ServicesHero
        title="Oferta"
        subtitle="Konstrukcje stalowe i realizacje na miarę."
      />

      <SegmentsSection segments={pages} />
    </>
  );
}
