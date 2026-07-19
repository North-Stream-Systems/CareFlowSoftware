import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { PricingCards } from "@/components/pricing/PricingCards";
import { ComparisonTable } from "@/components/pricing/ComparisonTable";
import { FaqAccordion } from "@/components/pricing/FaqAccordion";
import { FinalCta } from "@/components/sections/FinalCta";
import { addOns } from "@/lib/content/pricing";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "CareFlow pricing for domiciliary and residential care providers — three tiers, priced per client or bed, with a full feature comparison and FAQs.",
};

export default function PricingPage() {
  return (
    <>
      <section className="bg-navy-900 pb-20 pt-16 sm:pb-24 sm:pt-20">
        <Container>
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow tone="dark">Pricing</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-5 text-balance font-heading text-4xl font-bold text-white sm:text-5xl">
                Priced per client or bed, not per guess
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-lg leading-relaxed text-white/70">
                Three tiers, straightforward monthly minimums, and no self-serve checkout — this
                is a system your team will run on, so we agree the setup together first.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <h2 className="sr-only">Pricing tiers</h2>
          <PricingCards />

          <Reveal delay={0.2}>
            <div className="mt-12 rounded-2xl border border-navy-100 bg-offwhite p-6">
              <p className="font-heading text-sm font-semibold uppercase tracking-widest text-slate-500">
                Optional add-ons — for any tier
              </p>
              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                {addOns.map((addOn) => (
                  <div key={addOn.name}>
                    <p className="font-heading text-sm font-semibold text-navy-900">{addOn.name}</p>
                    <p className="mt-1 text-sm text-slate-500">{addOn.description}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-slate-500">Ask us about bundling.</p>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="bg-offwhite py-20 sm:py-28">
        <Container>
          <div className="max-w-2xl">
            <Reveal>
              <h2 className="font-heading text-2xl font-bold text-navy-900 sm:text-3xl">
                Compare tiers in full
              </h2>
            </Reveal>
          </div>
          <div className="mt-10">
            <ComparisonTable />
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-2xl">
            <Reveal>
              <h2 className="text-center font-heading text-2xl font-bold text-navy-900 sm:text-3xl">
                Pricing questions, answered
              </h2>
            </Reveal>
            <div className="mt-10">
              <FaqAccordion />
            </div>
          </div>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
