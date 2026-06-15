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
      className="
        group
        relative
        flex
        flex-col
        h-full
        overflow-hidden
        rounded-[32px]
        border
        border-gray-200/80
        bg-white
        shadow-sm
        hover:-translate-y-2
        hover:shadow-2xl
        hover:shadow-cyan-100/60
        transition-all
        duration-500
      "
    >

      {/* Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">

        <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-200/40 rounded-full blur-3xl" />

      </div>

      {/* IMAGE */}
      <div className="relative overflow-hidden h-56">

        <img
          src={image}
          alt={title}
          className="
            w-full
            h-full
            object-cover
            transition-transform
            duration-700
            group-hover:scale-105
          "
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        {/* Category */}
        <div className="absolute top-5 left-5 z-10">

          <span className="
            inline-flex
            items-center
            rounded-full
            border
            border-white/20
            bg-white/90
            backdrop-blur-md
            px-4
            py-2
            text-xs
            font-semibold
            tracking-wide
            uppercase
            text-cyan-700
            shadow-lg
          ">

            {category}

          </span>

        </div>

        {/* Read Time */}
        <div className="absolute bottom-5 right-5 z-10">

          <div className="
            rounded-full
            bg-black/40
            backdrop-blur-md
            px-4
            py-2
            text-xs
            font-medium
            text-white
            border
            border-white/10
          ">

            {readTime}

          </div>

        </div>

      </div>

      {/* CONTENT */}
      <div className="relative p-6 flex flex-col flex-1">

        {/* DATE */}
        <div className="flex items-center gap-3 text-sm text-gray-500">

          <div className="w-2 h-2 rounded-full bg-cyan-500" />

          <span>
            {date}
          </span>

        </div>

        {/* TITLE */}
        <h3 className="
          mt-4
          text-[24px]
          leading-[1.2]
          font-bold
          tracking-tight
          text-[#111827]
          transition-colors
          duration-300
          group-hover:text-cyan-600
        ">

          {title}

        </h3>

        {/* EXCERPT */}
        <p className="
          mt-5
          text-gray-600
          leading-7
          text-[16px]
        ">

          {excerpt}

        </p>

        {/* Divider */}
        <div className="mt-8 h-px bg-gradient-to-r from-cyan-100 via-gray-200 to-transparent" />

        {/* CTA */}
        <div className="
          mt-auto
          pt-5
          inline-flex
          items-center
          text-cyan-600
          font-semibold
          text-[15px]
        ">

          Read Full Article

          <div className="
            ml-3
            w-9
            h-9
            rounded-full
            bg-cyan-50
            flex
            items-center
            justify-center
            transition-all
            duration-300
            group-hover:bg-cyan-500
            group-hover:text-white
            group-hover:translate-x-1
          ">

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>

          </div>

        </div>

      </div>

    </a>

  );

}