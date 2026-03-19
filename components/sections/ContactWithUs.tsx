"use client";

import React from "react";
import Button from "../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const PHONE_NUMBER = "+48 123 456 789";
const PHONE_HREF = "tel:+48123456789";

const DEFAULT_CONTACT = {
  title: "Masz pomysł na projekt ze stali?",
  description:
    "Napisz do nas kilka słów o tym, czego potrzebujesz – balustradę, pergolę, ogrodzenie, carport czy zupełnie niestandardowy element. Odezwiemy się z propozycją rozwiązań, wyceną i realnym terminem realizacji.",
  buttonText: "Skontaktuj się z nami",
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
      className="relative overflow-hidden bg-background py-20 md:py-28 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0 border-y border-primary/20" />
      <div className="pointer-events-none absolute -left-32 -top-32 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />

      <div className="container relative px-4">
        <div className="mx-auto max-w-3xl text-left md:text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary [font-variant:small-caps]">
            Kontakt
          </p>

          <h2
            id="contact-heading"
            className="text-3xl font-bold text-white sm:text-4xl md:text-5xl"
          >
            {title}
          </h2>

          <p className="mt-5 text-base leading-relaxed text-white/70 sm:text-lg">
            {description}
          </p>

          <div className="mt-10 flex flex-col items-start gap-5 md:flex-row md:items-center md:justify-center">
            <Button as="a" href={buttonLink} variant="primary" className="px-8 py-4 text-sm tracking-[0.15em]">
              {buttonText}
            </Button>

            <span className="hidden h-8 w-px bg-white/20 md:block" />

            <a
              href={PHONE_HREF}
              className="group flex items-center gap-3 transition-colors"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/40 bg-primary/10 transition-colors group-hover:border-primary group-hover:bg-primary/20">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="h-4 w-4 text-primary"
                />
              </span>
              <span className="flex flex-col">
                <span className="text-xs uppercase tracking-wider text-white/50">
                  Zadzwoń do nas
                </span>
                <span className="text-lg font-semibold tracking-wide text-white transition-colors group-hover:text-primary">
                  {PHONE_NUMBER}
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactWithUs;

