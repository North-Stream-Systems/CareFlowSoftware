// CareFlow pricing has five independent parts — Core seats, Support level,
// a contract-length discount on Core, Inspection Report Packages, and opt-in
// Add-ons. There are no feature-gated tiers: every customer gets the full
// platform from day one.

export type CoreSeat = {
  key: "desktop" | "mobile";
  name: string;
  roles: string;
  price: number;
  unit: string;
  features: string[];
};

export const coreSeats: CoreSeat[] = [
  {
    key: "desktop",
    name: "Desktop seat",
    roles: "Company Admin, Registered Manager, Care Coordinator",
    price: 49,
    unit: "/user/month",
    features: [
      "Form builders for care plans, risk assessments and more",
      "Rostering, with AI Cover Assist",
      "Standard reports",
      "Role-based access control (RBAC)",
      "Settings & configuration",
      "Messaging",
    ],
  },
  {
    key: "mobile",
    name: "Mobile seat",
    roles: "Care Worker",
    price: 12,
    unit: "/user/month",
    features: [
      "Native iOS & Android app",
      "Schedule & shift visibility",
      "Clock-in / Electronic Visit Verification (EVV)",
      "MAR (medication) recording",
      "Notes & body maps",
      "Messaging",
    ],
  },
];

export const coreMinimum = 150;
export const coreDifferentiator =
  "No feature tiers. Every customer gets AI Cover Assist and the full rostering engine on day one — we don't hold core features back to upsell you.";

export type SupportLevel = {
  key: "basic" | "advanced" | "enterprise";
  name: string;
  coverage: string;
  feePerDesktopSeat: number; // £/desktop seat/month — mobile seats are never charged for support
  priceLabel: string;
  responseCritical: string;
  responseStandard: string;
  description: string;
  accountManager?: boolean;
};

export const supportLevels: SupportLevel[] = [
  {
    key: "basic",
    name: "Basic",
    coverage: "9am–5pm, Monday–Friday",
    feePerDesktopSeat: 0,
    priceLabel: "Included, £0",
    responseCritical: "4 business hours",
    responseStandard: "Next business day",
    description: "Standard office-hours cover, included with every account.",
  },
  {
    key: "advanced",
    name: "Advanced",
    coverage: "24 hours a day, Monday–Friday",
    feePerDesktopSeat: 15,
    priceLabel: "+£15/desktop seat/month",
    responseCritical: "1 hour",
    responseStandard: "4 hours",
    description: "Round-the-clock weekday cover for teams running early or late shifts.",
  },
  {
    key: "enterprise",
    name: "Enterprise",
    coverage: "24/7/365, including weekends and bank holidays",
    feePerDesktopSeat: 50,
    priceLabel: "+£50/desktop seat/month",
    responseCritical: "30 minutes",
    responseStandard: "2 hours",
    description: "Full around-the-clock cover with a dedicated named account manager.",
    accountManager: true,
  },
];

export const supportFraming =
  "A rostering or EVV outage at 2am on a Saturday during a live domiciliary round isn't a minor inconvenience — it can affect whether a visit happens. Most residential and larger domiciliary providers will realistically want Advanced or Enterprise.";

export const supportNote =
  "Support is priced per desktop seat only — mobile seats are never charged for support.";

export type ContractTerm = {
  years: number;
  label: string;
  discountPercent: number;
  desktopPrice: number;
  mobilePrice: number;
};

// Discount applies to Core seat price only — nothing else in the model changes with term length.
export const contractTerms: ContractTerm[] = [
  { years: 1, label: "Month-to-month or 1 year", discountPercent: 0, desktopPrice: 49.0, mobilePrice: 12.0 },
  { years: 2, label: "2 years", discountPercent: 5, desktopPrice: 46.55, mobilePrice: 11.4 },
  { years: 3, label: "3 years", discountPercent: 10, desktopPrice: 44.1, mobilePrice: 10.8 },
  { years: 4, label: "4 years", discountPercent: 15, desktopPrice: 41.65, mobilePrice: 10.2 },
  { years: 5, label: "5 years", discountPercent: 20, desktopPrice: 39.2, mobilePrice: 9.6 },
];

export type InspectionOption = {
  key: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  recommended?: boolean;
};

export const inspectionOptions: InspectionOption[] = [
  {
    key: "payg",
    name: "Pay-as-you-go",
    price: "£45",
    description: "per pack generated",
    features: ["One regulator framework — CQC or CIW", "No commitment"],
  },
  {
    key: "subscription",
    name: "Inspection Ready subscription",
    price: "£59",
    description: "per month, per site",
    features: [
      "Unlimited pack generation",
      "Both CQC & CIW frameworks",
      "Continuous readiness score tracking",
    ],
    recommended: true,
  },
  {
    key: "additional-sites",
    name: "Additional sites",
    price: "£39",
    description: "per month, per extra site",
    features: ["For multi-site providers already on the subscription"],
  },
];

export const inspectionPackContents = [
  "Training matrix",
  "Safer recruitment",
  "Policy acknowledgement",
  "Incidents",
  "MAR summary",
  "Mental capacity (MCA) records",
];

export const inspectionValueFraming = {
  heading: "The strongest ROI in the whole pricing model",
  body: "A pack is generated by the Registered Manager from data across the whole platform into one branded, inspector-ready PDF. That replaces 1–3 days of manual evidence-gathering — roughly £230–£780 in Registered Manager time at UK average salary — or a £1,000–£6,500 external mock-inspection consultant. At £45–£59, it's an easy yes, not a nice-to-have.",
};

export type AddOn = {
  key: string;
  name: string;
  price: string;
  description: string;
  href?: string;
};

export const addOns: AddOn[] = [
  {
    key: "training",
    name: "Training & Compliance LMS",
    price: "£2.50/user/month (£99/mo floor)",
    description: "In-platform course builder and curriculum pathways that feed staff compliance directly.",
    href: "/training",
  },
  {
    key: "policies",
    name: "Policies & Procedures",
    price: "£1.50/user/month + one-time £299 generation fee",
    description: "AI-generated policy suite for your organisation, with acknowledgement tracking.",
    href: "/policies",
  },
  {
    key: "finance",
    name: "Finance",
    price: "£9/desktop user/month",
    description: "Billing, invoicing and payroll export, connected to your rostered and delivered care.",
  },
  {
    key: "ai-supervision",
    name: "AI-Assisted Supervision",
    price: "£6/desktop user/month",
    description: "AI-assisted note-taking for supervisions — a human always confirms the outcome.",
  },
];

export type OnboardingOption = {
  key: string;
  name: string;
  price: string;
  description: string;
};

export const onboardingOptions: OnboardingOption[] = [
  {
    key: "included",
    name: "Included with every account",
    price: "Free",
    description: "20 hours of setup and training, included at no extra cost.",
  },
  {
    key: "extended",
    name: "Extended onboarding",
    price: "£1,299 flat fee",
    description: "30 hours of hands-on setup and training, plus a self-service data migration guide.",
  },
  {
    key: "managed-migration",
    name: "Managed data migration",
    price: "£25/client record + £15/staff record (£750 min)",
    description: "We migrate your data for you — can be added on top of either onboarding option.",
  },
];

export const onboardingFraming =
  "Every customer starts with 20 hours of free setup and training. Need more hands-on help, or want us to migrate your data for you? Both are available as add-ons, on top of the free baseline.";

export type WorkedExample = {
  desktopSeats: number;
  mobileSeats: number;
  supportLevelKey: "basic" | "advanced" | "enterprise";
  termYears: number;
  desktopPrice: number;
  mobilePrice: number;
  core: number;
  support: number;
  total: number;
  summary: string;
};

// 5 desktop seats + 30 mobile seats, Advanced support (5 × £15 = £75)
export const workedExamples: WorkedExample[] = [
  {
    desktopSeats: 5,
    mobileSeats: 30,
    supportLevelKey: "advanced",
    termYears: 1,
    desktopPrice: 49.0,
    mobilePrice: 12.0,
    core: 5 * 49.0 + 30 * 12.0, // 605
    support: 5 * 15, // 75
    total: 5 * 49.0 + 30 * 12.0 + 5 * 15, // 680
    summary:
      "5 office staff + 30 care workers, Advanced support, month-to-month = Core £605 + Advanced support (5 desktop seats × £15) £75 = £680/month",
  },
  {
    desktopSeats: 5,
    mobileSeats: 30,
    supportLevelKey: "advanced",
    termYears: 3,
    desktopPrice: 44.1,
    mobilePrice: 10.8,
    core: 5 * 44.1 + 30 * 10.8, // 544.5
    support: 5 * 15, // 75
    total: 5 * 44.1 + 30 * 10.8 + 5 * 15, // 619.5
    summary:
      "Same team on a 3-year term = Core £544.50 (£44.10 × 5 + £10.80 × 30) + Advanced support £75 = £619.50/month",
  },
];

export type FaqItem = {
  question: string;
  answer: string;
};

export const pricingFaqs: FaqItem[] = [
  {
    question: "What counts as a \"desktop\" seat vs a \"mobile\" seat?",
    answer:
      "Desktop seats are for office-based roles — Company Admin, Registered Manager, Care Coordinator — with full access to form builders, rostering, reports, RBAC and settings. Mobile seats are for Care Workers using the native app in the field: schedule, clock-in/EVV, MAR, notes and body maps. Every customer needs at least one desktop seat; most of your headcount will be mobile.",
  },
  {
    question: "Why are there no feature tiers?",
    answer:
      "Because we don't think AI Cover Assist or the full rostering engine should be a paywalled upsell on software that's meant to help you deliver care. Every customer gets the full Core platform from day one — the only variables are seat type, support level, contract length, and which opt-in add-ons you choose.",
  },
  {
    question: "How does the flat per-seat support fee work?",
    answer:
      "Advanced and Enterprise are priced as a flat fee per desktop seat, per month — not a percentage of your spend. Advanced is +£15/desktop seat/month, Enterprise is +£50/desktop seat/month. Mobile seats are never charged for support, since support cover is about office-hours responsiveness for the people running the system, not every care worker on the app. Basic is included at no extra cost.",
  },
  {
    question: "Why are Inspection Report Packages priced per site instead of per seat?",
    answer:
      "An inspection pack draws on data from an entire site's operation — training, recruitment, incidents, medication, MCA records — regardless of how many staff work there. Pricing it per site (rather than per seat) means a smaller site isn't penalised for headcount, and a larger site isn't charged per person for one PDF.",
  },
  {
    question: "What are the minimums?",
    answer:
      "Core platform: £150/month minimum, whatever your seat mix. Training & Compliance: £99/month floor. Managed data migration: £750 minimum project fee. These exist so smaller providers aren't priced below what it costs us to run the platform well.",
  },
  {
    question: "How does onboarding work — and when do Extended onboarding or managed migration make sense?",
    answer:
      "Every account includes 20 hours of free setup and training — enough for most providers to get fully live. If your organisation is larger or your configuration is more involved, Extended onboarding (£1,299 flat fee) gives you 30 hours plus a self-service data migration guide. If you'd rather we migrated your existing data for you instead of doing it yourself, managed data migration is £25 per client record and £15 per staff record (£750 minimum), and can be added on top of either onboarding option.",
  },
  {
    question: "How does the contract-length discount work?",
    answer:
      "Committing to a longer term discounts your Core seat price: 5% off at 2 years, 10% off at 3 years, 15% off at 4 years, and 20% off at 5 years, compared with month-to-month or a 1-year term. The discount applies to Core desktop and mobile seat prices only — support, Inspection Report Packages and add-ons are unaffected by contract length.",
  },
  {
    question: "Can we mix domiciliary and residential in one account?",
    answer:
      "Yes. CareFlow is built for providers running both service types under one organisation, with seats, support level and contract term covering the whole organisation regardless of service mix.",
  },
  {
    question: "Do you offer a free trial or self-serve signup?",
    answer:
      "CareFlow is sold directly, not self-serve — every organisation's setup is different, and we want to get your configuration right before you rely on it. Book a demo and we'll talk through a tailored quote.",
  },
];
