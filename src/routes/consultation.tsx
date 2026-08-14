import { createFileRoute } from "@tanstack/react-router";
import { CalendarCheck, Check, Clock, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { CTA, PageHero, Reveal, Section, SectionHeading } from "@/components/site/primitives";
import { company, consultationTopics } from "@/data/site";

const title = "Free 30-Minute Property Consultation | PropAdmin.in";
const description =
  "Book a free 30-minute consultation with PropAdmin experts on property operations, society governance, accounting, compliance, conveyance and legal matters.";

export const Route = createFileRoute("/consultation")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/consultation" },
    ],
    links: [{ rel: "canonical", href: "/consultation" }],
  }),
  component: ConsultationPage,
});

const slots = ["10:00 AM", "11:00 AM", "12:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM"];

const steps = [
  { title: "Share your context", body: "Tell us about the property, society or portfolio and the issues you're facing." },
  { title: "Understand your NDPs", body: "Our expert maps your Needs, Difficulties and Priorities in a focused 30-minute call." },
  { title: "Receive a clear direction", body: "You leave with practical next steps — whether or not you engage us." },
];

function ConsultationPage() {
  const [slot, setSlot] = useState<string | null>(null);
  const [date, setDate] = useState("");

  return (
    <>
      <PageHero
        eyebrow="Consultation"
        title="Schedule a free 30-minute consultation"
        description="Get expert clarity on your property or society-related challenges. Our experts understand your Needs, Difficulties and Priorities (NDPs)."
      >
        <CTA href={company.phoneHref} variant="gold">
          <Phone className="h-4 w-4" aria-hidden />
          Call Now — {company.phone}
        </CTA>
      </PageHero>

      <Section>
        <div className="grid gap-14 lg:grid-cols-[1fr_1.05fr] lg:items-start">
          <div>
            <SectionHeading eyebrow="Topics" title="What we can cover in the call" />
            <ul className="mt-9 grid gap-3 sm:grid-cols-2">
              {consultationTopics.map((topic, index) => (
                <Reveal as="li" key={topic} delay={index * 50}>
                  <div className="bg-sand flex items-center gap-3 rounded-2xl px-4 py-3">
                    <Check className="text-emerald h-4 w-4 shrink-0" aria-hidden />
                    <span className="text-navy text-sm font-medium">{topic}</span>
                  </div>
                </Reveal>
              ))}
            </ul>
            <div className="mt-10 grid gap-5">
              {steps.map((step, index) => (
                <Reveal key={step.title} delay={index * 90}>
                  <div className="border-border/70 flex gap-5 rounded-2xl border p-6">
                    <span className="text-gold font-display text-2xl font-semibold">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-navy text-base font-semibold">{step.title}</h3>
                      <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{step.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={120}>
            <form
              className="glass-card rounded-[2rem] p-8"
              onSubmit={(event) => {
                event.preventDefault();
                if (!date || !slot) {
                  toast.error("Please choose a date and a time slot.");
                  return;
                }
                toast.success("Request received", {
                  description: `We will confirm your ${slot} slot on ${date} by email and phone.`,
                });
                (event.target as HTMLFormElement).reset();
                setSlot(null);
                setDate("");
              }}
            >
              <p className="text-emerald text-[11px] font-semibold tracking-[0.24em] uppercase">
                Appointment Booking
              </p>
              <h2 className="text-navy mt-3 text-2xl font-semibold">Reserve your 30-minute slot</h2>
              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                <Field label="Full name" name="name" required />
                <Field label="Phone number" name="phone" type="tel" required />
                <Field label="Email" name="email" type="email" required className="sm:col-span-2" />
                <Field label="Society / Company" name="company" className="sm:col-span-2" />
                <div className="sm:col-span-2">
                  <label className="text-navy mb-2 block text-xs font-semibold" htmlFor="date">
                    Preferred date
                  </label>
                  <input
                    id="date"
                    name="date"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="border-border/80 focus:border-emerald focus:ring-emerald/30 h-11 w-full rounded-xl border bg-card px-4 text-sm outline-none focus:ring-2"
                  />
                </div>
              </div>

              <p className="text-navy mt-7 flex items-center gap-2 text-xs font-semibold">
                <Clock className="h-4 w-4" aria-hidden />
                Available slots
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {slots.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setSlot(option)}
                    aria-pressed={slot === option}
                    className={
                      slot === option
                        ? "bg-navy text-navy-foreground rounded-full px-4 py-2 text-xs font-semibold"
                        : "border-border/80 text-navy hover:border-navy/50 rounded-full border px-4 py-2 text-xs font-semibold transition-colors"
                    }
                  >
                    {option}
                  </button>
                ))}
              </div>

              <div className="mt-7">
                <label className="text-navy mb-2 block text-xs font-semibold" htmlFor="brief">
                  What would you like to discuss?
                </label>
                <textarea
                  id="brief"
                  name="brief"
                  rows={4}
                  maxLength={1000}
                  className="border-border/80 focus:border-emerald focus:ring-emerald/30 w-full rounded-xl border bg-card px-4 py-3 text-sm outline-none focus:ring-2"
                />
              </div>

              <button
                type="submit"
                className="bg-gold text-gold-foreground mt-7 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full text-sm font-semibold shadow-[var(--shadow-gold)] transition-all hover:brightness-105"
              >
                <CalendarCheck className="h-4 w-4" aria-hidden />
                Book Appointment
              </button>
              <p className="text-muted-foreground mt-4 text-center text-xs">
                Consultation hours: {company.hours}
              </p>
            </form>
          </Reveal>
        </div>
      </Section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  className,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="text-navy mb-2 block text-xs font-semibold" htmlFor={name}>
        {label}
        {required ? " *" : ""}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        maxLength={160}
        className="border-border/80 focus:border-emerald focus:ring-emerald/30 h-11 w-full rounded-xl border bg-card px-4 text-sm outline-none focus:ring-2"
      />
    </div>
  );
}