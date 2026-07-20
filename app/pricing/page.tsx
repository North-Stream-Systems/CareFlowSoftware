import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { FaqAccordion } from "@/components/pricing/FaqAccordion";
import { PricingQuickNav } from "@/components/pricing/PricingQuickNav";
import { CoreSeatsBlock } from "@/components/pricing/CoreSeatsBlock";
import { SupportLevelsBlock } from "@/components/pricing/SupportLevelsBlock";
import { ContractTermBlock } from "@/components/pricing/ContractTermBlock";
import { InspectionPackagesBlock } from "@/components/pricing/InspectionPackagesBlock";
import { AddOnsGrid } from "@/components/pricing/AddOnsGrid";
import { OnboardingBlock } from "@/components/pricing/OnboardingBlock";
import { WorkedExample } from "@/components/pricing/WorkedExample";
import { PricingCalculator } from "@/components/pricing/PricingCalculator";
import { FinalCta } from "@/components/sections/FinalCta";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "CareFlow pricing for domiciliary and residential care providers. Core seats, support levels, a contract-length discount, Inspection Report Packages and add-ons, with a calculator and full FAQs.",
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
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-5 text-balance font-heading text-2xl font-bold text-navy-900 sm:text-3xl">
        {title}
      </h2>
      {description && <p className="mt-4 text-lg leading-relaxed text-slate-500">{description}</p>}
    </div>
  );
}

export default function PricingPage() {
  return (
    <>
      <section className="bg-navy-900 pb-20 pt-16 sm:pb-24 sm:pt-20">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow tone="dark">Pricing</Eyebrow>
            <h1 className="mt-5 text-balance font-heading text-4xl font-bold text-white sm:text-5xl">
              Five parts. No feature tiers.
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-white/70">
              Core seats, a support level with a contract-length discount, Inspection Report
              Packages, and opt-in add-ons. Each one priced on its own terms, not folded into a
              single table that hides what you&rsquo;ll actually pay. There&rsquo;s no
              self-serve checkout here either. This is a system your team will run on, so we sit
              down and agree the setup together first.
            </p>
          </div>
        </Container>
      </section>

      <PricingQuickNav />

      <section id="core" className="scroll-mt-32 bg-white py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Part 1"
            title="The core platform"
            description="Every customer gets the full platform. Priced per user, per month, and the only thing that changes is seat type."
          />
          <div className="mt-10">
            <CoreSeatsBlock />
          </div>
        </Container>
      </section>

      <section id="support" className="scroll-mt-32 bg-offwhite py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Part 2"
            title="Support levels"
            description="Chosen once for the whole organisation. Priced as a flat fee per desktop seat."
          />
          <div className="mt-10">
            <SupportLevelsBlock />
          </div>
        </Container>
      </section>

      <section id="term" className="scroll-mt-32 bg-white py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Part 2.5"
            title="Contract length"
            description="Commit to a longer term and your Core seat price drops. Support, Inspection Report Packages and add-ons are unaffected."
          />
          <div className="mt-10 max-w-2xl">
            <ContractTermBlock />
          </div>
        </Container>
      </section>

      <section className="bg-offwhite py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Part 3"
            title="Inspection Report Packages"
            description="Priced per organisation, or per site if you run more than one."
          />
          <div className="mt-10">
            <InspectionPackagesBlock id="inspection-packages" />
          </div>
        </Container>
      </section>

      <section id="addons" className="scroll-mt-32 bg-white py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Part 4"
            title="Add-ons"
            description="Opt-in. Billed per active user, on top of Core."
          />
          <div className="mt-10">
            <AddOnsGrid />
          </div>
        </Container>
      </section>

      <section id="onboarding" className="scroll-mt-32 bg-offwhite py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Onboarding & data migration"
            title="Getting live without a surprise bill"
          />
          <div className="mt-10">
            <OnboardingBlock />
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Worked example" title="What this looks like on an actual invoice" />
          <div className="mt-10">
            <WorkedExample />
          </div>
        </Container>
      </section>

      <section id="calculator" className="scroll-mt-32 bg-offwhite py-20 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Calculator" title="Work out your own Core and Support cost" />
          <div className="mt-10 max-w-2xl">
            <PricingCalculator />
          </div>
        </Container>
      </section>

      <section id="faq" className="scroll-mt-32 bg-white py-20 sm:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-2xl font-bold text-navy-900 sm:text-3xl">
              Pricing questions, answered
            </h2>
          </div>
          <div className="mx-auto mt-10 max-w-2xl">
            <FaqAccordion />
          </div>
          <div className="mx-auto mt-12 flex max-w-2xl justify-center">
            <Button href="/book-demo" size="lg">
              Get a tailored quote
            </Button>
          </div>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
