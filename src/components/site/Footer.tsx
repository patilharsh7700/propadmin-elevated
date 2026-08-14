import { Link } from "@tanstack/react-router";
import { Clock, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";

import { company, services } from "@/data/site";

const columns = [
  {
    heading: "Company",
    links: [
      { label: "About Us", to: "/about" },
      { label: "Careers", to: "/careers" },
      { label: "Testimonials", to: "/testimonials" },
      { label: "Blog", to: "/blog" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    heading: "Solutions",
    links: [
      { label: "Property Management", to: "/property-management" },
      { label: "Society Management", to: "/society-management" },
      { label: "Facility Management", to: "/facility-management" },
      { label: "All Services", to: "/services" },
      { label: "Free Consultation", to: "/consultation" },
    ],
  },
  {
    heading: "Academy",
    links: [
      { label: "Training Academy", to: "/academy" },
      { label: "Courses", to: "/courses" },
      { label: "FAQ", to: "/faq" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="surface-navy relative overflow-hidden px-5 pt-20 pb-10 sm:px-8">
      <div
        aria-hidden
        className="bg-emerald/20 pointer-events-none absolute -top-24 right-10 h-72 w-72 rounded-full blur-[130px]"
      />
      <div className="relative mx-auto w-full max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <Link to="/" className="flex items-center gap-3">
              <span className="bg-gold text-gold-foreground font-display grid h-10 w-10 place-items-center rounded-xl font-bold">
                P
              </span>
              <span className="text-navy-foreground font-display text-lg font-semibold">
                PropAdmin<span className="text-gold">.in</span>
              </span>
            </Link>
            <p className="text-navy-foreground/70 mt-5 max-w-sm text-sm leading-relaxed">
              Integrated property management delivered through trained property managers, help desk
              executives and multi-skilled technicians — with SOP-driven operations and complete
              accountability.
            </p>
            <ul className="text-navy-foreground/75 mt-6 space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Mail className="text-gold h-4 w-4 shrink-0" aria-hidden />
                <a href={`mailto:${company.email}`} className="hover:text-gold transition-colors">
                  {company.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-gold h-4 w-4 shrink-0" aria-hidden />
                <a href={company.phoneHref} className="hover:text-gold transition-colors">
                  {company.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="text-gold h-4 w-4 shrink-0" aria-hidden />
                {company.hours}
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="text-gold h-4 w-4 shrink-0" aria-hidden />
                {company.address}
              </li>
            </ul>
            <div className="mt-6 flex gap-3">
              <a
                href="https://www.linkedin.com"
                aria-label="LinkedIn"
                className="glass-dark text-navy-foreground hover:text-gold grid h-10 w-10 place-items-center rounded-xl transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://twitter.com"
                aria-label="X"
                className="glass-dark text-navy-foreground hover:text-gold grid h-10 w-10 place-items-center rounded-xl transition-colors"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {columns.map((column) => (
            <div key={column.heading}>
              <p className="text-gold mb-5 text-[11px] font-semibold tracking-[0.24em] uppercase">
                {column.heading}
              </p>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-navy-foreground/70 hover:text-navy-foreground text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 border-t border-white/10 pt-8">
          <p className="text-navy-foreground/55 text-xs leading-relaxed">
            Service lines:{" "}
            {services.map((service, index) => (
              <span key={service.slug}>
                {service.title}
                {index < services.length - 1 ? " · " : ""}
              </span>
            ))}
          </p>
          <div className="text-navy-foreground/55 mt-6 flex flex-col gap-2 text-xs sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} PropAdmin.in — Your Property Manager. All rights reserved.</p>
            <p>Professionalising property management in India.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}