import type { ReactNode } from "react";

type Props = {
  id?: string;
  heading: string;
  children: ReactNode;
};

export default function ArticleSection({ id, heading, children }: Props) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="text-2xl font-bold tracking-tight text-[#0f172a] sm:text-3xl">
        {heading}
      </h2>
      <div className="mt-4 max-w-3xl space-y-4 text-base leading-7 text-slate-600">
        {children}
      </div>
    </section>
  );
}
