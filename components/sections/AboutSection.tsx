"use client";

import React, { useEffect, useRef, useState } from "react";
import { animated, useSprings } from "@react-spring/web";

const text =
  "Jesteśmy studiem stalowym skupionym na człowieku. Pracujesz bezpośrednio z twórcami, bez pośredników. Projektujemy i budujemy konstrukcje funkcjonalne, piękne i zawsze wyprzedzające granice możliwości.";
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
            className="text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl lg:text-[3.25rem]"
            style={{ fontFamily: '"Besley", "Times New Roman", serif' }}
          >
            {springs.map((style, i) => (
              <React.Fragment key={i}>
                <animated.span className="inline-block" style={style}>
                  {words[i]}
                </animated.span>
                {i < words.length - 1 && " "}
              </React.Fragment>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
