export const company = {
  name: "PropAdmin.in",
  tagline: "Your Property Manager",
  email: "info@propadmin.in",
  phone: "+91 73875 45354",
  phoneHref: "tel:+917387545354",
  whatsapp: "https://wa.me/917387545354",
  hours: "Mon – Sat, 9:30 AM – 7:00 PM IST",
  address: "Pune, Maharashtra, India",
};

export const whyChooseUs = [
  "Skilled Professionals",
  "Certified Property Managers",
  "Help Desk Executives",
  "Multi-Skilled Technicians",
  "SOP Based Operations",
  "Complete Accountability",
  "Preventive Maintenance",
  "Vendor Coordination",
  "Statutory Compliance",
  "Financial Transparency",
  "Governance Support",
  "Digital Reporting",
  "Dedicated Customer Support",
  "Performance Monitoring",
];

export const whyPropAdmin = [
  "Structured Operations",
  "Professional Workforce",
  "Transparent Communication",
  "Defined SOPs",
  "Compliance Ready Systems",
  "Preventive Maintenance",
  "Performance Metrics",
  "Digital Reporting",
  "Governance Excellence",
  "Long Term Asset Protection",
];

export type Service = {
  slug: string;
  title: string;
  summary: string;
  icon: string;
};

export const services: Service[] = [
  {
    slug: "integrated-property-management",
    title: "Integrated Property Management",
    summary:
      "End-to-end management of people, processes and assets through trained managers and SOP-driven operations.",
    icon: "Building2",
  },
  {
    slug: "housing-society-management",
    title: "Housing Society Management",
    summary:
      "Committee support, member services, meetings, records and day-to-day society administration.",
    icon: "Users",
  },
  {
    slug: "facility-management",
    title: "Facility Management",
    summary:
      "Housekeeping, security coordination, technical services and common-area upkeep under measurable SLAs.",
    icon: "Wrench",
  },
  {
    slug: "property-maintenance",
    title: "Property Maintenance",
    summary:
      "Planned preventive maintenance, breakdown response and asset condition tracking.",
    icon: "Hammer",
  },
  {
    slug: "property-accounting",
    title: "Property Accounting",
    summary: "Budgeting, billing, collections, payables and owner reporting with a clean audit trail.",
    icon: "Calculator",
  },
  {
    slug: "society-accounting",
    title: "Society Accounting",
    summary:
      "Maintenance billing, receipts, statutory books, audit coordination and member statements.",
    icon: "BookOpen",
  },
  {
    slug: "vendor-management",
    title: "Vendor Management",
    summary: "Empanelment, rate benchmarking, contract governance and performance review of vendors.",
    icon: "Handshake",
  },
  {
    slug: "resident-help-desk",
    title: "Resident Help Desk",
    summary: "Single window ticketing for residents with escalation matrix and closure tracking.",
    icon: "Headset",
  },
  {
    slug: "property-inspection",
    title: "Property Inspection",
    summary: "Scheduled site audits with photographic evidence and corrective action plans.",
    icon: "ClipboardCheck",
  },
  {
    slug: "compliance-management",
    title: "Compliance Management",
    summary: "Statutory registers, returns, licences, fire and lift compliance calendars.",
    icon: "ShieldCheck",
  },
  {
    slug: "legal-documentation",
    title: "Legal Documentation",
    summary: "Bye-laws, agreements, notices, resolutions and record management support.",
    icon: "Scale",
  },
  {
    slug: "conveyance-assistance",
    title: "Conveyance Assistance",
    summary: "Deemed conveyance and land title documentation guidance from filing to completion.",
    icon: "FileSignature",
  },
  {
    slug: "rental-management",
    title: "Rental Management",
    summary: "Tenant sourcing coordination, agreements, rent tracking and renewals.",
    icon: "KeyRound",
  },
  {
    slug: "tenant-management",
    title: "Tenant Management",
    summary: "Onboarding, verification, move-in / move-out and grievance handling.",
    icon: "UserCheck",
  },
  {
    slug: "commercial-property-management",
    title: "Commercial Property Management",
    summary: "Office parks, retail and mixed-use assets managed for uptime and tenant experience.",
    icon: "Briefcase",
  },
  {
    slug: "residential-property-management",
    title: "Residential Property Management",
    summary: "Townships, apartments and gated communities with resident-first operations.",
    icon: "Home",
  },
  {
    slug: "asset-lifecycle-management",
    title: "Asset Lifecycle Management",
    summary: "Asset registers, condition scoring, replacement planning and capex advisory.",
    icon: "Activity",
  },
  {
    slug: "emergency-response",
    title: "Emergency Response Coordination",
    summary: "24x7 escalation protocols for fire, water, lift, electrical and security incidents.",
    icon: "Siren",
  },
];

export const stats = [
  { value: 100, suffix: "+", label: "Managed Properties" },
  { value: 5000, suffix: "+", label: "Residents Served" },
  { value: 100, suffix: "+", label: "Professionals" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 24, suffix: "x7", label: "Support" },
  { value: 100, suffix: "%", label: "Compliance Focus" },
];

export const propertyTypes = [
  "Residential Projects",
  "Commercial Complexes",
  "Mixed Use Developments",
  "Housing Societies",
  "Industrial Properties",
  "Office Buildings",
  "Retail Spaces",
];

export const consultationTopics = [
  "Property Operations",
  "Facility Management",
  "Accounting",
  "Governance",
  "Legal Matters",
  "Compliance",
  "Land Conveyance",
  "Society Documentation",
  "Litigation Guidance",
];

export const academyModules = [
  "Leadership",
  "Property Operations",
  "Compliance",
  "Accounting",
  "Society Governance",
  "Facility Management",
  "Legal Awareness",
  "Communication Skills",
  "Certification",
];

export const caseStudies = [
  {
    title: "Housing Society Transformation",
    metric: "42% faster complaint closure",
    body: "A 480-flat society in Baner moved from informal WhatsApp coordination to a structured help desk with defined SLAs, escalation matrix and monthly governance reviews.",
  },
  {
    title: "Commercial Property Success",
    metric: "99.4% asset uptime",
    body: "An IT office building adopted preventive maintenance schedules for HVAC, DG and lifts, cutting unplanned downtime across two financial years.",
  },
  {
    title: "Operational Excellence",
    metric: "18 SOPs deployed",
    body: "Housekeeping, security interface, technical rounds and vendor entry were codified into audited SOPs with daily checklists and photographic evidence.",
  },
  {
    title: "Financial Recovery",
    metric: "₹1.6 Cr dues recovered",
    body: "Structured arrears follow-up, transparent member statements and legally compliant notices restored a society's working capital position.",
  },
  {
    title: "Compliance Improvement",
    metric: "100% statutory calendar",
    body: "Fire NOC, lift licences, labour registers and statutory returns were mapped into a live compliance calendar with owner-level accountability.",
  },
  {
    title: "Resident Satisfaction",
    metric: "4.7 / 5 resident rating",
    body: "Quarterly resident surveys, published minutes and a responsive help desk lifted satisfaction scores across a 1,200-resident community.",
  },
];

export const testimonials = [
  {
    quote:
      "For the first time our committee receives audited monthly reports we can actually present to members. The difference between informal help and professional management is visible in every meeting.",
    name: "Rajeev Deshpande",
    role: "Chairman, Co-operative Housing Society, Pune",
  },
  {
    quote:
      "PropAdmin handled handover of two of our residential towers. Documentation, snag closure and society formation were managed without a single escalation to us.",
    name: "Anil Khurana",
    role: "Director, Real Estate Developer",
  },
  {
    quote:
      "Our commercial asset now runs on preventive schedules instead of firefighting. Tenant complaints dropped and our facility spend became predictable.",
    name: "Meera Iyer",
    role: "Owner, Commercial Property",
  },
  {
    quote:
      "The compliance calendar alone justified the engagement. Nothing lapses now, and every statutory record is where it should be.",
    name: "Sandeep Rane",
    role: "Committee Member, Managing Committee",
  },
  {
    quote:
      "Complaints get a ticket number, an owner and a closure time. That accountability changed how residents feel about the management office.",
    name: "Pooja Nair",
    role: "Resident, Gated Community",
  },
  {
    quote:
      "As an investor with four leased units, transparent accounting and timely rent reporting are non-negotiable. PropAdmin delivers both.",
    name: "Vikram Shah",
    role: "Property Investor",
  },
];

export const blogPosts = [
  {
    slug: "integrated-property-management-guide",
    category: "Property Management Tips",
    title: "What Integrated Property Management Actually Means for Your Asset",
    excerpt:
      "Managers, help desk, technicians and reporting working as one system — and why fragmented vendors cost you more.",
    date: "12 July 2026",
    read: "7 min read",
  },
  {
    slug: "housing-society-laws-committee",
    category: "Housing Society Laws",
    title: "Housing Society Laws Every Committee Member Should Know",
    excerpt:
      "Model bye-laws, MCS Act obligations, meeting quorum and the record-keeping duties that most committees miss.",
    date: "28 June 2026",
    read: "9 min read",
  },
  {
    slug: "statutory-compliance-calendar",
    category: "Compliance Updates",
    title: "Building a Statutory Compliance Calendar That Never Lapses",
    excerpt: "Fire NOC, lift licences, labour registers and returns mapped to owners and due dates.",
    date: "14 June 2026",
    read: "6 min read",
  },
  {
    slug: "preventive-maintenance-planning",
    category: "Maintenance Planning",
    title: "Preventive Maintenance Planning for Residential Towers",
    excerpt: "How to build annual schedules for lifts, pumps, DG sets and firefighting systems.",
    date: "02 June 2026",
    read: "8 min read",
  },
  {
    slug: "society-accounting-best-practices",
    category: "Accounting Best Practices",
    title: "Society Accounting Best Practices: From Billing to Audit",
    excerpt: "Clean ledgers, transparent arrears reporting and audit-ready books all year round.",
    date: "20 May 2026",
    read: "7 min read",
  },
  {
    slug: "resident-engagement-that-works",
    category: "Resident Engagement",
    title: "Resident Engagement That Reduces Complaints",
    excerpt: "Communication rhythms, published minutes and surveys that actually change operations.",
    date: "06 May 2026",
    read: "5 min read",
  },
  {
    slug: "facility-management-slas",
    category: "Facility Management",
    title: "Writing Facility Management SLAs You Can Enforce",
    excerpt: "Response time, resolution time, penalties and the evidence trail that makes them real.",
    date: "22 April 2026",
    read: "6 min read",
  },
  {
    slug: "asset-lifecycle-capex",
    category: "Preventive Maintenance",
    title: "Asset Lifecycle Planning and the Sinking Fund Question",
    excerpt: "Condition scoring, replacement timelines and funding major repairs without panic levies.",
    date: "09 April 2026",
    read: "8 min read",
  },
];

export const faqs: { category: string; items: { q: string; a: string }[] }[] = [
  {
    category: "Property Management",
    items: [
      {
        q: "What is included in integrated property management?",
        a: "A deployed team of property managers, help desk executives and multi-skilled technicians operating under documented SOPs, plus preventive maintenance, vendor coordination, compliance tracking, financial reporting and governance support.",
      },
      {
        q: "Do you manage both residential and commercial properties?",
        a: "Yes. We manage housing societies, townships, office buildings, retail spaces, mixed-use developments and industrial properties, with staffing and SOPs designed per asset class.",
      },
      {
        q: "How is performance measured?",
        a: "Every engagement carries defined SLAs, monthly performance dashboards, inspection scores and resident or tenant feedback, reviewed with the client committee or owner.",
      },
    ],
  },
  {
    category: "Accounting",
    items: [
      {
        q: "Do you handle maintenance billing and collections?",
        a: "Yes. We manage billing cycles, receipts, arrears follow-up, payables and member or owner statements, with a clean audit trail for every transaction.",
      },
      {
        q: "Can you work with our existing auditor?",
        a: "We coordinate directly with your appointed statutory auditor and prepare audit-ready books, schedules and supporting documentation.",
      },
    ],
  },
  {
    category: "Society Registration",
    items: [
      {
        q: "Can you assist with new society registration?",
        a: "We assist with documentation, application filing and follow-up with the registering authority, including bye-law adoption and first general body formalities.",
      },
    ],
  },
  {
    category: "Conveyance",
    items: [
      {
        q: "Do you support deemed conveyance?",
        a: "Yes. We guide societies through document collation, application preparation, hearings and title transfer follow-through.",
      },
    ],
  },
  {
    category: "Maintenance",
    items: [
      {
        q: "How do you handle emergency breakdowns?",
        a: "A 24x7 escalation protocol covers fire, water, lift, electrical and security incidents, with defined response windows and post-incident reporting.",
      },
      {
        q: "Is preventive maintenance included?",
        a: "Annual preventive maintenance schedules for lifts, pumps, DG sets, firefighting and electrical systems are part of standard scope.",
      },
    ],
  },
  {
    category: "Legal Support",
    items: [
      {
        q: "Do you provide legal representation?",
        a: "We provide documentation, compliance and litigation guidance, and coordinate with empanelled legal professionals where representation is required.",
      },
    ],
  },
  {
    category: "Training",
    items: [
      {
        q: "Who should attend the Property Management Academy?",
        a: "Property managers, committee members, facility professionals, administrative staff and aspiring managers entering the profession.",
      },
      {
        q: "Is a certificate issued?",
        a: "Yes. Participants who complete the curriculum and assessment receive a PropAdmin certification.",
      },
    ],
  },
  {
    category: "Consultation",
    items: [
      {
        q: "Is the first consultation really free?",
        a: "Yes — a 30-minute consultation to understand your Needs, Difficulties and Priorities (NDPs) is offered at no cost and with no obligation.",
      },
    ],
  },
];

export const courses = [
  {
    slug: "property-management-foundation",
    title: "Property Management Foundation",
    level: "Foundation",
    duration: "24 hours",
    lessons: 32,
    chapters: 8,
    progress: 62,
    summary:
      "The core programme covering operations, documentation, resident management and reporting for working property managers.",
  },
  {
    slug: "society-governance-compliance",
    title: "Society Governance & Compliance",
    level: "Intermediate",
    duration: "18 hours",
    lessons: 24,
    chapters: 6,
    progress: 35,
    summary:
      "Bye-laws, meetings, statutory registers, returns and the governance calendar every committee depends on.",
  },
  {
    slug: "society-property-accounting",
    title: "Society & Property Accounting",
    level: "Intermediate",
    duration: "20 hours",
    lessons: 26,
    chapters: 7,
    progress: 0,
    summary: "Billing cycles, arrears, payables, budgets, sinking fund and audit preparation.",
  },
  {
    slug: "facility-management-essentials",
    title: "Facility Management Essentials",
    level: "Foundation",
    duration: "16 hours",
    lessons: 21,
    chapters: 6,
    progress: 0,
    summary: "Preventive maintenance, vendor SLAs, technical rounds and emergency protocols.",
  },
  {
    slug: "leadership-for-property-professionals",
    title: "Leadership for Property Professionals",
    level: "Advanced",
    duration: "12 hours",
    lessons: 16,
    chapters: 5,
    progress: 0,
    summary: "Team leadership, difficult conversations, committee communication and escalation handling.",
  },
  {
    slug: "legal-awareness-documentation",
    title: "Legal Awareness & Documentation",
    level: "Advanced",
    duration: "14 hours",
    lessons: 18,
    chapters: 5,
    progress: 0,
    summary: "Agreements, notices, resolutions, conveyance basics and litigation awareness.",
  },
];

export const curriculum = [
  {
    chapter: "Chapter 1 — The Property Manager's Mandate",
    lessons: ["Role, scope and accountability", "Stakeholder map", "Daily operating rhythm", "Case discussion"],
  },
  {
    chapter: "Chapter 2 — Operations & SOPs",
    lessons: ["Writing an SOP", "Checklists and evidence", "Shift handover", "Audit walkthrough"],
  },
  {
    chapter: "Chapter 3 — Help Desk & Resident Experience",
    lessons: ["Ticket lifecycle", "Escalation matrix", "Communication templates", "Service recovery"],
  },
  {
    chapter: "Chapter 4 — Maintenance & Assets",
    lessons: ["Asset register", "Preventive schedules", "Breakdown response", "Vendor supervision"],
  },
  {
    chapter: "Chapter 5 — Accounting Fundamentals",
    lessons: ["Billing and receipts", "Arrears management", "Budgeting basics", "Reading an audit report"],
  },
  {
    chapter: "Chapter 6 — Compliance & Legal",
    lessons: ["Statutory calendar", "Registers and returns", "Notices and resolutions", "Records retention"],
  },
  {
    chapter: "Chapter 7 — Reporting & Governance",
    lessons: ["Monthly MIS", "Committee presentations", "Performance metrics", "Governance reviews"],
  },
  {
    chapter: "Chapter 8 — Certification",
    lessons: ["Revision", "Scenario assessment", "Final assessment", "Certificate issuance"],
  },
];

export const careers = [
  {
    title: "Property Manager",
    location: "Pune",
    type: "Full-time",
    experience: "4–8 years",
    summary:
      "Own site operations, committee relationships, SOP compliance and monthly reporting for a managed portfolio.",
  },
  {
    title: "Help Desk Executive",
    location: "Pune / Mumbai",
    type: "Full-time",
    experience: "1–3 years",
    summary: "Run the resident ticketing desk, escalations, closure tracking and daily communication.",
  },
  {
    title: "Multi-Skilled Technician",
    location: "Pune",
    type: "Full-time",
    experience: "2–6 years",
    summary: "Electrical, plumbing and general technical upkeep with preventive schedule adherence.",
  },
  {
    title: "Society Accountant",
    location: "Pune",
    type: "Full-time",
    experience: "3–6 years",
    summary: "Maintenance billing, collections, payables, statutory books and audit coordination.",
  },
  {
    title: "Compliance Executive",
    location: "Pune",
    type: "Full-time",
    experience: "2–5 years",
    summary: "Maintain statutory calendars, licences, registers and documentation across sites.",
  },
  {
    title: "Training Faculty — Property Management",
    location: "Hybrid",
    type: "Part-time",
    experience: "8+ years",
    summary: "Deliver academy modules on operations, governance, accounting and leadership.",
  },
];