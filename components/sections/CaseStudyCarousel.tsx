"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

const realizacje = [
  {
    slug: "brama-loftowa",
    title: "Brama loftowa",
    description:
      "Stalowa brama z wypełnieniem ze szkła hartowanego — projekt dla prywatnej rezydencji w Krakowie.",
  },
  {
    slug: "pergola-ogrodowa",
    title: "Pergola ogrodowa",
    description:
      "Modułowa pergola stalowa z systemem zaciemniania. Realizacja pod klucz w 3 tygodnie.",
  },
  {
    slug: "schody-spiralne",
    title: "Schody spiralne",
    description:
      "Ażurowe schody spiralne z blachy ciętej laserowo, wykończenie proszkowe antracyt.",
  },
  {
    slug: "kuchnia-ogrodowa",
    title: "Kuchnia ogrodowa",
    description:
      "Zabudowa stalowa z blatem ze stali nierdzewnej — trwała i elegancka na każdą pogodę.",
  },
  {
    slug: "balustrada-szklana",
    title: "Balustrada szklana",
    description:
      "Minimalistyczna balustrada stalowo-szklana do balkonu w apartamentowcu w Warszawie.",
  },
];

const ImagePlaceholder = () => (
  <div className="flex h-full w-full items-center justify-center bg-white/10">
    <svg
      className="h-8 w-8 text-white/30"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
  </div>
);

export default function CaseStudyCarousel() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const total = realizacje.length;

  return (
    <section className="relative overflow-hidden py-16 md:py-20 lg:py-24">
      <div className="container">
        <div className="flex items-stretch gap-6 md:gap-10">
          {/* Vertical label — beside the carousel */}
          <div className="hidden shrink-0 items-center justify-center md:flex">
            <span
              className="select-none text-[1.75rem] font-bold uppercase tracking-[0.2em] text-white/10 lg:text-[2.5rem] [writing-mode:vertical-rl]"
              style={{ transform: "rotate(180deg)" }}
            >
              Nasze realizacje
            </span>
          </div>

          {/* Carousel area */}
          <div className="min-w-0 flex-1">
            <Swiper
              modules={[Pagination, A11y]}
              slidesPerView={1.15}
              spaceBetween={16}
              centeredSlides={false}
              pagination={false}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              breakpoints={{
                575: { slidesPerView: 1.6, spaceBetween: 20 },
                768: { slidesPerView: 2.2, spaceBetween: 24 },
                992: { slidesPerView: 3.1, spaceBetween: 28 },
                1200: { slidesPerView: 3.4, spaceBetween: 32 },
              }}
              className="!overflow-visible"
            >
              {realizacje.map((item) => (
                <SwiperSlide key={item.slug}>
                  <Link
                    href={`/realizacje/${item.slug}`}
                    className="group block"
                  >
                    {/* Portrait image placeholder */}
                    <div className="relative mb-4 aspect-[3/4] w-full overflow-hidden">
                      <ImagePlaceholder />

                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-primary/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </div>

                    {/* Caption */}
                    <h3 className="mb-1 text-sm font-semibold uppercase tracking-[0.15em] text-foreground transition-colors duration-200 group-hover:text-primary">
                      {item.title}
                    </h3>
                    <p className="line-clamp-2 text-xs leading-relaxed text-body-color">
                      {item.description}
                    </p>
                  </Link>
                </SwiperSlide>
              ))}

              {/* See-all card */}
              <SwiperSlide>
                <Link
                  href="/realizacje"
                  className="group flex aspect-[3/4] w-full items-center justify-center border border-white/10 bg-white/5 transition-colors duration-300 hover:border-primary/40 hover:bg-primary/5"
                >
                  <div className="text-center">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-foreground group-hover:text-primary">
                      Zobacz wszystkie
                    </p>
                    <svg
                      className="mx-auto h-5 w-5 text-primary transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </Link>
              </SwiperSlide>
            </Swiper>

            {/* Pagination + nav row */}
            <div className="mt-8 flex items-center justify-between gap-6">
              {/* Dot-style pagination */}
              <div className="flex items-center gap-2">
                {Array.from({ length: total }).map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Przejdź do realizacji ${i + 1}`}
                    onClick={() => swiperRef.current?.slideTo(i)}
                    className={`block transition-all duration-300 ${i === activeIndex
                      ? "h-[3px] w-6 bg-primary"
                      : "h-[3px] w-3 bg-white/20 hover:bg-white/40"
                      }`}
                  />
                ))}
              </div>

              {/* Prev / Next arrows */}
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  aria-label="Poprzedni"
                  onClick={() => swiperRef.current?.slidePrev()}
                  className="flex h-9 w-9 items-center justify-center border border-white/15 text-white/50 transition-colors duration-200 hover:border-primary hover:text-primary disabled:opacity-30"
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
                  aria-label="Następny"
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
          </div>

        </div>
      </div>
    </section>
  );
}
