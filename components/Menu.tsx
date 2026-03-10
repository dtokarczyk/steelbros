"use client";

import React, { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import { useSpring, useTrail, animated, config } from "@react-spring/web";

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

  // Panel slides down from top
  const panelSpring = useSpring({
    transform: open ? "translateY(0%)" : "translateY(-100%)",
    opacity: open ? 1 : 0,
    config: open
      ? { tension: 220, friction: 28 }
      : { tension: 320, friction: 34 },
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
    y: open ? -20 : 0,
    config: { tension: 300, friction: 30 },
  });

  const handleNavClick = () => {
    close();
  };

  return (
    <>
      {/* Fixed top bar */}
      <animated.div
        style={{
          opacity: barSpring.opacity,
          transform: barSpring.y.to(
            (v) => `translateX(-50%) translateY(${v}px)`
          ),
          pointerEvents: open ? "none" : "auto",
        }}
        className="fixed top-5 left-1/2 z-50"
      >
        <div className="flex items-center gap-6 rounded-md bg-black/80 backdrop-blur-md border border-white/10 px-5 py-3 shadow-lg shadow-black/30">
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
        </div>
      </animated.div>

      {/* Overlay backdrop */}
      <animated.div
        style={{
          opacity: backdropSpring.opacity,
          pointerEvents: open ? "auto" : "none",
        }}
        className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
        onClick={close}
      />

      {/* Menu panel — drops down from top */}
      <animated.div
        style={{
          transform: panelSpring.transform,
          pointerEvents: open ? "auto" : "none",
        }}
        className="fixed inset-x-0 top-0 z-[70] flex flex-col"
      >
        <animated.div
          style={{ opacity: panelSpring.opacity }}
          className="mx-4 mt-4 rounded-lg bg-[#1a1a1a]/80 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/50 overflow-hidden"
        >
          <div className="px-8 pt-10 pb-8">
            {/* Menu label */}
            <animated.p
              style={{
                opacity: navTrail[0]?.opacity ?? 0,
              }}
              className="text-[11px] font-medium uppercase tracking-[0.3em] text-white/40 mb-8"
            >
              Menu
            </animated.p>

            {/* Primary nav */}
            <nav className="mb-8">
              <ul className="space-y-1">
                {navTrail.map((style, i) => (
                  <li key={NAV_ITEMS[i].label}>
                    <animated.div
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
                    </animated.div>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Secondary nav + Contact */}
            <div className="flex gap-12 mb-8">
              <div>
                {secondaryTrail.map((style, i) => (
                  <animated.div
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
                  </animated.div>
                ))}
              </div>

              <animated.div
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
              </animated.div>
            </div>

            {/* CTA */}
            <animated.div
              style={{
                opacity: ctaSpring.opacity,
                transform: ctaSpring.y.to((v) => `translateY(${v}px)`),
                scale: ctaSpring.scale,
              }}
            >
              <Link
                href="#wycena"
                onClick={close}
                className="flex items-center justify-center gap-3 w-full py-4 rounded-md bg-white/5 border border-white/10 text-white text-sm font-medium uppercase tracking-[0.2em] hover:bg-primary/20 hover:border-primary/40 transition-all duration-300"
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
            </animated.div>
          </div>
        </animated.div>

        {/* Close button — below the panel */}
        <animated.div
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
            className="flex items-center justify-center w-12 h-12 rounded-md bg-black/80 border border-white/10 text-white hover:bg-white/10 transition-colors duration-200"
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
        </animated.div>
      </animated.div>
    </>
  );
}
