"use client";

import { useMemo, useState } from "react";
import { coreMinimum, supportLevels } from "@/lib/content/pricing";

export function PricingCalculator() {
  const [desktopSeats, setDesktopSeats] = useState(5);
  const [mobileSeats, setMobileSeats] = useState(30);
  const [supportKey, setSupportKey] = useState<(typeof supportLevels)[number]["key"]>("advanced");

  const { core, uplift, total, support } = useMemo(() => {
    const support = supportLevels.find((level) => level.key === supportKey) ?? supportLevels[0];
    const rawCore = Math.max(0, desktopSeats) * 49 + Math.max(0, mobileSeats) * 12;
    const core = Math.max(rawCore, coreMinimum);
    const rawUplift = core * support.uplift;
    const uplift = support.uplift > 0 ? Math.max(rawUplift, support.upliftMinimum) : 0;
    return { core, uplift, total: core + uplift, support };
  }, [desktopSeats, mobileSeats, supportKey]);

  return (
    <div className="rounded-2xl border border-navy-100 bg-white p-8 shadow-card">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="calc-desktop" className="font-heading text-sm font-medium text-navy-900">
            Desktop seats
          </label>
          <input
            id="calc-desktop"
            type="number"
            min={0}
            value={desktopSeats}
            onChange={(e) => setDesktopSeats(Number(e.target.value))}
            className="mt-1.5 block w-full rounded-lg border border-navy-200 px-4 py-2.5 text-sm text-navy-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
          />
        </div>
        <div>
          <label htmlFor="calc-mobile" className="font-heading text-sm font-medium text-navy-900">
            Mobile seats
          </label>
          <input
            id="calc-mobile"
            type="number"
            min={0}
            value={mobileSeats}
            onChange={(e) => setMobileSeats(Number(e.target.value))}
            className="mt-1.5 block w-full rounded-lg border border-navy-200 px-4 py-2.5 text-sm text-navy-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
          />
        </div>
      </div>

      <fieldset className="mt-6">
        <legend className="font-heading text-sm font-medium text-navy-900">Support level</legend>
        <div className="mt-2 flex flex-wrap gap-3">
          {supportLevels.map((level) => (
            <label
              key={level.key}
              className="flex items-center gap-2 rounded-lg border border-navy-200 px-4 py-2 text-sm text-navy-900 has-[:checked]:border-teal-600 has-[:checked]:bg-teal-50"
            >
              <input
                type="radio"
                name="calc-support"
                value={level.key}
                checked={supportKey === level.key}
                onChange={() => setSupportKey(level.key)}
                className="h-4 w-4 border-navy-300 text-teal-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
              />
              {level.name}
            </label>
          ))}
        </div>
      </fieldset>

      <div
        className="mt-8 grid gap-4 rounded-2xl bg-offwhite p-6 font-mono text-sm sm:grid-cols-3"
        aria-live="polite"
      >
        <div>
          <p className="text-slate-500">Core</p>
          <p className="mt-1 text-xl text-navy-900">£{core.toFixed(2)}</p>
        </div>
        <div>
          <p className="text-slate-500">{support.name} uplift</p>
          <p className="mt-1 text-xl text-navy-900">£{uplift.toFixed(2)}</p>
        </div>
        <div>
          <p className="text-teal-700">Total / month</p>
          <p className="mt-1 text-xl font-semibold text-navy-900">£{total.toFixed(2)}</p>
        </div>
      </div>
      <p className="mt-3 text-xs text-slate-500">
        Estimate for Core + Support only — excludes Inspection Report Packages and add-ons.
      </p>
    </div>
  );
}
