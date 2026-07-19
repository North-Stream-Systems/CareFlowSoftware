import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { techPoints } from "@/lib/content/product";

export function TechnicalEdge() {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-24 sm:py-32">
      <div
        className="pointer-events-none absolute right-0 top-1/3 -z-0 h-[420px] w-[420px] translate-x-1/3 rounded-full bg-glow-teal blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="max-w-2xl">
          <Reveal>
            <Eyebrow tone="dark">Built different</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 text-balance font-heading text-3xl font-bold text-white sm:text-4xl">
              For the ops directors who read the small print
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-lg leading-relaxed text-white/60">
              If you&rsquo;re technical enough to ask hard questions about architecture,
              permissions and AI, here are the answers.
            </p>
          </Reveal>
        </div>

        <ul className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
          {techPoints.map((point, index) => (
            <Reveal as="li" key={point.title} delay={0.05 * index}>
              <div className="h-full bg-navy-900 p-7">
                <h3 className="font-heading text-base font-semibold text-white">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {point.description}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
