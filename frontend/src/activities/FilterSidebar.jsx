/**
 * @param {{
 *   destination: string;
 *   onDestinationChange: (v: string) => void;
 *   activitySearch: string;
 *   onActivitySearchChange: (v: string) => void;
 *   categories: { id: string; label: string }[];
 *   selectedCategoryId: string;
 *   onCategorySelect: (id: string) => void;
 * }} props
 */
export function FilterSidebar({
  destination,
  onDestinationChange,
  activitySearch,
  onActivitySearchChange,
  categories,
  selectedCategoryId,
  onCategorySelect,
}) {
  return (
    <aside className="lg:sticky lg:top-[4.75rem] lg:self-start">
      <div className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm shadow-slate-200/50">
        <h2 className="mb-4 text-sm font-semibold text-slate-900">Filters</h2>

        <div className="space-y-4">
          <div>
            <label htmlFor="filter-destination" className="mb-1.5 block text-xs font-medium text-slate-500">
              Destination
            </label>
            <input
              id="filter-destination"
              type="text"
              value={destination}
              onChange={(e) => onDestinationChange(e.target.value)}
              placeholder="Auckland, New Zealand"
              className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 outline-none transition focus:border-teal-400 focus:bg-white focus:ring-2 focus:ring-teal-500/15"
            />
          </div>

          <div>
            <label htmlFor="filter-activity-search" className="mb-1.5 block text-xs font-medium text-slate-500">
              Search activities
            </label>
            <input
              id="filter-activity-search"
              type="search"
              value={activitySearch}
              onChange={(e) => onActivitySearchChange(e.target.value)}
              placeholder="e.g. Hobbiton, cruise…"
              className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 outline-none transition focus:border-teal-400 focus:bg-white focus:ring-2 focus:ring-teal-500/15"
            />
          </div>

          <div className="border-t border-slate-100 pt-4">
            <p className="mb-2 text-xs font-medium text-slate-500">Categories</p>
            <ul className="space-y-0.5" role="list">
              {categories.map((cat) => {
                const selected = selectedCategoryId === cat.id
                return (
                  <li key={cat.id}>
                    <button
                      type="button"
                      onClick={() => onCategorySelect(cat.id)}
                      className={`w-full rounded-xl px-3 py-2.5 text-left text-sm font-medium transition ${
                        selected
                          ? 'bg-teal-50 text-teal-800 ring-1 ring-teal-200/80'
                          : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                      }`}
                    >
                      {cat.label}
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </aside>
  )
}
