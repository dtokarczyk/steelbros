import { ServicePageContent } from "./types";

export const additionalServicesContent: ServicePageContent = {
  ServicesHero: {
    title: "Kompleksowa obróbka stali i montaż",
    subtitle: "Od projektu CAD, przez cięcie, spawanie i malowanie, aż po instalację u klienta.",
    imageSrc: '/images/oferta/uslugi-dodatkowe/u2844336958_CAD_design_--ar_32_--raw_--v_7_a69434e2-a7c5-4d41-86f1-d318cc652dd8.png'
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
        imageSrc: "/images/oferta/uslugi-dodatkowe/u2844336958_CAD_design_--ar_32_--raw_--v_7_a69434e2-a7c5-4d41-86f1-d318cc652dd8.png",
        imageAlt: "Inżynier pracujący przy modelu CAD 3D"
      },
      {
        title: "Piaskowanie i lakiernictwo proszkowe",
        imageSrc: "/images/oferta/uslugi-dodatkowe/u2844336958_Sandblasting_and_powder_coating_--ar_32_--raw_--v_da6f2959-1a96-4ece-9d27-a5db791425fa_2.png",
        imageAlt: "Elementy stalowe w lakierni proszkowej"
      },
      {
        title: "Cięcie, gięcie i obróbka CNC",
        imageSrc: "/images/oferta/uslugi-dodatkowe/u2844336958_CNC_machining_--ar_32_--raw_--v_7_5bf787f1-6abd-4bea-9a95-da8fdf95f036_0.png",
        imageAlt: "Precyzyjne gięcie blach na prasie krawędziowej"
      },
      {
        title: "Montaż i spawanie mobilne",
        imageSrc: "/images/oferta/uslugi-dodatkowe/u2844336958_welding_--ar_32_--raw_--v_7_accf8f95-9f31-4aa7-8a81-7999514c33cf_0.png",
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
      },
      {
        question: "Czy mogę zlecić tylko jeden etap obróbki, np. samo cięcie lub gięcie?",
        answer: "Tak, realizujemy zarówno kompleksowe projekty, jak i pojedyncze etapy produkcji. Możesz zlecić wyłącznie wybraną usługę, np. cięcie, gięcie lub obróbkę CNC."
      },
      {
        question: "Czy wykonujecie projekty na podstawie dostarczonej dokumentacji?",
        answer: "Tak, pracujemy zarówno na własnych projektach, jak i na dokumentacji dostarczonej przez klienta. W razie potrzeby możemy ją również zoptymalizować."
      },
      {
        question: "Czy oferujecie transport elementów do i od klienta?",
        answer: "Tak, w zależności od skali zlecenia możemy zorganizować transport elementów oraz gotowych konstrukcji do wskazanego miejsca."
      },
      {
        question: "Jakie grubości i typy materiałów jesteście w stanie obrabiać?",
        answer: "Dysponujemy zapleczem umożliwiającym obróbkę różnych typów stali i szerokiego zakresu grubości. Szczegóły dobieramy indywidualnie do projektu."
      },
      {
        question: "Czy wykonujecie usługi dla klientów indywidualnych i firm?",
        answer: "Tak, współpracujemy zarówno z klientami indywidualnymi, jak i firmami produkcyjnymi oraz warsztatami jako podwykonawca."
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