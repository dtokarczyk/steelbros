import Link from "next/link";
import { ServicesHero, SegmentsSection } from "@/components/sections";
import { pages } from "@/app/services/(content)";

/** Human-readable labels for service slugs (for listing page) */
const slugLabels: Record<string, string> = {
  "dom-i-ogrod": "Dom i ogród",
};

export default function ServicesPage() {
  const slugs = Object.keys(pages);

  return (
    <>
      <ServicesHero
        title="Usługi"
        subtitle="Konstrukcje stalowe i realizacje na miarę."
      />

      <section className="bg-background py-16 md:py-24">
        <div className="container px-4">
          <h2 className="mb-8 text-2xl font-semibold text-white sm:text-3xl">
            Nasze obszary
          </h2>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {slugs.map((slug) => (
              <li key={slug}>
                <Link
                  href={`/services/${slug}`}
                  className="block rounded-lg border border-white/10 bg-white/5 px-6 py-4 transition hover:border-primary/30 hover:bg-white/10"
                >
                  <span className="font-medium text-white">
                    {slugLabels[slug] ?? slug}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <SegmentsSection />
    </>
  );
}
