import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";

import { CTA, PageHero, Reveal, Section, SectionHeading } from "@/components/site/primitives";
import { ClosingCTA } from "@/components/site/blocks";

const title = "Housing Society Management Services in Pune | PropAdmin.in";
const description =
  "Professional housing society management: committee support, society accounting, statutory compliance, conveyance assistance, member services and transparent governance.";

export const Route = createFileRoute("/society-management")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/society-management" },
    ],
    links: [{ rel: "canonical", href: "/society-management" }],
  }),
  component: SocietyManagementPage,
});

const pillars = [
  {
    title: "Committee & Governance",
    points: [
      "Agenda, notices and minutes",
      "General body and committee meeting support",
      "Resolution drafting and record keeping",
      "Bye-law adherence reviews",
    ],
  },
  {
    title: "Society Accounting",
    points: [
      "Maintenance billing and receipts",
      "Arrears follow-up and member statements",
      "Payables, budgets and sinking fund tracking",
      "Audit coordination and statutory books",
    ],
  },
  {
    title: "Compliance & Legal",
    points: [
      "Statutory registers and returns",
      "Fire, lift and labour compliance calendars",
      "Deemed conveyance documentation",
      "Notices and litigation guidance",
    ],
  },
  {
    title: "Member Services",
    points: [
      "Help desk with ticket lifecycle",
      "Move-in / move-out coordination",
      "NOC and documentation requests",
      "Resident communication and surveys",
    ],
  },
];

function SocietyManagementPage() {
  return (
    <>
      <PageHero
        eyebrow="Housing Society Management"
        title="Run your society like a well-governed institution"
        description="Committee support, accounting, compliance and member services delivered by trained professionals — so volunteers stop carrying operational load."
      >
        <CTA to="/consultation" variant="gold">
          Book free consultation
        </CTA>
        <CTA to="/contact" variant="glass">
          Talk to our team
        </CTA>
      </PageHero>

      <Section>
        <SectionHeading
          eyebrow="Scope"
          title="Four pillars of professional society management"
          description="Each pillar carries documented procedures, an accountable owner and a monthly report the committee can present to members."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {pillars.map((pillar, index) => (
            <Reveal as="article" key={pillar.title} delay={(index % 2) * 100}>
              <div className="lift border-border/70 h-full rounded-3xl border p-8">
                <h3 className="text-navy text-xl font-semibold">{pillar.title}</h3>
                <div className="rule-gold mt-5" />
                <ul className="mt-6 space-y-3">
                  {pillar.points.map((point) => (
                    <li key={point} className="text-muted-foreground flex items-start gap-3 text-sm">
                      <Check className="text-emerald mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="sand">
        <SectionHeading
          eyebrow="Transition"
          title="From informal handling to structured administration"
          align="center"
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl bg-card p-8">
              <p className="text-muted-foreground text-[11px] font-semibold tracking-[0.24em] uppercase">
                Before
              </p>
              <ul className="text-muted-foreground mt-5 space-y-3 text-sm">
                <li>Complaints tracked in chat groups</li>
                <li>Vendor decisions without benchmarking</li>
                <li>Maintenance handled only after breakdowns</li>
                <li>Compliance discovered during inspections</li>
                <li>Accounts reconciled at audit time</li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="surface-navy h-full rounded-3xl p-8">
              <p className="text-gold text-[11px] font-semibold tracking-[0.24em] uppercase">
                With PropAdmin
              </p>
              <ul className="text-navy-foreground/85 mt-5 space-y-3 text-sm">
                <li>Ticketed help desk with closure SLAs</li>
                <li>Empanelled vendors with rate benchmarking</li>
                <li>Annual preventive maintenance schedules</li>
                <li>Live statutory compliance calendar</li>
                <li>Monthly reconciled accounts and MIS</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      <ClosingCTA
        title="Bring professional administration to your society"
        description="Share your society profile and we will map a scoped engagement with staffing, SOPs and reporting."
      />
    </>
  );
}