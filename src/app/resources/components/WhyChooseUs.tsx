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
    description: "Templates and guides built for real projects, not theory.",
  },
  {
    icon: Download,
    title: "Free downloads",
    description: "Checklists, interview prep and files at no cost.",
  },
  {
    icon: RefreshCw,
    title: "Regular updates",
    description: "New SEO, UI/UX and marketing material added often.",
  },
  {
    icon: BadgeCheck,
    title: "Curated quality",
    description: "Only resources you can apply immediately.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-4 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-700">
              Why these resources
            </p>
            <h2 className="mt-3 max-w-lg text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Made for people who learn by doing.
            </h2>
          </div>
          <p className="max-w-md text-base leading-7 text-slate-600 lg:justify-self-end">
            Practical files for students, job seekers and working
            professionals who want results, not fluff.
          </p>
        </div>

        <div className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div key={item.title} className="border-t border-slate-200 pt-6">
                <div className="flex items-center justify-between">
                  <span className="text-4xl font-bold tracking-tight text-slate-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <Icon className="h-5 w-5 text-cyan-600" />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
