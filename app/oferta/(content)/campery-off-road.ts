import { ServicePageContent } from "./types";

export const camperOffroadContent: ServicePageContent = {
  ServicesHero: {
    title: "Wyposażenie camperów i Off-Road",
    subtitle: "Solidne akcesoria wyprawowe, które przetrwają najtrudniejsze warunki terenowe."
  },
  TextSplitSection: {
    title: "Gotowi na każdą przygodę – zabudowy 4x4",
    body: "Turystyka caravaningowa i off-road stawiają przed sprzętem ogromne wyzwania. SteelBros odpowiada na nie, tworząc wzmacniane akcesoria terenowe i wyposażenie camperów. Projektujemy m.in. bardzo wytrzymałe, a zarazem lekkie bagażniki dachowe, bezpieczne drabinki na tylne drzwi, uchwyty na koła zapasowe czy stelaże pod panele solarne. Budujemy także precyzyjne, stalowe szuflady wyprawowe do bagażników, ułatwiające organizację ekwipunku podczas najdalszych podróży w nieznane."
  },
  ServicesList: {
    eyebrow: "Turystyka i motoryzacja",
    title: "Niezbędnik podróżnika",
    description: "Tworzymy osprzęt terenowy dopasowany bezpośrednio do Twojego modelu auta lub campera – bez kompromisów.",
    services: [
      {
        title: "Bagażniki dachowe i drabinki",
        imageSrc: "/images/bagazniki-offroad.jpg",
        imageAlt: "Bagażnik dachowy na samochodzie terenowym"
      },
      {
        title: "Uchwyty i stelaże na solary",
        imageSrc: "/images/stelaze-camper.jpg",
        imageAlt: "Stelaż pod panele słoneczne na dachu campera"
      },
      {
        title: "Szuflady wyprawowe",
        imageSrc: "/images/szuflady-wyprawowe.jpg",
        imageAlt: "Stalowa zabudowa bagażnika w aucie 4x4"
      },
      {
        title: "Stoły turystyczne na wymiar",
        imageSrc: "/images/stoly-turystyczne.jpg",
        imageAlt: "Kompaktowy stalowy stół wyprawowy"
      }
    ]
  },
  FaqSection: {
    title: "Często zadawane pytania",
    faqs: [
      {
        question: "Czy akcesoria projektujecie pod konkretne auto?",
        answer: "Tak. Ponieważ każde auto jest inne, wykonujemy dokładne pomiary i projektujemy uchwyty czy bagażniki dedykowane bezpośrednio pod montaż w Twoim pojeździe."
      },
      {
        question: "Czy osprzęt off-roadowy jest odpowiednio zabezpieczony?",
        answer: "Używamy specjalistycznych podkładów cynkowych i wytrzymałych farb proszkowych (np. o strukturze 'skórki pomarańczy'), które chronią przed uderzeniami gałęzi i rdzewieniem."
      }
    ]
  },
  ContactWithUs: {
    title: "Przygotuj auto do wyprawy",
    description: "Planujesz budowę campera lub zbroisz auto terenowe? Opowiedz nam o swoich potrzebach, a my zajmiemy się stalową stroną Twojego projektu.",
    buttonText: "Skontaktuj się",
    buttonLink: "/kontakt"
  }
}