import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { problemPoints } from "@/lib/content/problems";

export function ProblemSection() {
  return (
    <section className="bg-offwhite py-20 sm:py-28">
      <Container>
        <Reveal>
          <h2 className="max-w-2xl text-balance font-heading text-3xl font-bold text-navy-900 sm:text-4xl">
            Most care software wasn&rsquo;t built by anyone who&rsquo;s delivered care.
          </h2>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="mt-4 max-w-xl text-slate-500">
            It shows. Here&rsquo;s what that looks like on the ground, every day.
          </p>
        </Reveal>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {problemPoints.map((point, index) => (
            <Reveal as="li" key={point.label} delay={0.05 * index}>
              <div className="h-full rounded-2xl border border-navy-100 bg-white p-6 shadow-card">
                <span className="font-mono text-sm text-teal-600">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-4 font-heading text-lg font-semibold text-navy-900">
                  {point.label}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{point.detail}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
