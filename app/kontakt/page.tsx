import type { Metadata } from "next";
import ContactHero from "@/components/sections/ContactHero";
import ContactForm from "@/components/sections/ContactForm";
import ContactInfoGrid from "@/components/sections/ContactInfoGrid";

export const metadata: Metadata = {
  title: "Kontakt — Steel Bros.",
  description:
    "Skontaktuj się ze Steel Bros. — konstrukcje stalowe na wymiar. Formularz kontaktowy, telefon i e-mail.",
};

export default function KontaktPage() {
  return (
    <>
      <ContactHero />
      <ContactForm />
      <ContactInfoGrid />
    </>
  );
}
