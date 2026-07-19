import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { DashboardMockup } from "@/components/product/DashboardMockup";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-900 pb-20 pt-16 sm:pb-28 sm:pt-24">
      {/* Ambient teal glow, decorative only */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-0 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-glow-teal blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-10">
          <div>
            <Reveal>
              <Eyebrow tone="dark">North Stream Systems</Eyebrow>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="mt-5 text-balance font-heading text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
                Care software should disappear into the background.{" "}
                <span className="bg-gradient-to-r from-teal-300 to-teal-500 bg-clip-text text-transparent">
                  Most of it doesn&rsquo;t.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
                CareFlow is a full platform for domiciliary and residential care —
                rostering, compliance, care planning and staff, all in one place.
                Built for CQC and CIW, by people who&rsquo;ve actually run care shifts —
                not just sold software to them.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button href="/book-demo" size="lg">
                  Book a Demo
                </Button>
                <Button href="#product" variant="outlineOnDark" size="lg">
                  See how it works
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="lg:pl-4">
            <div className="lg:-rotate-1">
              <DashboardMockup />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
