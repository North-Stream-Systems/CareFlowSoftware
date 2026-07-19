const pathway = [
  { name: "Safeguarding Awareness", type: "Video", status: "complete" },
  { name: "Moving & Handling", type: "Practical sign-off", status: "complete" },
  { name: "Medication Administration", type: "Quiz", status: "current" },
  { name: "Mental Capacity Act", type: "Document", status: "locked" },
];

export function TrainingMockup() {
  return (
    <div className="relative" aria-hidden="true">
      <div className="absolute -inset-10 -z-10 rounded-full bg-glow-teal blur-2xl" />

      <div className="overflow-hidden rounded-2xl border border-white/10 bg-navy-950 shadow-card-dark">
        <div className="flex items-center gap-1.5 border-b border-white/10 bg-navy-900 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="ml-3 rounded bg-white/5 px-3 py-1 font-mono text-[11px] text-white/70">
            app.careflow.co.uk/training
          </span>
        </div>

        <div className="grid gap-4 p-5 sm:grid-cols-5 sm:p-6">
          <div className="rounded-xl bg-navy-900/60 p-4 sm:col-span-3">
            <span className="font-heading text-xs font-semibold uppercase tracking-widest text-white/70">
              Care Worker Core Pathway
            </span>
            <div className="mt-4 space-y-3">
              {pathway.map((step) => (
                <div key={step.name} className="flex items-center gap-3 rounded-lg bg-white/5 px-3 py-2.5">
                  <span
                    className={`h-2 w-2 shrink-0 rounded-full ${
                      step.status === "complete"
                        ? "bg-teal-500"
                        : step.status === "current"
                          ? "bg-amber-500"
                          : "bg-white/20"
                    }`}
                  />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm text-white">{step.name}</p>
                    <p className="font-mono text-[10px] text-white/50">{step.type}</p>
                  </div>
                  {step.status === "locked" && (
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0 text-white/40">
                      <rect x="3" y="6" width="8" height="6" rx="1" stroke="currentColor" strokeWidth="1.2" />
                      <path d="M4.5 6V4.5a2.5 2.5 0 0 1 5 0V6" stroke="currentColor" strokeWidth="1.2" />
                    </svg>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:col-span-2">
            <div className="rounded-xl bg-navy-900/60 p-4">
              <span className="font-heading text-xs font-semibold uppercase tracking-widest text-white/70">
                Certificate
              </span>
              <div className="mt-3 rounded-lg border border-dashed border-teal-500/40 bg-white/5 p-4 text-center">
                <p className="font-mono text-[10px] uppercase tracking-widest text-teal-400">CareFlow</p>
                <p className="mt-2 font-heading text-sm font-semibold text-white">Moving &amp; Handling</p>
                <p className="mt-1 font-mono text-[10px] text-white/50">Issued to S. Owens</p>
              </div>
            </div>

            <div className="rounded-xl bg-navy-900/60 p-4">
              <span className="font-heading text-xs font-semibold uppercase tracking-widest text-white/70">
                Rostering compliance
              </span>
              <div className="mt-3 flex items-end justify-between">
                <span className="font-mono text-2xl font-semibold text-teal-400">Lifted</span>
                <span className="font-mono text-[10px] text-white/50">auto-synced</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
