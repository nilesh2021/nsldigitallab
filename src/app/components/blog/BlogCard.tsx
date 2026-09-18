type BlogCardProps = {
  title: string;
  excerpt: string;
  image: string;
  category: string;
  readTime: string;
  date: string;
  link: string;
};

export default function BlogCard({
  title,
  excerpt,
  image,
  category,
  readTime,
  date,
  link,
}: BlogCardProps) {
  return (
    <a
      href={link}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-100/50"
    >
      <div className="relative h-40 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
        <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-cyan-700">
          {category}
        </span>
        <span className="absolute bottom-3 right-3 rounded-full bg-black/45 px-2.5 py-1 text-[11px] font-medium text-white">
          {readTime}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <p className="text-xs text-gray-500">{date}</p>
        <h3 className="mt-1.5 line-clamp-2 text-lg font-bold leading-snug text-gray-900 transition-colors group-hover:text-cyan-600">
          {title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-600">{excerpt}</p>
        <span className="mt-auto pt-3 text-sm font-semibold text-cyan-600">
          Read article →
        </span>
      </div>
    </a>
  );
}
