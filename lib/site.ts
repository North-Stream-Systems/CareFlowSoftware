export const siteConfig = {
  name: "CareFlow",
  company: "North Stream Systems",
  tagline: "Care software that gets out of the way.",
  description:
    "CareFlow is a full platform for domiciliary and residential care companies — rostering, compliance, care planning and staff, built for CQC and CIW. Built by people who've run care shifts, not just sold software to them.",
  url: "https://careflow.example.com",
  contactEmail: "hello@careflow.co.uk",
  foundersEmail: "founders@careflow.co.uk",
  locale: "en_GB",
};

export type NavLink = {
  label: string;
  href: string;
};

export const primaryNav: NavLink[] = [
  { label: "Product", href: "/#product" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
];

export const footerNav: NavLink[] = [
  { label: "Product", href: "/#product" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Book a demo", href: "/book-demo" },
];

