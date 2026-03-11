import { ServicesHero } from "@/components/sections";

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />

      <section className="bg-background py-20">
        <div className="container px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-2xl font-semibold text-white sm:text-3xl">
              Co oferujemy
            </h2>
            <p className="text-base leading-relaxed text-white/60">
              Od drobnych napraw po kompleksowe konstrukcje stalowe — nasz
              zespół zapewnia najwyższą jakość wykonania i terminowość
              realizacji.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Spawanie",
                desc: "MIG/MAG, TIG, spawanie stali nierdzewnej i czarnej.",
              },
              {
                title: "Cięcie",
                desc: "Cięcie plazmowe i tlenowe — precyzja do 0,5 mm.",
              },
              {
                title: "Obróbka",
                desc: "Gięcie, walcowanie, wiercenie i frezowanie.",
              },
              {
                title: "Montaż",
                desc: "Konstrukcje stalowe, balustrady, schody, bramy.",
              },
              {
                title: "Projekt",
                desc: "Doradztwo techniczne i przygotowanie dokumentacji.",
              },
              {
                title: "Konserwacja",
                desc: "Malowanie, cynkowanie, zabezpieczenia antykorozyjne.",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="group rounded-lg border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-primary/30"
              >
                <h3 className="mb-2 text-lg font-semibold text-white">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/50">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
