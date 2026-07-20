import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

const badges = ["CQC ready", "CIW ready"];

export function SocialProof() {
  return (
    <section className="bg-offwhite py-24 sm:py-28">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>What we can show you so far</Eyebrow>
          <h2 className="mt-5 text-balance font-heading text-3xl font-bold text-navy-900 sm:text-4xl">
            One real provider, running it day to day
          </h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          {/* Pilot provider placeholder — replace with real logo/name once agreed for public use */}
          <div className="flex h-full flex-col justify-between rounded-lg border border-navy-100 bg-white p-8">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-teal-700">
                Pilot partner
              </span>
              <p className="mt-4 font-heading text-xl font-semibold text-navy-900">
                Piloted with a North Wales care provider
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                {/* TODO: swap in real pilot provider name/logo once public reference is agreed */}
                Domiciliary and residential services, running SmartRota and full compliance
                tracking day to day. Not a sandbox account.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-3">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-navy-100 bg-offwhite px-4 py-1.5 font-mono text-xs text-navy-900"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Testimonial placeholder — do not present as a real quote until sign-off */}
          <div className="flex h-full flex-col justify-between rounded-lg border border-dashed border-navy-200 bg-white p-8">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-slate-500">
                Testimonial, placeholder
              </span>
              {/* TODO: real client quote, name and role, once pilot sign-off is confirmed */}
              <p className="mt-4 text-lg leading-relaxed text-slate-500">
                &ldquo;A real quote from our pilot provider will go here once they&rsquo;ve
                signed off on using it publicly.&rdquo;
              </p>
            </div>
            <p className="mt-8 font-mono text-xs text-slate-500">— Awaiting pilot sign-off</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
