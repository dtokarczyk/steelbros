"use client";
import React, { useRef, useEffect } from "react";
import { useSpring } from "@react-spring/web";
import { A } from "@/lib/animated";
import Button from "../Button";

const segments = [
  {
    title: "Dom i ogród",
    subtitle: "Pergole, kuchnie ogrodowe i detale stalowe dla Twojej przestrzeni.",
  },
  {
    title: "Segment nowoczesnych wnętrz",
    subtitle: "Drzwi i ścianki loftowe, detale stalowe do mieszkań i biur.",
  },
  {
    title: "Usługi dla firm i przemysłu",
    subtitle: "Rozwiązania stalowe dla zakładów, magazynów i produkcji.",
  },
  {
    title: "Małe konstrukcje budowlane",
    subtitle: "Schody, podesty, balkony i inne konstrukcje uzupełniające.",
  },
  {
    title: "Campery",
    subtitle: "Zabudowy off-road, moduły do camperów i pojazdów specjalnych.",
  },
  {
    title: "Architektura miejska",
    subtitle: "Mała architektura miejska – ławki, zadaszenia, detale.",
  },
  {
    title: "Usługi dodatkowe",
    subtitle: "Cięcie, gięcie, spawanie i inne obróbki stali na zamówienie.",
  },
];

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

const SegmentCard = ({
  title,
  subtitle,
  reverse = false,
}: {
  title: string;
  subtitle: string;
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
      {/* Image placeholder — 3:4 ratio */}
      <div className="aspect-[3/4] w-full md:w-1/2 shrink-0 overflow-hidden rounded-md bg-white/10">
        <div className="flex h-full w-full items-center justify-center">
          <svg className="h-8 w-8 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
      </div>
      {/* Text */}
      <div className={`flex flex-col justify-center gap-2 items-start text-left ${reverse ? "md:items-end md:text-right" : "md:items-start md:text-left"}`}>
        <h2 className="mb-1 text-3xl text-foreground">{title}</h2>
        <p className="text-base text-body-color leading-snug">{subtitle}</p>
        <Button className={`mt-4 self-start ${reverse ? "md:self-end" : "md:self-start"}`}>
          pokaż więcej
        </Button>
      </div>
    </A.div>
  );
};

const SegmentsSection = () => {
  const left = segments.slice(0, 3);
  const right = segments.slice(3);

  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-24">
      <div className="container">
        <div className="flex flex-col items-center justify-center gap-8 lg:flex-row">
          {/* Left column — image on the right */}
          <div className="flex w-full flex-1 flex-col gap-8">
            {left.map((s) => (
              <SegmentCard key={s.title} {...s} reverse />
            ))}
          </div>

          {/* Right column — image on the left */}
          <div className="flex w-full flex-1 flex-col gap-8">
            {right.map((s) => (
              <SegmentCard key={s.title} {...s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SegmentsSection;
