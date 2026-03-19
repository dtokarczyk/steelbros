import type { Metadata } from "next";
import Link from "next/link";
import IntroSection from "@/components/sections/IntroSection";

const EMAIL = "kontakt@steelbros.pl";
const PHONE_DISPLAY = "+48 123 456 789";
const PHONE_HREF = "tel:+48123456789";

export const metadata: Metadata = {
  title: "Kontakt — Steel Bros.",
  description:
    "Skontaktuj się ze Steel Bros. — konstrukcje stalowe na wymiar. Telefon, e-mail i podstawowe informacje o firmie.",
};

export default function KontaktPage() {
  return (
    <>
      <div className="flex min-h-[50vh] flex-col justify-center pt-8 pb-12 md:pb-16">
        <IntroSection
          label="Kontakt"
          paragraph="Masz pytanie lub gotowy pomysł na projekt? Napisz lub zadzwoń — wracamy z odpowiedzią tak szybko, jak to możliwe."
          names="Marcel & Mikołaj"
        />
      </div>

      <section
        aria-labelledby="company-info-heading"
        className="relative overflow-hidden border-t border-primary/20 bg-background py-16 md:py-24"
      >
        <div className="pointer-events-none absolute -left-32 top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />

        <div className="container relative px-4">
          <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2
                id="company-info-heading"
                className="text-2xl font-bold text-white sm:text-3xl"
                style={{ fontFamily: '"Besley", "Times New Roman", serif' }}
              >
                Steel Bros.
              </h2>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary [font-variant:small-caps]">
                Konstrukcje stalowe na miarę
              </p>
              <p className="mt-6 text-base leading-relaxed text-white/70">
                Jesteśmy rodzinnym zespołem — od pierwszego kontaktu po montaż
                rozmawiasz bezpośrednio z osobami odpowiedzialnymi za projekt i
                wykonanie. Projektujemy i budujemy w Polsce: od elementów do
                domu i ogrodu, przez małą architekturę miejską, po konstrukcje
                dla firm i przemysłu.
              </p>
              <p className="mt-4 text-sm text-white/50">
                Wizyty w warsztacie lub u klienta ustalamy indywidualnie, po
                wcześniejszym umówieniu terminu.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <a
                href={PHONE_HREF}
                className="group rounded-lg border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-primary/40 hover:bg-white/[0.06]"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-white/50">
                  Telefon
                </p>
                <p className="mt-2 text-lg font-semibold text-white transition-colors group-hover:text-primary">
                  {PHONE_DISPLAY}
                </p>
              </a>

              <a
                href={`mailto:${EMAIL}`}
                className="group rounded-lg border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-primary/40 hover:bg-white/[0.06]"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-white/50">
                  E-mail
                </p>
                <p className="mt-2 text-lg font-semibold text-white transition-colors group-hover:text-primary">
                  {EMAIL}
                </p>
              </a>

              <div className="rounded-lg border border-white/10 bg-white/[0.03] p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-white/50">
                  Godziny kontaktu
                </p>
                <p className="mt-2 text-base text-white/80">
                  Poniedziałek–piątek: 9:00–17:00
                </p>
                <p className="mt-1 text-sm text-white/50">
                  Poza godzinami pracy odpowiadamy mailowo w kolejnym dniu
                  roboczym.
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-14 max-w-5xl border-t border-white/10 pt-10 text-center">
            <p className="text-sm text-white/60">
              Szukasz konkretnej usługi?{" "}
              <Link
                href="/oferta"
                className="font-medium text-primary underline-offset-4 hover:underline"
              >
                Zobacz ofertę
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
