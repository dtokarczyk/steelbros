"use client";

import React, { useEffect, useRef, useState } from "react";
import { animated, useSpring, useTrail } from "@react-spring/web";

type AnimatedComponentProps = {
  children?: React.ReactNode;
  className?: string;
  style?: Record<string, unknown>;
  "aria-hidden"?: boolean | "true" | "false";
};

const AnimatedDiv = animated.div as unknown as React.FC<AnimatedComponentProps>;
const AnimatedP = animated.p as unknown as React.FC<AnimatedComponentProps>;
const AnimatedSpan = animated.span as unknown as React.FC<AnimatedComponentProps>;

interface HeroSectionProps {
  title: string;
  lead?: string;
}

export default function HeroSection({ title, lead }: HeroSectionProps) {
  const words = title.split(" ");
  const [triggered, setTriggered] = useState(false);
  const [scrollOpacity, setScrollOpacity] = useState(1);
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setTriggered(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const { top, height } = el.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, -top / (height * 0.6)));
      setScrollOpacity(1 - progress);
      // parallax: move content up at 40% of scroll speed
      setScrollY(Math.max(0, -top) * 0.4);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Background image — slow Ken Burns + fade in + scroll fade out
  const bgSpring = useSpring({
    opacity: triggered ? scrollOpacity : 0,
    scale: triggered ? 1 : 1.06,
    config: { duration: triggered ? undefined : 1800 },
  });

  // Overlay — fade in slightly after bg
  const overlaySpring = useSpring({
    opacity: triggered ? 1 : 0,
    config: { duration: 1200 },
    delay: 300,
  });

  // Label — fade + slide up before title words
  const labelSpring = useSpring({
    opacity: triggered ? 1 : 0,
    y: triggered ? 0 : 10,
    config: { mass: 1, tension: 180, friction: 28 },
    delay: 400,
  });

  // Title words — staggered trail starting after label
  const trail = useTrail(words.length, {
    opacity: triggered ? 1 : 0,
    y: triggered ? 0 : 14,
    config: { mass: 1, tension: 160, friction: 26 },
    delay: 650,
  });

  // Lead paragraph — fade + slide up after title
  const leadSpring = useSpring({
    opacity: triggered ? 1 : 0,
    y: triggered ? 0 : 12,
    config: { mass: 1, tension: 140, friction: 28 },
    delay: 900,
  });

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative overflow-hidden min-h-[90vh] flex items-center"
    >
      {/* Background image with fade + subtle scale */}
      <AnimatedDiv
        aria-hidden
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/u2844336958_Small_home-made_but_professional_welding_workshop_t_e4a3a6de-058a-4ad2-83ab-003f1ce20499.png')",
          opacity: bgSpring.opacity,
          scale: bgSpring.scale,
        }}
      />

      {/* Dark overlay */}
      <AnimatedDiv
        className="absolute inset-0 bg-background/65"
        style={{ opacity: overlaySpring.opacity }}
      />

      {/* Content — parallax wrapper */}
      <div
        className="container relative z-10 px-4"
        style={{ transform: `translateY(-${scrollY}px)` }}
      >
        <div className="max-w-5xl mx-auto py-[180px] text-center">

          {/* Label */}
          <AnimatedP
            style={labelSpring}
            className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-white/60 [font-variant:small-caps]"
          >
            Małe konstrukcje stalowe
          </AnimatedP>

          {/* Title */}
          <h1
            className="mb-5 text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl lg:text-[3.25rem]"
            style={{ fontFamily: '"Besley", "Times New Roman", serif' }}
          >
            {trail.map((style, i) => (
              <React.Fragment key={i}>
                <AnimatedSpan style={style} className="inline-block">
                  {words[i]}
                </AnimatedSpan>
                {i < words.length - 1 && " "}
              </React.Fragment>
            ))}
          </h1>

          {lead && (
            <AnimatedP
              style={leadSpring}
              className="mx-auto max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg"
            >
              {lead}
            </AnimatedP>
          )}

        </div>
      </div>
    </section>
  );
}
