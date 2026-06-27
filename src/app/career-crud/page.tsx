
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import JobCard from './components/JobCard';
import { jobs as initialJobs } from "./data/jobs";
import { useState } from "react";
import JobForm from "./components/JobForm";

export default function CareerCrudPage() {
    const [jobs, setJobs] = useState(initialJobs);
    
    return (
        <>

            <Navigation />


            <main className="max-w-7xl mx-auto px-6 py-20">

                <h2 className="text-5xl font-bold mb-12">
                    Career Opportunities
                </h2><JobForm
  onAddJob={(newJob) => {

    setJobs([
      ...jobs,
      newJob,
    ]);

  }}
/>
                <button
                    className="rounded-xl bg-cyan-500 px-6 py-3 text-white"
                    onClick={() => {

                        setJobs([
                            ...jobs,

                            {
                                id: jobs.length + 1,
                                title: "Frontend Developer",
                                location: "Remote",
                                experience: "2 Years",
                                type: "Full Time",
                                status: "Open"
                            }

                        ]);

                    }}
                >

                    Add Dummy Job

                </button>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {jobs.map((job) => (

                        <JobCard
                            key={job.id}
                            title={job.title}
                            location={job.location}
                            experience={job.experience}
                            type={job.type}

                        />

                    ))}

                </div>

            </main>

            <Footer />
        </>
    );
}

