import { siteConfig } from "@/lib/site";
import { coreSeats } from "@/lib/content/pricing";
import type { FaqItem } from "@/lib/content/pricing";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    description: siteConfig.description,
    email: siteConfig.contactEmail,
    address: {
      "@type": "PostalAddress",
      addressCountry: "GB",
    },
  };
}

export function softwareApplicationJsonLd() {
  const prices = coreSeats.map((seat) => seat.price);
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: siteConfig.name,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, iOS, Android",
    description: siteConfig.description,
    url: siteConfig.url,
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "GBP",
      lowPrice: Math.min(...prices).toString(),
      highPrice: Math.max(...prices).toString(),
      offerCount: prices.length.toString(),
    },
  };
}

export function faqPageJsonLd(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  };
}
