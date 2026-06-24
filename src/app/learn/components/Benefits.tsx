import { Link } from "react-router-dom";
 
import { CheckCircle} from "lucide-react";
import { benefits } from "../data/benefits";

export default function Benefits() {
 const benefits = [
      "100% Free Learning",
      "Practical Projects",
      "Industry Based Curriculum",
      "Interview Preparation",
      "Latest AI Tools",
      "Career Guidance",
    ];
    return (

       
      <>

      <section className="py-24 bg-white">

          <div className="max-w-7xl mx-auto px-6 lg:px-8">

            <div className="grid lg:grid-cols-2 gap-16 items-center">

              <div>

                <span className="text-cyan-500 font-semibold uppercase tracking-widest">

                  Why Choose Us

                </span>

                <h2 className="text-4xl font-bold mt-5 text-slate-900">

                  Learn Practical Skills That Employers Value

                </h2>

                <p className="text-slate-600 mt-6 leading-8">

                  Our learning platform focuses on practical experience,
                  real-world projects and industry best practices so you
                  can build confidence and grow your career.

                </p>

              </div>

              <div className="grid sm:grid-cols-2 gap-6">

                {benefits.map((item) => (

                  <div
                    key={item}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
                  >

                    <CheckCircle className="text-cyan-500 w-7 h-7 mb-4" />

                    <h3 className="font-semibold text-lg text-slate-800">

                      {item}

                    </h3>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </section> 

      </>

    );

}