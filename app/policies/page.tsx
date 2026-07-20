import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { PolicyMockup } from "@/components/product/PolicyMockup";
import { FinalCta } from "@/components/sections/FinalCta";
import {
  acknowledgementFraming,
  generationFeeFraming,
  policyWorkflowSteps,
  samplePolicies,
} from "@/lib/content/policies";

export const metadata: Metadata = {
  title: "Policies & Procedures",
  description:
    "CareFlow's AI-generated Policies & Procedures suite. A full, regulation-referenced policy set built in a day, with staff acknowledgement tracking.",
};

export default function PoliciesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-900 pb-20 pt-16 sm:pb-28 sm:pt-24">
        <div
          className="pointer-events-none absolute left-1/2 top-0 -z-0 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-glow-teal opacity-60 blur-2xl"
          aria-hidden="true"
        />
        <Container className="relative">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-10">
            <div>
              <Eyebrow tone="dark">Add-on · Policies &amp; Procedures</Eyebrow>
              <h1 className="mt-5 text-balance font-heading text-4xl font-bold leading-[1.1] text-white sm:text-5xl">
                A full policy suite built in a day, not commissioned over weeks
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
                Answer a short form about your organisation. CareFlow puts together a complete,
                regulation-referenced policy suite. You review it, confirm it, and publish it.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button href="/book-demo" size="lg">
                  Book a Demo
                </Button>
                <Button href="/pricing" variant="outlineOnDark" size="lg">
                  See pricing
                </Button>
              </div>
            </div>

            <PolicyMockup />
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>The AI Policy Generator</Eyebrow>
            <h2 className="mt-5 text-balance font-heading text-3xl font-bold text-navy-900 sm:text-4xl">
              From a short form to 19+ policies, reviewed by you before anything publishes
            </h2>
          </div>

          <ol className="mt-12 grid gap-6 sm:grid-cols-2">
            {policyWorkflowSteps.map((step, index) => (
              <li key={step}>
                <div className="flex h-full items-start gap-4 rounded-lg border border-navy-100 bg-white p-6">
                  <span className="font-mono text-sm font-semibold text-teal-700">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm leading-relaxed text-slate-600">{step}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-offwhite py-20 sm:py-24">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>A few of the policies generated</Eyebrow>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {samplePolicies.map((policy) => (
              <span
                key={policy}
                className="rounded-full border border-navy-100 bg-white px-4 py-2 font-heading text-sm font-medium text-navy-900"
              >
                {policy}
              </span>
            ))}
            <span className="rounded-full border border-dashed border-navy-200 px-4 py-2 font-mono text-sm text-slate-500">
              +13 more
            </span>
          </div>
        </Container>
      </section>

      <section className="bg-navy-900 py-20 sm:py-24">
        <Container>
          <div className="mx-auto max-w-3xl rounded-lg border border-teal-600/30 bg-navy-950 p-8 text-center sm:p-12">
            <Eyebrow tone="dark" className="justify-center">
              Ongoing tracking
            </Eyebrow>
            <h2 className="mt-5 text-balance font-heading text-2xl font-bold text-white sm:text-3xl">
              {acknowledgementFraming.heading}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/70">{acknowledgementFraming.body}</p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="mx-auto max-w-2xl rounded-lg border border-navy-100 bg-offwhite p-8 text-center">
            <p className="font-heading text-sm font-semibold uppercase tracking-widest text-slate-500">
              Pricing
            </p>
            <div className="mt-3 flex flex-wrap items-baseline justify-center gap-x-3 gap-y-1">
              <p className="font-mono text-4xl font-semibold text-navy-900">
                £1.50<span className="text-lg font-normal text-slate-500">/user/month</span>
              </p>
              <p className="font-mono text-lg text-slate-500">+ £299 one-time</p>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-slate-500">
              <strong className="text-navy-900">{generationFeeFraming.heading}.</strong>{" "}
              {generationFeeFraming.body}
            </p>
            <p className="mt-6">
              <Link href="/pricing" className="font-medium text-teal-700 underline underline-offset-4">
                See how this fits into full CareFlow pricing →
              </Link>
            </p>
          </div>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
