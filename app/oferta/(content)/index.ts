import { SegmentItem } from "@/components/sections/SegmentsSection";
import { content as domIogrodContent } from "./dom-i-ogrod";

export const pages = {
  "dom-i-ogrod": domIogrodContent,
};

/** Segments for SegmentsSection derived from pages (slug + ServicesHero title/subtitle) */
export function getSegmentsFromPages(): SegmentItem[] {
  return Object.entries(pages).map(([slug, content]) => ({
    slug,
    title: content.ServicesHero?.title != null ? String(content.ServicesHero.title) : slug,
    subtitle: content.ServicesHero?.subtitle != null ? String(content.ServicesHero.subtitle) : "",
  }));
}