export const SILO_SLUGS = [
  "dom-i-ogrod",
  "wnetrza-loftowe",
  "przemysl-magazyn",
  "konstrukcje-budowlane",
  "campery-offroad",
  "architektura-miejska",
  "uslugi-dodatkowe",
  "oferta-premium",
] as const;

export const LANDING_SLUGS = [
  "pergole-nowoczesne",
  "drzwi-scianki-loftowe",
  "antresole-stalowe",
  "kuchnie-ogrodowe",
  "konstrukcje-fotowoltaika",
] as const;

export type SiloSlug = (typeof SILO_SLUGS)[number];
export type LandingSlug = (typeof LANDING_SLUGS)[number];

const SILO_NAMES: Record<SiloSlug, string> = {
  "dom-i-ogrod": "Dom i ogród",
  "wnetrza-loftowe": "Wnętrza loftowe",
  "przemysl-magazyn": "Przemysł i magazyn",
  "konstrukcje-budowlane": "Konstrukcje budowlane",
  "campery-offroad": "Campery i off-road",
  "architektura-miejska": "Architektura miejska",
  "uslugi-dodatkowe": "Usługi dodatkowe",
  "oferta-premium": "Oferta premium",
};

const LANDING_NAMES: Record<LandingSlug, string> = {
  "pergole-nowoczesne": "Pergole nowoczesne",
  "drzwi-scianki-loftowe": "Drzwi i ścianki loftowe",
  "antresole-stalowe": "Antresole stalowe",
  "kuchnie-ogrodowe": "Kuchnie ogrodowe",
  "konstrukcje-fotowoltaika": "Konstrukcje pod fotowoltaikę",
};

export function getSiloName(slug: string): string {
  return SILO_NAMES[slug as SiloSlug] ?? slug;
}

export function getLandingName(slug: string): string {
  return LANDING_NAMES[slug as LandingSlug] ?? slug;
}

export function isSiloSlug(slug: string): slug is SiloSlug {
  return (SILO_SLUGS as readonly string[]).includes(slug);
}

export function isLandingSlug(slug: string): slug is LandingSlug {
  return (LANDING_SLUGS as readonly string[]).includes(slug);
}
