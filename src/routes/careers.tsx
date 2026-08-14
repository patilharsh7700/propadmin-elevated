import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap, HeartHandshake, MapPin, TrendingUp } from "lucide-react";

import { CTA, PageHero, Reveal, Section, SectionHeading } from "@/components/site/primitives";
import { ClosingCTA } from "@/components/site/blocks";
import { careers, company } from "@/data/site";

const title = "Careers at PropAdmin.in | Property Management Jobs in Pune";
const description =
  "Join PropAdmin.in as a property manager, help desk executive, technician, society accountant, compliance executive or academy faculty.";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/careers" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
  component: CareersPage,
});

const benefits = [
  { icon: GraduationCap, title: "In-house academy", body: "Structured certification through the Property Management Academy, funded by us." },
  { icon: TrendingUp, title: "Defined career track", body: "Executive to site manager to portfolio manager, with published competency milestones." },
  { icon: HeartHandshake, title: "Professional environment", body: "SOPs, escalation support and a management team that backs its people on site." },
];

function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build a profession, not just a posting"
        description="We train, certify and promote property professionals — because structured management needs structured careers."
      >
        <CTA href={`mailto:${company.email}?subject=Career%20application`} variant="gold">
          Send your CV
        </CTA>
        <CTA to="/academy" variant="glass">
          About the academy
        </CTA>
      </PageHero>

      <Section>
        <SectionHeading eyebrow="Open Roles" title="Current openings" />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {careers.map((role, index) => (
            <Reveal as="article" key={role.title} delay={(index % 2) * 90}>
              <div className="lift border-border/70 flex h-full flex-col rounded-3xl border p-7">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-navy text-lg font-semibold">{role.title}</h3>
                  <span className="bg-emerald/12 text-emerald rounded-full px-3 py-1 text-[11px] font-semibold">
                    {role.type}
                  </span>
                </div>
                <p className="text-muted-foreground mt-3 flex-1 text-sm leading-relaxed">
                  {role.summary}
                </p>
                <div className="text-muted-foreground mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5" aria-hidden />
                    {role.location}
                  </span>
                  <span>{role.experience}</span>
                </div>
                <div className="mt-6">
                  <CTA
                    href={`mailto:${company.email}?subject=Application: ${encodeURIComponent(role.title)}`}
                    variant="outline"
                    size="sm"
                  >
                    Apply for this role
                  </CTA>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="sand">
        <SectionHeading eyebrow="Why Join" title="What we offer our people" align="center" />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {benefits.map((item, index) => (
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

      <ClosingCTA
        title="Don't see your role listed?"
        description="We're always interested in trained property, facility and accounting professionals."
      />
    </>
  );
}