import { Link } from "react-router-dom";
import { courses } from "../data/courses";

import {
  Palette,
  TrendingUp,
  Search,
  ArrowRight
} from "lucide-react";

export default function Courses() {




  return (


    <>
     

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="text-center mb-16">

            <span className="text-cyan-500 font-semibold uppercase tracking-widest">

              Courses

            </span>

            <h2 className="text-4xl font-bold text-slate-900 mt-4">

              Start Your Learning Journey

            </h2>

            <p className="text-slate-600 mt-6 max-w-3xl mx-auto">

              Whether you're beginning your career or upgrading your
              skills, our free learning tracks are designed to help you
              succeed.

            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {courses.map((course) => {

              const Icon = course.icon;

              return (

                <div
                  key={course.title}
                  className="rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition p-8"
                >

                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${course.color} flex items-center justify-center`}
                  >

                    <Icon className="text-white w-8 h-8" />

                  </div>

                  <h3 className="text-2xl font-bold mt-8">

                    {course.title}

                  </h3>

                  <p className="text-slate-600 leading-7 mt-5">

                    {course.description}

                  </p>

                  <div className="mt-8 space-y-2 text-sm">

                    <p className="text-cyan-600 font-semibold">

                      {course.lessons}

                    </p>

                    <p className="text-slate-500">

                      {course.level}

                    </p>

                  </div>

                  <Link
                    to={course.link}
                    className="inline-flex items-center gap-2 mt-8 text-cyan-600 font-semibold hover:gap-3 transition-all"
                  >

                    Start Learning

                    <ArrowRight className="w-5 h-5" />

                  </Link>

                </div>

              );

            })}

          </div>

        </div>

      </section>
    </>

  );

}