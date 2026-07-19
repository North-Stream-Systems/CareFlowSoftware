const staffAcknowledgements = [
  { name: "S. Owens", status: "Acknowledged" },
  { name: "R. Pryce", status: "Acknowledged" },
  { name: "J. Hughes", status: "Pending" },
  { name: "M. Ellis", status: "Pending" },
];

export function PolicyMockup() {
  return (
    <div className="relative" aria-hidden="true">
      <div className="absolute -inset-10 -z-10 rounded-full bg-glow-teal blur-2xl" />

      <div className="overflow-hidden rounded-2xl border border-white/10 bg-navy-950 shadow-card-dark">
        <div className="flex items-center gap-1.5 border-b border-white/10 bg-navy-900 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="ml-3 rounded bg-white/5 px-3 py-1 font-mono text-[11px] text-white/70">
            app.careflow.co.uk/policies
          </span>
        </div>

        <div className="grid gap-4 p-5 sm:grid-cols-5 sm:p-6">
          <div className="rounded-xl bg-navy-900/60 p-4 sm:col-span-3">
            <span className="font-heading text-xs font-semibold uppercase tracking-widest text-white/70">
              Safeguarding Policy — v3
            </span>
            <div className="mt-3 space-y-2">
              {[100, 92, 85, 96, 78].map((width, i) => (
                <div key={i} className="h-2 rounded bg-white/10" style={{ width: `${width}%` }} />
              ))}
            </div>
            <div className="mt-5 rounded-lg border border-teal-500/30 bg-teal-500/10 px-3 py-2 text-center">
              <span className="font-mono text-[11px] text-teal-400">Scroll to bottom to acknowledge</span>
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:col-span-2">
            <div className="rounded-xl bg-navy-900/60 p-4">
              <span className="font-heading text-xs font-semibold uppercase tracking-widest text-white/70">
                Acknowledgement matrix
              </span>
              <div className="mt-3 space-y-2">
                {staffAcknowledgements.map((staff) => (
                  <div key={staff.name} className="flex items-center justify-between">
                    <span className="font-mono text-[11px] text-white/70">{staff.name}</span>
                    <span
                      className={`font-mono text-[10px] ${
                        staff.status === "Acknowledged" ? "text-teal-400" : "text-amber-400"
                      }`}
                    >
                      {staff.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl bg-navy-900/60 p-4">
              <span className="font-heading text-xs font-semibold uppercase tracking-widest text-white/70">
                Suite generated
              </span>
              <div className="mt-3 flex items-end justify-between">
                <span className="font-mono text-2xl font-semibold text-white">19+</span>
                <span className="font-mono text-[10px] text-white/50">policies</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
