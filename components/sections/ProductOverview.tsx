import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { addOnModules, productCallouts, productModules } from "@/lib/content/product";

export function ProductOverview({ id = "product" }: { id?: string }) {
  return (
    <section id={id} className="scroll-mt-16 bg-offwhite py-24 sm:py-28">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>One platform</Eyebrow>
          <h2 className="mt-5 text-balance font-heading text-3xl font-bold text-navy-900 sm:text-4xl">
            Everything a care company runs on, in one place
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-500">
            No bolt-ons, no separate logins. One system for staff, clients, rostering and
            compliance.
          </p>
        </div>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {productModules.map((module) => (
            <li key={module.key}>
              <div className="h-full rounded-lg border border-navy-100 bg-white p-6 transition-colors hover:border-teal-600/40">
                <h3 className="font-heading text-lg font-semibold text-navy-900">
                  {module.name}
                </h3>
                <p className="mt-1.5 text-sm font-medium text-teal-700">{module.summary}</p>
                <ul className="mt-4 space-y-2">
                  {module.points.map((point) => (
                    <li key={point} className="flex gap-2 text-sm leading-relaxed text-slate-500">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-teal-600" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-10">
          <p className="font-heading text-sm font-semibold uppercase tracking-widest text-slate-500">
            Add-on modules
          </p>
          <ul className="mt-4 grid gap-6 sm:grid-cols-3">
            {addOnModules.map((module) => (
              <li key={module.key}>
                <div className="flex h-full flex-col rounded-lg border border-dashed border-teal-600/50 bg-white p-6">
                  <span className="w-fit rounded-full bg-teal-50 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-teal-700">
                    Add-on
                  </span>
                  <h3 className="mt-4 font-heading text-lg font-semibold text-navy-900">
                    {module.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">
                    {module.summary}
                  </p>
                  <Link
                    href={module.href}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-teal-700 underline underline-offset-4 hover:text-teal-800"
                  >
                    {module.linkLabel}
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      {/* Full-bleed strip, deliberately breaking out of the container rhythm above */}
      <div className="mt-16 border-y border-navy-900/10 bg-navy-900 py-8">
        <Container>
          <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-10 sm:gap-y-3">
            {productCallouts.map((callout) => (
              <p key={callout} className="flex items-start gap-2 text-sm font-medium text-white sm:max-w-xs">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-400" aria-hidden="true" />
                {callout}
              </p>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
