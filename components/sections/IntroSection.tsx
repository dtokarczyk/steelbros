"use client";

import React, { useEffect, useRef, useState } from "react";
import { useTrail } from "@react-spring/web";
import { A } from "@/lib/animated";

/** Scroll distance multiplier: lower = subtler lag vs page scroll. */
const PARALLAX_SCROLL_FACTOR = 0.21;

export interface IntroSectionProps {
  label?: React.ReactNode;
  paragraph?: string;
  names?: React.ReactNode;
}

const IntroSection = ({ label, paragraph, names }: IntroSectionProps) => {
  const [triggered, setTriggered] = useState(false);
  const parallaxLayerRef = useRef<HTMLDivElement>(null);
  const words = (paragraph ?? "").trim().split(/\s+/).filter(Boolean);

  useEffect(() => {
    const t = setTimeout(() => setTriggered(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const el = parallaxLayerRef.current;
    if (!el) return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    let rafId = 0;

    const applyParallax = () => {
      rafId = 0;
      const y = window.scrollY * PARALLAX_SCROLL_FACTOR;
      el.style.transform = `translate3d(0, ${y}px, 0)`;
    };

    const onScroll = () => {
      if (rafId !== 0) return;
      rafId = requestAnimationFrame(applyParallax);
    };

    applyParallax();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId !== 0) cancelAnimationFrame(rafId);
      el.style.transform = "";
    };
  }, []);

  const trail = useTrail(words.length, {
    opacity: triggered ? 1 : 0,
    y: triggered ? 0 : 18,
    config: { mass: 1, tension: 160, friction: 26 },
    delay: 220,
  });

  return (
    <section
      aria-labelledby="intro-heading"
      className="relative z-10"
    >
      <div className="container">
        <div
          ref={parallaxLayerRef}
          className="max-w-5xl mx-auto text-center will-change-transform"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-white/60 [font-variant:small-caps]">
            {label ?? "Intro"}
          </p>
          <p
            id="intro-heading"
            className="text-[1.5rem] font-semibold leading-[1.15] text-white sm:text-[2rem] md:text-[3rem] lg:text-[3.25rem]"
            style={{ fontFamily: '"Besley", "Times New Roman", serif' }}
          >
            {trail.map((style, index) => (
              <React.Fragment key={index}>
                <A.span
                  style={{
                    opacity: style.opacity,
                    transform: style.y.to((y) => `translateY(${y}px)`),
                  }}
                  className="inline-block"
                >
                  {words[index]}
                </A.span>
                {index < words.length - 1 && " "}
              </React.Fragment>
            ))}
          </p>
          {names != null && names !== "" ? (
            <p className="mt-6 text-base sm:text-lg font-medium tracking-wide text-white/50">
              {names}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
