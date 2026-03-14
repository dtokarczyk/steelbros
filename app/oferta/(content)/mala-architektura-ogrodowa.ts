import { ServicePageContent } from "./types";

export const urbanArchitectureContent: ServicePageContent = {
  ServicesHero: {
    title: "Mała architektura miejska",
    subtitle: "Estetyczne, wandaloodporne i funkcjonalne elementy przestrzeni miejskiej i parkowej."
  },
  TextSplitSection: {
    title: "Współtworzymy przyjazne przestrzenie dla gmin i osiedli",
    body: "Odpowiednio zaprojektowana architektura miejska to klucz do komfortu mieszkańców. W ofercie SteelBros znajdują się wysoce wytrzymałe ławki parkowe, funkcjonalne wiaty rowerowe, kosze na śmieci oraz pergole stref relaksu, idealne na nowoczesne osiedla deweloperskie i tereny rekreacyjne. Pamiętamy również o infrastrukturze drogowej, produkując estetyczne słupki parkingowe i barierki. Kładziemy duży nacisk na odporność naszych produktów na akty wandalizmu oraz zmienne warunki pogodowe."
  },
  ServicesList: {
    eyebrow: "Dla gmin i deweloperów",
    title: "Infrastruktura publiczna",
    description: "Wytrzymałe i miłe dla oka realizacje stalowe, które wpisują się w nowoczesną urbanistykę.",
    services: [
      {
        title: "Ławki i kosze na śmieci",
        imageSrc: "/images/lawki-miejskie.jpg",
        imageAlt: "Nowoczesna ławka parkowa na osiedlu"
      },
      {
        title: "Wiaty i stojaki rowerowe",
        imageSrc: "/images/wiaty-rowerowe.jpg",
        imageAlt: "Stalowa wiata rowerowa"
      },
      {
        title: "Barierki i słupki parkingowe",
        imageSrc: "/images/slupki-parkingowe.jpg",
        imageAlt: "Metalowe słupki oddzielające chodnik"
      },
      {
        title: "Pergole parkowe",
        imageSrc: "/images/pergole-parkowe.jpg",
        imageAlt: "Stalowa pergola obrośnięta zielenią"
      }
    ]
  },
  FaqSection: {
    title: "Często zadawane pytania",
    faqs: [
      {
        question: "Czy realizujecie zlecenia z przetargów publicznych?",
        answer: "Tak, chętnie podejmujemy współpracę z jednostkami samorządowymi, miastami i spółdzielniami mieszkaniowymi jako podwykonawcy lub bezpośredni dostawcy."
      },
      {
        question: "Czy możliwe jest zaprojektowanie unikalnej linii mebli miejskich?",
        answer: "Jak najbardziej. Nasz dział projektowy CAD może stworzyć zupełnie nową, dedykowaną kolekcję elementów przestrzeni miejskiej, dopasowaną do tożsamości wizualnej inwestycji."
      }
    ]
  },
  ContactWithUs: {
    title: "Zrealizujmy wspólnie inwestycję",
    description: "Jesteś deweloperem lub zarządcą terenu publicznego? Wyślij nam zapytanie ofertowe, a my przygotujemy wycenę dostawy i montażu architektury.",
    buttonText: "Wyślij zapytanie",
    buttonLink: "/kontakt"
  }
}