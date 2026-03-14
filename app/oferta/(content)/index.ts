import { SegmentItem } from "@/components/sections/SegmentsSection";
import { homeAndGardenContent } from "./dom-i-ogrod";
import { modernInteriorsContent } from "./loftowe-wnetrza";
import { industryContent } from "./dla-firm-przemyslu";
import { buildingStructuresContent } from "./kontrukcje-budowlane";
import { camperOffroadContent } from "./campery-off-road";
import { urbanArchitectureContent } from "./mala-architektura-ogrodowa";
import { additionalServicesContent } from "./uslugi-dodatkowe";
import type { ServicePageContent } from "./types";

export const pages: Record<string, ServicePageContent> = {
  "dom-i-ogrod": homeAndGardenContent,
  "loftowe-wnetrza": modernInteriorsContent,
  "dla-firm-przemyslu": industryContent,
  "kontrukcje-budowlane": buildingStructuresContent,
  "campery-off-road": camperOffroadContent,
  "mala-architektura-ogrodowa": urbanArchitectureContent,
  "uslugi-dodatkowe": additionalServicesContent,
};

/** Segments for SegmentsSection derived from pages (slug + ServicesHero title/subtitle/hero image) */
export function getSegmentsFromPages(): SegmentItem[] {
  return Object.entries(pages).map(([slug, content]) => ({
    slug,
    title: content.ServicesHero?.title != null ? String(content.ServicesHero.title) : slug,
    subtitle: content.ServicesHero?.subtitle != null ? String(content.ServicesHero.subtitle) : "",
    heroImageSrc: content.ServicesHero?.imageSrc,
    heroImageAlt: content.ServicesHero?.imageAlt ?? "",
  }));
}