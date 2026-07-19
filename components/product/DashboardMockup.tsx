const rotaRows = [
  { name: "S. Owens", shift: "07:00–14:30", offset: 8, width: 34, tone: "bg-teal-500" },
  { name: "R. Pryce", shift: "08:00–16:00", offset: 20, width: 40, tone: "bg-navy-400" },
  { name: "J. Hughes", shift: "14:00–22:00", offset: 46, width: 38, tone: "bg-amber-500" },
  { name: "M. Ellis", shift: "Unassigned", offset: 70, width: 20, tone: "bg-slate-300" },
];

export function DashboardMockup() {
  return (
    <div className="relative" aria-hidden="true">
      {/* Teal glow behind the mockup */}
      <div className="absolute -inset-10 -z-10 rounded-full bg-glow-teal blur-2xl" />

      {/* Browser chrome frame */}
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-navy-950 shadow-card-dark">
        <div className="flex items-center gap-1.5 border-b border-white/10 bg-navy-900 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="ml-3 rounded bg-white/5 px-3 py-1 font-mono text-[11px] text-white/70">
            app.careflow.co.uk/rota
          </span>
        </div>

        <div className="grid gap-4 p-5 sm:grid-cols-5 sm:p-6">
          {/* Rota gantt panel */}
          <div className="rounded-xl bg-navy-900/60 p-4 sm:col-span-3">
            <div className="mb-3 flex items-center justify-between">
              <span className="font-heading text-xs font-semibold uppercase tracking-widest text-white/70">
                Today&rsquo;s Rota
              </span>
              <span className="font-mono text-[11px] text-teal-400">Live</span>
            </div>
            <div className="space-y-3">
              {rotaRows.map((row) => (
                <div key={row.name} className="flex items-center gap-3">
                  <span className="w-16 shrink-0 truncate font-mono text-[11px] text-white/70">
                    {row.name}
                  </span>
                  <div className="relative h-5 flex-1 rounded bg-white/5">
                    <div
                      className={`absolute inset-y-0 rounded ${row.tone}`}
                      style={{ left: `${row.offset}%`, width: `${row.width}%` }}
                    />
                  </div>
                  <span className="w-24 shrink-0 text-right font-mono text-[10px] text-white/70">
                    {row.shift}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Compliance / stats panel */}
          <div className="flex flex-col gap-4 sm:col-span-2">
            <div className="rounded-xl bg-navy-900/60 p-4">
              <span className="font-heading text-xs font-semibold uppercase tracking-widest text-white/70">
                Compliance
              </span>
              <div className="mt-3 flex items-end justify-between">
                <span className="font-mono text-2xl font-semibold text-white">98%</span>
                <span className="rounded-full bg-teal-500/15 px-2 py-1 font-mono text-[10px] text-teal-400">
                  CQC ready
                </span>
              </div>
              <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[98%] rounded-full bg-teal-500" />
              </div>
            </div>

            <div className="rounded-xl bg-navy-900/60 p-4">
              <span className="font-heading text-xs font-semibold uppercase tracking-widest text-white/70">
                Unassigned visits
              </span>
              <div className="mt-3 flex items-end justify-between">
                <span className="font-mono text-2xl font-semibold text-amber-400">1</span>
                <span className="font-mono text-[10px] text-white/70">AI cover suggested</span>
              </div>
            </div>

            <div className="rounded-xl bg-navy-900/60 p-4">
              <span className="font-heading text-xs font-semibold uppercase tracking-widest text-white/70">
                Bradford Factor
              </span>
              <div className="mt-3 font-mono text-2xl font-semibold text-white">
                42<span className="text-sm text-white/70"> avg</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
