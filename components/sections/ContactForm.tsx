"use client";

import React, { useState, useRef, useEffect } from "react";
import { useSpring } from "@react-spring/web";
import { A } from "@/lib/animated";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const SERVICE_OPTIONS = [
  "Konstrukcje budowlane",
  "Dom i ogród",
  "Mała architektura miejska",
  "Loftowe wnętrza",
  "Campery & off-road",
  "Dla firm i przemysłu",
  "Usługi dodatkowe",
  "Inny temat",
] as const;

interface FormState {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const INITIAL: FormState = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [submitted, setSubmitted] = useState(false);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const fadeIn = useSpring({
    opacity: visible ? 1 : 0,
    y: visible ? 0 : 30,
    config: { tension: 140, friction: 26 },
  });

  const successSpring = useSpring({
    opacity: submitted ? 1 : 0,
    scale: submitted ? 1 : 0.9,
    config: { tension: 200, friction: 22 },
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputBase =
    "w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-white placeholder:text-white/30 outline-none transition-all duration-200 focus:border-primary/50 focus:bg-white/[0.05] focus:ring-1 focus:ring-primary/20";

  return (
    <section
      ref={sectionRef}
      id="contact-form"
      aria-labelledby="form-heading"
      className="relative bg-background py-16 md:py-24"
    >
      <div className="container px-4">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            {/* Left column — form */}
            <A.div
              style={{
                opacity: fadeIn.opacity,
                transform: fadeIn.y.to((v) => `translateY(${v}px)`),
              }}
              className="lg:col-span-3"
            >
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary/70 [font-variant:small-caps]">
                Formularz
              </p>
              <h2
                id="form-heading"
                className="mb-8 text-2xl font-bold text-white sm:text-3xl"
                style={{ fontFamily: '"Besley", "Times New Roman", serif' }}
              >
                Opisz swój pomysł
              </h2>

              {!submitted ? (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                  noValidate
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="cf-name"
                        className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-white/50"
                      >
                        Imię i nazwisko
                      </label>
                      <input
                        id="cf-name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Jan Kowalski"
                        className={inputBase}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="cf-email"
                        className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-white/50"
                      >
                        Adres e-mail
                      </label>
                      <input
                        id="cf-email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="jan@firma.pl"
                        className={inputBase}
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="cf-phone"
                        className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-white/50"
                      >
                        Telefon
                        <span className="ml-1 normal-case tracking-normal text-white/30">
                          (opcjonalnie)
                        </span>
                      </label>
                      <input
                        id="cf-phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+48 123 456 789"
                        className={inputBase}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="cf-service"
                        className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-white/50"
                      >
                        Rodzaj usługi
                      </label>
                      <select
                        id="cf-service"
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className={`${inputBase} appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Cpath%20fill%3D%22%23959CB1%22%20d%3D%22M6%208L1%203h10z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px] bg-[right_16px_center] bg-no-repeat pr-10`}
                      >
                        <option value="" className="bg-background">
                          Wybierz kategorię…
                        </option>
                        {SERVICE_OPTIONS.map((opt) => (
                          <option key={opt} value={opt} className="bg-background">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="cf-message"
                      className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-white/50"
                    >
                      Wiadomość
                    </label>
                    <textarea
                      id="cf-message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Opisz krótko, co chciałbyś zlecić — wymiary, materiał, termin…"
                      className={`${inputBase} resize-y`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="group inline-flex items-center gap-3 border border-primary bg-primary px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-all duration-200 [font-variant:small-caps] hover:bg-primary/90 hover:shadow-[0_0_24px_rgba(192,153,73,0.2)]"
                  >
                    Wyślij wiadomość
                    <FontAwesomeIcon
                      icon={faPaperPlane}
                      className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                    />
                  </button>

                  <p className="text-xs leading-relaxed text-white/30">
                    Odpowiadamy zazwyczaj w ciągu 24 godzin w dni robocze. Twoje
                    dane wykorzystamy wyłącznie do obsługi zapytania.
                  </p>
                </form>
              ) : (
                <A.div
                  style={{
                    opacity: successSpring.opacity,
                    transform: successSpring.scale.to((s) => `scale(${s})`),
                  }}
                  className="flex flex-col items-center rounded-lg border border-primary/20 bg-primary/5 px-8 py-16 text-center"
                >
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="mb-4 text-5xl text-primary"
                  />
                  <h3
                    className="text-2xl font-bold text-white"
                    style={{ fontFamily: '"Besley", "Times New Roman", serif' }}
                  >
                    Dziękujemy!
                  </h3>
                  <p className="mt-3 max-w-md text-base text-white/60">
                    Twoja wiadomość została wysłana. Odezwiemy się najszybciej
                    jak to możliwe — zazwyczaj w ciągu jednego dnia roboczego.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setForm(INITIAL);
                    }}
                    className="mt-6 text-sm font-medium text-primary underline-offset-4 hover:underline"
                  >
                    Wyślij kolejną wiadomość
                  </button>
                </A.div>
              )}
            </A.div>

            {/* Right column — sidebar info */}
            <A.div
              style={{
                opacity: fadeIn.opacity,
                transform: fadeIn.y.to((v) => `translateY(${v}px)`),
              }}
              className="lg:col-span-2"
            >
              <div className="sticky top-32 space-y-6">
                <div className="rounded-lg border border-white/10 bg-white/[0.02] p-6">
                  <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/80">
                    Czego się spodziewać?
                  </h3>
                  <ol className="space-y-4">
                    {[
                      {
                        step: "01",
                        text: "Otrzymasz potwierdzenie odbioru wiadomości na podany e-mail.",
                      },
                      {
                        step: "02",
                        text: "Skontaktujemy się w ciągu 1–2 dni roboczych, żeby omówić szczegóły.",
                      },
                      {
                        step: "03",
                        text: "Przygotujemy wstępną wycenę i harmonogram realizacji.",
                      },
                    ].map(({ step, text }) => (
                      <li key={step} className="flex gap-3">
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-primary/30 text-[10px] font-bold text-primary">
                          {step}
                        </span>
                        <span className="text-sm leading-relaxed text-white/60">
                          {text}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="rounded-lg border border-white/10 bg-white/[0.02] p-6">
                  <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/80">
                    Wolisz rozmowę?
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-white/50">
                    Zadzwoń bezpośrednio — chętnie porozmawiamy o Twoim
                    projekcie i doradzimy najlepsze rozwiązanie.
                  </p>
                  <a
                    href="tel:+48123456789"
                    className="inline-flex items-center gap-2 text-lg font-semibold text-primary transition-colors hover:text-primary/80"
                  >
                    +48 123 456 789
                  </a>
                  <p className="mt-1 text-xs text-white/30">
                    Pon–Pt, 9:00–17:00
                  </p>
                </div>

                <div className="rounded-lg border border-primary/20 bg-primary/[0.04] p-6">
                  <p className="text-sm italic leading-relaxed text-white/60">
                    &ldquo;Każdy projekt zaczynamy od rozmowy. To właśnie
                    Twoja wizja i nasze doświadczenie tworzą razem najlepsze
                    rozwiązania.&rdquo;
                  </p>
                  <p className="mt-3 text-xs font-semibold tracking-wider text-primary/70">
                    — Marcel & Mikołaj, Steel Bros.
                  </p>
                </div>
              </div>
            </A.div>
          </div>
        </div>
      </div>
    </section>
  );
}
