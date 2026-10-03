import { PRODUCTS, type ProductId } from "../data/products";
import AffiliateButton from "./AffiliateButton";

type Column = { key: string; label: string };

type Props = {
  heading: string;
  intro?: string;
  columns: Column[];
  rows: { label: string; cells: string[] }[];
  columnProducts?: Partial<Record<string, ProductId>>;
};

export default function ProductComparisonTable({
  heading,
  intro,
  columns,
  rows,
  columnProducts,
}: Props) {
  const hasCtas =
    columnProducts &&
    columns.some((col) => columnProducts[col.key] !== undefined);

  return (
    <div className="scroll-mt-24 max-w-full">
      <h2 className="text-2xl font-bold tracking-tight text-[#0f172a] sm:text-3xl">
        {heading}
      </h2>
      {intro ? (
        <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
          {intro}
        </p>
      ) : null}
      <div className="mt-6 -mx-1 max-w-[100vw] overflow-x-auto rounded-2xl border border-slate-200 sm:mx-0 sm:max-w-none">
        <table className="min-w-[640px] w-full border-collapse text-left text-sm">
          <caption className="sr-only">{heading}</caption>
          <thead className="bg-slate-50 text-slate-700">
            <tr>
              <th
                scope="col"
                className="sticky left-0 z-10 bg-slate-50 px-4 py-3 font-semibold shadow-[2px_0_4px_-2px_rgba(0,0,0,0.08)] sm:static sm:shadow-none"
              >
                Category
              </th>
              {columns.map((col) => (
                <th
                  key={col.key}
                  scope="col"
                  className="min-w-[140px] px-4 py-3 font-semibold"
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.label} className="border-t border-slate-200">
                <th
                  scope="row"
                  className="sticky left-0 z-10 bg-white px-4 py-4 font-semibold text-[#0f172a] shadow-[2px_0_4px_-2px_rgba(0,0,0,0.06)] sm:static sm:bg-transparent sm:shadow-none"
                >
                  {row.label}
                </th>
                {row.cells.map((cell, i) => (
                  <td key={i} className="px-4 py-4 align-top text-slate-700">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
            {hasCtas ? (
              <tr className="border-t border-slate-200 bg-slate-50/80">
                <th
                  scope="row"
                  className="sticky left-0 z-10 bg-slate-50 px-4 py-4 text-sm font-semibold text-slate-800 sm:static sm:shadow-none"
                >
                  Visit site
                </th>
                {columns.map((col) => {
                  const productId = columnProducts?.[col.key];
                  if (!productId) {
                    return <td key={col.key} className="px-4 py-4" />;
                  }
                  const product = PRODUCTS[productId];
                  return (
                    <td key={col.key} className="px-4 py-4 align-top">
                      <AffiliateButton
                        productId={productId}
                        label={product.ctaLabel}
                        position="comparison-table"
                        variant="primary"
                        className="inline-flex min-h-[44px] w-full max-w-[200px] items-center justify-center gap-2 rounded-xl bg-cyan-400 px-3 py-2.5 text-xs font-semibold text-[#061018] transition hover:bg-cyan-300 sm:text-sm"
                      />
                    </td>
                  );
                })}
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>
    </div>
  );
}
