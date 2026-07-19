import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PricingCards } from "@/components/pricing/PricingCards";
import { addOns } from "@/lib/content/pricing";

export function PricingSummary() {
  return (
    <section id="pricing" className="scroll-mt-16 bg-white py-24 sm:py-32">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <Eyebrow>Pricing</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 text-balance font-heading text-3xl font-bold text-navy-900 sm:text-4xl">
              Straightforward, per client or bed
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-lg leading-relaxed text-slate-500">
              Three tiers. No self-serve checkout — every provider&rsquo;s setup is different,
              so we&rsquo;ll agree the right fit with you.
            </p>
          </Reveal>
        </div>

        <div className="mt-14">
          <PricingCards />
        </div>

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

        <Reveal delay={0.25}>
          <p className="mt-8 text-sm text-slate-500">
            Mixed domiciliary and residential? See the full comparison and FAQs on the{" "}
            <Link href="/pricing" className="font-medium text-teal-700 underline underline-offset-4">
              pricing page
            </Link>
            .
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
