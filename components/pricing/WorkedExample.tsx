import { Reveal } from "@/components/ui/Reveal";
import { supportLevels, workedExamples } from "@/lib/content/pricing";

export function WorkedExample() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {workedExamples.map((example, index) => {
        const support = supportLevels.find((level) => level.key === example.supportLevelKey);
        return (
          <Reveal key={example.termYears} delay={0.05 * index}>
            <div className="h-full rounded-2xl border border-navy-100 bg-navy-950 p-8 text-white">
              <p className="font-heading text-sm font-semibold uppercase tracking-widest text-teal-400">
                {example.termYears === 1 ? "Month-to-month" : `${example.termYears}-year term`}
              </p>
              <p className="mt-3 text-lg text-white/80">
                {example.desktopSeats} office staff + {example.mobileSeats} care workers,{" "}
                {support?.name} support
              </p>

              <div className="mt-6 grid gap-4 font-mono text-sm sm:grid-cols-3">
                <div className="rounded-xl bg-white/5 p-4">
                  <p className="text-white/70">Core</p>
                  <p className="mt-1 text-xl text-white">£{example.core.toFixed(2)}</p>
                  <p className="mt-1 text-xs text-white/60">
                    {example.desktopSeats}×£{example.desktopPrice.toFixed(2)} + {example.mobileSeats}×£
                    {example.mobilePrice.toFixed(2)}
                  </p>
                </div>
                <div className="rounded-xl bg-white/5 p-4">
                  <p className="text-white/70">{support?.name} support</p>
                  <p className="mt-1 text-xl text-white">£{example.support.toFixed(2)}</p>
                  <p className="mt-1 text-xs text-white/60">
                    {example.desktopSeats}×£{support?.feePerDesktopSeat}
                  </p>
                </div>
                <div className="rounded-xl bg-teal-500/15 p-4">
                  <p className="text-teal-400">Total / month</p>
                  <p className="mt-1 text-xl text-white">£{example.total.toFixed(2)}</p>
                </div>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
