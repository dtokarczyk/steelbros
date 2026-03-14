"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { useSpring } from "@react-spring/web";
import { A } from "@/lib/animated";

type ServiceCase = {
  title: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
};

const serviceCases: ServiceCase[] = [
  {
    title: "Balustrady zewnętrzne i wewnętrzne",
    imageSrc:
      "/images/u2844336958_Small_home-made_but_professional_welding_workshop_t_e4a3a6de-058a-4ad2-83ab-003f1ce20499.png",
    imageAlt: "Przykładowe realizacje balustrad stalowych",
  },
  {
    title: "Bramy i ogrodzenia kute",
    imageSrc:
      "/images/u2844336958_metal_fabrication_workshop_bokeh_effect_small_firm__7ce15e32-cb13-4f94-9cb5-73e806319454.png",
    imageAlt: "Warsztat przy produkcji bram i ogrodzeń kutych",
  },
  {
    title: "Pergole, zadaszenia, wiaty",
    imageSrc:
      "/images/u2844336958_Small_home-made_but_professional_welding_workshop_t_e4a3a6de-058a-4ad2-83ab-003f1ce20499.png",
    imageAlt: "Konstrukcje stalowe pergoli i zadaszeń",
  },
  {
    title: "Carporty",
    imageSrc:
      "/images/u2844336958_metal_fabrication_workshop_bokeh_effect_small_firm__7ce15e32-cb13-4f94-9cb5-73e806319454.png",
    imageAlt: "Stalowa konstrukcja carportu",
  },
  {
    title: "Schody",
    imageSrc:
      "/images/u2844336958_Small_home-made_but_professional_welding_workshop_t_e4a3a6de-058a-4ad2-83ab-003f1ce20499.png",
    imageAlt: "Schody stalowe w realizacji",
  },
  {
    title: "Drzwi garażowe / bramy",
    imageSrc:
      "/images/u2844336958_metal_fabrication_workshop_bokeh_effect_small_firm__7ce15e32-cb13-4f94-9cb5-73e806319454.png",
    imageAlt: "Produkcja stalowych drzwi garażowych",
  },
  {
    title: "Donice stalowe / corten",
    imageSrc:
      "/images/u2844336958_Small_home-made_but_professional_welding_workshop_t_e4a3a6de-058a-4ad2-83ab-003f1ce20499.png",
    imageAlt: "Donice stalowe w ogrodzie",
  },
  {
    title: "Paleniska ogrodowe",
    imageSrc:
      "/images/u2844336958_metal_fabrication_workshop_bokeh_effect_small_firm__7ce15e32-cb13-4f94-9cb5-73e806319454.png",
    imageAlt: "Stalowe palenisko ogrodowe",
  },
  {
    title: "Grille ogrodowe stalowe",
    imageSrc:
      "/images/u2844336958_Small_home-made_but_professional_welding_workshop_t_e4a3a6de-058a-4ad2-83ab-003f1ce20499.png",
    imageAlt: "Grill ogrodowy ze stali",
  },
  {
    title:
      "Kuchnie ogrodowe stalowe (produkt o dużym potencjale sprzedażowym)",
    imageSrc:
      "/images/u2844336958_metal_fabrication_workshop_bokeh_effect_small_firm__7ce15e32-cb13-4f94-9cb5-73e806319454.png",
    imageAlt: "Stalowa kuchnia ogrodowa",
  },
  {
    title: "Stojaki na drewno kominkowe",
    imageSrc:
      "/images/u2844336958_Small_home-made_but_professional_welding_workshop_t_e4a3a6de-058a-4ad2-83ab-003f1ce20499.png",
    imageAlt: "Stojak na drewno kominkowe",
  },
  {
    title: "Stojaki rowerowe",
    imageSrc:
      "/images/u2844336958_metal_fabrication_workshop_bokeh_effect_small_firm__7ce15e32-cb13-4f94-9cb5-73e806319454.png",
    imageAlt: "Stalowe stojaki rowerowe",
  },
  {
    title: "Huśtawki ogrodowe stalowe",
    imageSrc:
      "/images/u2844336958_Small_home-made_but_professional_welding_workshop_t_e4a3a6de-058a-4ad2-83ab-003f1ce20499.png",
    imageAlt: "Huśtawka ogrodowa ze stali",
  },
  {
    title: "Altany stalowe",
    imageSrc:
      "/images/u2844336958_metal_fabrication_workshop_bokeh_effect_small_firm__7ce15e32-cb13-4f94-9cb5-73e806319454.png",
    imageAlt: "Altana stalowa w ogrodzie",
  },
  {
    title: "Ogrodzenia panelowe / nowoczesne",
    imageSrc:
      "/images/u2844336958_Small_home-made_but_professional_welding_workshop_t_e4a3a6de-058a-4ad2-83ab-003f1ce20499.png",
    imageAlt: "Nowoczesne ogrodzenie panelowe",
  },
  {
    title: "Bramy przesuwne automatyczne",
    imageSrc:
      "/images/u2844336958_metal_fabrication_workshop_bokeh_effect_small_firm__7ce15e32-cb13-4f94-9cb5-73e806319454.png",
    imageAlt: "Automatyczna brama przesuwna",
  },
  {
    title: "Zadaszenia nad drzwi",
    imageSrc:
      "/images/u2844336958_Small_home-made_but_professional_welding_workshop_t_e4a3a6de-058a-4ad2-83ab-003f1ce20499.png",
    imageAlt: "Stalowe zadaszenie nad wejściem",
  },
  {
    title:
      "Pergole nowoczesne (produkt o największym potencjale sprzedażowym)",
    imageSrc:
      "/images/u2844336958_metal_fabrication_workshop_bokeh_effect_small_firm__7ce15e32-cb13-4f94-9cb5-73e806319454.png",
    imageAlt: "Nowoczesna stalowa pergola",
  },
];

function getScrollProgress(el: HTMLElement): number {
  const rect = el.getBoundingClientRect();
  const windowHeight = window.innerHeight;
  const start = windowHeight;
  const end = rect.height * 0.3;
  const raw = (start - rect.top) / (start - end);
  return Math.min(Math.max(raw, 0), 1);
}

type ServiceCardProps = ServiceCase;

const ServiceCard = ({ title, imageSrc, imageAlt }: ServiceCardProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const [springs, api] = useSpring(() => ({
    from: { opacity: 0, y: 60 },
    config: { mass: 1, tension: 160, friction: 28 },
  }));

  useEffect(() => {
    const update = () => {
      if (!ref.current) return;
      const progress = getScrollProgress(ref.current);
      api.start({
        opacity: progress,
        y: (1 - progress) * 60,
        immediate: false,
      });
    };

    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, [api]);

  return (
    <A.div
      ref={ref}
      style={springs}
      className="group flex flex-col overflow-hidden border border-white/10 bg-white/[0.03]"
    >
      <div className="relative aspect-[1/1] w-full overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="px-4 pb-4 pt-3">
        <p className="text-base font-semibold text-white sm:text-lg">
          {title}
        </p>
      </div>
    </A.div>
  );
};

const ServicesList = () => {
  return (
    <section id="services-more" className="bg-background py-16 md:py-20 lg:py-24">
      <div className="container px-4">
        <div className="mx-auto flex flex-col gap-4 text-left lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.25em] text-white/50 [font-variant:small-caps]">
              Nasze usługi
            </p>
            <h2 className="mb-2 text-2xl font-semibold text-white sm:text-3xl">
              Przykłady regularizacji
            </h2>
            <p className="text-sm leading-relaxed text-white/60 sm:text-base">
              Kilka konkretnych sytuacji, w których interwencja architektoniczna i regularizacja umożliwiła
              zabezpieczenie nieruchomości, optymalizację jej codziennego użytkowania i wzrost wartości majątku.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {serviceCases.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;

