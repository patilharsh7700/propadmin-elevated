import { Link } from "@tanstack/react-router";
import { cva, type VariantProps } from "class-variance-authority";
import { useEffect, useRef, useState, type ReactNode } from "react";

import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/* Scroll reveal (AOS-style, IntersectionObserver based)               */
/* ------------------------------------------------------------------ */
export function Reveal({
  children,
  delay = 0,
  className,
  as: As = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <As
      ref={ref as never}
      data-visible={visible}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("reveal", className)}
    >
      {children}
    </As>
  );
}

/* ------------------------------------------------------------------ */
/* Animated counter                                                    */
/* ------------------------------------------------------------------ */
export function Counter({
  value,
  suffix = "",
  prefix = "",
  duration = 1600,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    let frame = 0;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setDisplay(Math.round(value * eased));
          if (p < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {display.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* CTA button                                                          */
/* ------------------------------------------------------------------ */
const ctaVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60",
  {
    variants: {
      variant: {
        gold: "bg-gold text-gold-foreground shadow-[var(--shadow-gold)] hover:brightness-105 hover:-translate-y-0.5",
        emerald:
          "bg-emerald text-emerald-foreground shadow-[var(--shadow-soft)] hover:brightness-105 hover:-translate-y-0.5",
        navy: "bg-navy text-navy-foreground hover:bg-navy-deep hover:-translate-y-0.5",
        outline:
          "border border-navy/25 text-navy hover:border-navy/60 hover:bg-navy/5 hover:-translate-y-0.5",
        glass:
          "glass-dark text-navy-foreground hover:bg-white/20 hover:-translate-y-0.5",
      },
      size: {
        md: "h-11 px-6",
        lg: "h-13 px-8 text-base",
        sm: "h-9 px-4 text-xs",
      },
    },
    defaultVariants: { variant: "gold", size: "md" },
  },
);

type CTAProps = VariantProps<typeof ctaVariants> & {
  children: ReactNode;
  className?: string;
} & ({ to: string; href?: never } | { href: string; to?: never } | { to?: never; href?: never });

export function CTA({ children, className, variant, size, to, href, ...rest }: CTAProps) {
  const classes = cn(ctaVariants({ variant, size }), className);
  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  );
}

/* ------------------------------------------------------------------ */
/* Layout helpers                                                      */
/* ------------------------------------------------------------------ */
export function Section({
  children,
  className,
  id,
  tone = "light",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "light" | "sand" | "navy";
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative overflow-hidden px-5 py-20 sm:px-8 lg:py-28",
        tone === "sand" && "bg-sand",
        tone === "navy" && "surface-navy",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-7xl">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "navy";
}) {
  return (
    <Reveal
      className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}
    >
      {eyebrow ? (
        <p
          className={cn(
            "mb-4 text-xs font-semibold uppercase tracking-[0.28em]",
            tone === "navy" ? "text-gold" : "text-emerald",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "text-3xl leading-tight font-semibold sm:text-4xl lg:text-5xl",
          tone === "navy" ? "text-navy-foreground" : "text-navy",
        )}
      >
        {title}
      </h2>
      <div className={cn("rule-gold mt-6", align === "center" && "mx-auto")} />
      {description ? (
        <p
          className={cn(
            "mt-6 text-base leading-relaxed sm:text-lg",
            tone === "navy" ? "text-navy-foreground/75" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <header className="surface-navy relative overflow-hidden px-5 pt-36 pb-20 sm:px-8 lg:pt-44 lg:pb-28">
      <div
        aria-hidden
        className="bg-emerald/25 pointer-events-none absolute -top-32 -right-20 h-96 w-96 rounded-full blur-[120px]"
      />
      <div
        aria-hidden
        className="bg-gold/20 pointer-events-none absolute -bottom-40 -left-16 h-80 w-80 rounded-full blur-[130px]"
      />
      <div className="relative mx-auto w-full max-w-7xl">
        <Reveal>
          <p className="text-gold mb-5 text-xs font-semibold tracking-[0.3em] uppercase">
            {eyebrow}
          </p>
          <h1 className="text-navy-foreground max-w-4xl text-4xl leading-[1.05] font-semibold sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description ? (
            <p className="text-navy-foreground/75 mt-6 max-w-2xl text-base leading-relaxed sm:text-lg">
              {description}
            </p>
          ) : null}
          {children ? <div className="mt-9 flex flex-wrap gap-3">{children}</div> : null}
        </Reveal>
      </div>
    </header>
  );
}