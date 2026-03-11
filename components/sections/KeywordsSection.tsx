"use client";

import { useSpring } from "@react-spring/web";
import { useEffect, useRef, useState } from "react";
import { A } from "@/lib/animated";

const keywordsRowOne = [
  "Pergole",
  "Konstrukcje stalowe",
  "Campery",
  "Drzwi loftowe",
  "Schody",
  "Architektura miejska",
  "Projekty na wymiar",
  "Spawanie",
  "Gięcie",
  "Cięcie stali",
];

const keywordsRowTwo = [
  "Jakość",
  "Precyzja",
  "Detale",
  "Nowoczesne wnętrza",
  "Outdoor",
  "Industrial",
  "Stal i drewno",
  "Custom",
  "Rozwiązania dla firm",
];

const SEPARATOR = "·";

const KeywordsStrip = ({
  words,
  direction = "left",
  speed = 0.5,
}: {
  words: string[];
  direction?: "left" | "right";
  speed?: number;
}) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const copyWidthRef = useRef(0);
  const [copies, setCopies] = useState(6);

  const [{ x }, api] = useSpring(() => ({ x: 0 }));

  useEffect(() => {
    const measure = () => {
      const el = trackRef.current;
      if (!el) return;
      const firstChild = el.children[0] as HTMLElement | undefined;
      if (!firstChild) return;
      const w = firstChild.offsetWidth;
      if (!w) return;
      copyWidthRef.current = w;
      const needed = Math.ceil((window.innerWidth * 2) / w) + 2;
      setCopies(Math.max(6, needed));
      // Initialize right-direction strip at the start of its loop cycle
      if (direction === "right") {
        api.set({ x: -w });
      }
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [direction, api]);

  useEffect(() => {
    const handleScroll = () => {
      const cw = copyWidthRef.current;
      if (!cw) return;
      const raw = window.scrollY * speed;
      // Wrap offset within one copy-width to create seamless loop
      const looped = ((raw % cw) + cw) % cw;
      // left: shift strip to the left; right: shift strip to the right (start negative)
      const offset = direction === "left" ? -looped : looped - cw;
      api.set({ x: offset });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [direction, speed, api]);

  return (
    <div className="border-y border-white/10 bg-background/80 py-4 text-foreground backdrop-blur-sm overflow-hidden">
      <A.div
        className="flex will-change-transform"
        style={{ x }}
        ref={trackRef}
      >
        {Array.from({ length: copies }).map((_, i) => (
          <div key={i} className="flex shrink-0 items-center">
            {words.map((word) => (
              <span
                key={word}
                className="flex items-center gap-4 px-4 text-sm font-semibold uppercase tracking-[0.25em] opacity-70 whitespace-nowrap [font-variant:small-caps]"
              >
                {word}
                <span className="text-white/30 text-xs">{SEPARATOR}</span>
              </span>
            ))}
          </div>
        ))}
      </A.div>
    </div>
  );
};

const KeywordsSection = () => {
  return (
    <section aria-label="Słowa kluczowe" className="relative z-10">
      <KeywordsStrip words={keywordsRowOne} direction="left" speed={0.5} />
      <KeywordsStrip words={keywordsRowTwo} direction="right" speed={0.4} />
    </section>
  );
};

export default KeywordsSection;
