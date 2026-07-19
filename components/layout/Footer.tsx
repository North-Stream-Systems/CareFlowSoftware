import Image from "next/image";
import Link from "next/link";
import { footerNav, siteConfig } from "@/lib/site";
import { Container } from "@/components/ui/Container";

const socialPlaceholders = [
  { label: "LinkedIn", href: "https://www.linkedin.com" },
  { label: "X (Twitter)", href: "https://x.com" },
];

export function Footer() {
  return (
    <footer className="bg-navy-950 text-white/70">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-[2fr_1fr_1fr]">
          <div className="max-w-sm">
            <Link href="/" aria-label="CareFlow — home" className="inline-block">
              <Image src="/logo.svg" alt="CareFlow" width={144} height={32} className="h-8 w-auto" />
            </Link>
            <p className="mt-4 text-sm leading-relaxed">
              One platform for domiciliary and residential care — rostering, compliance and
              care planning, built for CQC and CIW.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xs font-semibold uppercase tracking-widest text-white/60">
              Site
            </h2>
            <ul className="mt-4 space-y-3">
              {footerNav.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-xs font-semibold uppercase tracking-widest text-white/60">
              Connect
            </h2>
            <ul className="mt-4 space-y-3">
              <li>
                <a href={`mailto:${siteConfig.contactEmail}`} className="text-sm hover:text-white">
                  {siteConfig.contactEmail}
                </a>
              </li>
              {/* TODO: replace with real social profiles once live */}
              {socialPlaceholders.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:text-white"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} CareFlow / {siteConfig.company}. All rights reserved.
          </p>
          <p>UK-hosted · CQC &amp; CIW ready · ISO 27001 aligned</p>
        </div>
      </Container>
    </footer>
  );
}
