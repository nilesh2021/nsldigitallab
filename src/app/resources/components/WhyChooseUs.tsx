import {
  BadgeCheck,
  BookOpen,
  Download,
  RefreshCw,
} from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Practical learning",
    description: "Templates and guides built for real projects.",
  },
  {
    icon: Download,
    title: "Free downloads",
    description: "Checklists, interviews and files at no cost.",
  },
  {
    icon: RefreshCw,
    title: "Regular updates",
    description: "New SEO, UI/UX and marketing material weekly.",
  },
  {
    icon: BadgeCheck,
    title: "Curated quality",
    description: "Only resources you can apply immediately.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="border-y border-slate-100 bg-slate-50 py-10 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-[#0f172a] sm:text-3xl">
            Why these resources
          </h2>
          <p className="max-w-md text-sm leading-6 text-slate-600">
            Practical files for students, job seekers and working professionals.
          </p>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-4"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-cyan-50">
                  <Icon className="h-4 w-4 text-cyan-700" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#0f172a]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
