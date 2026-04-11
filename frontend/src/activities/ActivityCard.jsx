/**
 * @param {{
 *   title: string;
 *   rating: number;
 *   reviews: number;
 *   description: string;
 *   tags: string[];
 *   price: number;
 *   image: string;
 * }} props
 */
export function ActivityCard({ title, rating, reviews, description, tags, price, image }) {
  const filled = Math.min(5, Math.round(rating))

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm shadow-slate-200/40 transition duration-300 hover:-translate-y-0.5 hover:border-teal-200/80 hover:shadow-lg hover:shadow-teal-900/5 sm:flex-row">
      <div className="relative h-48 flex-shrink-0 overflow-hidden sm:h-auto sm:w-56 md:w-64">
        <img
          src={image}
          alt=""
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition group-hover:opacity-100" />
      </div>

      <div className="flex min-w-0 flex-1 flex-col p-4 sm:p-5">
        <div className="flex flex-1 flex-col gap-2 sm:flex-row sm:justify-between sm:gap-4">
          <div className="min-w-0 flex-1">
            <h3 className="text-base font-semibold leading-snug text-slate-900 md:text-lg">
              {title}
            </h3>
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <div className="flex items-center gap-0.5 text-amber-500" aria-label={`${rating} out of 5 stars`}>
                {Array.from({ length: 5 }, (_, i) => (
                  <span key={i} className={`text-sm ${i < filled ? '' : 'text-slate-200'}`} aria-hidden>
                    ★
                  </span>
                ))}
              </div>
              <span className="text-sm font-medium text-slate-800">{rating.toFixed(1)}</span>
              <span className="text-sm text-slate-500">({reviews.toLocaleString()} reviews)</span>
            </div>
            <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-slate-600">{description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-xs font-medium text-slate-600"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-4 flex flex-shrink-0 flex-col items-stretch gap-3 border-t border-slate-100 pt-4 sm:mt-0 sm:w-40 sm:border-t-0 sm:border-l sm:border-slate-100 sm:pl-5 sm:pt-0 md:w-44">
            <div className="text-right sm:text-right">
              <p className="text-xs text-slate-500">From</p>
              <p className="text-xl font-bold tabular-nums text-slate-900">
                NZD <span className="text-teal-700">${price}</span>
              </p>
            </div>
            <button
              type="button"
              className="rounded-xl bg-gradient-to-r from-teal-600 to-cyan-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-teal-600/25 transition hover:from-teal-500 hover:to-cyan-500 hover:shadow-lg active:scale-[0.98]"
            >
              Details &amp; Booking
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}
