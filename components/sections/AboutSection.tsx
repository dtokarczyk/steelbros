"use client";

import React, { useEffect, useRef, useState } from "react";
import { animated, useSprings } from "@react-spring/web";

const AnimatedSpan = animated.span as unknown as React.FC<{
  children?: React.ReactNode;
  className?: string;
  style?: Record<string, unknown>;
}>;

const text =
  "Rodzinny duet i surowa stal. Pracujesz z nami bezpośrednio - od pierwszego projektu po końcowy montaż. Kształtujemy materiał w solidne i piękne konstrukcje, które dopełniają przestrzenie prywatne i biznesowe.";
const words = text.split(" ");

const AboutSection = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const wh = window.innerHeight || document.documentElement.clientHeight;
      const start = wh * 0.8;
      const end = wh * 0.05;
      const progress = Math.min(1, Math.max(0, (start - rect.top) / (start - end || 1)));
      setVisibleCount(Math.round(progress * words.length));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // Each word gets its own spring — animates to white when scroll reaches it
  const springs = useSprings(
    words.length,
    words.map((_, i) => ({
      opacity: i < visibleCount ? 1 : 0.12,
      y: i < visibleCount ? 0 : 6,
      config: { mass: 1, tension: 220, friction: 30 },
    }))
  );

  return (
    <section
      aria-labelledby="about-heading"
      className="relative z-10 py-16 md:py-24 lg:py-28"
    >
      <div className="container">
        <div ref={containerRef} className="max-w-5xl mx-auto text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-white/60 [font-variant:small-caps]">
            About
          </p>
          <p
            id="about-heading"
            className="text-[1.5rem] font-semibold leading-[1.15] text-white sm:text-[2rem] md:text-[3rem] lg:text-[3.25rem]"
            style={{ fontFamily: '"Besley", "Times New Roman", serif' }}
          >
            {springs.map((style, i) => (
              <React.Fragment key={i}>
                <AnimatedSpan className="inline-block" style={style}>
                  {words[i]}
                </AnimatedSpan>
                {i < words.length - 1 && " "}
              </React.Fragment>
            ))}
          </p>
          <p className="mt-6 text-base sm:text-lg font-medium tracking-wide text-white/50">
            Marcel Wojdyła &amp; Mikołaj Wojdyła
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
