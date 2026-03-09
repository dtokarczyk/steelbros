export interface HomeContent {
  hero: {
    title: string;
    lead: string;
    ctaPrimary: string;
    ctaSecondary?: string;
  };
  trustBar: {
    items: Array<{ label: string; icon?: string }>;
  };
  whySteelBros: {
    title: string;
    pillars: Array<{ title: string; description: string }>;
  };
  process: {
    title: string;
    intro?: string;
    steps: Array<{ title: string; description?: string }>;
  };
  offerB2c: {
    title: string;
    lead?: string;
    tiles: Array<{ title: string; description?: string; href: string }>;
  };
  offerB2b: {
    title: string;
    lead?: string;
    tiles: Array<{ title: string; description?: string; href: string }>;
  };
  portfolio: {
    title: string;
    items: Array<{ title: string; excerpt?: string; href: string; image?: string }>;
    ctaLabel: string;
  };
  contactSection: {
    title: string;
    body?: string;
    ctaLabel: string;
  };
}

export interface SiloContent {
  hero: {
    title: string;
    lead: string;
    ctaLabel: string;
  };
  intro: {
    title: string;
    body: string;
  };
  services: {
    title: string;
    items: Array<{ title: string; description?: string; image?: string }>;
  };
  bestsellers?: {
    title: string;
    items: Array<{ title: string; href: string; ctaLabel?: string; image?: string }>;
  };
  howWeWork: {
    title: string;
    steps: Array<{ title: string; description?: string }>;
  };
  realizacje: {
    title: string;
    items: Array<{ title: string; excerpt?: string; href: string; image?: string }>;
    ctaLabel: string;
  };
  conversion: {
    title: string;
    body?: string;
  };
}

export interface LandingContent {
  hero: {
    title: string;
    lead: string;
    ctaLabel: string;
    trustItems: Array<{ label: string; icon?: string }>;
  };
  emotions: {
    title: string;
    body?: string;
    benefits: Array<{ text: string }>;
  };
  whySteelBros: {
    title: string;
    items: Array<{ title: string; description?: string }>;
  };
  variants: {
    title: string;
    options: Array<{ title: string; description?: string }>;
  };
  socialProof: {
    title: string;
    gallery?: Array<{ image: string; caption?: string }>;
    testimonial?: { quote: string; author?: string };
  };
  process: {
    title: string;
    steps: Array<{ title: string; description?: string }>;
  };
  faq: {
    title: string;
    items: Array<{ question: string; answer: string }>;
  };
  conversion: {
    title: string;
    body?: string;
    formTitle?: string;
  };
}

export interface CaseStudyContent {
  title: string;
  excerpt?: string;
  challenge?: string;
  solution?: string;
  result?: string;
  gallery?: Array<{ image: string; caption?: string }>;
  backLabel?: string;
}

export interface RealizacjeListContent {
  title: string;
  lead?: string;
  items: Array<{ slug: string; title: string; excerpt?: string; image?: string }>;
}

export interface ContactContent {
  title: string;
  intro?: string;
  address?: string;
  phone?: string;
  email?: string;
  parkMaszynowy?: string;
  formTitle?: string;
  mapPlaceholder?: string;
}

export type ContentType =
  | "home"
  | "silo"
  | "landing"
  | "case-study"
  | "realizacje-list"
  | "kontakt";
