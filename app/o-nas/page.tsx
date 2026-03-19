import type { Metadata } from "next";
import {
  AboutHero,
  StorySection,
  NumbersSection,
  TeamSection,
  ValuesSection,
  ProcessCircle,
  ContactWithUs,
} from "@/components/sections";

export const metadata: Metadata = {
  title: "O nas — Steel Bros.",
  description:
    "Poznaj Steel Bros. — rodzinny duet Marcel & Mikołaj. Projektujemy i wykonujemy konstrukcje stalowe na miarę, od pierwszego szkicu po montaż.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <StorySection />
      <NumbersSection />
      <TeamSection />
      <ValuesSection />
      <ProcessCircle />
      <ContactWithUs />
    </>
  );
}
