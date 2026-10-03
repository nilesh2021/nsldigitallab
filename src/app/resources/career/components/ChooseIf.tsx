type Item = { title: string; bullets: string[] };

type Props = {
  items: Item[];
};

export default function ChooseIf({ items }: Props) {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {items.map((item) => (
        <div
          key={item.title}
          className="rounded-2xl border border-slate-200 bg-white p-6"
        >
          <h3 className="text-lg font-semibold text-[#0f172a]">{item.title}</h3>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
            {item.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
