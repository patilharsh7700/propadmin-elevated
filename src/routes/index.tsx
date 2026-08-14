import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Building2,
  CalendarCheck,
  Check,
  ChevronRight,
  PlayCircle,
  Quote,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";

import heroImage from "@/assets/hero-property.jpg";
import propertyImage from "@/assets/property-management.jpg";
import academyImage from "@/assets/academy.jpg";
import { CTA, Reveal, Section, SectionHeading } from "@/components/site/primitives";
import { ClosingCTA, StatsBand } from "@/components/site/blocks";
import { ServiceCard } from "@/components/site/ServiceCard";
import {
  academyModules,
  caseStudies,
  company,
  consultationTopics,
  propertyTypes,
  services,
  stats,
  testimonials,
  whyChooseUs,
  whyPropAdmin,
} from "@/data/site";

const title = "Integrated Property Management Company in India | PropAdmin.in";
const description =
  "PropAdmin.in delivers integrated property management, housing society management and facility management through trained managers, SOP-driven operations and transparent reporting.";
const siteUrl = "https://propadmin.in"; // Added full URL

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      // Basic Meta
      { title },
      { name: "description", content: description },
      
      // Open Graph (Text only - NO image)
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: siteUrl }, // Changed from "/" to full URL
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "PropAdmin.in" },
      // ❌ NO og:image tags - perfect!
      
      // Twitter (Text only - NO image)
      { name: "twitter:card", content: "summary" }, // Text-only card
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      // ❌ NO twitter:image - perfect!
      
      // SEO
      { name: "robots", content: "index, follow" },
    ],
    links: [
      { rel: "canonical", href: siteUrl }, // Changed from "/" to full URL
      { rel: "icon", href: "/favicon.ico" },
    ],
  }),
  component: Index,
});


function Index() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <WhyChooseUs />
      <ServicesPreview />
      <StatsBand />
      <PropertyManagementSplit />
      <WhyPropAdmin />
      <ConsultationBand />
      <AcademyPreview />
      <CaseStudies />
      <TestimonialsPreview />
      <ClosingCTA />
    </>
  );
}

function Hero() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden">
      <img
        src={heroImage}
        alt="Premium residential and commercial property complex managed by PropAdmin.in"
        width={1920}
        height={1088}
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, oklch(0.17 0.05 262 / 0.94) 0%, oklch(0.17 0.05 262 / 0.78) 45%, oklch(0.17 0.05 262 / 0.45) 100%)",
        }}
      />
      <div
        aria-hidden
        className="bg-emerald/25 pointer-events-none absolute top-1/4 -left-24 h-96 w-96 rounded-full blur-[140px]"
      />
      <div
        aria-hidden
        className="bg-gold/20 pointer-events-none absolute right-0 bottom-10 h-80 w-80 rounded-full blur-[150px]"
      />

      {/* Floating property icons */}
      <div aria-hidden className="pointer-events-none absolute inset-0 hidden lg:block">
        <div className="glass-dark float-slow absolute top-1/3 right-[12%] grid h-16 w-16 place-items-center rounded-2xl">
          <Building2 className="text-gold h-7 w-7" />
        </div>
        <div
          className="glass-dark float-slow absolute top-[58%] right-[26%] grid h-14 w-14 place-items-center rounded-2xl"
          style={{ animationDelay: "1.2s" }}
        >
          <ShieldCheck className="text-emerald-soft h-6 w-6" />
        </div>
        <div
          className="glass-dark float-slow absolute top-[24%] right-[32%] grid h-12 w-12 place-items-center rounded-2xl"
          style={{ animationDelay: "2.4s" }}
        >
          <Wrench className="text-navy-foreground h-5 w-5" />
        </div>
      </div>

      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center px-5 pt-32 pb-24 sm:px-8">
        <Reveal>
          <span className="glass-dark text-navy-foreground/90 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium tracking-[0.16em] uppercase">
            <Sparkles className="text-gold h-3.5 w-3.5" aria-hidden />
            Integrated Property Management
          </span>
        </Reveal>
        <Reveal delay={120}>
          <h1 className="text-navy-foreground mt-7 max-w-4xl text-4xl leading-[1.03] font-semibold sm:text-6xl lg:text-7xl">
            Professional Integrated{" "}
            <span className="text-gold-gradient">Property Management</span>
          </h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="text-navy-foreground/85 mt-6 font-display text-xl font-medium sm:text-2xl">
            Structured Operations. Complete Accountability.
          </p>
        </Reveal>
        <Reveal delay={280}>
          <p className="text-navy-foreground/70 mt-6 max-w-2xl text-base leading-relaxed sm:text-lg">
            PropAdmin.in delivers Integrated Property Management through trained Property Managers,
            Help Desk Executives, and Multi-Skilled Technicians using SOP-driven operations,
            transparent reporting, preventive maintenance, statutory compliance, and governance
            support.
          </p>
        </Reveal>
        <Reveal delay={360}>
          <div className="mt-10 flex flex-wrap gap-3">
            <CTA to="/consultation" variant="gold" size="lg">
              Book Free Consultation
              <ArrowRight className="h-4 w-4" aria-hidden />
            </CTA>
            <CTA to="/services" variant="glass" size="lg">
              Explore Services
            </CTA>
            <CTA to="/about" variant="glass" size="lg">
              <PlayCircle className="h-4 w-4" aria-hidden />
              Watch Company Profile
            </CTA>
          </div>
        </Reveal>

        <div className="text-navy-foreground/60 absolute bottom-8 left-5 flex items-center gap-3 text-[11px] tracking-[0.24em] uppercase sm:left-8">
          <span className="grid h-9 w-5 place-items-start rounded-full border border-white/30 pt-1.5">
            <span className="bg-gold scroll-dot mx-auto block h-1.5 w-1.5 rounded-full" />
          </span>
          Scroll
        </div>
      </div>
    </section>
  );
}

function WhoWeAre() {
  return (
    <Section>
      <div className="grid gap-14 lg:grid-cols-[1fr_1.05fr] lg:items-start">
        <SectionHeading
          eyebrow="Who We Are"
          title="A professional platform for property and managerial excellence"
        />
        <Reveal delay={100} className="space-y-5">
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
          <div className="grid gap-4 pt-4 sm:grid-cols-2">
            <div className="bg-sand rounded-3xl p-6">
              <p className="text-emerald text-[11px] font-semibold tracking-[0.24em] uppercase">
                Mission
              </p>
              <p className="text-navy mt-3 text-sm leading-relaxed font-medium">
                To professionalise property management in India through systems, skills, and
                structured leadership.
              </p>
            </div>
            <div className="surface-navy rounded-3xl p-6">
              <p className="text-gold text-[11px] font-semibold tracking-[0.24em] uppercase">Vision</p>
              <p className="text-navy-foreground mt-3 text-sm leading-relaxed font-medium">
                To become India's most trusted integrated property management company.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

function WhyChooseUs() {
  return (
    <Section tone="sand">
      <SectionHeading
        eyebrow="Why Choose Us"
        title="Capability that shows up on site, every single day"
        description="Trained people, documented systems and measurable outcomes — the three things informal management can never deliver consistently."
      />
      <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {whyChooseUs.map((item, index) => (
          <Reveal as="li" key={item} delay={(index % 3) * 80}>
            <div className="glass-card lift flex h-full items-center gap-4 rounded-2xl px-5 py-5">
              <span className="bg-emerald/12 text-emerald grid h-9 w-9 shrink-0 place-items-center rounded-xl">
                <Check className="h-4 w-4" aria-hidden />
              </span>
              <span className="text-navy text-sm font-semibold">{item}</span>
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}

function ServicesPreview() {
  return (
    <Section>
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          eyebrow="Services"
          title="Eighteen service lines under one accountable team"
          description="From day-to-day operations to compliance, accounting and asset lifecycle planning."
        />
        <Reveal delay={120}>
          <CTA to="/services" variant="outline">
            View all services
            <ChevronRight className="h-4 w-4" aria-hidden />
          </CTA>
        </Reveal>
      </div>
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.slice(0, 9).map((service, index) => (
          <ServiceCard key={service.slug} service={service} index={index} />
        ))}
      </div>
    </Section>
  );
}

function PropertyManagementSplit() {
  return (
    <Section>
      <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <div className="relative">
            <div
              aria-hidden
              className="bg-gold/25 absolute -top-6 -left-6 h-32 w-32 rounded-3xl blur-2xl"
            />
            <img
              src={propertyImage}
              alt="PropAdmin property manager conducting a site round in a residential lobby"
              width={1280}
              height={960}
              loading="lazy"
              className="relative w-full rounded-[2rem] object-cover shadow-[var(--shadow-lift)]"
            />
            <div className="glass-card absolute -right-4 -bottom-8 hidden w-56 rounded-2xl p-5 sm:block">
              <p className="text-emerald text-[11px] font-semibold tracking-[0.2em] uppercase">
                SOP Driven
              </p>
              <p className="text-navy mt-2 text-sm font-semibold">
                Every task documented, evidenced and reviewed
              </p>
            </div>
          </div>
        </Reveal>
        <div>
          <SectionHeading
            eyebrow="Property Management"
            title="Integrated Property Management"
            description="Professional management that protects your asset, ensures compliance, improves governance, reduces operational risks, and delivers measurable value."
          />
          <ul className="mt-9 grid gap-3 sm:grid-cols-2">
            {propertyTypes.map((type, index) => (
              <Reveal as="li" key={type} delay={index * 60}>
                <div className="border-border/70 flex items-center gap-3 rounded-2xl border px-4 py-3">
                  <span className="bg-gold h-1.5 w-1.5 rounded-full" aria-hidden />
                  <span className="text-navy text-sm font-medium">{type}</span>
                </div>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={200}>
            <div className="mt-9">
              <CTA to="/property-management" variant="navy">
                Explore property management
                <ArrowRight className="h-4 w-4" aria-hidden />
              </CTA>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

function WhyPropAdmin() {
  return (
    <Section tone="sand">
      <SectionHeading
        eyebrow="Why PropAdmin"
        title="Ten operating principles behind every engagement"
        align="center"
      />
      <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {whyPropAdmin.map((item, index) => (
          <Reveal as="li" key={item} delay={(index % 5) * 70}>
            <div className="lift h-full rounded-2xl bg-card p-6">
              <span className="text-gold font-display text-2xl font-semibold">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="text-navy mt-3 text-sm font-semibold">{item}</p>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}

function ConsultationBand() {
  return (
    <Section tone="navy">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div>
          <SectionHeading
            tone="navy"
            eyebrow="Consultation"
            title="Schedule a free 30-minute consultation"
            description="Get expert clarity on your property or society-related challenges. Our experts understand your Needs, Difficulties and Priorities (NDPs)."
          />
          <Reveal delay={140}>
            <div className="mt-9 flex flex-wrap gap-3">
              <CTA to="/consultation" variant="gold">
                <CalendarCheck className="h-4 w-4" aria-hidden />
                Book Appointment
              </CTA>
              <CTA href={company.phoneHref} variant="glass">
                Call Now — {company.phone}
              </CTA>
            </div>
          </Reveal>
        </div>
        <Reveal delay={120}>
          <div className="glass-dark rounded-3xl p-8">
            <p className="text-gold text-[11px] font-semibold tracking-[0.24em] uppercase">
              Topics we cover
            </p>
            <ul className="mt-5 grid gap-x-6 gap-y-3 sm:grid-cols-2">
              {consultationTopics.map((topic) => (
                <li key={topic} className="text-navy-foreground/85 flex items-center gap-2 text-sm">
                  <Check className="text-emerald-soft h-4 w-4 shrink-0" aria-hidden />
                  {topic}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

function AcademyPreview() {
  return (
    <Section>
      <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading
            eyebrow="Training Academy"
            title="Property Management Academy"
            description="Professional training designed for property managers, committee members, facility professionals, and aspiring managers."
          />
          <div className="mt-8 flex flex-wrap gap-2">
            {academyModules.map((module, index) => (
              <Reveal key={module} delay={index * 50}>
                <span className="bg-sand text-navy rounded-full px-4 py-2 text-xs font-semibold">
                  {module}
                </span>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <div className="mt-9 flex flex-wrap gap-3">
              <CTA to="/academy" variant="navy">
                About the academy
              </CTA>
              <CTA to="/courses" variant="outline">
                Browse courses
              </CTA>
            </div>
          </Reveal>
        </div>
        <Reveal delay={100}>
          <img
            src={academyImage}
            alt="Property management training session in progress"
            width={1280}
            height={960}
            loading="lazy"
            className="w-full rounded-[2rem] object-cover shadow-[var(--shadow-lift)]"
          />
        </Reveal>
      </div>
    </Section>
  );
}

function CaseStudies() {
  return (
    <Section tone="sand">
      <SectionHeading
        eyebrow="Case Studies"
        title="Outcomes we can point to"
        description="Representative engagements across societies, commercial assets and mixed-use developments."
      />
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
  );
}

function TestimonialsPreview() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Testimonials"
        title="Trusted by chairmen, builders, owners and residents"
        align="center"
      />
      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {testimonials.slice(0, 3).map((item, index) => (
          <Reveal as="article" key={item.name} delay={index * 100}>
            <figure className="glass-card lift h-full rounded-3xl p-8">
              <Quote className="text-gold h-7 w-7" aria-hidden />
              <blockquote className="text-navy mt-5 text-sm leading-relaxed">{item.quote}</blockquote>
              <figcaption className="mt-6">
                <span className="text-navy block text-sm font-semibold">{item.name}</span>
                <span className="text-muted-foreground block text-xs">{item.role}</span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
      <Reveal delay={200} className="mt-10 text-center">
        <Link
          to="/testimonials"
          className="text-emerald inline-flex items-center gap-2 text-sm font-semibold hover:underline"
        >
          Read all client reviews
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </Reveal>
    </Section>
  );
}

