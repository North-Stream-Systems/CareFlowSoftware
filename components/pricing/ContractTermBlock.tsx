"use client";

import { useState } from "react";
import clsx from "clsx";
import { contractTerms } from "@/lib/content/pricing";

const maxDiscount = Math.max(...contractTerms.map((t) => t.discountPercent));

export function ContractTermBlock() {
  const [years, setYears] = useState(1);
  const term = contractTerms.find((t) => t.years === years) ?? contractTerms[0];

  return (
    <div className="rounded-lg bg-navy-950 p-8 text-white">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <fieldset className="min-w-[240px] flex-1">
          <legend className="font-heading text-sm font-medium text-white">Contract length</legend>
          <div className="mt-3 flex flex-wrap gap-2">
            {contractTerms.map((t) => (
              <label
                key={t.years}
                className={clsx(
                  "cursor-pointer rounded-lg border px-4 py-2 text-sm font-medium transition-colors",
                  years === t.years
                    ? "border-teal-400 bg-teal-500/15 text-teal-300"
                    : "border-white/15 text-white/70 hover:border-teal-400/50",
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
        <span className="rounded-full bg-teal-500/15 px-3 py-1 font-mono text-xs uppercase tracking-widest text-teal-300">
          Save up to {maxDiscount}%
        </span>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2" aria-live="polite">
        <div className="rounded-lg bg-white/5 p-5">
          <p className="text-sm text-white/70">Desktop seat</p>
          <p className="mt-1 font-mono text-2xl font-semibold text-white">
            £{term.desktopPrice.toFixed(2)}
            <span className="text-sm font-normal text-white/70">/user/month</span>
          </p>
        </div>
        <div className="rounded-lg bg-white/5 p-5">
          <p className="text-sm text-white/70">Mobile seat</p>
          <p className="mt-1 font-mono text-2xl font-semibold text-white">
            £{term.mobilePrice.toFixed(2)}
            <span className="text-sm font-normal text-white/70">/user/month</span>
          </p>
        </div>
      </div>

      <p className="mt-4 font-mono text-xs text-teal-300">
        {term.discountPercent > 0 ? `${term.discountPercent}% off Core, locked in for ${term.years} years` : "Standard Core pricing"}
      </p>
      <p className="mt-2 text-xs text-white/70">
        This only touches the Core seat price. Support, Inspection Report Packages and add-ons
        stay the same whatever term you pick.
      </p>
    </div>
  );
}
