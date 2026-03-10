"use client";

import React, { useRef, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCalculator,
  faCompassDrafting,
  faGears,
  faWrench,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: IconDefinition;
}

const steps: ProcessStep[] = [
  { number: "01", title: "Analiza", description: "Poznajemy Twoje potrzeby i oceniamy możliwości realizacji.", icon: faMagnifyingGlass },
  { number: "02", title: "Wycena", description: "Przygotowujemy szczegółową ofertę z transparentnym kosztorysem.", icon: faCalculator },
  { number: "03", title: "Projektowanie CAD", description: "Tworzymy dokumentację techniczną i wizualizacje 3D.", icon: faCompassDrafting },
  { number: "04", title: "Produkcja", description: "Realizujemy projekt w naszym warsztacie z dbałością o detale.", icon: faGears },
  { number: "05", title: "Montaż", description: "Dostarczamy i montujemy konstrukcję na miejscu.", icon: faWrench },
  { number: "06", title: "Wsparcie", description: "Zapewniamy gwarancję i serwis po zakończeniu projektu.", icon: faHeadset },
];

const RADIUS = 340;
const COUNT = steps.length;
const SCROLL_SPEED = 0.05;

function getOrbitTransform(baseAngle: number, scrollAngle: number): string {
  const angle = baseAngle + scrollAngle;
  return `rotate(${angle}deg) translateX(${RADIUS}px) rotate(${-angle}deg)`;
}

export default function ProcessCircle() {
  const circleSize = RADIUS * 2;
  const containerSize = circleSize + 300;
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollAngle, setScrollAngle] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const windowH = window.innerHeight;
      const rawProgress = (windowH - rect.top) / (windowH + rect.height);
      const progress = Math.max(0, Math.min(1, rawProgress));
      setScrollAngle(progress * 360 * SCROLL_SPEED * 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="process-heading"
      className="relative z-10 overflow-hidden py-16 md:py-24 lg:py-28"
    >

      {/* Grid pattern background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />
      {/* Radial fade so the grid softens at edges */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 30%, #1A1A1A 75%)",
        }}
      />

      <div className="container">
        <div className="mb-12 text-center md:mb-16">
          <h2
            id="process-heading"
            className="text-3xl font-semibold text-white sm:text-4xl md:text-5xl"
            style={{ fontFamily: '"Besley", "Times New Roman", serif' }}
          >
            Jak <em className="italic">pracujemy</em>.
          </h2>
        </div>

        {/* Desktop: orbiting circle */}
        <div
          className="process-orbit-container relative mx-auto hidden md:block"
          style={{ width: containerSize, height: containerSize }}
        >
          {/* Dashed circle */}
          <div
            className="absolute rounded-full border border-dashed border-white/15"
            style={{
              width: circleSize,
              height: circleSize,
              top: (containerSize - circleSize) / 2,
              left: (containerSize - circleSize) / 2,
            }}
          />

          {/* Inner decorative circle */}
          <div
            className="absolute rounded-full border border-white/[0.06]"
            style={{
              width: circleSize * 0.45,
              height: circleSize * 0.45,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />

          {/* Center label */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <span className="block text-xs font-bold uppercase tracking-[0.3em] text-white/30">
                Nasz
              </span>
              <span className="block text-xs font-bold uppercase tracking-[0.3em] text-white/30">
                Proces
              </span>
            </div>
          </div>

          {/* Orbiting items */}
          {steps.map((step, i) => {
            const baseAngle = (360 / COUNT) * i - 90;
            return (
            <div
              key={step.number}
              className="absolute will-change-transform"
              style={{
                top: "50%",
                left: "50%",
                width: 0,
                height: 0,
                transform: getOrbitTransform(baseAngle, scrollAngle),
              }}
            >
              <div className="flex -translate-x-1/2 flex-col items-center">
                <div className="-translate-y-1/2">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full border border-primary/25 bg-background transition-shadow duration-300 hover:shadow-[0_0_30px_rgba(192,153,73,0.18)]">
                    <FontAwesomeIcon
                      icon={step.icon}
                      className="text-xl text-primary"
                    />
                  </div>
                </div>
                <div className="mt-1 w-40 text-center">
                  <span className="block text-xs font-bold tracking-[0.2em] text-primary/50">
                    {step.number}
                  </span>
                  <span className="block text-sm font-semibold text-white">
                    {step.title}
                  </span>
                  <span className="mt-1 block text-[11px] leading-snug text-body-color">
                    {step.description}
                  </span>
                </div>
              </div>
            </div>
            );
          })}
        </div>

        {/* Mobile: vertical timeline */}
        <div className="mx-auto max-w-xs md:hidden">
          <div className="relative flex flex-col gap-8 pl-8">
            {/* Vertical line */}
            <div className="absolute bottom-2 left-[22px] top-2 w-px bg-white/10" />

            {steps.map((step) => (
              <div key={step.number} className="relative flex items-center gap-4">
                {/* Dot on the line */}
                <div className="absolute -left-8 flex h-[45px] w-[45px] items-center justify-center rounded-full border border-primary/25 bg-background">
                  <FontAwesomeIcon
                    icon={step.icon}
                    className="text-sm text-primary"
                  />
                </div>
                <div className="pl-6">
                  <span className="block text-[10px] font-bold tracking-[0.2em] text-primary/50">
                    {step.number}
                  </span>
                  <span className="block text-sm font-semibold text-white">
                    {step.title}
                  </span>
                  <span className="mt-0.5 block text-xs leading-snug text-body-color">
                    {step.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
