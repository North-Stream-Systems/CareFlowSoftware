import clsx from "clsx";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { pricingTiers, pricingUnit } from "@/lib/content/pricing";

export function PricingCards() {
  return (
    <ul className="grid gap-6 lg:grid-cols-3">
      {pricingTiers.map((tier, index) => (
        <Reveal as="li" key={tier.key} delay={0.05 * index} className="h-full">
          <div
            className={clsx(
              "flex h-full flex-col rounded-2xl border p-8",
              tier.highlighted
                ? "border-teal-600 bg-navy-900 text-white shadow-card-dark"
                : "border-navy-100 bg-white text-navy-900 shadow-card",
            )}
          >
            {tier.highlighted && (
              <span className="mb-4 inline-flex w-fit rounded-full bg-teal-500/15 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-teal-400">
                Most chosen
              </span>
            )}

            <h3 className="font-heading text-xl font-semibold">{tier.name}</h3>
            <p className={clsx("mt-2 text-sm", tier.highlighted ? "text-white/60" : "text-slate-500")}>
              {tier.positioning}
            </p>

            <div className="mt-6 flex items-baseline gap-2">
              <span className="font-mono text-3xl font-semibold">{tier.price}</span>
              <span className={clsx("text-sm", tier.highlighted ? "text-white/70" : "text-slate-500")}>
                / {pricingUnit}
              </span>
            </div>
            <p className={clsx("mt-1 font-mono text-xs", tier.highlighted ? "text-white/70" : "text-slate-500")}>
              {tier.minimum}
            </p>

            <ul className="mt-6 flex-1 space-y-3">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm">
                  <span
                    className={clsx(
                      "mt-1 h-1.5 w-1.5 shrink-0 rounded-full",
                      tier.highlighted ? "bg-teal-400" : "bg-teal-600",
                    )}
                    aria-hidden="true"
                  />
                  <span className={tier.highlighted ? "text-white/80" : "text-slate-600"}>{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              href="/book-demo"
              variant={tier.highlighted ? "primary" : "secondary"}
              className="mt-8 w-full"
            >
              Get a tailored quote
            </Button>
          </div>
        </Reveal>
      ))}
    </ul>
  );
}
