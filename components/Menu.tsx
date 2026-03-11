"use client";

import React, { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import { useSpring, useTrail, config } from "@react-spring/web";
import { A } from "@/lib/animated";

const NAV_ITEMS = [
  { label: "O nas", href: "#about" },
  { label: "Oferta", href: "#segments" },
  { label: "Realizacje", href: "#realizacje" },
  { label: "Kontakt", href: "#kontakt" },
];

const SECONDARY_ITEMS = [
  { label: "Wycena", href: "#wycena" },
  { label: "FAQ", href: "#faq" },
];

export default function Menu() {
  const [open, setOpen] = useState(false);

  const toggle = useCallback(() => setOpen((o) => !o), []);
  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const backdropSpring = useSpring({
    opacity: open ? 1 : 0,
    config: { tension: 280, friction: 30 },
  });

  const panelSpring = useSpring({
    clipPath: open
      ? "inset(0% 0% 0% 0%)"
      : "inset(0% 30% 86% 30%)",
    opacity: open ? 1 : 0,
    config: open
      ? { tension: 170, friction: 24 }
      : { tension: 260, friction: 28 },
  });

  const navTrail = useTrail(NAV_ITEMS.length, {
    opacity: open ? 1 : 0,
    y: open ? 0 : -30,
    config: { mass: 1, tension: 200, friction: 26 },
    delay: open ? 200 : 0,
  });

  const secondaryTrail = useTrail(SECONDARY_ITEMS.length, {
    opacity: open ? 1 : 0,
    y: open ? 0 : -20,
    config: { mass: 1, tension: 200, friction: 26 },
    delay: open ? 400 : 0,
  });

  const contactSpring = useSpring({
    opacity: open ? 1 : 0,
    y: open ? 0 : -15,
    config: config.gentle,
    delay: open ? 500 : 0,
  });

  const ctaSpring = useSpring({
    opacity: open ? 1 : 0,
    y: open ? 0 : -20,
    scale: open ? 1 : 0.95,
    config: { tension: 200, friction: 24 },
    delay: open ? 600 : 0,
  });

  const closeSpring = useSpring({
    opacity: open ? 1 : 0,
    rotate: open ? 0 : 90,
    scale: open ? 1 : 0.5,
    config: { tension: 200, friction: 20 },
    delay: open ? 650 : 0,
  });

  // Top bar hides when overlay opens
  const barSpring = useSpring({
    opacity: open ? 0 : 1,
    config: { tension: 300, friction: 30 },
  });

  const handleNavClick = () => {
    close();
  };

  return (
    <>
      {/* Fixed top bar */}
      <div
        style={{ pointerEvents: open ? "none" : "auto" }}
        className="fixed top-0 inset-x-0 z-50 px-4 pt-4 md:pt-5"
      >
        <div className="flex items-center gap-3 md:w-fit md:mx-auto">
          <A.div
            style={{ opacity: barSpring.opacity }}
            className="flex flex-1 md:flex-initial items-center justify-between md:justify-start gap-6 bg-black/80 backdrop-blur-md border border-white/10 px-5 py-3 shadow-lg shadow-black/30"
          >
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <span
                className="text-[22px] font-normal text-white"
                style={{ fontFamily: '"Besley", "Times New Roman", serif' }}
              >
                Steel Bros<span className="text-primary">.</span>
              </span>
            </Link>

            {/* Menu button */}
            <button
              onClick={toggle}
              className="text-[13px] font-medium uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors duration-200"
              aria-label="Open menu"
            >
              Menu
            </button>
          </A.div>

          <A.a
            href="tel:+48123456789"
            style={{ opacity: barSpring.opacity }}
            className="flex items-center justify-center w-[46px] h-[46px] bg-primary/80 backdrop-blur-md text-black shadow-lg shadow-black/30 hover:bg-primary/90 transition-colors duration-200"
            aria-label="Zadzwoń"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </A.a>
        </div>
      </div>

      {/* Overlay backdrop */}
      <A.div
        style={{
          opacity: backdropSpring.opacity,
          pointerEvents: open ? "auto" : "none",
        }}
        className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
        onClick={close}
      />

      {/* Menu panel — expands from top bar */}
      <A.div
        style={{
          pointerEvents: open ? "auto" : "none",
        }}
        className="fixed inset-x-0 top-0 z-[70] flex flex-col items-center"
      >
        <A.div
          style={{
            opacity: panelSpring.opacity,
            clipPath: panelSpring.clipPath,
          }}
          className="mx-4 mt-4 w-full max-w-3xl bg-[#1a1a1a]/80 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50 overflow-hidden"
        >
          <div className="px-8 pt-10 pb-8">
            {/* Menu label */}
            <A.p
              style={{
                opacity: navTrail[0]?.opacity ?? 0,
              }}
              className="text-[11px] font-medium uppercase tracking-[0.3em] text-white/40 mb-8"
            >
              Menu
            </A.p>

            {/* Primary nav */}
            <nav className="mb-8">
              <ul className="space-y-1">
                {navTrail.map((style, i) => (
                  <li key={NAV_ITEMS[i].label}>
                    <A.div
                      style={{
                        opacity: style.opacity,
                        transform: style.y.to(
                          (v) => `translateY(${v}px)`
                        ),
                      }}
                    >
                      <Link
                        href={NAV_ITEMS[i].href}
                        onClick={handleNavClick}
                        className="block py-2 text-3xl font-light text-white/90 hover:text-primary transition-colors duration-300"
                        style={{
                          fontFamily:
                            '"Besley", "Times New Roman", serif',
                        }}
                      >
                        {NAV_ITEMS[i].label}
                      </Link>
                    </A.div>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Secondary nav + Contact */}
            <div className="flex gap-12 mb-8">
              <div>
                {secondaryTrail.map((style, i) => (
                  <A.div
                    key={SECONDARY_ITEMS[i].label}
                    style={{
                      opacity: style.opacity,
                      transform: style.y.to(
                        (v) => `translateY(${v}px)`
                      ),
                    }}
                  >
                    <Link
                      href={SECONDARY_ITEMS[i].href}
                      onClick={close}
                      className="block py-1 text-base text-white/50 hover:text-white/80 transition-colors duration-200"
                    >
                      {SECONDARY_ITEMS[i].label}
                    </Link>
                  </A.div>
                ))}
              </div>

              <A.div
                style={{
                  opacity: contactSpring.opacity,
                  transform: contactSpring.y.to(
                    (v) => `translateY(${v}px)`
                  ),
                }}
                className="space-y-1"
              >
                <a
                  href="tel:+48123456789"
                  className="block text-base text-white/50 hover:text-white/80 transition-colors duration-200"
                >
                  +48 123 456 789
                </a>
                <a
                  href="mailto:kontakt@steelbros.pl"
                  className="block text-base text-white/50 hover:text-white/80 transition-colors duration-200"
                >
                  kontakt@steelbros.pl
                </a>
              </A.div>
            </div>

            {/* CTA */}
            <A.div
              style={{
                opacity: ctaSpring.opacity,
                transform: ctaSpring.y.to((v) => `translateY(${v}px)`),
                scale: ctaSpring.scale,
              }}
            >
              <Link
                href="#wycena"
                onClick={close}
                className="flex items-center justify-center gap-3 w-full py-4 bg-white/5 border border-white/10 text-white text-sm font-medium uppercase tracking-[0.2em] hover:bg-primary/20 hover:border-primary/40 transition-all duration-300"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
                Zapytaj o wycenę
              </Link>
            </A.div>
          </div>
        </A.div>

        {/* Close button — below the panel */}
        <A.div
          style={{
            opacity: closeSpring.opacity,
            transform: closeSpring.rotate.to(
              (r) => `rotate(${r}deg)`
            ),
            scale: closeSpring.scale,
          }}
          className="flex justify-center pt-4"
        >
          <button
            onClick={close}
            className="flex items-center justify-center w-12 h-12 bg-black/80 border border-white/10 text-white hover:bg-white/10 transition-colors duration-200"
            aria-label="Close menu"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </A.div>
      </A.div>
    </>
  );
}
