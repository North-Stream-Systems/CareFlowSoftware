"use client";

import { useState } from "react";
import clsx from "clsx";
import { contractTerms } from "@/lib/content/pricing";

export function ContractTermBlock() {
  const [years, setYears] = useState(1);
  const term = contractTerms.find((t) => t.years === years) ?? contractTerms[0];

  return (
    <div className="rounded-lg border border-navy-100 bg-white p-8">
      <fieldset>
        <legend className="font-heading text-sm font-medium text-navy-900">Contract length</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {contractTerms.map((t) => (
            <label
              key={t.years}
              className={clsx(
                "cursor-pointer rounded-lg border px-4 py-2 text-sm font-medium transition-colors",
                years === t.years
                  ? "border-teal-600 bg-teal-50 text-teal-800"
                  : "border-navy-200 text-navy-900 hover:border-teal-600/50",
              )}
            >
              <input
                type="radio"
                name="contract-term"
                value={t.years}
                checked={years === t.years}
                onChange={() => setYears(t.years)}
                className="sr-only"
              />
              {t.label}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="mt-8 grid gap-4 sm:grid-cols-2" aria-live="polite">
        <div className="rounded-xl bg-offwhite p-5">
          <p className="text-sm text-slate-500">Desktop seat</p>
          <p className="mt-1 font-mono text-2xl font-semibold text-navy-900">
            £{term.desktopPrice.toFixed(2)}
            <span className="text-sm font-normal text-slate-500">/user/month</span>
          </p>
        </div>
        <div className="rounded-xl bg-offwhite p-5">
          <p className="text-sm text-slate-500">Mobile seat</p>
          <p className="mt-1 font-mono text-2xl font-semibold text-navy-900">
            £{term.mobilePrice.toFixed(2)}
            <span className="text-sm font-normal text-slate-500">/user/month</span>
          </p>
        </div>
      </div>

      <p className="mt-4 font-mono text-xs text-teal-700">
        {term.discountPercent > 0 ? `${term.discountPercent}% off Core, locked in for ${term.years} years` : "Standard Core pricing"}
      </p>
      <p className="mt-2 text-xs text-slate-500">
        This only touches the Core seat price. Support, Inspection Report Packages and add-ons
        stay the same whatever term you pick.
      </p>
    </div>
  );
}
