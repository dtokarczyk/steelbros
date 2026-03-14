import { ServicePageContent } from "./types";

export const industryContent: ServicePageContent = {
  ServicesHero: {
    title: "Konstrukcje stalowe dla przemysłu",
    subtitle: "Niezawodne, bezpieczne i certyfikowane rozwiązania dla magazynów i hal produkcyjnych."
  },
  TextSplitSection: {
    title: "Solidne fundamenty dla Twojego biznesu",
    body: "W przemyśle nie ma miejsca na kompromisy w kwestii bezpieczeństwa i wytrzymałości. SteelBros dostarcza profesjonalne rozwiązania stalowe dla logistyki, magazynów i zakładów produkcyjnych. Produkujemy m.in. podesty techniczne, mocne odbojnice magazynowe, barierki przemysłowe, a także specjalistyczne ramy pod maszyny i wózki transportowe. Zapewniamy precyzję wymiarową i pełną zgodność z normami BHP. Optymalizujemy projekty pod kątem maksymalnej użyteczności w trudnych warunkach pracy."
  },
  ServicesList: {
    eyebrow: "Oferta B2B",
    title: "Wsparcie dla infrastruktury firmowej",
    description: "Nasze konstrukcje poprawiają logistykę, chronią mienie i zapewniają bezpieczeństwo pracownikom. Zobacz, co wykonujemy dla biznesu.",
    services: [
      {
        title: "Podesty i barierki techniczne",
        imageSrc: "/images/podesty-techniczne.jpg",
        imageAlt: "Stalowy podest techniczny z barierkami"
      },
      {
        title: "Odbojnice magazynowe",
        imageSrc: "/images/odbojnice.jpg",
        imageAlt: "Odbojnice stalowe w magazynie"
      },
      {
        title: "Wózki i stojaki transportowe",
        imageSrc: "/images/wozki-transportowe.jpg",
        imageAlt: "Wózki transportowe na wymiar"
      },
      {
        title: "Konstrukcje i ramy pod maszyny",
        imageSrc: "/images/ramy-maszyny.jpg",
        imageAlt: "Stalowa rama wsporcza pod urządzenia produkcyjne"
      }
    ]
  },
  FaqSection: {
    title: "Często zadawane pytania",
    faqs: [
      {
        question: "Czy wykonujecie zamówienia seryjne np. na wózki transportowe?",
        answer: "Tak, przyjmujemy zlecenia zarówno na pojedyncze, specjalistyczne konstrukcje, jak i na seryjną produkcję koszy, wózków czy stojaków."
      },
      {
        question: "Jakie powłoki antykorozyjne stosujecie w elementach przemysłowych?",
        answer: "Standardowo stosujemy cynkowanie ogniowe lub galwaniczne oraz malowanie proszkowe, także na jaskrawe kolory ostrzegawcze z palety RAL (np. żółty dla odbojnic)."
      }
    ]
  },
  ContactWithUs: {
    title: "Skonsultuj projekt z naszym inżynierem",
    description: "Potrzebujesz solidnego wykonawcy infrastruktury technicznej dla swojej hali? Skontaktuj się i omówmy szczegóły zlecenia.",
    buttonText: "Dział B2B",
    buttonLink: "/kontakt"
  }
}