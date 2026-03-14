"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { useSpring, useTrail } from "@react-spring/web";
import { A } from "@/lib/animated";
import Button from "../Button";

interface ServicesHeroProps {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  caption?: React.ReactNode;
}

interface AnimatedTitleProps {
  words: string[];
  triggered: boolean;
}

export default function ServicesHero({
  title,
  subtitle,
  imageSrc,
  imageAlt,
  caption,
}: ServicesHeroProps) {
  const [triggered, setTriggered] = useState(false);
  const [darkness, setDarkness] = useState(0);
  const sectionRef = useRef<HTMLElement | null>(null);
  const titleIsString = typeof title === "string";
  const words = titleIsString && title ? (title as string).split(" ") : [];

  useEffect(() => {
    const t = setTimeout(() => setTriggered(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const { top, height } = el.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, -top / (height * 0.30)));
      setDarkness(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const titleSpring = useSpring({
    opacity: triggered ? 1 : 0,
    y: triggered ? 0 : 18,
    config: { mass: 1, tension: 160, friction: 26 },
    delay: 220,
  });

  const subtitleSpring = useSpring({
    opacity: triggered ? 1 : 0,
    y: triggered ? 0 : 14,
    config: { mass: 1, tension: 120, friction: 28 },
    delay: 350,
  });

  const captionSpring = useSpring({
    opacity: triggered ? 1 : 0,
    y: triggered ? 0 : 10,
    config: { mass: 1, tension: 120, friction: 26 },
    delay: 650,
  });

  // Interpolate between primary (#C09949) and background (#1A1A1A) as user scrolls
  const start = { r: 192, g: 153, b: 73 };
  const end = { r: 26, g: 26, b: 26 };
  const r = Math.round(start.r + (end.r - start.r) * darkness);
  const g = Math.round(start.g + (end.g - start.g) * darkness);
  const b = Math.round(start.b + (end.b - start.b) * darkness);

  return (
    <section
      ref={sectionRef}
      className="bg-primary"
      style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }}
    >
      <div className="container px-4">
        <div className="pt-24 pb-8 sm:pt-32 sm:pb-20 lg:py-24">
          {/* Header + lead text on top (sticky on all screens) */}
          <div className="max-w-4xl text-left sticky top-24">
            {title != null &&
              (titleIsString && words.length > 0 ? (
                <AnimatedTitle words={words} triggered={triggered} />
              ) : (
                <h1
                  className="text-5xl font-semibold leading-tight text-background sm:text-6xl md:text-7xl lg:text-8xl"
                  style={{ fontFamily: '"Besley", "Times New Roman", serif' }}
                >
                  <A.span
                    style={{
                      opacity: titleSpring.opacity,
                      transform: titleSpring.y.to((y) => `translateY(${y}px)`),
                      display: "inline-block",
                    }}
                  >
                    {title}
                  </A.span>
                </h1>
              ))}

            {subtitle != null && (
              <A.p
                style={{
                  opacity: subtitleSpring.opacity,
                  transform: subtitleSpring.y.to((y) => `translateY(${y}px)`),
                  fontFamily: '"Besley", "Times New Roman", serif',
                }}
                className="mt-6 max-w-3xl text-xl leading-relaxed text-background sm:text-2xl md:text-3xl"
              >
                {subtitle}
              </A.p>
            )}

            <div className="mt-6">
              <Button as="a" href="#services-more" variant="dark">
                Czytaj więcej
              </Button>
            </div>
          </div>

          {/* Image in the middle – below text on mobile */}
          {imageSrc && (
            <div className="mt-10 relative overflow-hidden rounded-lg bg-black/5 aspect-[1/1] sm:aspect-[16/8]">
              <Image
                src={imageSrc}
                alt={imageAlt ?? ""}
                width={1920}
                height={960}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          )}

          {caption != null && (
            <A.p
              style={{
                opacity: captionSpring.opacity,
                transform: captionSpring.y.to((y) => `translateY(${y}px)`),
              }}
              className="mt-4 max-w-3xl text-base leading-relaxed text-background/90 sm:text-lg"
            >
              {caption}
            </A.p>
          )}

        </div>
      </div>
    </section>
  );
}

function AnimatedTitle({ words, triggered }: AnimatedTitleProps) {
  const trail = useTrail(words.length, {
    opacity: triggered ? 1 : 0,
    y: triggered ? 0 : 18,
    config: { mass: 1, tension: 160, friction: 26 },
    delay: 220,
  });

  return (
    <h1
      className="text-5xl font-semibold leading-tight text-background sm:text-6xl md:text-7xl lg:text-8xl"
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
    </h1>
  );
}

