import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { FaqAccordion } from "@/components/pricing/FaqAccordion";
import { CoreSeatsBlock } from "@/components/pricing/CoreSeatsBlock";
import { SupportLevelsBlock } from "@/components/pricing/SupportLevelsBlock";
import { InspectionPackagesBlock } from "@/components/pricing/InspectionPackagesBlock";
import { AddOnsGrid } from "@/components/pricing/AddOnsGrid";
import { WorkedExample } from "@/components/pricing/WorkedExample";
import { PricingCalculator } from "@/components/pricing/PricingCalculator";
import { FinalCta } from "@/components/sections/FinalCta";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "CareFlow pricing for domiciliary and residential care providers — Core seats, support levels, Inspection Report Packages and add-ons, with a calculator and full FAQs.",
};

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl">
      <Reveal>
        <Eyebrow>{eyebrow}</Eyebrow>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-5 text-balance font-heading text-2xl font-bold text-navy-900 sm:text-3xl">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p className="mt-4 text-lg leading-relaxed text-slate-500">{description}</p>
        </Reveal>
      )}
    </div>
  );
}

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
                Four parts. No feature tiers.
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-lg leading-relaxed text-white/70">
                Core seats, a support level, Inspection Report Packages, and opt-in add-ons —
                each priced on its own terms, not folded into one table that hides what
                you&rsquo;ll actually pay. No self-serve checkout — this is a system your team
                will run on, so we agree the setup together first.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Part 1"
            title="Core platform — priced per user, per month"
            description="Every customer gets the full platform. The only price variable is seat type."
          />
          <div className="mt-10">
            <CoreSeatsBlock />
          </div>
        </Container>
      </section>

      <section className="bg-offwhite py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Part 2"
            title="Support level — chosen once, priced as an uplift on Core spend"
          />
          <div className="mt-10">
            <SupportLevelsBlock />
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Part 3"
            title="Inspection Report Packages — priced per organisation/site"
          />
          <div className="mt-10">
            <InspectionPackagesBlock id="inspection-packages" />
          </div>
        </Container>
      </section>

      <section className="bg-offwhite py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Part 4"
            title="Add-ons — opt-in, billed per active user"
          />
          <div className="mt-10">
            <AddOnsGrid />
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Worked example"
            title="What this actually looks like on an invoice"
          />
          <div className="mt-10">
            <WorkedExample />
          </div>
        </Container>
      </section>

      <section className="bg-offwhite py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Calculator"
            title="Estimate your own Core + Support cost"
          />
          <div className="mt-10 max-w-2xl">
            <PricingCalculator />
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <h2 className="font-heading text-2xl font-bold text-navy-900 sm:text-3xl">
                Pricing questions, answered
              </h2>
            </Reveal>
          </div>
          <div className="mx-auto mt-10 max-w-2xl">
            <FaqAccordion />
          </div>
          <Reveal delay={0.1}>
            <div className="mx-auto mt-12 flex max-w-2xl justify-center">
              <Button href="/book-demo" size="lg">
                Get a tailored quote
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
