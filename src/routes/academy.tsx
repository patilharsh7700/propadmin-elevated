import { createFileRoute } from "@tanstack/react-router";
import { Award, Check, GraduationCap, Users } from "lucide-react";

import academyImage from "@/assets/academy.jpg";
import instructorImage from "@/assets/instructor.jpg";
import { CTA, PageHero, Reveal, Section, SectionHeading } from "@/components/site/primitives";
import { ClosingCTA } from "@/components/site/blocks";
import { academyModules } from "@/data/site";

const title = "Property Management Academy & Training | PropAdmin.in";
const description =
  "Professional property management training for managers, committee members and facility professionals — operations, governance, compliance, accounting and certification.";

export const Route = createFileRoute("/academy")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/academy" },
    ],
    links: [{ rel: "canonical", href: "/academy" }],
  }),
  component: AcademyPage,
});

const audience = [
  { icon: Users, title: "Committee Members", body: "Understand governance duties, statutory obligations and how to review management performance." },
  { icon: GraduationCap, title: "Property Managers", body: "Operate sites with SOPs, help desk discipline, maintenance planning and clean reporting." },
  { icon: Award, title: "Aspiring Professionals", body: "Enter the profession with a structured foundation and a recognised certification." },
];

function AcademyPage() {
  return (
    <>
      <PageHero
        eyebrow="Training Academy"
        title="Property Management Academy"
        description="Professional training designed for property managers, committee members, facility professionals, and aspiring managers."
      >
        <CTA to="/courses" variant="gold">
          Browse courses
        </CTA>
        <CTA to="/contact" variant="glass">
          Enquire about batches
        </CTA>
      </PageHero>

      <Section>
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <img
              src={academyImage}
              alt="Property management training session with professionals"
              width={1280}
              height={960}
              loading="lazy"
              className="w-full rounded-[2rem] object-cover shadow-[var(--shadow-lift)]"
            />
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="Curriculum Areas"
              title="Nine competency areas, taught by practitioners"
              description="Every module is drawn from live site experience — the documentation, conversations and decisions managers actually face."
            />
            <ul className="mt-9 grid gap-3 sm:grid-cols-2">
              {academyModules.map((module, index) => (
                <Reveal as="li" key={module} delay={index * 50}>
                  <div className="border-border/70 flex items-center gap-3 rounded-2xl border px-4 py-3">
                    <Check className="text-emerald h-4 w-4 shrink-0" aria-hidden />
                    <span className="text-navy text-sm font-medium">{module}</span>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section tone="sand">
        <SectionHeading eyebrow="Who It's For" title="Built for three audiences" align="center" />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {audience.map((item, index) => (
            <Reveal key={item.title} delay={index * 100}>
              <div className="lift h-full rounded-3xl bg-card p-8">
                <span className="bg-navy text-navy-foreground grid h-12 w-12 place-items-center rounded-2xl">
                  <item.icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-navy mt-6 text-lg font-semibold">{item.title}</h3>
                <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <Reveal>
            <img
              src={instructorImage}
              alt="Lead instructor of the PropAdmin Property Management Academy"
              width={912}
              height={1104}
              loading="lazy"
              className="w-full max-w-sm rounded-[2rem] object-cover shadow-[var(--shadow-lift)]"
            />
          </Reveal>
          <div>
            <SectionHeading eyebrow="Instructor" title="Hello and welcome!" />
            <p className="text-muted-foreground mt-6 text-base leading-relaxed sm:text-lg">
              We're thrilled to have you meet our dedicated property management expert who guides
              organizations through governance, compliance, operations, leadership and professional
              property management practices.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { value: "22+ years", label: "Industry experience" },
                { value: "1,800+", label: "Professionals trained" },
                { value: "60+", label: "Societies advised" },
              ].map((item) => (
                <div key={item.label} className="bg-sand rounded-2xl p-5">
                  <p className="text-navy font-display text-xl font-semibold">{item.value}</p>
                  <p className="text-muted-foreground mt-1 text-xs">{item.label}</p>
                </div>
              ))}
            </div>
            <ul className="text-muted-foreground mt-8 space-y-3 text-sm">
              <li className="flex gap-3">
                <Check className="text-emerald mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                Designed the SOP framework used across PropAdmin-managed sites
              </li>
              <li className="flex gap-3">
                <Check className="text-emerald mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                Led conveyance and compliance mandates for large co-operative societies
              </li>
              <li className="flex gap-3">
                <Check className="text-emerald mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                Regular speaker on society governance and managerial excellence
              </li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <CTA to="/courses" variant="navy">
                View course catalogue
              </CTA>
              <CTA href="https://www.linkedin.com" variant="outline">
                Connect on LinkedIn
              </CTA>
            </div>
          </div>
        </div>
      </Section>

      <ClosingCTA
        title="Train your team, or start your own certification"
        description="Corporate batches for societies and facility teams, plus open enrolment for individual professionals."
      />
    </>
  );
}