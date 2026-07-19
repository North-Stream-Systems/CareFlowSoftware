import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { DemoRequestForm } from "@/components/forms/DemoRequestForm";

export const metadata: Metadata = {
  title: "Book a Demo",
  description:
    "Book a demo of CareFlow for your domiciliary or residential care company. Tell us about your service and we'll get back to you to find a time.",
};

export default function BookDemoPage() {
  return (
    <section className="bg-offwhite py-20 sm:py-28">
      <Container>
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div>
            <Eyebrow>Book a demo</Eyebrow>
            <h1 className="mt-5 text-balance font-heading text-3xl font-bold text-navy-900 sm:text-4xl">
              Tell us about your service
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-slate-500">
              No sales script, no self-serve trial that doesn&rsquo;t reflect how you actually
              work. We&rsquo;ll look at your rota, your compliance workload, and show you
              exactly where CareFlow fits.
            </p>
            <p className="mt-4 text-sm text-slate-500">
              Prefer email? Reach us directly at{" "}
              <a href="mailto:hello@careflow.co.uk" className="font-medium text-teal-700 underline underline-offset-4">
                hello@careflow.co.uk
              </a>
              .
            </p>
          </div>

          <div className="rounded-2xl border border-navy-100 bg-white p-8 shadow-card">
            <DemoRequestForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
