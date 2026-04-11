import { ActivityCard } from './ActivityCard.jsx'

const SORT_OPTIONS = [
  { id: 'popularity', label: 'Popularity' },
  { id: 'score', label: 'Score' },
  { id: 'price', label: 'Price' },
  { id: 'name', label: 'Name' },
]

/**
 * @param {{
 *   activities: Array<Record<string, unknown>>;
 *   totalCount: number;
 *   sortBy: string;
 *   onSortChange: (id: string) => void;
 *   page: number;
 *   pageSize: number;
 *   totalPages: number;
 *   onPageChange: (p: number) => void;
 * }} props
 */
export function ListingsGrid({
  activities,
  totalCount,
  sortBy,
  onSortChange,
  page,
  pageSize,
  totalPages,
  onPageChange,
}) {
  const start = totalCount === 0 ? 0 : (page - 1) * pageSize + 1
  const end = totalCount === 0 ? 0 : (page - 1) * pageSize + activities.length

  return (
    <div className="min-w-0 flex-1">
      <div className="mb-4 flex flex-col gap-3 rounded-2xl border border-slate-200/90 bg-white px-4 py-3 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:px-5">
        <p className="text-sm text-slate-600">
          {totalCount === 0 ? (
            'No activities match your filters.'
          ) : (
            <>
              Showing{' '}
              <span className="font-medium text-slate-800">{start}</span>–
              <span className="font-medium text-slate-800">{end}</span> of{' '}
              <span className="font-medium text-slate-800">{totalCount}</span> experiences
            </>
          )}
        </p>
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-medium uppercase tracking-wide text-slate-500">Sort by</span>
          <div className="flex flex-wrap gap-1" role="group" aria-label="Sort listings">
            {SORT_OPTIONS.map((opt) => {
              const active = sortBy === opt.id
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => onSortChange(opt.id)}
                  className={`rounded-full px-3 py-1.5 text-sm font-medium transition ${
                    active
                      ? 'bg-slate-900 text-white shadow-sm'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  {opt.label}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {activities.map((a) => (
          <ActivityCard
            key={a.id}
            title={a.title}
            rating={a.rating}
            reviews={a.reviews}
            description={a.description}
            tags={a.tags}
            price={a.price}
            image={a.image}
          />
        ))}
      </div>

      {totalPages > 1 && (
        <nav
          className="mt-8 flex items-center justify-center gap-2"
          aria-label="Pagination"
        >
          <button
            type="button"
            disabled={page <= 1}
            onClick={() => onPageChange(page - 1)}
            className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50 disabled:pointer-events-none disabled:opacity-40"
          >
            Previous
          </button>
          <span className="px-2 text-sm text-slate-600">
            Page {page} of {totalPages}
          </span>
          <button
            type="button"
            disabled={page >= totalPages}
            onClick={() => onPageChange(page + 1)}
            className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50 disabled:pointer-events-none disabled:opacity-40"
          >
            Next
          </button>
        </nav>
      )}
    </div>
  )
}
