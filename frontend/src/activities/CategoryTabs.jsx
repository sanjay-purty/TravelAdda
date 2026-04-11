/**
 * @param {{ selectedId: string; onSelect: (id: string) => void; tabs: { id: string; label: string }[] }} props
 */
export function CategoryTabs({ selectedId, onSelect, tabs }) {
  return (
    <div className="border-b border-slate-200/90 bg-gradient-to-b from-slate-50/80 to-white">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
        <p className="mb-3 text-xs font-medium uppercase tracking-wide text-slate-500">
          Browse by category
        </p>
        <div
          className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          role="tablist"
          aria-label="Activity categories"
        >
          {tabs.map((tab) => {
            const selected = selectedId === tab.id
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => onSelect(tab.id)}
                className={`flex-shrink-0 rounded-full border px-4 py-2 text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                  selected
                    ? 'border-teal-500 bg-teal-600 text-white shadow-md shadow-teal-600/25'
                    : 'border-slate-200 bg-white text-slate-700 shadow-sm hover:border-teal-200 hover:bg-teal-50/50 hover:text-teal-800'
                }`}
              >
                {tab.label}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
