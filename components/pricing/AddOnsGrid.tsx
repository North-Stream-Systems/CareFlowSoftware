import Link from "next/link";
import { addOns } from "@/lib/content/pricing";

export function AddOnsGrid() {
  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {addOns.map((addOn) => (
        <li key={addOn.key}>
          <div className="flex h-full flex-col rounded-lg border border-navy-100 bg-white p-6">
            <h3 className="font-heading text-base font-semibold text-navy-900">{addOn.name}</h3>
            <p className="mt-2 font-mono text-xs text-teal-700">{addOn.price}</p>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-500">{addOn.description}</p>
            {addOn.href && (
              <Link
                href={addOn.href}
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-teal-700 underline underline-offset-4 hover:text-teal-800"
              >
                Learn more
                <span aria-hidden="true">→</span>
              </Link>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
