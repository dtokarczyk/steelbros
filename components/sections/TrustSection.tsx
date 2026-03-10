"use client";

import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldHalved,
  faUmbrella,
  faHandshakeSimple,
  faCertificate,
  faCompassDrafting,
} from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface TrustItem {
  icon: IconDefinition;
  title: string;
  description: string;
}

const items: TrustItem[] = [
  {
    icon: faShieldHalved,
    title: "Gwarancja 24 miesiące",
    description:
      "Każda realizacja objęta jest 24-miesięczną gwarancją na materiały i wykonanie.",
  },
  {
    icon: faUmbrella,
    title: "Ubezpieczenie",
    description:
      "Posiadamy pełne ubezpieczenie OC, chroniące Ciebie i Twój projekt na każdym etapie.",
  },
  {
    icon: faHandshakeSimple,
    title: "Indywidualne podejście",
    description:
      "Pracujemy bezpośrednio z klientem, dopasowując rozwiązania do indywidualnych potrzeb.",
  },
  {
    icon: faCertificate,
    title: "Certyfikaty",
    description:
      "Posiadamy wszystkie wymagane certyfikaty i uprawnienia branżowe.",
  },
  {
    icon: faCompassDrafting,
    title: "Projektowanie",
    description:
      "Oferujemy kompleksowe projektowanie 3D przed rozpoczęciem realizacji.",
  },
];

const TrustCard = ({
  item,
  isActive,
  onHover,
  onLeave,
}: {
  item: TrustItem;
  isActive: boolean;
  onHover: () => void;
  onLeave: () => void;
}) => {
  const spring = useSpring({
    flex: isActive ? 2.4 : 1,
    background: isActive ? "rgba(255,255,255,1)" : "rgba(255,255,255,0)",
    config: { mass: 1, tension: 200, friction: 26 },
  });

  const contentSpring = useSpring({
    opacity: isActive ? 1 : 0,
    y: isActive ? 0 : 12,
    delay: isActive ? 150 : 0,
    config: { mass: 1, tension: 200, friction: 26 },
  });

  return (
    <animated.div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      style={{
        flex: spring.flex,
        backgroundColor: spring.background,
      }}
      className="relative flex min-h-[320px] cursor-pointer flex-col justify-between rounded-2xl border border-white/20 p-6 transition-shadow duration-300 md:min-h-[380px]"
    >
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-xl transition-colors duration-300 ${
          isActive ? "bg-black/10" : "bg-white/10"
        }`}
      >
        <FontAwesomeIcon
          icon={item.icon}
          className={`text-xl transition-colors duration-300 ${
            isActive ? "text-black" : "text-white"
          }`}
        />
      </div>

      <div className="mt-auto">
        <h3
          className={`text-lg font-semibold leading-tight transition-colors duration-300 md:text-xl ${
            isActive ? "text-black" : "text-white"
          }`}
        >
          {item.title}
        </h3>

        <animated.p
          style={{
            opacity: contentSpring.opacity,
            transform: contentSpring.y.to((v) => `translateY(${v}px)`),
          }}
          className="mt-3 text-sm leading-relaxed text-black/70"
        >
          {item.description}
        </animated.p>
      </div>
    </animated.div>
  );
};

const TrustSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section
      aria-labelledby="trust-heading"
      className="relative z-10 py-16 md:py-24 lg:py-28"
    >
      <div className="container">
        <div className="mb-12 text-center md:mb-16">
          <h2
            id="trust-heading"
            className="text-3xl font-semibold text-white sm:text-4xl md:text-5xl"
            style={{ fontFamily: '"Besley", "Times New Roman", serif' }}
          >
            Pewność i{" "}
            <em className="italic">bezpieczeństwo</em>.
          </h2>
        </div>

        <div className="mx-auto flex max-w-6xl gap-3 md:gap-4">
          {items.map((item, i) => (
            <TrustCard
              key={item.title}
              item={item}
              isActive={activeIndex === i}
              onHover={() => setActiveIndex(i)}
              onLeave={() => setActiveIndex(null)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
