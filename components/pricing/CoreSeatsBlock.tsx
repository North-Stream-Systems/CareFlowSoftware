import { coreDifferentiator, coreMinimum, coreSeats } from "@/lib/content/pricing";

export function CoreSeatsBlock({ compact = false }: { compact?: boolean }) {
  return (
    <div>
      <div className="grid gap-6 sm:grid-cols-2">
        {coreSeats.map((seat) => (
          <div key={seat.key} className="h-full rounded-lg border border-navy-100 bg-white p-8">
            <h3 className="font-heading text-xl font-semibold text-navy-900">{seat.name}</h3>
            <p className="mt-1 text-sm text-slate-500">{seat.roles}</p>

            <div className="mt-6 flex items-baseline gap-2">
              <span className="font-mono text-3xl font-semibold text-navy-900">£{seat.price}</span>
              <span className="text-sm text-slate-500">{seat.unit}</span>
            </div>

            {!compact && (
              <ul className="mt-6 space-y-3">
                {seat.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-lg border border-teal-600/30 bg-teal-50 p-6">
        <p className="font-heading text-sm font-semibold text-navy-900">{coreDifferentiator}</p>
        <p className="mt-2 font-mono text-xs text-slate-500">
          £{coreMinimum}/month minimum, whatever your seat mix.
        </p>
      </div>
    </div>
  );
}
