import { createFileRoute } from "@tanstack/react-router";
import { Building, Droplets, Flame, Fan, Lightbulb, Sparkles } from "lucide-react";

import { CTA, PageHero, Reveal, Section, SectionHeading } from "@/components/site/primitives";
import { ClosingCTA } from "@/components/site/blocks";

const title = "Facility Management Company for Buildings & Societies | PropAdmin.in";
const description =
  "Facility management with measurable SLAs: housekeeping, technical services, preventive maintenance, vendor supervision and 24x7 emergency response coordination.";

export const Route = createFileRoute("/facility-management")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/facility-management" },
    ],
    links: [{ rel: "canonical", href: "/facility-management" }],
  }),
  component: FacilityManagementPage,
});

const disciplines = [
  { icon: Sparkles, title: "Soft Services", body: "Housekeeping, common-area upkeep, landscaping supervision and waste management routines." },
  { icon: Lightbulb, title: "Electrical Systems", body: "Panels, DG sets, lighting, energy monitoring and load management with logged rounds." },
  { icon: Droplets, title: "Plumbing & Water", body: "Pumps, tanks, STP/WTP coordination, leak response and water quality checks." },
  { icon: Fan, title: "HVAC & Lifts", body: "AMC supervision, scheduled servicing, breakdown response and vendor performance review." },
  { icon: Flame, title: "Fire & Safety", body: "Firefighting system checks, drills, signage, NOC tracking and incident protocols." },
  { icon: Building, title: "Civil & Common Areas", body: "Waterproofing, painting cycles, structural observations and repair planning." },
];

const slas = [
  { label: "Emergency response", value: "≤ 15 min" },
  { label: "Critical complaint closure", value: "≤ 4 hours" },
  { label: "Standard ticket closure", value: "≤ 24 hours" },
  { label: "Preventive schedule adherence", value: "≥ 98%" },
  { label: "Site audit frequency", value: "Weekly" },
  { label: "Reporting cycle", value: "Monthly MIS" },
];

function FacilityManagementPage() {
  return (
    <>
      <PageHero
        eyebrow="Facility Management"
        title="Facilities that run on schedules, not surprises"
        description="Soft services, technical services and emergency coordination delivered under SLAs you can audit."
      >
        <CTA to="/consultation" variant="gold">
          Book free consultation
        </CTA>
        <CTA to="/services" variant="glass">
          See all services
        </CTA>
      </PageHero>

      <Section>
        <SectionHeading eyebrow="Disciplines" title="Six technical and soft service tracks" />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {disciplines.map((item, index) => (
            <Reveal as="article" key={item.title} delay={(index % 3) * 90}>
              <div className="lift border-border/70 h-full rounded-3xl border p-7">
                <span className="bg-emerald/12 text-emerald grid h-12 w-12 place-items-center rounded-2xl">
                  <item.icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-navy mt-6 text-lg font-semibold">{item.title}</h3>
                <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="navy">
        <SectionHeading
          tone="navy"
          eyebrow="Service Levels"
          title="Commitments written into the contract"
          align="center"
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {slas.map((item, index) => (
            <Reveal key={item.label} delay={(index % 3) * 90}>
              <div className="glass-dark rounded-2xl p-7">
                <p className="text-gold font-display text-3xl font-semibold">{item.value}</p>
                <p className="text-navy-foreground/70 mt-3 text-sm">{item.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <ClosingCTA
        title="Put your facility on a measurable operating rhythm"
        description="We audit your current setup and propose staffing, schedules and SLAs suited to your asset."
      />
    </>
  );
}