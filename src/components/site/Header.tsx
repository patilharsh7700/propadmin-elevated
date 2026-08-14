import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import { company } from "@/data/site";
import { CTA } from "./primitives";

const megaMenu: { heading: string; links: { label: string; to: string; note: string }[] }[] = [
  {
    heading: "Management",
    links: [
      {
        label: "Integrated Property Management",
        to: "/property-management",
        note: "Managers, help desk, technicians",
      },
      {
        label: "Housing Society Management",
        to: "/society-management",
        note: "Committee, members, records",
      },
      { label: "Facility Management", to: "/facility-management", note: "Upkeep under measurable SLAs" },
    ],
  },
  {
    heading: "Advisory",
    links: [
      { label: "All Services", to: "/services", note: "18 service lines" },
      { label: "Free Consultation", to: "/consultation", note: "30-minute NDP review" },
      { label: "Case Studies", to: "/about", note: "Measured outcomes" },
    ],
  },
  {
    heading: "Academy",
    links: [
      { label: "Training Academy", to: "/academy", note: "Certification programmes" },
      { label: "Courses", to: "/courses", note: "Foundation to advanced" },
      { label: "Careers", to: "/careers", note: "Join the team" },
    ],
  },
];

const navLinks = [
  { label: "About", to: "/about" },
  { label: "Blog", to: "/blog" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMenuOpen(false);
  }, [pathname]);

  return (
    <div className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "transition-all duration-500",
          scrolled ? "bg-navy-deep/85 backdrop-blur-xl" : "bg-transparent",
        )}
      >
        <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
          <Link to="/" className="group flex items-center gap-3">
            <span className="bg-gold text-gold-foreground font-display grid h-10 w-10 place-items-center rounded-xl text-base font-bold">
              P
            </span>
            <span className="leading-tight">
              <span className="text-navy-foreground font-display block text-base font-semibold">
                PropAdmin<span className="text-gold">.in</span>
              </span>
              <span className="text-navy-foreground/60 block text-[11px] tracking-[0.18em] uppercase">
                Your Property Manager
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            <div
              className="relative"
              onMouseEnter={() => setMenuOpen(true)}
              onMouseLeave={() => setMenuOpen(false)}
            >
              <button
                type="button"
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((v) => !v)}
                className="text-navy-foreground/85 hover:text-navy-foreground flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors"
              >
                Services
                <ChevronDown
                  className={cn("h-4 w-4 transition-transform", menuOpen && "rotate-180")}
                  aria-hidden
                />
              </button>
              <div
                className={cn(
                  "absolute top-full left-1/2 w-[46rem] -translate-x-1/2 pt-3 transition-all duration-300",
                  menuOpen
                    ? "pointer-events-auto translate-y-0 opacity-100"
                    : "pointer-events-none translate-y-2 opacity-0",
                )}
              >
                <div className="glass-card grid grid-cols-3 gap-6 rounded-3xl p-7">
                  {megaMenu.map((group) => (
                    <div key={group.heading}>
                      <p className="text-emerald mb-3 text-[11px] font-semibold tracking-[0.22em] uppercase">
                        {group.heading}
                      </p>
                      <ul className="space-y-3">
                        {group.links.map((link) => (
                          <li key={link.label}>
                            <Link
                              to={link.to}
                              className="group hover:bg-sand block rounded-xl px-3 py-2 transition-colors"
                            >
                              <span className="text-navy block text-sm font-semibold">
                                {link.label}
                              </span>
                              <span className="text-muted-foreground block text-xs">{link.note}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-navy-foreground/85 hover:text-navy-foreground rounded-full px-4 py-2 text-sm font-medium transition-colors"
                activeProps={{ className: "text-gold" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={company.phoneHref}
              className="text-navy-foreground/80 hover:text-gold flex items-center gap-2 text-sm font-medium transition-colors"
            >
              <Phone className="h-4 w-4" aria-hidden />
              {company.phone}
            </a>
            <CTA to="/consultation" variant="gold" size="sm">
              Book Consultation
            </CTA>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className="glass-dark text-navy-foreground grid h-11 w-11 place-items-center rounded-xl lg:hidden"
          >
            {mobileOpen ? <Menu className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "bg-navy-deep/97 fixed inset-0 z-50 overflow-y-auto backdrop-blur-xl transition-all duration-300 lg:hidden",
          mobileOpen ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <div className="flex h-20 items-center justify-between px-5">
          <span className="text-navy-foreground font-display font-semibold">
            PropAdmin<span className="text-gold">.in</span>
          </span>
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
            className="glass-dark text-navy-foreground grid h-11 w-11 place-items-center rounded-xl"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="space-y-6 px-5 pb-16" aria-label="Mobile">
          {megaMenu.map((group) => (
            <div key={group.heading}>
              <p className="text-gold mb-2 text-[11px] font-semibold tracking-[0.22em] uppercase">
                {group.heading}
              </p>
              <ul className="space-y-1">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-navy-foreground/85 block py-2 text-base font-medium"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="border-t border-white/10 pt-5">
            <ul className="space-y-1">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-navy-foreground/85 block py-2 text-base font-medium">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-3 pt-2">
            <CTA to="/consultation" variant="gold">
              Book Free Consultation
            </CTA>
            <CTA href={company.phoneHref} variant="glass">
              Call {company.phone}
            </CTA>
          </div>
        </nav>
      </div>
    </div>
  );
}