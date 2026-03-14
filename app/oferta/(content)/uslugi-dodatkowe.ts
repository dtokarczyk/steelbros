import { ServicePageContent } from "./types";

export const additionalServicesContent: ServicePageContent = {
  ServicesHero: {
    title: "Kompleksowa obróbka stali i montaż",
    subtitle: "Od projektu CAD, przez cięcie, spawanie i malowanie, aż po instalację u klienta."
  },
  TextSplitSection: {
    title: "Twój kompleksowy partner w świecie metali",
    body: "W SteelBros nie tylko tworzymy gotowe produkty – zapewniamy pełen łańcuch technologiczny obróbki metalu. Nasi inżynierowie przygotują dla Ciebie precyzyjne projekty CAD/CAM i przeprowadzą dokładne pomiary u klienta. Nasz nowoczesny park maszynowy pozwala na precyzyjne cięcie, gięcie i toczenie stali. Oferujemy też profesjonalne zabiegi antykorozyjne: piaskowanie, cynkowanie i malowanie proszkowe. Zwieńczeniem procesu jest nasz doświadczony zespół monterski, oferujący także mobilne usługi spawalnicze u klienta."
  },
  ServicesList: {
    eyebrow: "Park maszynowy i zaplecze",
    title: "Nasze usługi technologiczne",
    description: "Optymalizuj koszty produkcyjne, powierzając nam poszczególne etapy obróbki stali.",
    services: [
      {
        title: "Projektowanie CAD i pomiary",
        imageSrc: "/images/projektowanie-cad.jpg",
        imageAlt: "Inżynier pracujący przy modelu CAD 3D"
      },
      {
        title: "Piaskowanie i lakiernictwo proszkowe",
        imageSrc: "/images/malowanie-proszkowe.jpg",
        imageAlt: "Elementy stalowe w lakierni proszkowej"
      },
      {
        title: "Cięcie, gięcie i obróbka CNC",
        imageSrc: "/images/ciecie-blach.jpg",
        imageAlt: "Precyzyjne gięcie blach na prasie krawędziowej"
      },
      {
        title: "Montaż i spawanie mobilne",
        imageSrc: "/images/spawanie-w-terenie.jpg",
        imageAlt: "Spawacz wykonujący pracę u klienta"
      }
    ]
  },
  FaqSection: {
    title: "Często zadawane pytania",
    faqs: [
      {
        question: "Czy przyjmujecie mniejsze zlecenia na samo malowanie proszkowe lub piaskowanie?",
        answer: "Tak, świadczymy usługi podwykonawcze. Możesz dostarczyć nam swoje elementy, a my je oczyścimy i pomalujemy na wybrany kolor z palety RAL."
      },
      {
        question: "Czy zajmujecie się renowacją starych konstrukcji stalowych?",
        answer: "Oczywiście. Przeprowadzamy profesjonalną renowację starych balustrad, bram czy ogrodzeń – od usunięcia starej farby (piaskowanie), po nałożenie nowych powłok."
      }
    ]
  },
  ContactWithUs: {
    title: "Masz projekt lub materiał do obróbki?",
    description: "Zapraszamy do współpracy warsztaty, firmy z branży i klientów indywidualnych. Daj znać, w czym możemy Ci pomóc.",
    buttonText: "Zleć usługę",
    buttonLink: "/kontakt"
  }
}