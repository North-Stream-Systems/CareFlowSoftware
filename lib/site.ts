export const siteConfig = {
  name: "CareFlow",
  company: "North Stream Systems",
  tagline: "Care software that gets out of the way.",
  description:
    "CareFlow handles rostering, compliance, care planning and staff for domiciliary and residential care providers in the UK, built for CQC and CIW. We built it after watching good care teams get let down by software made by people who'd never done the job.",
  url: "https://careflow.example.com",
  contactEmail: "hello@careflow.co.uk",
  foundersEmail: "founders@careflow.co.uk",
  locale: "en_GB",
};

export type NavDropdownItem = {
  label: string;
  href: string;
  description: string;
};

export type NavLink = {
  label: string;
  href: string;
  dropdown?: NavDropdownItem[];
};

export const primaryNav: NavLink[] = [
  {
    label: "Product",
    href: "/#product",
    dropdown: [
      {
        label: "Platform overview",
        href: "/#product",
        description: "Staff, Clients, Rostering, Dashboard, Reports & Settings",
      },
      {
        label: "Training & Compliance",
        href: "/training",
        description: "In-platform LMS that updates staff compliance on its own",
      },
      {
        label: "Policies & Procedures",
        href: "/policies",
        description: "AI-generated policy suite with acknowledgement tracking",
      },
    ],
  },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
];

export const footerNav: NavLink[] = [
  { label: "Product", href: "/#product" },
  { label: "Training & Compliance", href: "/training" },
  { label: "Policies & Procedures", href: "/policies" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Book a demo", href: "/book-demo" },
];
