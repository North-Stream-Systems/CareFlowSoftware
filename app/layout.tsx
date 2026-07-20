import type { Metadata } from "next";
import clsx from "clsx";
import "./globals.css";
import { dmSans, heading, jetBrainsMono } from "@/lib/fonts";
import { siteConfig } from "@/lib/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { organizationJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Care management software for UK domiciliary & residential providers`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "care management software",
    "domiciliary care software",
    "residential care software",
    "CQC compliance software",
    "CIW compliance software",
    "care rostering software",
    "care planning software UK",
    "care home software UK",
    "home care scheduling software",
    "electronic visit verification software",
    "digital care planning software",
  ],
  authors: [{ name: siteConfig.company }],
  creator: siteConfig.company,
  publisher: siteConfig.company,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — Care software that gets out of the way`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Care software that gets out of the way`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={clsx(heading.variable, dmSans.variable, jetBrainsMono.variable)}>
      <body className="flex min-h-screen flex-col bg-offwhite font-sans text-navy-900 antialiased">
        <JsonLd data={organizationJsonLd()} />
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
