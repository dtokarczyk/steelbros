"use client";

import React, { useState, useEffect } from "react";
import { useSpring } from "@react-spring/web";
import { A } from "@/lib/animated";

const faqs = [
  {
    question: "Qu’est-ce qu’une infraction urbanistique ?",
    answer:
      "La régularisation urbanistique est une procédure permettant de mettre en conformité un bien immobilier ayant fait l’objet de modifications non conformes aux règles d’urbanisme. Cela peut concerner des extensions, le remplacement de châssis, des divisions de logements ou des aménagements intérieurs réalisés sans permis.",
  },
  {
    question: "Quelles sont les infractions les plus fréquentes ?",
    answer:
      "Les situations les plus courantes concernent les divisions de logements, les extensions non autorisées, les changements d’affectation (par exemple un commerce transformé en logement) et certains aménagements intérieurs réalisés sans permis préalable.",
  },
  {
    question: "Que risque-t-on en cas d’infraction urbanistique ?",
    answer:
      "Selon la situation, vous pouvez faire face à des amendes, à l’obligation de remettre le bien dans son état initial ou à des difficultés lors d’une vente ou d’une régularisation administrative. Un accompagnement par un architecte expérimenté permet d’anticiper et de réduire ces risques.",
  },
  {
    question: "Pourquoi choisir KS Architectes ?",
    answer:
      "Nous concentrons notre pratique sur la régularisation d’infractions urbanistiques à Bruxelles. Notre expérience du terrain, notre connaissance des administrations communales et notre suivi personnalisé vous aident à traverser le processus de manière plus sereine et structurée.",
  },
  {
    question: "Quelles sont les étapes d’une régularisation urbanistique ?",
    answer:
      "Nous analysons d’abord la situation existante, puis constituons un dossier complet comprenant plans, relevés et argumentaire urbanistique. Ensuite, nous introduisons la demande de permis, assurons le suivi auprès de la commune et vous accompagnons jusqu’à la décision finale.",
  },
  {
    question: "Quels sont les délais pour régulariser une infraction ?",
    answer:
      "Les délais varient selon la complexité du dossier et la commune concernée. En moyenne, il faut compter plusieurs mois entre l’introduction de la demande et la décision. Nous vous informons en amont des grandes étapes et des délais prévisionnels.",
  },
];

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FaqItem = ({ question, answer, isOpen, onToggle }: FaqItemProps) => {
  const [springs, api] = useSpring(() => ({
    opacity: 0,
    y: -4,
    maxHeight: 0,
    config: { tension: 210, friction: 24, mass: 1 },
  }));

  useEffect(() => {
    api.start({
      opacity: isOpen ? 1 : 0,
      y: isOpen ? 0 : -4,
      maxHeight: isOpen ? 320 : 0,
    });
  }, [api, isOpen]);

  return (
    <div className="border-b border-white/10 py-5 sm:py-6 md:py-7 last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-6 text-left text-lg font-medium text-white sm:text-xl md:text-2xl"
      >
        <span>{question}</span>
        <span
          className={`shrink-0 text-3xl leading-none text-white/70 transition-transform duration-200 ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      <A.div
        style={{
          opacity: springs.opacity,
          transform: springs.y.to((y) => `translateY(${y}px)`),
          maxHeight: springs.maxHeight.to((h) => `${h}px`),
        }}
        className="overflow-hidden"
      >
        <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
          {answer}
        </p>
      </A.div>
    </div>
  );
};

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      aria-labelledby="faq-heading"
      className="relative z-10 border-t border-white/10 bg-black/10 py-16 md:py-24 lg:py-28"
    >
      <div className="container max-w-5xl">
        <header className="mb-12 text-left md:mb-16">
          <h2
            id="faq-heading"
            className="text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl lg:text-[3.5rem]"
            style={{ fontFamily: '"Besley", "Times New Roman", serif' }}
          >
            Zanim zaczniesz, możesz chcieć wiedzieć więcej.
          </h2>
        </header>

        <div className="rounded-xl bg-white/5 p-6 sm:p-8 md:p-10 lg:p-12 backdrop-blur-md">
          {faqs.map((item, index) => (
            <FaqItem
              key={item.question}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onToggle={() =>
                setOpenIndex((current) => (current === index ? null : index))
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;

