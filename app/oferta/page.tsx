import { IntroSection, SegmentsSection } from "@/components/sections";
import { pages } from "@/app/oferta/(content)";

const introText =
  "Od hal przemysłowych po elementy małej architektury. Od lat projektujemy i wykonujemy z precyzją i dbałością o detal.";

export default function ServicesPage() {
  return (
    <>
      <div className="min-h-[50vh] flex flex-col justify-end">
        <IntroSection label="Oferta" paragraph={introText} />
      </div>

      <SegmentsSection segments={pages} />
    </>
  );
}
