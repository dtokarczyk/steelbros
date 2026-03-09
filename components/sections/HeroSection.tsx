import Markdown from "@/components/Markdown";

interface HeroSectionProps {
  title: string;
  lead: string;
  ctaPrimary: string;
  ctaPrimaryHref?: string;
  ctaSecondary?: string;
  ctaSecondaryHref?: string;
}

export default function HeroSection({
  title,
  lead,
  ctaPrimary,
  ctaPrimaryHref = "/kontakt",
  ctaSecondary,
  ctaSecondaryHref = "/realizacje",
}: HeroSectionProps) {
  return (
    <section
      id="home"
      className="relative z-10 flex items-center overflow-hidden pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px] min-h-[80vh] bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/images/u2844336958_metal_fabrication_workshop_bokeh_effect_small_firm__7ce15e32-cb13-4f94-9cb5-73e806319454.png')",
      }}
    >
      <div className="absolute inset-0 bg-background/70" />
      <div className="container relative z-10">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto max-w-[800px] text-center">
              <h1 className="mb-5 text-3xl font-bold leading-tight text-foreground sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                {title}
              </h1>
              {lead && (
                <div className="mb-12 text-base font-medium leading-relaxed text-body-color dark:text-white dark:opacity-90 sm:text-lg md:text-xl [&_p]:mb-2">
                  <Markdown>{lead}</Markdown>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

