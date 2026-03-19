import Link from "next/link";

const NAV_ITEMS = [
  { label: "Strona główna", href: "/" },
  { label: "O nas", href: "#about" },
  { label: "Oferta", href: "#segments" },
  { label: "Realizacje", href: "#realizacje" },
  { label: "Kontakt", href: "/kontakt" },
];

const SOCIAL_LINKS = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-black">
      <div className="container mx-auto px-6 lg:px-12 pt-16 pb-8">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Left — heading + contact */}
          <div className="lg:col-span-5">
            <h2
              className="text-3xl md:text-4xl lg:text-[42px] font-semibold leading-tight mb-6"
              style={{ fontFamily: '"Besley", "Times New Roman", serif' }}
            >
              Porozmawiajmy
              <br />o Twoim projekcie
            </h2>
            <p className="text-black/70 text-base mb-1">
              Skontaktuj się z nami bezpośrednio
            </p>
            <div className="flex flex-wrap gap-x-3 text-base">
              <a
                href="mailto:kontakt@steelbros.pl"
                className="underline underline-offset-2 hover:text-black/70 transition-colors"
              >
                kontakt@steelbros.pl
              </a>
              <span className="text-black/40">|</span>
              <a
                href="tel:+48123456789"
                className="underline underline-offset-2 hover:text-black/70 transition-colors"
              >
                +48 123 456 789
              </a>
            </div>
            <a
              href="https://kodiwo.pl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 text-sm text-black hover:text-black/70 transition-colors"
            >
              Developed with love by Kodiwo
            </a>
          </div>

          {/* Middle — nav links */}
          <div className="lg:col-span-3">
            <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-black/50 mb-5">
              Nawigacja
            </p>
            <nav>
              <ul className="space-y-2">
                {NAV_ITEMS.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-base text-black/80 hover:text-black transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Right — socials + logo */}
          <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-between gap-8">
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-black text-white hover:bg-black/80 transition-colors duration-200"
                >
                  {link.icon}
                </a>
              ))}
            </div>

            <span
              className="text-[64px] md:text-[80px] lg:text-[96px] font-bold leading-none text-black/10 select-none"
              style={{ fontFamily: '"Besley", "Times New Roman", serif' }}
            >
              Steel Bros.
            </span>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-black/15 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-black/50">
          <p>&copy; {new Date().getFullYear()} Steel Bros. Wszelkie prawa zastrzeżone.</p>
          <Link
            href="/polityka-prywatnosci"
            className="hover:text-black/70 transition-colors"
          >
            Polityka prywatności
          </Link>
        </div>
      </div>
    </footer>
  );
}
