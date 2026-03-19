"use client";

import React, { useRef, useEffect, useState } from "react";
import { useSpring } from "@react-spring/web";
import { A } from "@/lib/animated";

export default function StorySection() {
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
      { threshold: 0.15 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const leftSpring = useSpring({
    opacity: visible ? 1 : 0,
    x: visible ? 0 : -30,
    config: { tension: 140, friction: 26 },
  });

  const rightSpring = useSpring({
    opacity: visible ? 1 : 0,
    x: visible ? 0 : 30,
    delay: 200,
    config: { tension: 140, friction: 26 },
  });

  return (
    <section
      ref={ref}
      aria-labelledby="story-heading"
      className="relative overflow-hidden border-t border-white/[0.06] bg-background py-16 md:py-24 lg:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-primary/[0.03] blur-3xl"
      />

      <div className="container relative px-4">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-20">
          <A.div
            style={{
              opacity: leftSpring.opacity,
              transform: leftSpring.x.to((v) => `translateX(${v}px)`),
            }}
          >
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary/70 [font-variant:small-caps]">
              Nasza historia
            </p>
            <h2
              id="story-heading"
              className="text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl"
              style={{ fontFamily: '"Besley", "Times New Roman", serif' }}
            >
              Od pasji do{" "}
              <em className="italic text-primary">rzemiosła</em>
            </h2>

            <p className="mt-6 text-base leading-relaxed text-white/65 sm:text-lg">
              Wszystko zaczęło się w garażu, od pierwszego spawu i marzenia, żeby
              tworzyć coś trwałego. Dziś Steel Bros. to rodzinny warsztat
              z województwa śląskiego, w którym każdy projekt traktujemy jak
              własny — z pełnym zaangażowaniem od pierwszego szkicu po ostatni
              szlif.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/50">
              Jesteśmy braćmi, którzy połączyli swoje umiejętności — Marcel
              odpowiada za projektowanie i wizualizacje CAD, Mikołaj za precyzyjne
              wykonanie i montaż. Razem tworzymy kompletny zespół, który prowadzi
              klienta przez cały proces — bez pośredników, bez zbędnych opóźnień.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/50">
              Specjalizujemy się w małych i średnich konstrukcjach stalowych:
              pergolach, schodach, balustradach, drzwiach loftowych, elementach
              architektury miejskiej i zabudowach camperów. Każde zlecenie to dla
              nas okazja, żeby udowodnić, że stal może być piękna.
            </p>
          </A.div>

          <A.div
            style={{
              opacity: rightSpring.opacity,
              transform: rightSpring.x.to((v) => `translateX(${v}px)`),
            }}
            className="flex items-center"
          >
            <div className="relative w-full space-y-4">
              {/* Timeline card */}
              <div className="relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.02] p-8 sm:p-10">
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(192,153,73,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(192,153,73,0.08) 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                />

                <div className="relative space-y-6">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary/50">
                      Początki
                    </p>
                    <p className="mt-1 text-sm text-white/70">
                      Pierwsze projekty realizowane w garażu — meble metalowe,
                      proste konstrukcje, drobne zlecenia dla znajomych.
                    </p>
                  </div>

                  <div className="h-px bg-white/10" />

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary/50">
                      Rozwój
                    </p>
                    <p className="mt-1 text-sm text-white/70">
                      Własny warsztat, profesjonalny sprzęt, pierwsze duże
                      zlecenia — pergole, schody, balustrady i konstrukcje
                      budowlane.
                    </p>
                  </div>

                  <div className="h-px bg-white/10" />

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary/50">
                      Dziś
                    </p>
                    <p className="mt-1 text-sm text-white/70">
                      Kompleksowe usługi od projektu CAD po montaż. Realizacje
                      w całej Polsce — dla klientów prywatnych i biznesowych.
                    </p>
                  </div>

                  <div className="h-px bg-white/10" />

                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 animate-pulse rounded-full bg-green-500/80" />
                    <span className="text-xs text-white/50">
                      Ciągle się rozwijamy
                    </span>
                  </div>
                </div>

                <div
                  aria-hidden
                  className="pointer-events-none absolute left-3 top-3 h-4 w-4 border-l border-t border-primary/20"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute bottom-3 right-3 h-4 w-4 border-b border-r border-primary/20"
                />
              </div>
            </div>
          </A.div>
        </div>
      </div>
    </section>
  );
}
