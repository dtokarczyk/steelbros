"use client";
import React, { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSpring } from "@react-spring/web";
import { A } from "@/lib/animated";
import { ServicePageContent } from "@/app/oferta/(content)/types";

function pagesToSegmentItems(pages: Record<string, ServicePageContent>): SegmentItem[] {
  return Object.entries(pages).map(([slug, content]) => ({
    slug,
    title: content.ServicesHero?.title != null ? String(content.ServicesHero.title) : slug,
    subtitle: content.ServicesHero?.subtitle != null ? String(content.ServicesHero.subtitle) : "",
    heroImageSrc: content.ServicesHero?.imageSrc,
    heroImageAlt: content.ServicesHero?.imageAlt ?? "",
  }));
}

/** Maps scroll position to a 0–1 progress value for a given element. */
function getScrollProgress(el: HTMLElement): number {
  const rect = el.getBoundingClientRect();
  const windowHeight = window.innerHeight;
  // Start animating when the element bottom crosses the viewport bottom,
  // finish when the element top reaches 30% from the viewport top.
  const start = windowHeight;
  const end = rect.height * 0.3;
  const raw = (start - rect.top) / (start - end);
  return Math.min(Math.max(raw, 0), 1);
}

export type SegmentItem = {
  slug: string;
  title: string;
  subtitle: string;
  heroImageSrc?: string;
  heroImageAlt?: string;
};

const SegmentCard = ({
  slug,
  title,
  subtitle,
  heroImageSrc,
  heroImageAlt,
  reverse = false,
}: {
  slug: string;
  title: React.ReactNode;
  subtitle: React.ReactNode;
  heroImageSrc?: string;
  heroImageAlt?: string;
  reverse?: boolean;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const [springs, api] = useSpring(() => ({
    from: { opacity: 0, y: 60 },
    config: { mass: 1, tension: 160, friction: 28 },
  }));

  useEffect(() => {
    const update = () => {
      if (!ref.current) return;
      const progress = getScrollProgress(ref.current);
      api.start({
        opacity: progress,
        y: (1 - progress) * 60,
        immediate: false,
      });
    };

    window.addEventListener("scroll", update, { passive: true });
    // Run once on mount to handle elements already in view
    update();
    return () => window.removeEventListener("scroll", update);
  }, [api]);

  return (
    <A.div
      ref={ref}
      style={springs}
      className={`flex w-full items-center gap-6 md:gap-8 flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"}`}
    >
      {/* Hero image from content or placeholder — 3:4 ratio */}
      <div className="aspect-[3/4] w-full md:w-1/2 shrink-0 overflow-hidden rounded-md bg-white/10">
        {heroImageSrc ? (
          <Image
            src={heroImageSrc}
            alt={heroImageAlt ?? ""}
            width={600}
            height={800}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <svg className="h-8 w-8 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}
      </div>
      {/* Text */}
      <div className={`flex flex-col justify-center gap-2 items-start text-left ${reverse ? "md:items-end md:text-right" : "md:items-start md:text-left"}`}>
        <h2 className="mb-1 text-3xl text-foreground">{title}</h2>
        <p className="text-base text-body-color leading-snug">{subtitle}</p>
        <Link
          href={`/oferta/${slug}`}
          className={`mt-4 self-start inline-flex items-center justify-center border border-transparent bg-white px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-black [font-variant:small-caps] transition-colors duration-200 hover:bg-primary hover:text-white ${reverse ? "md:self-end" : "md:self-start"}`}
        >
          pokaż więcej
        </Link>
      </div>
    </A.div>
  );
};

export type SegmentsSectionProps = {
  segments: Record<string, ServicePageContent>;
};

const SegmentsSection = ({ segments }: SegmentsSectionProps) => {
  const list = Array.isArray(segments) ? segments : pagesToSegmentItems(segments);
  const left = list.slice(0, 3);
  const right = list.slice(3);

  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-24">
      <div className="container">
        <div className="flex flex-col items-center justify-center gap-8 lg:flex-row">
          {/* Left column — image on the right */}
          <div className="flex w-full flex-1 flex-col gap-8">
            {left.map((s) => (
              <SegmentCard key={s.slug} {...s} reverse />
            ))}
          </div>

          {/* Right column — image on the left */}
          <div className="flex w-full flex-1 flex-col gap-8">
            {right.map((s) => (
              <SegmentCard key={s.slug} {...s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SegmentsSection;
