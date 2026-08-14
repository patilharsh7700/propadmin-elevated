import { createFileRoute } from "@tanstack/react-router";
import { Check, Compass, Flag, ShieldCheck } from "lucide-react";

import propertyImage from "@/assets/property-management.jpg";
import { CTA, PageHero, Reveal, Section, SectionHeading } from "@/components/site/primitives";
import { ClosingCTA, StatsBand } from "@/components/site/blocks";
import { caseStudies, whyPropAdmin } from "@/data/site";

const title = "About PropAdmin.in | Professional Property Management Company";
const description =
  "PropAdmin.in professionalises property management in India through systems, skills and structured leadership for housing societies, owners and commercial assets.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const timeline = [
  {
    year: "Foundation",
    title: "Built by practitioners, not intermediaries",
    body: "PropAdmin.in was formed by professionals who ran society operations, accounts and compliance first-hand, and saw how informal practice quietly erodes asset value.",
  },
  {
    year: "Systems",
    title: "SOPs replaced improvisation",
    body: "Housekeeping, technical rounds, help desk, vendor entry and reporting were codified into auditable standard operating procedures with daily evidence.",
  },
  {
    year: "People",
    title: "A trained, deployable workforce",
    body: "Certified property managers, help desk executives and multi-skilled technicians are trained in-house through our Property Management Academy.",
  },
  {
    year: "Scale",
    title: "Integrated management across asset classes",
    body: "Residential societies, commercial complexes, mixed-use developments and industrial properties now run on the same governance backbone.",
  },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Bringing structure and accountability to property management"
        description="We work at the intersection of society operations, governance, compliance, and people leadership."
      >
        <CTA to="/consultation" variant="gold">
          Book free consultation
        </CTA>
        <CTA to="/services" variant="glass">
          Explore services
        </CTA>
      </PageHero>

      <Section>
        <div className="grid gap-14 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <div>
            <SectionHeading eyebrow="Who We Are" title="A property management and managerial excellence platform" />
            <div className="mt-6 space-y-5">
              <p className="text-muted-foreground text-base leading-relaxed sm:text-lg">
                PropAdmin.in is a professional property management and managerial excellence platform
                dedicated to transforming how co-operative housing societies and property management
                professionals operate, govern, and grow.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed sm:text-lg">
                We work at the intersection of society operations, governance, compliance, and people
                leadership — bringing structure, accountability, and professionalism into a space
                traditionally dependent on informal practices.
              </p>
            </div>
          </div>
          <Reveal delay={120}>
            <img
              src={propertyImage}
              alt="PropAdmin property manager at a managed residential property"
              width={1280}
              height={960}
              loading="lazy"
              className="w-full rounded-[2rem] object-cover shadow-[var(--shadow-lift)]"
            />
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {[
            {
              icon: Flag,
              label: "Mission",
              body: "To professionalise property management in India through systems, skills, and structured leadership.",
            },
            {
              icon: Compass,
              label: "Vision",
              body: "To become India's most trusted integrated property management company.",
            },
            {
              icon: ShieldCheck,
              label: "Commitment",
              body: "Transparent reporting, statutory compliance and long-term protection of every asset we manage.",
            },
          ].map((item, index) => (
            <Reveal key={item.label} delay={index * 100}>
              <div className="lift bg-sand h-full rounded-3xl p-8">
                <span className="bg-navy text-navy-foreground grid h-11 w-11 place-items-center rounded-2xl">
                  <item.icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-navy mt-5 text-lg font-semibold">{item.label}</h3>
                <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <StatsBand />

      <Section>
        <SectionHeading eyebrow="Our Journey" title="How the operating model came together" />
        <ol className="mt-14 space-y-6">
          {timeline.map((item, index) => (
            <Reveal as="li" key={item.year} delay={index * 80}>
              <div className="border-border/70 lift grid gap-5 rounded-3xl border p-7 sm:grid-cols-[10rem_1fr]">
                <span className="text-emerald text-[11px] font-semibold tracking-[0.24em] uppercase">
                  {item.year}
                </span>
                <div>
                  <h3 className="text-navy text-lg font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{item.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section tone="sand">
        <SectionHeading eyebrow="Case Studies" title="Measured outcomes across our portfolio" />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((item, index) => (
            <Reveal as="article" key={item.title} delay={(index % 3) * 90}>
              <div className="lift h-full rounded-3xl bg-card p-7">
                <p className="text-emerald text-[11px] font-semibold tracking-[0.22em] uppercase">
                  {item.metric}
                </p>
                <h3 className="text-navy mt-4 text-lg font-semibold">{item.title}</h3>
                <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Why PropAdmin" title="The principles we operate by" align="center" />
        <ul className="mt-12 flex flex-wrap justify-center gap-3">
          {whyPropAdmin.map((item, index) => (
            <Reveal as="li" key={item} delay={index * 50}>
              <span className="border-border/70 text-navy flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium">
                <Check className="text-emerald h-4 w-4" aria-hidden />
                {item}
              </span>
            </Reveal>
          ))}
        </ul>
      </Section>

      <ClosingCTA />
    </>
  );
}