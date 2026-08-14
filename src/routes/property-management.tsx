import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";

import propertyImage from "@/assets/property-management.jpg";
import { CTA, PageHero, Reveal, Section, SectionHeading } from "@/components/site/primitives";
import { ClosingCTA, StatsBand } from "@/components/site/blocks";
import { propertyTypes } from "@/data/site";

const title = "Integrated Property Management Services | PropAdmin.in";
const description =
  "Professional integrated property management for residential, commercial and mixed-use assets — SOP-driven operations, compliance, reporting and preventive maintenance.";

export const Route = createFileRoute("/property-management")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/property-management" },
    ],
    links: [{ rel: "canonical", href: "/property-management" }],
  }),
  component: PropertyManagementPage,
});

const deliverables = [
  {
    title: "Deployed management team",
    body: "A property manager on site, supported by help desk executives and multi-skilled technicians, with defined shifts and escalation ownership.",
  },
  {
    title: "SOP-driven daily operations",
    body: "Documented procedures for housekeeping, technical rounds, vendor entry, gate management and incident handling, evidenced through daily checklists.",
  },
  {
    title: "Preventive maintenance planning",
    body: "Annual schedules for lifts, pumps, DG sets, firefighting, STP and electrical systems, with asset registers and condition tracking.",
  },
  {
    title: "Financial transparency",
    body: "Budgets, billing, collections, payables and owner statements with a clean audit trail and monthly variance reporting.",
  },
  {
    title: "Statutory compliance",
    body: "A live compliance calendar covering licences, registers, returns and inspections, with named accountability for every item.",
  },
  {
    title: "Governance support",
    body: "Agenda preparation, minutes, resolutions and structured committee reviews that keep decisions documented and defensible.",
  },
];

function PropertyManagementPage() {
  return (
    <>
      <PageHero
        eyebrow="Property Management"
        title="Integrated Property Management"
        description="Professional management that protects your asset, ensures compliance, improves governance, reduces operational risks, and delivers measurable value."
      >
        <CTA to="/consultation" variant="gold">
          Book free consultation
        </CTA>
        <CTA to="/contact" variant="glass">
          Request a proposal
        </CTA>
      </PageHero>

      <Section>
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <img
              src={propertyImage}
              alt="Property manager reviewing operations at a managed property"
              width={1280}
              height={960}
              loading="lazy"
              className="w-full rounded-[2rem] object-cover shadow-[var(--shadow-lift)]"
            />
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="Coverage"
              title="Asset classes we manage"
              description="Staffing patterns, SOPs and reporting are configured to the asset, not copied from a template."
            />
            <ul className="mt-9 grid gap-3 sm:grid-cols-2">
              {propertyTypes.map((type, index) => (
                <Reveal as="li" key={type} delay={index * 60}>
                  <div className="border-border/70 flex items-center gap-3 rounded-2xl border px-4 py-3">
                    <Check className="text-emerald h-4 w-4 shrink-0" aria-hidden />
                    <span className="text-navy text-sm font-medium">{type}</span>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section tone="sand">
        <SectionHeading eyebrow="What You Get" title="Six deliverables in every engagement" />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {deliverables.map((item, index) => (
            <Reveal as="article" key={item.title} delay={(index % 3) * 90}>
              <div className="lift h-full rounded-3xl bg-card p-7">
                <span className="text-gold font-display text-2xl font-semibold">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-navy mt-4 text-lg font-semibold">{item.title}</h3>
                <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <StatsBand />
      <ClosingCTA />
    </>
  );
}