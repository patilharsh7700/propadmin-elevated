import {
  Activity,
  BookOpen,
  Briefcase,
  Building2,
  Calculator,
  ClipboardCheck,
  FileSignature,
  Hammer,
  Handshake,
  Headset,
  Home,
  KeyRound,
  Scale,
  ShieldCheck,
  Siren,
  UserCheck,
  Users,
  Wrench,
  type LucideIcon,
} from "lucide-react";

import type { Service } from "@/data/site";
import { Reveal } from "./primitives";

const icons: Record<string, LucideIcon> = {
  Activity,
  BookOpen,
  Briefcase,
  Building2,
  Calculator,
  ClipboardCheck,
  FileSignature,
  Hammer,
  Handshake,
  Headset,
  Home,
  KeyRound,
  Scale,
  ShieldCheck,
  Siren,
  UserCheck,
  Users,
  Wrench,
};

export function ServiceCard({ service, index = 0 }: { service: Service; index?: number }) {
  const Icon = icons[service.icon] ?? Building2;
  return (
    <Reveal delay={(index % 3) * 90} as="article" className="h-full">
      <div className="group border-border/70 lift relative h-full overflow-hidden rounded-3xl border bg-card p-7">
        <div
          aria-hidden
          className="bg-emerald/10 absolute -top-16 -right-16 h-40 w-40 rounded-full blur-3xl transition-opacity duration-500 group-hover:opacity-100 opacity-0"
        />
        <div className="bg-navy text-navy-foreground group-hover:bg-emerald relative grid h-12 w-12 place-items-center rounded-2xl transition-colors duration-500">
          <Icon className="h-5 w-5" aria-hidden />
        </div>
        <h3 className="text-navy relative mt-6 text-lg font-semibold">{service.title}</h3>
        <p className="text-muted-foreground relative mt-3 text-sm leading-relaxed">{service.summary}</p>
      </div>
    </Reveal>
  );
}