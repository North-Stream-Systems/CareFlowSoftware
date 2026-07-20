import { Container } from "@/components/ui/Container";
import { problemPoints } from "@/lib/content/problems";

export function ProblemSection() {
  return (
    <section className="bg-offwhite py-20 sm:py-24">
      <Container>
        <h2 className="max-w-2xl text-balance font-heading text-3xl font-bold text-navy-900 sm:text-4xl">
          Most care software wasn&rsquo;t built by anyone who&rsquo;s delivered care.
        </h2>
        <p className="mt-4 max-w-xl text-slate-500">
          It shows. Here&rsquo;s what that looks like on the ground, most weeks.
        </p>

        <ul className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2">
          {problemPoints.map((point, index) => (
            <li key={point.label} className="flex gap-5">
              <span
                className="shrink-0 font-mono text-6xl font-bold leading-none text-teal-600"
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="pt-2">
                <p className="font-heading text-lg font-semibold text-navy-900">{point.label}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{point.detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
