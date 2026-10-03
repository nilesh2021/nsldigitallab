import { Plus } from "lucide-react";

type FAQ = { question: string; answer: string };

type Props = {
  faqs: FAQ[];
};

export default function FAQSection({ faqs }: Props) {
  if (!faqs.length) return null;

  return (
    <section className="scroll-mt-24 border-t border-slate-100 bg-[#f5f7fb] py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-[#0f172a] sm:text-3xl">
          FAQ
        </h2>
        <div className="mt-8 divide-y divide-slate-200 border-y border-slate-200 bg-white">
          {faqs.map((faq) => (
            <details key={faq.question} className="group px-4 py-5 sm:px-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base font-semibold text-slate-900 [&::-webkit-details-marker]:hidden">
                {faq.question}
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-50 ring-1 ring-slate-200 transition group-open:rotate-45 group-open:bg-slate-900 group-open:text-white">
                  <Plus className="h-4 w-4" aria-hidden />
                </span>
              </summary>
              <p className="mt-3 pr-4 text-sm leading-7 text-slate-600 sm:pr-12">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
