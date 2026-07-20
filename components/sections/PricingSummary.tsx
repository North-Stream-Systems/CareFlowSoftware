import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { CoreSeatsBlock } from "@/components/pricing/CoreSeatsBlock";
import { SupportLevelsBlock } from "@/components/pricing/SupportLevelsBlock";
import { ContractTermBlock } from "@/components/pricing/ContractTermBlock";
import { InspectionPackagesBlock } from "@/components/pricing/InspectionPackagesBlock";
import { AddOnsGrid } from "@/components/pricing/AddOnsGrid";
import { WorkedExample } from "@/components/pricing/WorkedExample";

function PartHeading({ number, title }: { number: string; title: string }) {
  return (
    <h3 className="flex items-baseline gap-3 font-heading text-xl font-bold text-navy-900">
      <span className="font-mono text-sm text-teal-700">{number}</span>
      {title}
    </h3>
  );
}

export function PricingSummary() {
  return (
    <section id="pricing" className="scroll-mt-16 bg-white py-24 sm:py-28">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>Pricing</Eyebrow>
          <h2 className="mt-5 text-balance font-heading text-3xl font-bold text-navy-900 sm:text-4xl">
            Five parts, priced separately on purpose
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-500">
            Core seats, a support level with a contract-length discount, Inspection Report
            Packages, and opt-in add-ons. One table trying to do all of that just hides what
            you&rsquo;d actually pay, so we don&rsquo;t do it that way.
          </p>
        </div>

        <div className="mt-16 space-y-16">
          <div className="space-y-6">
            <PartHeading number="01" title="Core platform" />
            <CoreSeatsBlock compact />
          </div>

          <div className="space-y-6">
            <PartHeading number="02" title="Support level" />
            <SupportLevelsBlock compact />
          </div>

          <div className="space-y-6">
            <PartHeading number="02.5" title="Contract length discount" />
            <ContractTermBlock />
          </div>

          <div className="space-y-6">
            <PartHeading number="03" title="Inspection Report Packages" />
            <InspectionPackagesBlock compact />
          </div>

          <div className="space-y-6">
            <PartHeading number="04" title="Add-ons" />
            <AddOnsGrid />
          </div>

          <WorkedExample />
        </div>

        <div className="mt-14 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <Button href="/book-demo" size="lg">
            Get a tailored quote
          </Button>
          <Link href="/pricing" className="font-medium text-teal-700 underline underline-offset-4">
            See full pricing detail, calculator and FAQs →
          </Link>
        </div>
      </Container>
    </section>
  );
}
