export default function CareerApplySuccess() {
  return (
    <div className="py-10 text-center">
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
        <span className="text-5xl text-green-600">✓</span>
      </div>
      <h2 className="mt-6 text-3xl font-bold text-slate-900">Application Submitted</h2>
      <p className="mt-4 text-slate-600">
        Thank you for applying at <strong>NSL Digital Lab</strong>.
      </p>
      <p className="text-slate-600">
        Our team will review your application and contact you if there is a match.
      </p>
    </div>
  );
}
