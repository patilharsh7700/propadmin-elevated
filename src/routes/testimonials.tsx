import { createFileRoute } from "@tanstack/react-router";
import { Quote, Star } from "lucide-react";

import { CTA, PageHero, Reveal, Section, SectionHeading } from "@/components/site/primitives";
import { ClosingCTA, StatsBand } from "@/components/site/blocks";
import { testimonials } from "@/data/site";

const title = "Client Testimonials | PropAdmin.in Property Management";
const description =
  "Reviews from housing society chairmen, builders, commercial property owners, committee members, residents and investors on PropAdmin's property management.";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/testimonials" },
    ],
    links: [{ rel: "canonical", href: "/testimonials" }],
  }),
  component: TestimonialsPage,
});

function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title="What our clients say about working with us"
        description="Professionalism, transparency, communication and accountability — measured by the people who live and work in the properties we manage."
      >
        <CTA to="/consultation" variant="gold">
          Book free consultation
        </CTA>
      </PageHero>

      <Section>
        <SectionHeading
          eyebrow="Client Voices"
          title="Six perspectives across our portfolio"
          align="center"
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal as="article" key={item.name} delay={(index % 3) * 90}>
              <figure className="glass-card lift flex h-full flex-col rounded-3xl p-8">
                <Quote className="text-gold h-7 w-7" aria-hidden />
                <div className="mt-4 flex gap-1" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="fill-gold text-gold h-3.5 w-3.5" aria-hidden />
                  ))}
                </div>
                <blockquote className="text-navy mt-5 flex-1 text-sm leading-relaxed">
                  {item.quote}
                </blockquote>
                <figcaption className="border-border/70 mt-6 border-t pt-5">
                  <span className="text-navy block text-sm font-semibold">{item.name}</span>
                  <span className="text-muted-foreground block text-xs">{item.role}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Section>

      <StatsBand />
      <ClosingCTA
        title="Join the societies and owners who moved to structured management"
        description="We'll walk you through references relevant to your asset class before you decide."
      />
    </>
  );
}