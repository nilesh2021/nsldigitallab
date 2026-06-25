import {
  BadgeCheck,
  BookOpen,
  Download,
  RefreshCw,
} from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Practical Learning",
    description:
      "Learn with real-world templates, guides and step-by-step resources created for students and professionals.",
  },
  {
    icon: Download,
    title: "Free Downloads",
    description:
      "Access checklists, interview questions, templates and digital resources without any cost.",
  },
  {
    icon: RefreshCw,
    title: "Regular Updates",
    description:
      "Our resources are updated regularly to keep up with the latest SEO, UI/UX and Digital Marketing trends.",
  },
  {
    icon: BadgeCheck,
    title: "Trusted Quality",
    description:
      "Every resource is carefully curated to help you learn faster and apply practical skills confidently.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto">

          <span className="inline-flex rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
            Why Choose NSL Digital Lab
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            Learn Practical Skills With High-Quality Resources
          </h2>

          <p className="mt-6 text-lg text-slate-600 leading-8">
            Our goal is to help students, job seekers and professionals
            learn in-demand digital skills using practical resources,
            downloadable templates and real-world guides.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {features.map((item) => {

            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl bg-white p-8 shadow-sm border border-slate-200 hover:shadow-xl transition"
              >

                <div className="w-14 h-14 rounded-xl bg-cyan-100 flex items-center justify-center">

                  <Icon className="w-7 h-7 text-cyan-600" />

                </div>

                <h3 className="mt-6 text-xl font-semibold">

                  {item.title}

                </h3>

                <p className="mt-4 text-slate-600 leading-7">

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