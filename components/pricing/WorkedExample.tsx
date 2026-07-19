import { Reveal } from "@/components/ui/Reveal";
import { workedExample } from "@/lib/content/pricing";

export function WorkedExample() {
  return (
    <Reveal>
      <div className="rounded-2xl border border-navy-100 bg-navy-950 p-8 text-white">
        <p className="font-heading text-sm font-semibold uppercase tracking-widest text-teal-400">
          Worked example
        </p>
        <p className="mt-3 max-w-xl text-lg text-white/80">
          {workedExample.desktopSeats} office staff + {workedExample.mobileSeats} care workers,
          Advanced support:
        </p>

        <div className="mt-6 grid gap-4 font-mono text-sm sm:grid-cols-3">
          <div className="rounded-xl bg-white/5 p-4">
            <p className="text-white/50">Core</p>
            <p className="mt-1 text-xl text-white">£{workedExample.core.toFixed(2)}</p>
            <p className="mt-1 text-xs text-white/40">
              {workedExample.desktopSeats}×£49 + {workedExample.mobileSeats}×£12
            </p>
          </div>
          <div className="rounded-xl bg-white/5 p-4">
            <p className="text-white/50">Advanced uplift (+15%)</p>
            <p className="mt-1 text-xl text-white">£{workedExample.supportUplift.toFixed(2)}</p>
          </div>
          <div className="rounded-xl bg-teal-500/15 p-4">
            <p className="text-teal-400">Total / month</p>
            <p className="mt-1 text-xl text-white">£{workedExample.total.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
