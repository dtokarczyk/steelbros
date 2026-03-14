import React from "react";

export interface TextSplitSectionProps {
  eyebrow?: React.ReactNode;
  title?: React.ReactNode;
  body?: React.ReactNode;
}

export default function TextSplitSection({
  eyebrow,
  title,
  body,
}: TextSplitSectionProps) {
  return (
    <section className="bg-background">
      <div className="container px-4 py-8">
        <div className="flex flex-col gap-10 border border-white/10 px-6 py-10 sm:px-10 lg:flex-row lg:items-start lg:gap-20">
          <div className="max-w-md flex-1">
            {eyebrow != null && (
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/70">
                {eyebrow}
              </p>
            )}
            {title != null && (
              <h2 className="mt-2 text-2xl font-semibold leading-tight text-white sm:text-3xl md:text-4xl">
                {title}
              </h2>
            )}
          </div>

          <div className="max-w-2xl flex-1">
            {body != null && (
              <p className="text-base leading-relaxed text-white/70 sm:text-lg">
                {body}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

