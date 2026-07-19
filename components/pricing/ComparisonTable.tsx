import { comparisonRows, pricingTiers } from "@/lib/content/pricing";

function Check({ included }: { included: boolean | string }) {
  if (typeof included === "string") {
    return <span className="text-sm text-slate-600">{included}</span>;
  }
  if (!included) {
    return (
      <span aria-hidden="true" className="text-slate-300">
        —
      </span>
    );
  }
  return (
    <svg
      className="mx-auto h-5 w-5 text-teal-600"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 10.5l3.5 3.5L16 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ComparisonTable() {
  return (
    <div className="overflow-x-auto rounded-2xl border border-navy-100 bg-white shadow-card">
      <table className="w-full min-w-[640px] border-collapse text-left text-sm">
        <caption className="sr-only">Feature comparison between CareFlow pricing tiers</caption>
        <thead>
          <tr className="border-b border-navy-100">
            <th scope="col" className="px-6 py-5 font-heading text-sm font-semibold text-navy-900">
              Feature
            </th>
            {pricingTiers.map((tier) => (
              <th
                key={tier.key}
                scope="col"
                className="px-6 py-5 text-center font-heading text-sm font-semibold text-navy-900"
              >
                {tier.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {comparisonRows.map((row, index) => (
            <tr
              key={row.feature}
              className={index % 2 === 1 ? "bg-offwhite/60" : undefined}
            >
              <th scope="row" className="px-6 py-4 font-normal text-slate-600">
                {row.feature}
              </th>
              <td className="px-6 py-4 text-center">
                <Check included={row.essentials} />
              </td>
              <td className="px-6 py-4 text-center">
                <Check included={row.professional} />
              </td>
              <td className="px-6 py-4 text-center">
                <Check included={row.enterprise} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
