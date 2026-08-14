import { createFileRoute } from "@tanstack/react-router";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CTA, PageHero, Reveal, Section, SectionHeading } from "@/components/site/primitives";
import { ClosingCTA } from "@/components/site/blocks";
import { faqs } from "@/data/site";

const title = "Property & Housing Society FAQ | PropAdmin.in";
const description =
  "Answers on property management scope, society accounting, registration, deemed conveyance, maintenance, legal support, training and free consultation.";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.flatMap((group) =>
    group.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  ),
};

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(faqSchema) }],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Questions committees and owners ask us most"
        description="If your question isn't here, a 30-minute consultation will answer it directly."
      >
        <CTA to="/consultation" variant="gold">
          Ask an expert
        </CTA>
      </PageHero>

      <Section>
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeading
            eyebrow="Answers"
            title="Eight categories, plainly answered"
            description="Scope, accounting, registration, conveyance, maintenance, legal support, training and consultation."
          />
          <div className="space-y-10">
            {faqs.map((group, groupIndex) => (
              <Reveal key={group.category} delay={groupIndex * 60}>
                <h3 className="text-emerald text-[11px] font-semibold tracking-[0.24em] uppercase">
                  {group.category}
                </h3>
                <Accordion type="single" collapsible className="mt-4">
                  {group.items.map((item, index) => (
                    <AccordionItem
                      key={item.q}
                      value={`${group.category}-${index}`}
                      className="border-border/70"
                    >
                      <AccordionTrigger className="text-navy text-left text-sm font-semibold hover:no-underline">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <ClosingCTA />
    </>
  );
}