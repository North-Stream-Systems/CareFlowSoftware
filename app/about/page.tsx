import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Avatar } from "@/components/ui/Avatar";
import { Timeline } from "@/components/sections/Timeline";
import { FinalCta } from "@/components/sections/FinalCta";
import { founders, foundersIntro } from "@/lib/content/founders";
import { whyNow } from "@/lib/content/about";

export const metadata: Metadata = {
  title: "About",
  description:
    "CareFlow was founded by Cameron Darling and Edward Lunt — one ran care shifts, one worked inside care services. Here's why they built it.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-navy-900 pb-20 pt-16 sm:pb-24 sm:pt-20">
        <Container>
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow tone="dark">About CareFlow</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-5 text-balance font-heading text-4xl font-bold text-white sm:text-5xl">
                We built the software we wished existed
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-lg leading-relaxed text-white/70">{foundersIntro}</p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-3xl space-y-20">
            {founders.map((founder) => (
              <Reveal key={founder.name}>
                <div className="flex flex-col gap-8 sm:flex-row">
                  <Avatar initials={founder.initials} name={founder.name} className="mx-auto sm:mx-0" />
                  <div className="text-center sm:text-left">
                    <h2 className="font-heading text-2xl font-semibold text-navy-900">
                      {founder.name}
                    </h2>
                    <p className="font-mono text-xs uppercase tracking-widest text-teal-700">
                      {founder.role}
                    </p>
                    <div className="mt-4 space-y-4 text-base leading-relaxed text-slate-500">
                      {founder.bio.map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-offwhite py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-2xl">
            <Reveal>
              <Eyebrow>{whyNow.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 text-balance font-heading text-3xl font-bold text-navy-900 sm:text-4xl">
                {whyNow.heading}
              </h2>
            </Reveal>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-slate-500">
              {whyNow.paragraphs.map((paragraph, i) => (
                <Reveal key={i} delay={0.05 * (i + 2)}>
                  <p>{paragraph}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>Milestones</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 text-balance font-heading text-3xl font-bold text-navy-900 sm:text-4xl">
                From one care provider in North Wales to a platform for the sector
              </h2>
            </Reveal>
          </div>
          <div className="mt-14">
            <Timeline />
          </div>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
