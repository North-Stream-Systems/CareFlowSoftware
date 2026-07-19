import { pricingFaqs } from "@/lib/content/pricing";

export function FaqAccordion() {
  return (
    <div className="divide-y divide-navy-100 rounded-2xl border border-navy-100 bg-white shadow-card">
      {pricingFaqs.map((faq) => (
        <details key={faq.question} className="group px-6 py-2 open:pb-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 font-heading text-base font-semibold text-navy-900 marker:content-none">
            {faq.question}
            <svg
              className="h-5 w-5 shrink-0 text-teal-600 transition-transform duration-200 group-open:rotate-45"
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
            >
              <path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </summary>
          <p className="text-sm leading-relaxed text-slate-500">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
