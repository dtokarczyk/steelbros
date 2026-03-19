"use client";

import React, { useRef, useEffect, useState } from "react";
import { useSpring } from "@react-spring/web";
import { A } from "@/lib/animated";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIndustry,
  faRulerCombined,
  faTruckFast,
  faHelmetSafety,
} from "@fortawesome/free-solid-svg-icons";

const FEATURES = [
  { icon: faIndustry, text: "Własny warsztat spawalniczy" },
  { icon: faRulerCombined, text: "Projektowanie CAD / 3D" },
  { icon: faTruckFast, text: "Dostawa i montaż w całej Polsce" },
  { icon: faHelmetSafety, text: "Pełne ubezpieczenie OC" },
];

export default function WorkshopSection() {
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
      aria-labelledby="workshop-heading"
      className="relative overflow-hidden border-t border-white/[0.06] bg-background py-16 md:py-24 lg:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-20 h-80 w-80 rounded-full bg-primary/[0.04] blur-3xl"
      />

      <div className="container relative px-4">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left — text */}
          <A.div
            style={{
              opacity: leftSpring.opacity,
              transform: leftSpring.x.to((v) => `translateX(${v}px)`),
            }}
          >
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary/70 [font-variant:small-caps]">
              O nas
            </p>
            <h2
              id="workshop-heading"
              className="text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl"
              style={{ fontFamily: '"Besley", "Times New Roman", serif' }}
            >
              Warsztat, w którym{" "}
              <em className="italic text-primary">stal nabiera formy</em>
            </h2>

            <p className="mt-6 text-base leading-relaxed text-white/65 sm:text-lg">
              Jesteśmy rodzinnym zespołem z województwa śląskiego. Każdy projekt
              realizujemy od A do Z — od konsultacji i projektu CAD, przez cięcie,
              gięcie i spawanie, aż po malowanie proszkowe i montaż u klienta.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/50">
              Nasz warsztat jest wyposażony w profesjonalny sprzęt do obróbki
              stali, aluminium i stali nierdzewnej. Pracujemy zarówno nad
              pojedynczymi zleceniami, jak i większymi seriami produkcyjnymi.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {FEATURES.map(({ icon, text }) => (
                <div key={text} className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/5">
                    <FontAwesomeIcon
                      icon={icon}
                      className="h-3.5 w-3.5 text-primary"
                    />
                  </div>
                  <span className="text-sm leading-snug text-white/70">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </A.div>

          {/* Right — decorative "blueprint" card */}
          <A.div
            style={{
              opacity: rightSpring.opacity,
              transform: rightSpring.x.to((v) => `translateX(${v}px)`),
            }}
            className="flex items-center"
          >
            <div className="relative w-full overflow-hidden rounded-lg border border-white/10 bg-white/[0.02] p-8 sm:p-10">
              {/* Grid pattern */}
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
                    Siedziba
                  </p>
                  <p
                    className="mt-1 text-xl font-bold text-white"
                    style={{
                      fontFamily: '"Besley", "Times New Roman", serif',
                    }}
                  >
                    Steel Bros.
                  </p>
                  <p className="mt-0.5 text-sm text-white/50">
                    Konstrukcje stalowe na miarę
                  </p>
                </div>

                <div className="h-px bg-white/10" />

                <div className="space-y-3">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-white/40">
                      Adres warsztatu
                    </p>
                    <p className="mt-0.5 text-sm text-white/70">
                      ul. Stalowa 12, 44-100 Gliwice
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-white/40">
                      NIP
                    </p>
                    <p className="mt-0.5 text-sm text-white/70">
                      631-000-00-00
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-white/40">
                      Wizyty
                    </p>
                    <p className="mt-0.5 text-sm text-white/70">
                      Po wcześniejszym umówieniu — telefonicznie lub mailowo
                    </p>
                  </div>
                </div>

                <div className="h-px bg-white/10" />

                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-green-500/80" />
                  <span className="text-xs text-white/50">
                    Przyjmujemy nowe zlecenia
                  </span>
                </div>
              </div>

              {/* Corner decorations */}
              <div
                aria-hidden
                className="pointer-events-none absolute left-3 top-3 h-4 w-4 border-l border-t border-primary/20"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute bottom-3 right-3 h-4 w-4 border-b border-r border-primary/20"
              />
            </div>
          </A.div>
        </div>
      </div>
    </section>
  );
}
