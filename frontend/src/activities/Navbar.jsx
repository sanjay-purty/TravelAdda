export function Navbar() {
  const tabs = [
    { label: 'Home', href: '#', active: true },
    { label: 'Destinations', href: '#' },
    { label: 'Tours', href: '#' },
    { label: 'Contact', href: '#' },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-3 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:gap-6 lg:py-3.5">
        <div className="flex flex-shrink-0 items-center gap-3">
          <a
            href="#"
            className="flex items-center gap-2 text-lg font-bold tracking-tight text-teal-700"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 text-white shadow-md shadow-teal-500/25">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
            <span>Trailwise</span>
          </a>
        </div>

        <div className="order-3 flex-1 lg:order-none lg:max-w-md lg:mx-4">
          <label htmlFor="nav-search" className="sr-only">
            Search activities
          </label>
          <div className="relative">
            <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-slate-400">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
            <input
              id="nav-search"
              type="search"
              placeholder="Search activities…"
              className="w-full rounded-full border border-slate-200 bg-slate-50/80 py-2.5 pl-10 pr-4 text-sm text-slate-800 placeholder:text-slate-400 outline-none transition focus:border-teal-400 focus:bg-white focus:ring-2 focus:ring-teal-500/20"
            />
          </div>
        </div>

        <nav className="flex flex-wrap items-center gap-1 sm:gap-2" aria-label="Main">
          {tabs.map((t) => (
            <a
              key={t.label}
              href={t.href}
              className={`rounded-full px-3 py-2 text-sm font-medium transition sm:px-4 ${
                t.active
                  ? 'bg-teal-50 text-teal-800'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              {t.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
