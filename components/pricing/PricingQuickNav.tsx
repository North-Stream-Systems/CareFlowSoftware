"use client";

import { Container } from "@/components/ui/Container";

const links = [
  { href: "#core", label: "Core" },
  { href: "#support", label: "Support" },
  { href: "#term", label: "Term" },
  { href: "#inspection-packages", label: "Inspection packs" },
  { href: "#addons", label: "Add-ons" },
  { href: "#onboarding", label: "Onboarding" },
  { href: "#calculator", label: "Calculator" },
  { href: "#faq", label: "FAQ" },
];

export function PricingQuickNav() {
  return (
    <nav
      aria-label="Pricing sections"
      className="sticky top-16 z-40 border-b border-navy-100 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80"
    >
      <Container>
        <ul className="flex gap-6 overflow-x-auto py-3 text-sm">
          {links.map((link) => (
            <li key={link.href} className="shrink-0">
              <a
                href={link.href}
                className="font-medium text-slate-500 transition-colors hover:text-teal-700"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  );
}
