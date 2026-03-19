"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import { useSpring } from "@react-spring/web";
import { A } from "@/lib/animated";

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

const STATS: Stat[] = [
  { value: 150, suffix: "+", label: "Zrealizowanych projektów" },
  { value: 5, suffix: "+", label: "Lat doświadczenia" },
  { value: 100, suffix: "%", label: "Zadowolonych klientów" },
  { value: 500, suffix: "m²", label: "Stali rocznie" },
];

function AnimatedCounter({ value, suffix, visible }: { value: number; suffix: string; visible: boolean }) {
  const spring = useSpring({
    val: visible ? value : 0,
    config: { mass: 1, tension: 40, friction: 20 },
  });

  return (
    <A.span className="tabular-nums">
      {spring.val.to((v) => `${Math.round(v)}${suffix}`)}
    </A.span>
  );
}

export default function NumbersSection() {
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
      { threshold: 0.2 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const containerSpring = useSpring({
    opacity: visible ? 1 : 0,
    y: visible ? 0 : 30,
    config: { tension: 140, friction: 26 },
  });

  return (
    <section
      ref={ref}
      aria-label="Statystyki"
      className="relative z-10 border-y border-white/[0.06] py-16 md:py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(192,153,73,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="container relative px-4">
        <A.div
          style={{
            opacity: containerSpring.opacity,
            transform: containerSpring.y.to((v) => `translateY(${v}px)`),
          }}
          className="mx-auto grid max-w-5xl grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-12"
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <p
                className="text-3xl font-bold text-primary sm:text-4xl md:text-5xl"
                style={{ fontFamily: '"Besley", "Times New Roman", serif' }}
              >
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  visible={visible}
                />
              </p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/50 sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </A.div>
      </div>
    </section>
  );
}
