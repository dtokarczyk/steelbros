import React from "react";

export default function ContactHero() {
  return (
    <section className="border-b border-white/10 bg-background pt-28 pb-12 md:pt-32 md:pb-14">
      <div className="container px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-primary [font-variant:small-caps]">
            Kontakt
          </p>
          <h1
            className="text-3xl font-bold leading-tight text-white sm:text-4xl"
            style={{ fontFamily: '"Besley", "Times New Roman", serif' }}
          >
            Napisz lub zadzwoń
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/65">
            Jesteśmy dostępni od poniedziałku do piątku. Opisz krótko swój
            projekt, a wrócimy z odpowiedzią i propozycją dalszych kroków.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#contact-form"
              className="inline-flex items-center justify-center border border-primary bg-primary px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-primary/90"
            >
              Przejdź do formularza
            </a>
            <a
              href="tel:+48123456789"
              className="inline-flex items-center justify-center border border-white/15 px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:border-primary/40 hover:text-primary"
            >
              +48 123 456 789
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
