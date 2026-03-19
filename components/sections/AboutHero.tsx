"use client";

import React, { useEffect, useRef, useState } from "react";
import { useTrail, useSpring } from "@react-spring/web";
import { A } from "@/lib/animated";

const PARALLAX_FACTOR = 0.18;

export default function AboutHero() {
  const [triggered, setTriggered] = useState(false);
  const layerRef = useRef<HTMLDivElement>(null);

  const heading = "Rodzinny duet i surowa stal";
  const words = heading.split(/\s+/);

  useEffect(() => {
    const t = setTimeout(() => setTriggered(true), 150);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const el = layerRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let rafId = 0;
    const onScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        rafId = 0;
        el.style.transform = `translate3d(0, ${window.scrollY * PARALLAX_FACTOR}px, 0)`;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const trail = useTrail(words.length, {
    opacity: triggered ? 1 : 0,
    y: triggered ? 0 : 24,
    config: { mass: 1, tension: 140, friction: 26 },
    delay: 200,
  });

  const labelSpring = useSpring({
    opacity: triggered ? 1 : 0,
    y: triggered ? 0 : -12,
    delay: 100,
    config: { tension: 160, friction: 28 },
  });

  const subtitleSpring = useSpring({
    opacity: triggered ? 1 : 0,
    y: triggered ? 0 : 16,
    delay: 600,
    config: { tension: 140, friction: 28 },
  });

  const lineSpring = useSpring({
    width: triggered ? 80 : 0,
    delay: 800,
    config: { tension: 120, friction: 30 },
  });

  const scrollSpring = useSpring({
    opacity: triggered ? 1 : 0,
    delay: 1000,
    config: { tension: 100, friction: 30 },
  });

  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden pt-16">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 70% 40%, rgba(192,153,73,0.06) 0%, transparent 60%)",
        }}
      />

      <div className="container relative px-4">
        <div
          ref={layerRef}
          className="mx-auto max-w-4xl will-change-transform"
        >
          <A.p
            style={{
              opacity: labelSpring.opacity,
              transform: labelSpring.y.to((v) => `translateY(${v}px)`),
            }}
            className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-primary [font-variant:small-caps]"
          >
            O nas
          </A.p>

          <h1
            className="text-[2rem] font-bold leading-[1.1] text-white sm:text-[2.75rem] md:text-[3.75rem] lg:text-[4.5rem]"
            style={{ fontFamily: '"Besley", "Times New Roman", serif' }}
          >
            {trail.map((style, i) => (
              <React.Fragment key={i}>
                <A.span
                  style={{
                    opacity: style.opacity,
                    transform: style.y.to((y) => `translateY(${y}px)`),
                  }}
                  className="inline-block"
                >
                  {words[i]}
                </A.span>
                {i < words.length - 1 && " "}
              </React.Fragment>
            ))}
          </h1>

          <A.div
            style={{ width: lineSpring.width }}
            className="mt-8 h-px bg-primary/60"
          />

          <A.p
            style={{
              opacity: subtitleSpring.opacity,
              transform: subtitleSpring.y.to((v) => `translateY(${v}px)`),
            }}
            className="mt-8 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg"
          >
            Steel Bros. to Marcel i Mikołaj — bracia, dla których stal to nie
            tylko materiał, ale pasja. Od projektu po montaż pracujesz
            bezpośrednio z nami.
          </A.p>
        </div>
      </div>

      <A.div
        style={{ opacity: scrollSpring.opacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.25em] text-white/30">
            Przewiń
          </span>
          <div className="h-8 w-px animate-pulse bg-gradient-to-b from-primary/60 to-transparent" />
        </div>
      </A.div>
    </section>
  );
}
