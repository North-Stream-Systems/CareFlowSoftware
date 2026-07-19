import { Reveal } from "@/components/ui/Reveal";
import { supportFraming, supportLevels } from "@/lib/content/pricing";

export function SupportLevelsBlock({ compact = false }: { compact?: boolean }) {
  return (
    <div>
      <Reveal>
        <p className="max-w-2xl text-slate-500">{supportFraming}</p>
      </Reveal>

      <div className="mt-8 overflow-x-auto rounded-2xl border border-navy-100 bg-white shadow-card">
        <table className="w-full min-w-[640px] border-collapse text-left text-sm">
          <caption className="sr-only">Support level comparison</caption>
          <thead>
            <tr className="border-b border-navy-100">
              <th scope="col" className="px-6 py-5 font-heading text-sm font-semibold text-navy-900">
                Support level
              </th>
              {supportLevels.map((level) => (
                <th key={level.key} scope="col" className="px-6 py-5 font-heading text-sm font-semibold text-navy-900">
                  {level.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-navy-100">
              <th scope="row" className="px-6 py-4 font-normal text-slate-600">Coverage</th>
              {supportLevels.map((level) => (
                <td key={level.key} className="px-6 py-4 text-slate-600">{level.coverage}</td>
              ))}
            </tr>
            <tr className="border-b border-navy-100 bg-offwhite/60">
              <th scope="row" className="px-6 py-4 font-normal text-slate-600">Price</th>
              {supportLevels.map((level) => (
                <td key={level.key} className="px-6 py-4 font-mono text-xs text-navy-900">
                  {level.priceLabel}
                </td>
              ))}
            </tr>
            <tr className="border-b border-navy-100">
              <th scope="row" className="px-6 py-4 font-normal text-slate-600">Response — critical</th>
              {supportLevels.map((level) => (
                <td key={level.key} className="px-6 py-4 font-mono text-xs text-navy-900">
                  {level.responseCritical}
                </td>
              ))}
            </tr>
            <tr className={compact ? undefined : "border-b border-navy-100 bg-offwhite/60"}>
              <th scope="row" className="px-6 py-4 font-normal text-slate-600">Response — standard</th>
              {supportLevels.map((level) => (
                <td key={level.key} className="px-6 py-4 font-mono text-xs text-navy-900">
                  {level.responseStandard}
                </td>
              ))}
            </tr>
            {!compact && (
              <tr className="bg-offwhite/60">
                <th scope="row" className="px-6 py-4 font-normal text-slate-600">Dedicated account manager</th>
                {supportLevels.map((level) => (
                  <td key={level.key} className="px-6 py-4 text-slate-600">
                    {level.accountManager ? "Included" : "—"}
                  </td>
                ))}
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
