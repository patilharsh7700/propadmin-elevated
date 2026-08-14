import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";

import { CTA, PageHero, Reveal, Section } from "@/components/site/primitives";
import { company, services } from "@/data/site";
import { submitContact } from "@/actions/contact";

const title = "Contact PropAdmin.in | Property Management Enquiry";
const description =
  "Contact PropAdmin.in for property management, housing society management, facility management, accounting and compliance support. Email info@propadmin.in or call +91 73875 45354.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const contactSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(80),
  lastName: z.string().trim().min(1, "Last name is required").max(80),
  email: z.string().trim().email("Enter a valid email address").max(255),
  phone: z.string().trim().min(8, "Enter a valid phone number").max(20),
  organisation: z.string().trim().max(160).optional(),
  propertyType: z.string().trim().max(80).optional(),
  city: z.string().trim().max(80).optional(),
  subject: z.string().trim().min(1, "Subject is required").max(160),
  message: z.string().trim().min(1, "Message is required").max(1000),
  interest: z.string().trim().max(160).optional(),
  appointmentDate: z.string().trim().max(40).optional(),
});

const propertyTypeOptions = [
  "Housing Society",
  "Residential Apartment",
  "Commercial Complex",
  "Office Building",
  "Retail Space",
  "Mixed Use Development",
  "Industrial Property",
];

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    // ✅ FIX: Prevent double submission
    if (submitting) return;
    
    const form = event.currentTarget;
    const raw = Object.fromEntries(new FormData(form).entries());
    const parsed = contactSchema.safeParse(raw);

    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form and try again.");
      return;
    }

    setSubmitting(true);

    try {
      const result = await submitContact(parsed.data);
      
      if (!result.success) {
        throw new Error(result.error);
      }

      form.reset();
      toast.success("Thank you — your enquiry has been recorded", {
        description: `Our team will respond to ${parsed.data.email} within one business day.`,
      });

    } catch (error) {
      console.error("Submit error:", error);
      toast.error(
        error instanceof Error 
          ? error.message 
          : "Something went wrong. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's build better property management together"
        description="Whether you're a Housing Society, Property Owner, Builder, Investor, or Resident, we're here to help."
      >
        <CTA href={company.phoneHref} variant="gold">
          <Phone className="h-4 w-4" aria-hidden />
          Click to call
        </CTA>
        <CTA href={company.whatsapp} variant="glass">
          <MessageCircle className="h-4 w-4" aria-hidden />
          WhatsApp us
        </CTA>
      </PageHero>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.25fr_1fr] lg:items-start">
          <Reveal>
            <form onSubmit={onSubmit} className="glass-card rounded-[2rem] p-8 sm:p-10" noValidate>
              <h2 className="text-navy text-2xl font-semibold">Send us an enquiry</h2>
              <p className="text-muted-foreground mt-2 text-sm">
                Share a few details and the right specialist will get back to you.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <Field label="First name" name="firstName" required />
                <Field label="Last name" name="lastName" required />
                <Field label="Email" name="email" type="email" required />
                <Field label="Phone number" name="phone" type="tel" required />
                <Field label="Company / Society name" name="organisation" className="sm:col-span-2" />
                <div>
                  <Label htmlFor="propertyType">Property type</Label>
                  <select
                    id="propertyType"
                    name="propertyType"
                    defaultValue=""
                    className="border-border/80 focus:border-emerald focus:ring-emerald/30 h-11 w-full rounded-xl border bg-card px-4 text-sm outline-none focus:ring-2"
                  >
                    <option value="">Select</option>
                    {propertyTypeOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
                <Field label="City" name="city" />
                <div className="sm:col-span-2">
                  <Label htmlFor="interest">Services interested in</Label>
                  <select
                    id="interest"
                    name="interest"
                    defaultValue=""
                    className="border-border/80 focus:border-emerald focus:ring-emerald/30 h-11 w-full rounded-xl border bg-card px-4 text-sm outline-none focus:ring-2"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service.slug} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                </div>
                <Field label="Subject" name="subject" required className="sm:col-span-2" />
                <div className="sm:col-span-2">
                  <Label htmlFor="appointmentDate">Preferred appointment date</Label>
                  <input
                    id="appointmentDate"
                    name="appointmentDate"
                    type="date"
                    className="border-border/80 focus:border-emerald focus:ring-emerald/30 h-11 w-full rounded-xl border bg-card px-4 text-sm outline-none focus:ring-2"
                  />
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="message">Message *</Label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    maxLength={1000}
                    required
                    className="border-border/80 focus:border-emerald focus:ring-emerald/30 w-full rounded-xl border bg-card px-4 py-3 text-sm outline-none focus:ring-2"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="bg-gold text-gold-foreground mt-8 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full text-sm font-semibold shadow-[var(--shadow-gold)] transition-all hover:brightness-105 disabled:opacity-60"
              >
                <Send className="h-4 w-4" aria-hidden />
                {submitting ? "Sending…" : "Submit enquiry"}
              </button>
            </form>
          </Reveal>

          <div className="space-y-6">
            <Reveal delay={100}>
              <div className="surface-navy rounded-3xl p-8">
                <p className="text-gold text-[11px] font-semibold tracking-[0.24em] uppercase">
                  Contact details
                </p>
                <ul className="text-navy-foreground/85 mt-6 space-y-5 text-sm">
                  <li className="flex items-start gap-4">
                    <Mail className="text-gold mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                    <a href={`mailto:${company.email}`} className="hover:text-gold transition-colors">
                      {company.email}
                    </a>
                  </li>
                  <li className="flex items-start gap-4">
                    <Phone className="text-gold mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                    <a href={company.phoneHref} className="hover:text-gold transition-colors">
                      {company.phone}
                    </a>
                  </li>
                  <li className="flex items-start gap-4">
                    <Clock className="text-gold mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                    {company.hours}
                  </li>
                  <li className="flex items-start gap-4">
                    <MapPin className="text-gold mt-0.5 h-4 w-4 shrink-0" aria-hidden />
                    {company.address}
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="border-border/70 overflow-hidden rounded-3xl border">
                <iframe
                  title="PropAdmin.in location map"
                  src="https://www.google.com/maps?q=Pune,Maharashtra,India&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-72 w-full border-0"
                />
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="bg-sand rounded-3xl p-8">
                <p className="text-navy text-sm font-semibold">Prefer to talk it through?</p>
                <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                  Book a free 30-minute consultation and we'll map your Needs, Difficulties and
                  Priorities before proposing anything.
                </p>
                <div className="mt-5">
                  <CTA to="/consultation" variant="navy" size="sm">
                    Book free consultation
                  </CTA>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>
    </>
  );
}

function Label({ htmlFor, children }: { htmlFor: string; children: React.ReactNode }) {
  return (
    <label htmlFor={htmlFor} className="text-navy mb-2 block text-xs font-semibold">
      {children}
    </label>
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
      <Label htmlFor={name}>
        {label}
        {required ? " *" : ""}
      </Label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        maxLength={255}
        className="border-border/80 focus:border-emerald focus:ring-emerald/30 h-11 w-full rounded-xl border bg-card px-4 text-sm outline-none focus:ring-2"
      />
    </div>
  );
}
