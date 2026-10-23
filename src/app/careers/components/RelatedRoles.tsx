import { Link } from "react-router-dom";
import { CAREER_JOBS, JOB_URL } from "../data/jobs";

export default function RelatedRoles({ slug }: { slug: string }) {
  const related = (CAREER_JOBS[slug]?.relatedSlugs ?? [])
    .map((s) => CAREER_JOBS[s])
    .filter(Boolean);

  return (
    <div className="bg-white rounded-3xl p-8 shadow-sm">
      <h2 className="text-3xl font-bold mb-6">Related Roles</h2>
      <ul className="space-y-4 text-slate-700">
        {related.map((job) => (
          <li key={job.slug}>
            <Link
              to={JOB_URL(job.slug)}
              className="font-semibold text-blue-600 hover:underline"
            >
              {job.title} job
            </Link>
          </li>
        ))}
        <li>
          <Link to="/careers" className="font-semibold text-blue-600 hover:underline">
            View all open roles at NSL Digital Lab
          </Link>
        </li>
      </ul>
    </div>
  );
}
