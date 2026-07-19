export type PricingTier = {
  key: string;
  name: string;
  price: string;
  minimum: string;
  positioning: string;
  features: string[];
  highlighted?: boolean;
};

export const pricingTiers: PricingTier[] = [
  {
    key: "essentials",
    name: "Essentials",
    price: "£14",
    minimum: "Min £180/mo",
    positioning:
      "Everything a care company needs to run day to day.",
    features: [
      "Staff",
      "Clients",
      "Rostering",
      "Dashboard",
      "Reports",
      "Settings & Configuration",
      "Messaging",
    ],
  },
  {
    key: "professional",
    name: "Professional",
    price: "£19",
    minimum: "Min £280/mo",
    positioning: "Everything in Essentials, plus the tools for teams on the move.",
    features: [
      "Everything in Essentials",
      "Native mobile app for care workers",
      "AI-assisted cover finding",
      "One-click inspection packs",
      "Priority support",
    ],
    highlighted: true,
  },
  {
    key: "enterprise",
    name: "Enterprise",
    price: "£26",
    minimum: "Custom pricing available",
    positioning: "Everything in Professional, plus finance and scale.",
    features: [
      "Everything in Professional",
      "Finance — billing, invoicing, payroll export",
      "AI-assisted supervision",
      "Custom roles at scale",
      "Dedicated support",
    ],
  },
];

export const pricingUnit = "per client or bed / month";

export type AddOn = {
  name: string;
  description: string;
};

export const addOns: AddOn[] = [
  {
    name: "Training & Compliance LMS",
    description: "Assign, track and certify staff training against your compliance requirements.",
  },
  {
    name: "AI-generated Policies & Procedures",
    description: "A full policy suite generated for your organisation, reviewed and confirmed by you.",
  },
  {
    name: "Finance",
    description: "Billing, invoicing and payroll export, connected to your rostered and delivered care.",
  },
];

export type ComparisonRow = {
  feature: string;
  essentials: boolean | string;
  professional: boolean | string;
  enterprise: boolean | string;
};

export const comparisonRows: ComparisonRow[] = [
  { feature: "Staff management", essentials: true, professional: true, enterprise: true },
  { feature: "Client care records (CQC/CIW mapped)", essentials: true, professional: true, enterprise: true },
  { feature: "SmartRota scheduling", essentials: true, professional: true, enterprise: true },
  { feature: "Customisable dashboard", essentials: true, professional: true, enterprise: true },
  { feature: "30+ built-in reports", essentials: true, professional: true, enterprise: true },
  { feature: "Settings & configuration", essentials: true, professional: true, enterprise: true },
  { feature: "Messaging", essentials: true, professional: true, enterprise: true },
  { feature: "Native mobile app for care workers", essentials: false, professional: true, enterprise: true },
  { feature: "AI-assisted cover finding", essentials: false, professional: true, enterprise: true },
  { feature: "One-click CQC/CIW inspection packs", essentials: false, professional: true, enterprise: true },
  { feature: "Priority support", essentials: false, professional: true, enterprise: true },
  { feature: "Finance (billing, invoicing, payroll export)", essentials: false, professional: false, enterprise: true },
  { feature: "AI-assisted supervision note-taking", essentials: false, professional: false, enterprise: true },
  { feature: "Custom roles at scale", essentials: false, professional: false, enterprise: true },
  { feature: "Dedicated support", essentials: false, professional: false, enterprise: true },
];

export type FaqItem = {
  question: string;
  answer: string;
};

export const pricingFaqs: FaqItem[] = [
  {
    question: "What does \"per client or bed\" actually mean?",
    answer:
      "For domiciliary providers, you're billed per active client receiving care. For residential providers, it's per registered bed. If you run both, we combine them into a single monthly figure — you're not paying twice for the same organisation.",
  },
  {
    question: "How is the monthly minimum applied?",
    answer:
      "Each tier has a monthly minimum (from £180/mo on Essentials, £280/mo on Professional) that applies regardless of client or bed count. It covers smaller providers where a low per-unit count would otherwise price the platform below what it costs to run well. Enterprise pricing is agreed individually.",
  },
  {
    question: "What's the contract length?",
    answer:
      "We work on annual agreements as standard, with monthly billing. Shorter pilot terms are available for providers who want to trial CareFlow with a smaller service first — ask us and we'll structure something sensible.",
  },
  {
    question: "Can we mix domiciliary and residential in one account?",
    answer:
      "Yes. CareFlow is built for providers running both service types under one organisation. Your billing is calculated across combined clients and beds, and each service type gets the records and workflows it actually needs.",
  },
  {
    question: "Can we add modules later?",
    answer:
      "Yes — Training & Compliance LMS, AI-generated Policies & Procedures and Finance can all be added to any tier as your organisation grows. Talk to us about bundling if you know you'll want more than one.",
  },
  {
    question: "Do you offer a free trial or self-serve signup?",
    answer:
      "CareFlow is sold directly, not self-serve — every organisation's setup is different, and we want to get your configuration right before you rely on it. Book a demo and we'll talk through a pilot.",
  },
];
