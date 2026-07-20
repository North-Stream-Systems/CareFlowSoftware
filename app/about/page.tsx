import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Avatar } from "@/components/ui/Avatar";
import { Timeline } from "@/components/sections/Timeline";
import { FinalCta } from "@/components/sections/FinalCta";
import { founders, foundersIntro } from "@/lib/content/founders";
import { whyNow } from "@/lib/content/about";

export const metadata: Metadata = {
  title: "About",
  description:
    "CareFlow was founded by Cameron Darling and Edward Lunt. One ran care shifts, one worked inside care services. Here's why they built it.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-navy-900 pb-20 pt-16 sm:pb-24 sm:pt-20">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow tone="dark">About CareFlow</Eyebrow>
            <h1 className="mt-5 text-balance font-heading text-4xl font-bold text-white sm:text-5xl">
              We built the software we wished existed
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-white/70">{foundersIntro}</p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="mx-auto grid max-w-5xl gap-16 sm:grid-cols-2">
            {founders.map((founder) => (
              <div key={founder.name} className="flex flex-col items-center text-center sm:items-start sm:text-left">
                <Avatar initials={founder.initials} name={founder.name} />
                <h2 className="mt-6 font-heading text-2xl font-semibold text-navy-900">
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
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-offwhite py-20 sm:py-24">
        <Container>
          <div className="mx-auto max-w-2xl">
            <Eyebrow>{whyNow.eyebrow}</Eyebrow>
            <h2 className="mt-5 text-balance font-heading text-3xl font-bold text-navy-900 sm:text-4xl">
              {whyNow.heading}
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-slate-500">
              {whyNow.paragraphs.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>Milestones</Eyebrow>
            <h2 className="mt-5 text-balance font-heading text-3xl font-bold text-navy-900 sm:text-4xl">
              From one care provider in North Wales to a platform for the sector
            </h2>
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
