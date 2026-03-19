"use client";

import React, { useRef, useEffect, useState } from "react";
import { useSpring } from "@react-spring/web";
import { A } from "@/lib/animated";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCompassDrafting,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface TeamMember {
  name: string;
  role: string;
  description: string;
  icon: IconDefinition;
  skills: string[];
}

const TEAM: TeamMember[] = [
  {
    name: "Marcel",
    role: "Projektowanie & wizualizacja",
    description:
      "Odpowiada za kontakt z klientem, pomiary, projektowanie CAD i wizualizacje 3D. Dba o to, żeby każdy projekt łączył funkcjonalność z estetyką.",
    icon: faCompassDrafting,
    skills: ["AutoCAD", "Modelowanie 3D", "Wizualizacje", "Kontakt z klientem"],
  },
  {
    name: "Mikołaj",
    role: "Produkcja & montaż",
    description:
      "Specjalista od obróbki stali — cięcia, gięcia, spawania i wykończenia. Każdy detal pod jego rękami nabiera precyzji i trwałości.",
    icon: faWrench,
    skills: ["Spawanie MIG/TIG", "Cięcie CNC", "Gięcie", "Montaż"],
  },
];

function TeamCard({
  member,
  delay,
  visible,
}: {
  member: TeamMember;
  delay: number;
  visible: boolean;
}) {
  const spring = useSpring({
    opacity: visible ? 1 : 0,
    y: visible ? 0 : 40,
    delay,
    config: { tension: 140, friction: 26 },
  });

  return (
    <A.div
      style={{
        opacity: spring.opacity,
        transform: spring.y.to((v) => `translateY(${v}px)`),
      }}
      className="group relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.02] p-8 transition-colors duration-300 hover:border-primary/30 sm:p-10"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(192,153,73,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative">
        <div className="mb-6 flex items-center gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-primary/25 bg-primary/5">
            <FontAwesomeIcon
              icon={member.icon}
              className="text-lg text-primary"
            />
          </div>
          <div>
            <h3
              className="text-xl font-bold text-white sm:text-2xl"
              style={{ fontFamily: '"Besley", "Times New Roman", serif' }}
            >
              {member.name}
            </h3>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/70">
              {member.role}
            </p>
          </div>
        </div>

        <p className="text-sm leading-relaxed text-white/60 sm:text-base">
          {member.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {member.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/50"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute left-3 top-3 h-4 w-4 border-l border-t border-primary/15"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-3 right-3 h-4 w-4 border-b border-r border-primary/15"
      />
    </A.div>
  );
}

export default function TeamSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

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
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const headerSpring = useSpring({
    opacity: visible ? 1 : 0,
    y: visible ? 0 : 20,
    config: { tension: 140, friction: 26 },
  });

  return (
    <section
      ref={ref}
      aria-labelledby="team-heading"
      className="relative z-10 py-16 md:py-24 lg:py-28"
    >
      <div className="container px-4">
        <A.div
          style={{
            opacity: headerSpring.opacity,
            transform: headerSpring.y.to((v) => `translateY(${v}px)`),
          }}
          className="mx-auto mb-12 max-w-3xl text-center md:mb-16"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-white/60 [font-variant:small-caps]">
            Zespół
          </p>
          <h2
            id="team-heading"
            className="text-3xl font-semibold text-white sm:text-4xl md:text-5xl"
            style={{ fontFamily: '"Besley", "Times New Roman", serif' }}
          >
            Poznaj nas{" "}
            <em className="italic text-primary">osobiście</em>
          </h2>
          <p className="mt-4 text-base text-white/50 sm:text-lg">
            Bez pośredników i korporacyjnych struktur. Rozmawiasz bezpośrednio
            z osobami, które zaprojektują i wykonają Twoje zamówienie.
          </p>
        </A.div>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 md:gap-8">
          {TEAM.map((member, i) => (
            <TeamCard
              key={member.name}
              member={member}
              delay={i * 150}
              visible={visible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
