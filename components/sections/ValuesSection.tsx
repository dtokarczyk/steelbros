"use client";

import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { useSpring } from "@react-spring/web";
import { A } from "@/lib/animated";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faCrosshairs,
  faHandshakeSimple,
  faScrewdriverWrench,
  faLeaf,
  faBolt,
} from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

import "swiper/css";
import "swiper/css/pagination";

interface Value {
  icon: IconDefinition;
  title: string;
  description: string;
}

const VALUES: Value[] = [
  {
    icon: faHeart,
    title: "Pasja",
    description:
      "Stal to dla nas nie tylko materiał — to sposób na życie. Każdy projekt traktujemy z zaangażowaniem.",
  },
  {
    icon: faCrosshairs,
    title: "Precyzja",
    description:
      "Milimetrowa dokładność w każdym cięciu, gięciu i spawie. Detale robią różnicę.",
  },
  {
    icon: faHandshakeSimple,
    title: "Partnerstwo",
    description:
      "Budujemy relacje, nie tylko konstrukcje. Otwarty kontakt i uczciwe zasady współpracy.",
  },
  {
    icon: faScrewdriverWrench,
    title: "Rzemiosło",
    description:
      "Łączymy tradycyjne umiejętności z nowoczesnym sprzętem. Każdy element tworzony ręcznie.",
  },
  {
    icon: faLeaf,
    title: "Trwałość",
    description:
      "Projektujemy konstrukcje, które przetrwają pokolenia. Stal to materiał na lata.",
  },
  {
    icon: faBolt,
    title: "Terminowość",
    description:
      "Szanujemy Twój czas. Realistyczne terminy i konsekwentna realizacja.",
  },
];

export default function ValuesSection() {
  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);
  const ref = useRef<HTMLElement>(null);
  const total = VALUES.length;

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
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const headerSpring = useSpring({
    opacity: visible ? 1 : 0,
    y: visible ? 0 : 20,
    config: { tension: 160, friction: 26 },
  });

  const carouselSpring = useSpring({
    opacity: visible ? 1 : 0,
    y: visible ? 0 : 30,
    delay: 150,
    config: { tension: 140, friction: 26 },
  });

  return (
    <section
      ref={ref}
      aria-labelledby="values-heading"
      className="relative z-10 overflow-hidden border-t border-white/[0.06] py-16 md:py-24 lg:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-primary/[0.04] blur-3xl"
      />

      <div className="container px-4">
        <A.div
          style={{
            opacity: headerSpring.opacity,
            transform: headerSpring.y.to((v) => `translateY(${v}px)`),
          }}
          className="mx-auto mb-12 max-w-3xl text-center md:mb-16"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-white/60 [font-variant:small-caps]">
            Wartości
          </p>
          <h2
            id="values-heading"
            className="text-3xl font-semibold text-white sm:text-4xl md:text-5xl"
            style={{ fontFamily: '"Besley", "Times New Roman", serif' }}
          >
            Co nas{" "}
            <em className="italic text-primary">definiuje</em>
          </h2>
        </A.div>

        <A.div
          style={{
            opacity: carouselSpring.opacity,
            transform: carouselSpring.y.to((v) => `translateY(${v}px)`),
          }}
          className="mx-auto max-w-6xl"
        >
          <Swiper
            modules={[Pagination, A11y]}
            slidesPerView={1.15}
            spaceBetween={16}
            centeredSlides
            pagination={false}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            breakpoints={{
              575: { slidesPerView: 2, spaceBetween: 20, centeredSlides: false },
              768: { slidesPerView: 3, spaceBetween: 24, centeredSlides: false },
              1200: { slidesPerView: 4, spaceBetween: 28, centeredSlides: false },
            }}
            className="!overflow-visible"
          >
            {VALUES.map((value) => (
              <SwiperSlide key={value.title}>
                <div className="group flex min-h-[280px] flex-col items-center justify-center rounded-lg border border-white/10 bg-white/[0.02] p-8 text-center transition-colors duration-300 hover:border-primary/25 sm:min-h-[300px]">
                  <FontAwesomeIcon
                    icon={value.icon}
                    className="mb-6 text-4xl text-primary transition-transform duration-300 group-hover:scale-110"
                  />
                  <h3
                    className="mb-3 text-lg font-semibold text-white"
                    style={{ fontFamily: '"Besley", "Times New Roman", serif' }}
                  >
                    {value.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/50">
                    {value.description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Pagination + nav */}
          <div className="mt-8 flex items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              {Array.from({ length: total }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Przejdź do wartości ${i + 1}`}
                  onClick={() => swiperRef.current?.slideTo(i)}
                  className={`block transition-all duration-300 ${
                    i === activeIndex
                      ? "h-[3px] w-6 bg-primary"
                      : "h-[3px] w-3 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                aria-label="Poprzednia wartość"
                onClick={() => swiperRef.current?.slidePrev()}
                className="flex h-9 w-9 items-center justify-center border border-white/15 text-white/50 transition-colors duration-200 hover:border-primary hover:text-primary"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                type="button"
                aria-label="Następna wartość"
                onClick={() => swiperRef.current?.slideNext()}
                className="flex h-9 w-9 items-center justify-center border border-white/15 text-white/50 transition-colors duration-200 hover:border-primary hover:text-primary"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </A.div>
      </div>
    </section>
  );
}
