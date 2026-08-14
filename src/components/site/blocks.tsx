import { stats } from "@/data/site";
import { CTA, Counter, Reveal, Section } from "./primitives";

export function StatsBand() {
  return (
    <Section tone="navy">
      <div
        aria-hidden
        className="bg-gold/15 pointer-events-none absolute top-0 left-1/3 h-72 w-72 rounded-full blur-[140px]"
      />
      <div className="relative grid gap-8 sm:grid-cols-3 lg:grid-cols-6">
        {stats.map((stat, index) => (
          <Reveal key={stat.label} delay={index * 70}>
            <p className="text-gold font-display text-4xl font-semibold lg:text-5xl">
              <Counter value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="text-navy-foreground/70 mt-3 text-sm">{stat.label}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function ClosingCTA({
  title = "Let's build better property management together",
  description = "Whether you're a Housing Society, Property Owner, Builder, Investor, or Resident, we're here to help.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <Section tone="navy">
      <div
        aria-hidden
        className="bg-emerald/20 pointer-events-none absolute -bottom-24 left-1/4 h-72 w-72 rounded-full blur-[140px]"
      />
      <Reveal className="relative mx-auto max-w-3xl text-center">
        <h2 className="text-navy-foreground text-3xl leading-tight font-semibold sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        <p className="text-navy-foreground/70 mt-6 text-base leading-relaxed sm:text-lg">
          {description}
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <CTA to="/contact" variant="gold" size="lg">
            Talk to our team
          </CTA>
          <CTA to="/consultation" variant="glass" size="lg">
            Book free consultation
          </CTA>
        </div>
      </Reveal>
    </Section>
  );
}