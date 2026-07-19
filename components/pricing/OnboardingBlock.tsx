import { Reveal } from "@/components/ui/Reveal";
import { onboardingFraming, onboardingOptions } from "@/lib/content/pricing";

export function OnboardingBlock() {
  return (
    <div>
      <Reveal>
        <p className="max-w-2xl text-slate-500">{onboardingFraming}</p>
      </Reveal>

      <ul className="mt-8 grid gap-6 sm:grid-cols-3">
        {onboardingOptions.map((option, index) => (
          <Reveal as="li" key={option.key} delay={0.05 * index}>
            <div className="h-full rounded-2xl border border-navy-100 bg-white p-6 shadow-card">
              <h3 className="font-heading text-base font-semibold text-navy-900">{option.name}</h3>
              <p className="mt-2 font-mono text-sm text-teal-700">{option.price}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-500">{option.description}</p>
            </div>
          </Reveal>
        ))}
      </ul>
    </div>
  );
}
