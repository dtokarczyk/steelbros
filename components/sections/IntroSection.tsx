"use client";

import React, { useEffect, useState } from "react";
import { useTrail } from "@react-spring/web";
import { A } from "@/lib/animated";

export interface IntroSectionProps {
  label?: React.ReactNode;
  paragraph?: string;
  names?: React.ReactNode;
}

const IntroSection = ({ label, paragraph, names }: IntroSectionProps) => {
  const [triggered, setTriggered] = useState(false);
  const words = (paragraph ?? "").trim().split(/\s+/).filter(Boolean);

  useEffect(() => {
    const t = setTimeout(() => setTriggered(true), 100);
    return () => clearTimeout(t);
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
        <div className="max-w-5xl mx-auto text-center">
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
