import { timeline } from "@/lib/content/timeline";

export function Timeline() {
  return (
    <ol className="relative space-y-10 border-l border-navy-100 pl-8">
      {timeline.map((item) => (
        <li key={item.title} className="relative">
          <span
            className="absolute -left-[2.35rem] top-1 h-3 w-3 rounded-full bg-brand-gradient"
            aria-hidden="true"
          />
          <span className="font-mono text-xs uppercase tracking-widest text-teal-700">
            {item.period}
          </span>
          <h3 className="mt-2 font-heading text-lg font-semibold text-navy-900">{item.title}</h3>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-500">
            {item.description}
          </p>
        </li>
      ))}
    </ol>
  );
}
