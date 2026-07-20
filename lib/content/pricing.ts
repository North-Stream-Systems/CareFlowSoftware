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
  "No feature tiers. You get AI Cover Assist and the full rostering engine from day one. We don't hold bits of the core platform back so we can charge you more for them later.";

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
    description: "Office hours cover. Included with every account, no upgrade needed.",
  },
  {
    key: "advanced",
    name: "Advanced",
    coverage: "24 hours a day, Monday–Friday",
    feePerDesktopSeat: 15,
    priceLabel: "+£15/desktop seat/month",
    responseCritical: "1 hour",
    responseStandard: "4 hours",
    description: "Round-the-clock weekday cover, for teams running early starts or late finishes.",
  },
  {
    key: "enterprise",
    name: "Enterprise",
    coverage: "24/7/365, including weekends and bank holidays",
    feePerDesktopSeat: 50,
    priceLabel: "+£50/desktop seat/month",
    responseCritical: "30 minutes",
    responseStandard: "2 hours",
    description: "Full round-the-clock cover, with a dedicated named account manager.",
    accountManager: true,
  },
];

export const supportFraming =
  "If your rostering or EVV goes down at 2am on a Saturday, halfway through a domiciliary round, that's not a minor inconvenience. It can be the difference between a visit happening and a visit not happening. Most residential providers, and the bigger domiciliary ones, end up on Advanced or Enterprise. That's usually the right call.";

export const supportNote = "Support is priced per desktop seat. Mobile seats are never charged for it.";

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
    features: ["One regulator framework: CQC or CIW", "No commitment"],
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
  heading: "Honestly, the easiest number to justify in here",
  body: "The Registered Manager generates a pack from data that's already sitting in the platform, and gets one branded PDF ready for the inspector. Doing that by hand usually takes one to three days, which at UK average salary works out to somewhere between £230 and £780. An external mock-inspection consultant costs £1,000 to £6,500. At £45 to £59, this isn't a hard decision.",
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
    description: "We migrate your data for you. Can be added on top of either onboarding option.",
  },
];

export const onboardingFraming =
  "Every customer starts with 20 hours of free setup and training. If you need more hands-on help, or you'd rather we migrated your data for you, both of those are available on top, as add-ons.";

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
      "5 office staff and 30 care workers on Advanced support, month-to-month: Core £605, Advanced support (5 desktop seats × £15) £75, total £680/month.",
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
      "The same team on a 3-year term: Core £544.50 (£44.10 × 5 + £10.80 × 30), Advanced support £75, total £619.50/month.",
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
      "Desktop seats are for the office-based roles: Company Admin, Registered Manager, Care Coordinator. Full access to form builders, rostering, reports, RBAC, settings. Mobile seats are for Care Workers out in the field, on the native app: schedule, clock-in and EVV, MAR, notes, body maps. You'll need at least one desktop seat. Most of your headcount will end up being mobile ones.",
  },
  {
    question: "Why are there no feature tiers?",
    answer:
      "Because we don't think AI Cover Assist or the full rostering engine should sit behind a paywall on software that's meant to help you deliver care. Everyone gets the full Core platform from day one. What actually varies is seat type, support level, contract length, and whichever add-ons you choose to bolt on.",
  },
  {
    question: "How does the flat per-seat support fee work?",
    answer:
      "Advanced and Enterprise are a flat fee per desktop seat, per month. Not a percentage of what you're already spending. Advanced adds £15 per desktop seat, Enterprise adds £50. Mobile seats are never charged for it, because support is really about how fast we respond to the office, not to every care worker carrying the app. Basic doesn't cost anything extra.",
  },
  {
    question: "Why are Inspection Report Packages priced per site instead of per seat?",
    answer:
      "An inspection pack pulls from a whole site's operation: training, recruitment, incidents, medication, MCA records. That's true whether the site has 8 staff or 80. Charging per seat would penalise a small site and let a big one generate the same PDF for next to nothing per head, so we price it per site instead.",
  },
  {
    question: "What are the minimums?",
    answer:
      "Core: £150/month minimum, whatever your seat mix works out to. Training & Compliance: £99/month floor. Managed data migration: £750 minimum. We set these so a very small provider doesn't end up paying less than it actually costs us to run their account properly.",
  },
  {
    question: "How does onboarding work, and when do Extended onboarding or managed migration make sense?",
    answer:
      "Every account includes 20 hours of free setup and training. That's enough for most providers to get properly live. If you're bigger, or your configuration is more involved than most, Extended onboarding is a flat £1,299 for 30 hours plus a self-service migration guide. And if you'd rather we did the data migration for you instead of doing it yourself, that's £25 per client record and £15 per staff record, £750 minimum, on top of either option.",
  },
  {
    question: "How does the contract-length discount work?",
    answer:
      "Commit to a longer term and your Core seat price drops: 5% at 2 years, 10% at 3, 15% at 4, 20% at 5. That's measured against month-to-month or a 1-year term. It only touches the Core desktop and mobile seat price. Support, Inspection Report Packages and add-ons stay exactly the same whatever term you're on.",
  },
  {
    question: "Can we mix domiciliary and residential in one account?",
    answer:
      "Yes, and plenty of our conversations are with providers doing exactly that. Seats, support level and contract term all cover the whole organisation, whatever the mix of domiciliary and residential underneath it.",
  },
  {
    question: "Do you offer a free trial or self-serve signup?",
    answer:
      "No. We sell this directly rather than as a self-serve signup, because every organisation's setup is different enough that we'd rather get it right before you're relying on it every day. Book a demo and we'll talk through a quote.",
  },
];
