"use client";

import { useMemo, useState } from "react";
import { contractTerms, coreMinimum, supportLevels } from "@/lib/content/pricing";

export function PricingCalculator() {
  const [desktopSeats, setDesktopSeats] = useState(5);
  const [mobileSeats, setMobileSeats] = useState(30);
  const [supportKey, setSupportKey] = useState<(typeof supportLevels)[number]["key"]>("advanced");
  const [termYears, setTermYears] = useState(1);

  const { core, support, supportFee, total, term } = useMemo(() => {
    const support = supportLevels.find((level) => level.key === supportKey) ?? supportLevels[0];
    const term = contractTerms.find((t) => t.years === termYears) ?? contractTerms[0];
    const desktop = Math.max(0, desktopSeats);
    const mobile = Math.max(0, mobileSeats);
    const rawCore = desktop * term.desktopPrice + mobile * term.mobilePrice;
    const core = Math.max(rawCore, coreMinimum);
    const supportFee = desktop * support.feePerDesktopSeat;
    return { core, support, supportFee, total: core + supportFee, term };
  }, [desktopSeats, mobileSeats, supportKey, termYears]);

  return (
    <div className="rounded-lg border border-navy-100 bg-white p-8">
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

      <fieldset className="mt-6">
        <legend className="font-heading text-sm font-medium text-navy-900">Contract length</legend>
        <div className="mt-2 flex flex-wrap gap-3">
          {contractTerms.map((t) => (
            <label
              key={t.years}
              className="flex items-center gap-2 rounded-lg border border-navy-200 px-4 py-2 text-sm text-navy-900 has-[:checked]:border-teal-600 has-[:checked]:bg-teal-50"
            >
              <input
                type="radio"
                name="calc-term"
                value={t.years}
                checked={termYears === t.years}
                onChange={() => setTermYears(t.years)}
                className="h-4 w-4 border-navy-300 text-teal-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
              />
              {t.label}
            </label>
          ))}
        </div>
      </fieldset>

      <div
        className="mt-8 grid gap-4 rounded-lg bg-offwhite p-6 font-mono text-sm sm:grid-cols-3"
        aria-live="polite"
      >
        <div>
          <p className="text-slate-500">
            Core{" "}
            {term.discountPercent > 0 && (
              <span className="text-teal-700">({term.discountPercent}% off)</span>
            )}
          </p>
          <p className="mt-1 text-xl text-navy-900">£{core.toFixed(2)}</p>
        </div>
        <div>
          <p className="text-slate-500">{support.name} support</p>
          <p className="mt-1 text-xl text-navy-900">£{supportFee.toFixed(2)}</p>
        </div>
        <div>
          <p className="text-teal-700">Total / month</p>
          <p className="mt-1 text-xl font-semibold text-navy-900">£{total.toFixed(2)}</p>
        </div>
      </div>
      <p className="mt-3 text-xs text-slate-500">
        This is Core plus Support only. It doesn&rsquo;t include Inspection Report Packages or
        add-ons.
      </p>
    </div>
  );
}
