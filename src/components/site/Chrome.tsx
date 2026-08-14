import { ArrowUp, MessageCircle, Phone } from "lucide-react";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import { company } from "@/data/site";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-[3px] bg-transparent">
      <div
        className="h-full origin-left transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%`, background: "var(--gradient-gold)" }}
      />
    </div>
  );
}

export function FloatingActions() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed right-4 bottom-5 z-50 flex flex-col items-end gap-3 sm:right-6">
      <a
        href={company.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="bg-emerald text-emerald-foreground grid h-13 w-13 place-items-center rounded-full shadow-[var(--shadow-lift)] transition-transform duration-300 hover:scale-110"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      <a
        href={company.phoneHref}
        aria-label={`Call ${company.phone}`}
        className="bg-navy text-navy-foreground grid h-12 w-12 place-items-center rounded-full shadow-[var(--shadow-lift)] transition-transform duration-300 hover:scale-110"
      >
        <Phone className="h-5 w-5" />
      </a>
      <button
        type="button"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={cn(
          "bg-gold text-gold-foreground grid h-11 w-11 place-items-center rounded-full shadow-[var(--shadow-gold)] transition-all duration-300",
          show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0",
        )}
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </div>
  );
}