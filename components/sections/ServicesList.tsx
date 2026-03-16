"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useSpring } from "@react-spring/web";
import { A } from "@/lib/animated";
import Button from "@/components/Button";

export type ServiceCase = {
  title: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
};

export type ServicesListProps = {
  /** Section id for anchor links */
  id?: string;
  /** Small label above the title (e.g. "Nasze usługi") */
  eyebrow?: string;
  /** Main heading */
  title?: string;
  /** Description paragraph below the title */
  description?: string;
  /** List of service cards to display */
  services?: ServiceCase[];
};

/** Default list of service cases (Dom i ogród). Export for reuse or composition. */
export const defaultServiceCases: ServiceCase[] = [
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

type ServiceCardProps = ServiceCase & {
  onAskPrice: () => void;
};

const ServiceCard = ({
  title,
  imageSrc,
  imageAlt,
  onAskPrice,
}: ServiceCardProps) => {
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
      <button type="button" onClick={onAskPrice} className="relative aspect-[1/1] w-full overflow-hidden cursor-pointer">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </button>
      <div className="flex flex-1 flex-col justify-between px-4 pb-4 pt-3">
        <p className="mb-3 text-base text-white sm:text-xl">
          {title}
        </p>
        <Button
          as="button"
          type="button"
          onClick={onAskPrice}
          className="gap-2 px-4 py-2 text-[11px]"
          variant="primary"
        >
          <span className="inline-flex h-4 w-4 items-center justify-center">
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
              <path
                d="M7 6h14l-1.5 9h-13L5 4H2"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="10" cy="19" r="1" fill="currentColor" />
              <circle cx="17" cy="19" r="1" fill="currentColor" />
            </svg>
          </span>
          <span>Zapytaj o cenę</span>
        </Button>
      </div>
    </A.div>
  );
};

const DEFAULT_EYEBROW = "Nasze usługi";
const DEFAULT_TITLE = "Przykłady regularizacji";
const DEFAULT_DESCRIPTION =
  "Kilka konkretnych sytuacji, w których interwencja architektoniczna i regularizacja umożliwiła zabezpieczenie nieruchomości, optymalizację jej codziennego użytkowania i wzrost wartości majątku.";

const ServicesList = ({
  id = "services-more",
  eyebrow = DEFAULT_EYEBROW,
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  services = defaultServiceCases,
}: ServicesListProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [consent, setConsent] = useState(false);

  const handleOpenModal = (serviceTitle: React.ReactNode) => {
    const titleText =
      typeof serviceTitle === "string" ? serviceTitle : "Wybrana usługa";
    setSelectedService(titleText);
    setIsModalVisible(true);
    // Defer state change to ensure transition classes are applied
    requestAnimationFrame(() => {
      setIsModalOpen(true);
    });
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Wait for animation to finish before unmounting
    setTimeout(() => {
      setIsModalVisible(false);
    }, 200);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Form submission logic to be implemented later
  };

  return (
    <section id={id} className="bg-background py-16 md:py-20 lg:py-24">
      <div className="container px-4">
        <div className="mx-auto flex flex-col gap-4 text-left lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.25em] text-white/50 [font-variant:small-caps]">
              {eyebrow}
            </p>
            <h2 className="mb-2 text-2xl font-semibold text-white sm:text-4xl">
              {title}
            </h2>
            <p className="text-sm leading-relaxed text-white/60 sm:text-lg">
              {description}
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard
              key={`${service.imageSrc}-${index}`}
              {...service}
              onAskPrice={() => handleOpenModal(service.title)}
            />
          ))}
        </div>
      </div>

      {isModalVisible && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4 transition-opacity duration-200 ${isModalOpen ? "opacity-100" : "opacity-0"
            }`}
        >
          <div
            className={`w-full max-w-md rounded-xl bg-background p-6 shadow-xl transition-all duration-200 ${isModalOpen ? "scale-100 translate-y-0" : "scale-95 translate-y-2"
              }`}
          >
            <div className="mb-4 flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-white">
                  Zapytaj o cenę
                </h3>
                <p className="mt-2 text-xs text-white/50">
                  Skontaktujemy się z Tobą w ciągu 1 dnia roboczego, aby
                  przedstawić ofertę dopasowaną do Twojego zapytania.
                </p>
              </div>
              <button
                type="button"
                onClick={handleCloseModal}
                className="rounded-full p-2.5 text-white/60 transition hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                aria-label="Zamknij okno"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label
                  htmlFor="service-inquiry-name"
                  className="text-sm font-medium text-white"
                >
                  Imię i nazwisko
                </label>
                <input
                  id="service-inquiry-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-md border border-white/10 bg-transparent px-3 py-2 text-sm text-white outline-none ring-primary/30 placeholder:text-white/30 focus:border-primary focus:ring-2"
                  placeholder="Wpisz swoje imię i nazwisko"
                  autoComplete="name"
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="service-inquiry-email"
                  className="text-sm font-medium text-white"
                >
                  Adres e-mail
                </label>
                <input
                  id="service-inquiry-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-md border border-white/10 bg-transparent px-3 py-2 text-sm text-white outline-none ring-primary/30 placeholder:text-white/30 focus:border-primary focus:ring-2"
                  placeholder="Wpisz swój adres e-mail"
                  autoComplete="email"
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="service-inquiry-phone"
                  className="text-sm font-medium text-white"
                >
                  Numer telefonu
                </label>
                <input
                  id="service-inquiry-phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full rounded-md border border-white/10 bg-transparent px-3 py-2 text-sm text-white outline-none ring-primary/30 placeholder:text-white/30 focus:border-primary focus:ring-2"
                  placeholder="Wpisz swój numer telefonu"
                  autoComplete="tel"
                />
              </div>

              <label className="flex items-start gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-0.5 h-4 w-4 shrink-0 accent-primary"
                  required
                />
                <span className="text-[11px] leading-relaxed text-white/50">
                  Wyrażam zgodę na przetwarzanie moich danych osobowych przez
                  SteelBros w celu odpowiedzi na zapytanie ofertowe, zgodnie z
                  art.&nbsp;6 ust.&nbsp;1 lit.&nbsp;a Rozporządzenia Parlamentu
                  Europejskiego i Rady (UE) 2016/679 (RODO). Zgoda jest
                  dobrowolna i może być wycofana w dowolnym momencie.
                </span>
              </label>

              <button
                type="submit"
                disabled={!consent}
                className="mt-2 inline-flex w-full items-center justify-center rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-40 disabled:pointer-events-none"
              >
                Wyślij
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default ServicesList;

