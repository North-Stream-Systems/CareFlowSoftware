import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { TrainingMockup } from "@/components/product/TrainingMockup";
import { FinalCta } from "@/components/sections/FinalCta";
import { trainingBenefit, trainingFeatures, trainingLessonTypes } from "@/lib/content/training";

export const metadata: Metadata = {
  title: "Training & Compliance",
  description:
    "CareFlow's in-platform Training & Compliance LMS. Course builder, curriculum pathways and certificates that update staff compliance and rostering on their own.",
};

export default function TrainingPage() {
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
              <Eyebrow tone="dark">Add-on · Training &amp; Compliance</Eyebrow>
              <h1 className="mt-5 text-balance font-heading text-4xl font-bold leading-[1.1] text-white sm:text-5xl">
                Training that feeds compliance, instead of sitting next to it
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
                An in-platform course builder, curriculum pathways and certificates, connected
                directly to Staff and Rostering. When someone finishes a course, it actually
                means something to the rest of the system.
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

            <TrainingMockup />
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>What it is</Eyebrow>
            <h2 className="mt-5 text-balance font-heading text-3xl font-bold text-navy-900 sm:text-4xl">
              A course builder made for care training, not repurposed corporate e-learning
            </h2>
          </div>

          <ul className="mt-12 grid gap-6 sm:grid-cols-2">
            {trainingFeatures.map((feature) => (
              <li key={feature}>
                <div className="flex h-full items-start gap-3 rounded-lg border border-navy-100 bg-white p-6">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" aria-hidden="true" />
                  <p className="text-sm leading-relaxed text-slate-600">{feature}</p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-offwhite py-20 sm:py-24">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>Six lesson types</Eyebrow>
            <h2 className="mt-5 text-balance font-heading text-3xl font-bold text-navy-900 sm:text-4xl">
              Built for how care training actually works
            </h2>
          </div>

          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {trainingLessonTypes.map((type) => (
              <li key={type.name}>
                <div className="h-full rounded-lg border border-navy-100 bg-white p-6">
                  <h3 className="font-heading text-base font-semibold text-navy-900">{type.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{type.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-navy-900 py-20 sm:py-24">
        <Container>
          <div className="mx-auto max-w-3xl rounded-lg border border-teal-600/30 bg-navy-950 p-8 text-center sm:p-12">
            <Eyebrow tone="dark" className="justify-center">
              The standout benefit
            </Eyebrow>
            <h2 className="mt-5 text-balance font-heading text-2xl font-bold text-white sm:text-3xl">
              {trainingBenefit.heading}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/70">{trainingBenefit.body}</p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="mx-auto max-w-2xl rounded-lg border border-navy-100 bg-offwhite p-8 text-center">
            <p className="font-heading text-sm font-semibold uppercase tracking-widest text-slate-500">
              Pricing
            </p>
            <p className="mt-3 font-mono text-4xl font-semibold text-navy-900">
              £2.50<span className="text-lg font-normal text-slate-500">/user/month</span>
            </p>
            <p className="mt-2 font-mono text-xs text-slate-500">£99/mo floor</p>
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
