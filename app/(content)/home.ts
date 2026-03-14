/**
 * Home page content – keys and types match props passed to section components in app/page.tsx.
 */

import type {
  HeroSectionProps,
  KeywordsSectionProps,
  AboutSectionProps,
  CaseStudyCarouselProps,
  ProcessCircleProps,
  TrustSectionProps,
} from "@/components/sections";

export type HomePageContent = {
  hero: HeroSectionProps;
  keywords?: KeywordsSectionProps;
  about?: AboutSectionProps;
  caseStudyCarousel?: CaseStudyCarouselProps;
  process?: ProcessCircleProps;
  trust?: TrustSectionProps;
};

export const homeContent: HomePageContent = {
  hero: {
    label: "Małe konstrukcje stalowe",
    title: "Konstrukcje stalowe na miarę",
    lead:
      "Rodzinny duet i surowa stal. Od projektu po montaż — budujemy trwałe konstrukcje dla domu, ogrodu i biznesu.",
  },
  about: {
    label: "O nas",
    paragraph:
      "Rodzinny duet i surowa stal. Pracujesz z nami bezpośrednio — od pierwszego projektu po końcowy montaż. Kształtujemy materiał w solidne i piękne konstrukcje, które dopełniają przestrzenie prywatne i biznesowe.",
    names: "Marcel & Mikołaj",
  },
  keywords: {
    rowOne: [
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
    ],
    rowTwo: [
      "Jakość",
      "Precyzja",
      "Detale",
      "Nowoczesne wnętrza",
      "Outdoor",
      "Industrial",
      "Stal i drewno",
      "Custom",
      "Rozwiązania dla firm",
    ],
    ariaLabel: "Słowa kluczowe",
  },
  caseStudyCarousel: {
    title: "Nasze realizacje",
    seeAllLabel: "Zobacz wszystkie",
    realizacjeBasePath: "/realizacje",
    items: [
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
    ],
  },
  process: {
    title: "Nasz proces",
    steps: [
      {
        number: "01",
        title: "Analiza",
        description: "Poznajemy Twoje potrzeby i oceniamy możliwości realizacji.",
        icon: "magnifying-glass",
      },
      {
        number: "02",
        title: "Wycena",
        description: "Przygotowujemy szczegółową ofertę z transparentnym kosztorysem.",
        icon: "calculator",
      },
      {
        number: "03",
        title: "Projektowanie CAD",
        description: "Tworzymy dokumentację techniczną i wizualizacje 3D.",
        icon: "compass-drafting",
      },
      {
        number: "04",
        title: "Produkcja",
        description: "Realizujemy projekt w naszym warsztacie z dbałością o detale.",
        icon: "gears",
      },
      {
        number: "05",
        title: "Montaż",
        description: "Dostarczamy i montujemy konstrukcję na miejscu.",
        icon: "wrench",
      },
      {
        number: "06",
        title: "Wsparcie",
        description: "Zapewniamy gwarancję i serwis po zakończeniu projektu.",
        icon: "headset",
      },
    ],
  },
  trust: {
    title: "Pewność i bezpieczeństwo.",
    items: [
      {
        icon: "shield-halved",
        title: "Gwarancja 24 miesiące",
        description:
          "Każda realizacja objęta jest 24-miesięczną gwarancją na materiały i wykonanie.",
      },
      {
        icon: "umbrella",
        title: "Ubezpieczenie",
        description:
          "Posiadamy pełne ubezpieczenie OC, chroniące Ciebie i Twój projekt na każdym etapie.",
      },
      {
        icon: "handshake-simple",
        title: "Indywidualne podejście",
        description:
          "Pracujemy bezpośrednio z klientem, dopasowując rozwiązania do indywidualnych potrzeb.",
      },
      {
        icon: "certificate",
        title: "Certyfikaty",
        description:
          "Posiadamy wszystkie wymagane certyfikaty i uprawnienia branżowe.",
      },
      {
        icon: "compass-drafting",
        title: "Projektowanie",
        description:
          "Oferujemy kompleksowe projektowanie 3D przed rozpoczęciem realizacji.",
      },
    ],
  },
};
