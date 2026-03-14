"use client";

import React from "react";
import Button from "../Button";

const DEFAULT_CONTACT = {
  title: "Masz pomysł na projekt ze stali?",
  description:
    "Napisz do nas kilka słów o tym, czego potrzebujesz – balustradę, pergolę, ogrodzenie, carport czy zupełnie niestandardowy element. Odezwiemy się z propozycją rozwiązań, wyceną i realnym terminem realizacji.",
  buttonText: "Porozmawiajmy o Twoim projekcie",
  buttonLink: "#contact-form",
};


export type ContactWithUsProps = {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
};


const ContactWithUs = ({
  title = DEFAULT_CONTACT.title,
  description = DEFAULT_CONTACT.description,
  buttonText = DEFAULT_CONTACT.buttonText,
  buttonLink = DEFAULT_CONTACT.buttonLink,
}: Partial<ContactWithUsProps> = {}) => {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-background py-16 md:py-24 lg:py-28"
    >
      <div className="container px-4">
        <div className="mx-auto max-w-3xl text-left md:text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-white/50 [font-variant:small-caps]">
            Kontakt
          </p>

          <h2
            id="contact-heading"
            className="text-2xl font-semibold text-white sm:text-3xl md:text-4xl"
          >
            {title}
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">
            {description}
          </p>

          <div className="mt-8 flex flex-col items-start gap-3 md:flex-row md:items-center md:justify-center">
            <Button as="a" href={buttonLink} variant="light">
              {buttonText}
            </Button>
            <p className="text-xs text-white/50 md:text-sm">
              Wolisz zadzwonić? Dodaj numer telefonu, oddzwonimy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactWithUs;

