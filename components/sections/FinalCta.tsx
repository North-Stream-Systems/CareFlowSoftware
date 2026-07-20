import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-brand-gradient py-20 sm:py-24">
      <div
        className="pointer-events-none absolute inset-0 bg-glow-teal opacity-60"
        aria-hidden="true"
      />
      <Container className="relative text-center">
        <Reveal>
          <h2 className="text-balance font-heading text-3xl font-bold text-white sm:text-4xl">
            See it running, not a slide deck
          </h2>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
            Book a demo and we&rsquo;ll walk through your rota and your compliance workload,
            and show you where CareFlow actually saves your team time.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/book-demo" variant="secondary" size="lg">
              Book a Demo
            </Button>
            <a
              href={`mailto:${siteConfig.foundersEmail}`}
              className="font-heading text-sm font-semibold text-white underline underline-offset-4 hover:text-white/80"
            >
              Talk to a founder
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
