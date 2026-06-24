import { Link } from "react-router-dom";
 
import {
    CheckCircle,
    ArrowRight
} from "lucide-react";

export default function Roadmap() {
  
    return (
       
      <> 
  <section className="py-24 bg-white">

          <div className="max-w-7xl mx-auto px-6 lg:px-8">

            <div className="text-center mb-20">

              <span className="text-cyan-500 font-semibold uppercase tracking-widest">

                Roadmap

              </span>

              <h2 className="text-4xl font-bold mt-4">

                Your Learning Journey

              </h2>

            </div>

            <div className="grid lg:grid-cols-3 gap-8">

              {/* Beginner */}

              <div className="rounded-3xl border border-slate-200 p-8">

                <span className="text-sm text-cyan-600 font-semibold">

                  STEP 01

                </span>

                <h3 className="text-3xl font-bold mt-4">

                  Beginner

                </h3>

                <ul className="space-y-4 mt-8">

                  {[
                    "Introduction",
                    "Fundamentals",
                    "Tools Setup",
                    "Basic Projects",
                    "Career Guidance",
                  ].map((item) => (

                    <li
                      key={item}
                      className="flex gap-3 items-center"
                    >

                      <CheckCircle className="text-cyan-500 w-5 h-5" />

                      {item}

                    </li>

                  ))}

                </ul>

              </div>

              {/* Intermediate */}

              <div className="rounded-3xl border-2 border-cyan-500 p-8 bg-cyan-50">

                <span className="text-sm text-cyan-600 font-semibold">

                  STEP 02

                </span>

                <h3 className="text-3xl font-bold mt-4">

                  Intermediate

                </h3>

                <ul className="space-y-4 mt-8">

                  {[
                    "Real Projects",
                    "Case Studies",
                    "Optimization",
                    "Problem Solving",
                    "Portfolio",
                  ].map((item) => (

                    <li
                      key={item}
                      className="flex gap-3 items-center"
                    >

                      <CheckCircle className="text-cyan-500 w-5 h-5" />

                      {item}

                    </li>

                  ))}

                </ul>

              </div>

              {/* Advanced */}

              <div className="rounded-3xl border border-slate-200 p-8">

                <span className="text-sm text-cyan-600 font-semibold">

                  STEP 03

                </span>

                <h3 className="text-3xl font-bold mt-4">

                  Advanced

                </h3>

                <ul className="space-y-4 mt-8">

                  {[
                    "Advanced Projects",
                    "Interview Prep",
                    "Resume Building",
                    "Freelancing",
                    "Career Support",
                  ].map((item) => (

                    <li
                      key={item}
                      className="flex gap-3 items-center"
                    >

                      <CheckCircle className="text-cyan-500 w-5 h-5" />

                      {item}

                    </li>

                  ))}

                </ul>

              </div>

            </div>

          </div>

        </section>

      </>


    )
}