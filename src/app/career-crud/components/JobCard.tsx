type JobCardProps = {
  title: string;
  location: string;
  experience: string;
  type: string;
};

export default function JobCard({
  title,
  location,
  experience,
  type,
}: JobCardProps) {
  return (

    <>

    
    <div className="rounded-xl border border-slate-200 p-6 shadow-sm">

      <h3 className="text-2xl font-bold">
        {title}
      </h3>

      <p className="mt-3 text-slate-600">
        📍 {location}
      </p>

      <p className="text-slate-600">
        💼 {experience}
      </p>

      <span className="inline-block mt-5 rounded-full bg-cyan-100 px-3 py-1 text-sm">
        {type}
      </span>
 
    </div>
    </>
  );
}