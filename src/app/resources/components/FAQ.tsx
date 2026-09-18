import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Are all resources free?",
    answer:
      "Yes. Most resources are free to download after providing your email address.",
  },
  {
    question: "Who are these resources for?",
    answer:
      "Students, job seekers, designers, marketers, business owners and anyone building digital skills.",
  },
  {
    question: "How often do you add new resources?",
    answer:
      "We regularly publish new templates, guides, checklists and learning materials.",
  },
  {
    question: "Can I use these resources professionally?",
    answer:
      "Yes. Most are for personal learning and professional use. Any restrictions are listed on the resource page.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-white py-10 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-[#0f172a] sm:text-3xl">
              Questions
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Quick answers about downloads, access and usage.
            </p>
          </div>

          <div className="space-y-2">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-xl border border-slate-200 bg-white px-4 py-3"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-[#0f172a]">
                  {faq.question}
                  <ChevronDown className="h-4 w-4 shrink-0 text-slate-400 transition group-open:rotate-180" />
                </summary>
                <p className="mt-2 pr-8 text-sm leading-6 text-slate-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
