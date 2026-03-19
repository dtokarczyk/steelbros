"use client";

import React, { useRef, useEffect, useState } from "react";
import { useSpring } from "@react-spring/web";
import { A } from "@/lib/animated";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faClock,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface InfoCard {
  icon: IconDefinition;
  label: string;
  value: string;
  detail: string;
  href?: string;
}

const CARDS: InfoCard[] = [
  {
    icon: faPhone,
    label: "Telefon",
    value: "+48 123 456 789",
    detail: "Zadzwoń i opowiedz o projekcie",
    href: "tel:+48123456789",
  },
  {
    icon: faEnvelope,
    label: "E-mail",
    value: "kontakt@steelbros.pl",
    detail: "Napisz — odpowiemy w 24h",
    href: "mailto:kontakt@steelbros.pl",
  },
  {
    icon: faClock,
    label: "Godziny",
    value: "Pon–Pt, 9:00–17:00",
    detail: "Wizyty po wcześniejszym umówieniu",
  },
  {
    icon: faLocationDot,
    label: "Lokalizacja",
    value: "Warsztat Steel Bros.",
    detail: "woj. śląskie, Polska",
  },
];

function Card({ card, index }: { card: InfoCard; index: number }) {
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const spring = useSpring({
    opacity: visible ? 1 : 0,
    y: visible ? 0 : 24,
    delay: index * 120,
    config: { tension: 160, friction: 26 },
  });

  const iconSpring = useSpring({
    scale: hovered ? 1.12 : 1,
    borderColor: hovered ? "rgba(192,153,73,0.5)" : "rgba(255,255,255,0.1)",
    config: { tension: 240, friction: 20 },
  });

  const Wrapper = card.href ? "a" : "div";
  const wrapperProps = card.href
    ? { href: card.href, className: "block" }
    : { className: "block" };

  return (
    <A.div
      ref={ref}
      style={{
        opacity: spring.opacity,
        transform: spring.y.to((v) => `translateY(${v}px)`),
      }}
    >
      <Wrapper
        {...wrapperProps}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="group rounded-lg border border-white/10 bg-white/[0.02] p-6 transition-colors duration-200 hover:border-primary/30 hover:bg-white/[0.04]">
          <A.div
            style={{
              transform: iconSpring.scale.to((s) => `scale(${s})`),
              borderColor: iconSpring.borderColor,
            }}
            className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border bg-primary/5 transition-colors"
          >
            <FontAwesomeIcon
              icon={card.icon}
              className="h-4 w-4 text-primary"
            />
          </A.div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">
            {card.label}
          </p>
          <p className="mt-1.5 text-lg font-semibold text-white transition-colors group-hover:text-primary">
            {card.value}
          </p>
          <p className="mt-1 text-sm text-white/50">{card.detail}</p>
        </div>
      </Wrapper>
    </A.div>
  );
}

export default function ContactInfoGrid() {
  return (
    <section
      aria-label="Dane kontaktowe"
      className="relative border-t border-white/[0.06] bg-background py-16 md:py-24"
    >
      <div className="container px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary/60 [font-variant:small-caps]">
              Pozostałe kanały
            </p>
            <h2
              className="mt-2 text-2xl font-bold text-white sm:text-3xl"
              style={{ fontFamily: '"Besley", "Times New Roman", serif' }}
            >
              Wybierz wygodną formę kontaktu
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CARDS.map((card, i) => (
              <Card key={card.label} card={card} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
