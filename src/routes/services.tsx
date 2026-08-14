import { createFileRoute } from "@tanstack/react-router";

import { CTA, PageHero, Section, SectionHeading } from "@/components/site/primitives";
import { ServiceCard } from "@/components/site/ServiceCard";
import { ClosingCTA } from "@/components/site/blocks";
import { services } from "@/data/site";

const title = "Property Management Services | PropAdmin.in";
const description =
  "Integrated property management, society accounting, facility management, compliance, conveyance, rental and asset lifecycle services for Indian residential and commercial properties.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Everything a managed property needs, delivered by one team"
        description="Eighteen service lines covering operations, maintenance, accounting, compliance, legal documentation and asset planning."
      >
        <CTA to="/consultation" variant="gold">
          Discuss your requirement
        </CTA>
        <CTA to="/contact" variant="glass">
          Request a proposal
        </CTA>
      </PageHero>

      <Section>
        <SectionHeading
          eyebrow="Service Lines"
          title="Scoped, staffed and measured"
          description="Each service carries defined deliverables, an accountable owner and monthly reporting to your committee or asset team."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.slug} service={service} index={index} />
          ))}
        </div>
      </Section>

      <ClosingCTA
        title="Not sure which services you need?"
        description="A 30-minute consultation maps your Needs, Difficulties and Priorities to a scoped engagement."
      />
    </>
  );
}