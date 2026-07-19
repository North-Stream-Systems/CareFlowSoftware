import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { productCallouts, productModules } from "@/lib/content/product";

export function ProductOverview({ id = "product" }: { id?: string }) {
  return (
    <section id={id} className="scroll-mt-16 bg-offwhite py-24 sm:py-32">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <Eyebrow>One platform</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 text-balance font-heading text-3xl font-bold text-navy-900 sm:text-4xl">
              Everything a care company runs on — in one place
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-lg leading-relaxed text-slate-500">
              No bolt-ons, no separate logins. One system for staff, clients, rostering and
              compliance.
            </p>
          </Reveal>
        </div>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {productModules.map((module, index) => (
            <Reveal as="li" key={module.key} delay={0.05 * index}>
              <div className="h-full rounded-2xl border border-navy-100 bg-white p-6 shadow-card transition-colors hover:border-teal-600/40">
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
            </Reveal>
          ))}
        </ul>

        <Reveal delay={0.2}>
          <div className="mt-12 flex flex-col gap-4 rounded-2xl border border-navy-100 bg-white p-6 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-10 sm:gap-y-4">
            {productCallouts.map((callout) => (
              <p key={callout} className="flex items-start gap-2 text-sm font-medium text-navy-900 sm:max-w-xs">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gradient" aria-hidden="true" />
                {callout}
              </p>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
