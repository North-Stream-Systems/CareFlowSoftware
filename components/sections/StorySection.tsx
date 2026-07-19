import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Avatar } from "@/components/ui/Avatar";
import { founders, foundersIntro } from "@/lib/content/founders";

export function StorySection({ id = "story" }: { id?: string }) {
  return (
    <section id={id} className="bg-white py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <Eyebrow className="justify-center">Our story</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 text-balance font-heading text-3xl font-bold text-navy-900 sm:text-4xl">
              Built by two people who&rsquo;d already lived the problem
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-balance text-lg leading-relaxed text-slate-500">
              {foundersIntro}
            </p>
          </Reveal>
        </div>

        <div className="mx-auto mt-20 grid max-w-4xl gap-16 sm:grid-cols-2">
          {founders.map((founder, index) => (
            <Reveal key={founder.name} delay={0.1 * index}>
              <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
                <Avatar initials={founder.initials} name={founder.name} />
                <h3 className="mt-6 font-heading text-xl font-semibold text-navy-900">
                  {founder.name}
                </h3>
                <p className="font-mono text-xs uppercase tracking-widest text-teal-700">
                  {founder.role}
                </p>
                <div className="mt-4 space-y-4 text-sm leading-relaxed text-slate-500">
                  {founder.bio.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
