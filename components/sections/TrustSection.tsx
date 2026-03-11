 "use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { useSpring, animated } from "@react-spring/web";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type AnimatedElProps = {
  children?: React.ReactNode;
  className?: string;
  style?: Record<string, unknown>;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

const AnimatedDiv = animated.div as unknown as React.FC<AnimatedElProps>;
const AnimatedP = animated.p as unknown as React.FC<AnimatedElProps>;
import {
  faShieldHalved,
  faUmbrella,
  faHandshakeSimple,
  faCertificate,
  faCompassDrafting,
} from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import "swiper/css";
import "swiper/css/pagination";

interface TrustItem {
  icon: IconDefinition;
  title: string;
  description: string;
}

const items: TrustItem[] = [
  {
    icon: faShieldHalved,
    title: "Gwarancja 24 miesiące",
    description:
      "Każda realizacja objęta jest 24-miesięczną gwarancją na materiały i wykonanie.",
  },
  {
    icon: faUmbrella,
    title: "Ubezpieczenie",
    description:
      "Posiadamy pełne ubezpieczenie OC, chroniące Ciebie i Twój projekt na każdym etapie.",
  },
  {
    icon: faHandshakeSimple,
    title: "Indywidualne podejście",
    description:
      "Pracujemy bezpośrednio z klientem, dopasowując rozwiązania do indywidualnych potrzeb.",
  },
  {
    icon: faCertificate,
    title: "Certyfikaty",
    description:
      "Posiadamy wszystkie wymagane certyfikaty i uprawnienia branżowe.",
  },
  {
    icon: faCompassDrafting,
    title: "Projektowanie",
    description:
      "Oferujemy kompleksowe projektowanie 3D przed rozpoczęciem realizacji.",
  },
];

const TrustCard = ({
  item,
  isActive,
  onHover,
  onLeave,
}: {
  item: TrustItem;
  isActive: boolean;
  onHover: () => void;
  onLeave: () => void;
}) => {
  const spring = useSpring({
    flex: isActive ? 2.4 : 1,
    background: isActive ? "var(--color-primary)" : "rgba(255,255,255,0)",
    config: { mass: 1, tension: 200, friction: 26 },
  });

  const headerSpring = useSpring({
    opacity: isActive ? 0 : 1,
    y: isActive ? -16 : 0,
    config: { mass: 1, tension: 200, friction: 22 },
  });

  const descriptionSpring = useSpring({
    opacity: isActive ? 1 : 0,
    y: isActive ? 0 : 16,
    delay: isActive ? 80 : 0,
    config: { mass: 1, tension: 210, friction: 24 },
  });

  const backgroundIconSpring = useSpring({
    opacity: isActive ? 0.35 : 0,
    scale: isActive ? 1 : 0.9,
    delay: isActive ? 160 : 0,
    config: { mass: 1, tension: 180, friction: 22 },
  });

  return (
    <AnimatedDiv
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      style={{
        flex: spring.flex,
        backgroundColor: spring.background,
      }}
      className="relative overflow-hidden flex min-h-[320px] cursor-pointer items-center justify-center rounded-2xl border border-white/20 p-6 transition-shadow duration-300 md:min-h-[380px]"
    >
      {/* Large background icon + label on hover */}
      <AnimatedDiv
        style={{
          opacity: backgroundIconSpring.opacity,
          transform: backgroundIconSpring.scale.to((v) => `scale(${v})`),
        }}
        className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center"
      >
        <FontAwesomeIcon
          icon={item.icon}
          className="mb-4 text-[120px] text-black/15"
        />
        <p className="text-xs uppercase tracking-[0.35em] text-black/15">
          {item.title}
        </p>
      </AnimatedDiv>

      {/* Icon and short title at the top */}
      <AnimatedDiv
        style={{
          opacity: headerSpring.opacity,
          transform: headerSpring.y.to((v) => `translateY(${v}px)`),
        }}
        className="text-center"
      >
        <div className="mb-4 flex justify-center">
          <FontAwesomeIcon
            icon={item.icon}
            className={`text-4xl transition-colors duration-300 ${
              isActive ? "text-black" : "text-white"
            }`}
          />
        </div>
        <p
          className={`text-xs font-light uppercase tracking-[0.25em] transition-colors duration-300 ${
            isActive ? "text-black/70" : "text-white/70"
          }`}
        >
          {item.title}
        </p>
      </AnimatedDiv>

      {/* Description centered in the card on hover */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <AnimatedP
          style={{
            opacity: descriptionSpring.opacity,
            transform: descriptionSpring.y.to((v) => `translateY(${v}px)`),
          }}
          className="max-w-[14rem] text-center text-sm leading-relaxed text-black/80 md:text-base"
        >
          {item.description}
        </AnimatedP>
      </div>
    </AnimatedDiv>
  );
};

const TrustSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const mobileSwiperRef = useRef<SwiperType | null>(null);
  const total = items.length;

  return (
    <section
      aria-labelledby="trust-heading"
      className="relative z-10 overflow-hidden py-16 md:py-24 lg:py-28"
    >
      <div className="container">
        <div className="mb-12 text-center md:mb-16">
          <h2
            id="trust-heading"
            className="text-3xl font-semibold text-white sm:text-4xl md:text-5xl"
            style={{ fontFamily: '"Besley", "Times New Roman", serif' }}
          >
            Pewność i{" "}
            <em className="italic text-primary">bezpieczeństwo</em>.
          </h2>
        </div>
        {/* Mobile: swiper with single card */}
        <div className="md:hidden">
          <div className="relative -mx-4 px-4">
            <Swiper
              modules={[Pagination, A11y]}
              slidesPerView={1.15}
              spaceBetween={16}
              centeredSlides={true}
              pagination={false}
              onSwiper={(swiper) => {
                mobileSwiperRef.current = swiper;
              }}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              className="!overflow-visible"
            >
              {items.map((item) => (
                <SwiperSlide key={item.title}>
                  <div className="flex min-h-[260px] flex-col items-center justify-center rounded-none border border-white/20 bg-white/5 p-8 text-center">
                    <FontAwesomeIcon
                      icon={item.icon}
                      className="mb-4 text-4xl text-primary"
                    />
                    <p className="mb-3 text-xs font-light uppercase tracking-[0.25em] text-white/80">
                      {item.title}
                    </p>
                    <p className="text-sm leading-relaxed text-white/70">
                      {item.description}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {/* Mobile pagination bars - same style as case studies */}
          <div className="mt-6 flex justify-center gap-2">
            {Array.from({ length: total }).map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Przejdź do elementu ${i + 1}`}
                onClick={() => mobileSwiperRef.current?.slideTo(i)}
                className={`block transition-all duration-300 ${
                  i === activeIndex
                    ? "h-[3px] w-6 bg-primary"
                    : "h-[3px] w-3 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop: interactive stretch cards */}
        <div className="mx-auto hidden max-w-6xl gap-3 md:flex md:gap-4">
          {items.map((item, i) => (
            <TrustCard
              key={item.title}
              item={item}
              isActive={activeIndex === i}
              onHover={() => setActiveIndex(i)}
              onLeave={() => setActiveIndex(null)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
