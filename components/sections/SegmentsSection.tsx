import React from "react";

const segments = [
  {
    title: "Dom i ogród",
    subtitle: "Pergole, kuchnie ogrodowe i detale stalowe dla Twojej przestrzeni.",
  },
  {
    title: "Segment nowoczesnych wnętrz",
    subtitle: "Drzwi i ścianki loftowe, detale stalowe do mieszkań i biur.",
  },
  {
    title: "Usługi dla firm i przemysłu",
    subtitle: "Rozwiązania stalowe dla zakładów, magazynów i produkcji.",
  },
  {
    title: "Małe konstrukcje budowlane",
    subtitle: "Schody, podesty, balkony i inne konstrukcje uzupełniające.",
  },
  {
    title: "Campery",
    subtitle: "Zabudowy off-road, moduły do camperów i pojazdów specjalnych.",
  },
  {
    title: "Architektura miejska",
    subtitle: "Mała architektura miejska – ławki, zadaszenia, detale.",
  },
  {
    title: "Usługi dodatkowe",
    subtitle: "Cięcie, gięcie, spawanie i inne obróbki stali na zamówienie.",
  },
];

const SegmentsSection = () => {
  return (
    <section className="relative z-10 py-12 md:py-16 lg:py-20">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          {segments.map((segment) => (
            <div
              key={segment.title}
              className="w-full px-4 md:w-1/2 lg:w-1/3 xl:w-1/4 mb-6"
            >
              <div
                className="relative overflow-hidden rounded-md bg-dark/40 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/images/about/about-image.svg')",
                }}
              >
                <div className="relative z-10 flex min-h-[180px] flex-col justify-end bg-gradient-to-t from-background/90 via-background/40 to-transparent p-5">
                  <h2 className="mb-1 text-lg font-semibold text-foreground">
                    {segment.title}
                  </h2>
                  <p className="text-sm text-body-color">{segment.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SegmentsSection;

