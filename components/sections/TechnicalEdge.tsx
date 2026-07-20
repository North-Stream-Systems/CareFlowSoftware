import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { techPoints } from "@/lib/content/product";

export function TechnicalEdge() {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-24 sm:py-28">
      <div
        className="pointer-events-none absolute right-0 top-1/3 -z-0 h-[360px] w-[360px] translate-x-1/3 rounded-full bg-glow-teal opacity-60 blur-2xl"
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Eyebrow tone="dark">Built different</Eyebrow>
            <h2 className="mt-5 text-balance font-heading text-3xl font-bold text-white sm:text-4xl">
              For the ops directors who read the small print
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/60">
              If you&rsquo;re technical enough to ask hard questions about architecture,
              permissions and AI, here are the answers.
            </p>
          </div>

          <ul className="divide-y divide-white/10 border-t border-white/10 lg:col-span-7 lg:col-start-6 lg:mt-2">
            {techPoints.map((point) => (
              <li key={point.title} className="py-6">
                <h3 className="font-heading text-base font-semibold text-white">{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{point.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
