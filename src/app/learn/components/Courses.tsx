import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { courses } from "../data/courses";

export default function Courses() {
  return (
    <section
      id="courses"
      className="scroll-mt-24 border-t border-slate-100 bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full border border-cyan-200/80 bg-cyan-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-cyan-700">
              Learning paths
            </span>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl">
              Pick a track.
              <span className="block text-slate-500">Learn by doing.</span>
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
            Focused paths for design, growth, and frontend. Start as a beginner
            and move toward portfolio work, interviews, and freelance-ready
            skills.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3 lg:grid-cols-4">
          {courses.map((course) => {
            const Icon = course.icon;
            const cardClassName =
              "group flex flex-col rounded-3xl border border-slate-200 bg-[#f8fafc] p-7 transition hover:-translate-y-1 hover:border-cyan-200 hover:bg-white hover:shadow-lg hover:shadow-slate-200/70";

            const body = (
              <>
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${course.color} text-white shadow-lg`}
                >
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="mt-6 text-xl font-bold text-[#0f172a]">
                  {course.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
                  {course.description}
                </p>

                <div className="mt-6 flex items-center justify-between text-sm">
                  <span className="font-semibold text-cyan-700">
                    {course.lessons}
                  </span>
                  <span className="text-slate-500">{course.level}</span>
                </div>

                {course.link ? (
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#0f172a]">
                    Start learning
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                ) : (
                  <span className="mt-6 inline-flex items-center text-sm font-semibold text-slate-400">
                    Coming soon
                  </span>
                )}
              </>
            );

            if (course.link) {
              return (
                <Link
                  key={course.title}
                  to={course.link}
                  className={cardClassName}
                >
                  {body}
                </Link>
              );
            }

            return (
              <div key={course.title} className={cardClassName}>
                {body}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
