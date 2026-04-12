import { useMemo, useState } from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import { categories, featuredPlaces, places } from '../data/travelData.js'

const HERO_IMG =
  'https://images.unsplash.com/photo-1469474968028-56623f02e42e?fm=jpg&q=85&w=2400&auto=format&fit=crop'

function StarRow({ value }) {
  const full = Math.floor(value)
  const half = value - full >= 0.5
  return (
    <span className="flex items-center gap-0.5 text-amber-400" aria-label={`${value} out of 5 stars`}>
      {Array.from({ length: full }, (_, i) => (
        <i key={`f-${i}`} className="fa-solid fa-star text-sm" aria-hidden />
      ))}
      {half ? <i className="fa-solid fa-star-half-stroke text-sm" aria-hidden /> : null}
      {Array.from({ length: 5 - full - (half ? 1 : 0) }, (_, i) => (
        <i key={`e-${i}`} className="fa-regular fa-star text-sm text-slate-300" aria-hidden />
      ))}
      <span className="ml-1 text-sm font-medium text-slate-600">{value.toFixed(1)}</span>
    </span>
  )
}

function PlaceCard({ place }) {
  return (
    <article className="group overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-md shadow-slate-200/40 transition duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-xl hover:shadow-teal-900/10">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={place.image}
          alt=""
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 transition group-hover:opacity-100" />
      </div>
      <div className="p-5">
        <h3 className="font-['Poppins',sans-serif] text-lg font-semibold text-slate-900">{place.name}</h3>
        <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-slate-600">{place.description}</p>
        <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
          <StarRow value={place.rating} />
          <p className="text-sm font-semibold text-teal-700">
            from ${place.priceFrom}
            <span className="font-normal text-slate-500"> / person</span>
          </p>
        </div>
      </div>
    </article>
  )
}

export default function Home() {
  const [q, setQ] = useState('')
  const [activeCategory, setActiveCategory] = useState(null)

  const filteredPlaces = useMemo(() => {
    const term = q.trim().toLowerCase()
    return places.filter((p) => {
      const matchQ =
        !term ||
        p.name.toLowerCase().includes(term) ||
        p.description.toLowerCase().includes(term)
      const matchC =
        !activeCategory ||
        (Array.isArray(p.tags) && p.tags.includes(activeCategory))
      return matchQ && matchC
    })
  }, [q, activeCategory])

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 antialiased">
      <Navbar />

      <section className="relative min-h-[min(85vh,720px)] overflow-hidden">
        <img src={HERO_IMG} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/55 to-teal-900/35" />
        <div className="relative mx-auto flex max-w-7xl flex-col justify-center px-4 pb-20 pt-28 sm:px-6 lg:px-8 lg:pb-28 lg:pt-32">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-teal-300">Explore the world</p>
          <h1 className="mt-3 max-w-3xl font-['Poppins',sans-serif] text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Your next story starts here
          </h1>
          <p className="mt-4 max-w-xl text-lg text-slate-200">
            Search destinations, compare experiences, and plan trips that feel unforgettable.
          </p>

          <div className="mt-10 max-w-2xl">
            <label htmlFor="hero-search" className="sr-only">
              Search destinations
            </label>
            <div className="flex flex-col gap-3 rounded-2xl border border-white/20 bg-white/10 p-2 shadow-2xl backdrop-blur-md sm:flex-row sm:items-center">
              <div className="relative flex flex-1 items-center">
                <i
                  className="fa-solid fa-magnifying-glass pointer-events-none absolute left-4 text-slate-400"
                  aria-hidden
                />
                <input
                  id="hero-search"
                  type="search"
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Where do you want to go?"
                  className="w-full rounded-xl border-0 bg-white py-3.5 pl-12 pr-4 text-slate-900 shadow-inner outline-none ring-0 placeholder:text-slate-400 focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <button
                type="button"
                className="rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-teal-900/30 transition hover:from-teal-400 hover:to-cyan-400"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="font-['Poppins',sans-serif] text-2xl font-semibold text-slate-900">Categories</h2>
        <p className="mt-1 text-sm text-slate-600">Pick a vibe — we&apos;ll match you with ideas.</p>
        <div className="mt-6 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setActiveCategory(null)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              activeCategory === null
                ? 'bg-teal-600 text-white shadow-md shadow-teal-600/25'
                : 'bg-white text-slate-700 shadow-sm ring-1 ring-slate-200 hover:ring-teal-300'
            }`}
          >
            All
          </button>
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setActiveCategory((prev) => (prev === c ? null : c))}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                activeCategory === c
                  ? 'bg-teal-600 text-white shadow-md shadow-teal-600/25'
                  : 'bg-white text-slate-700 shadow-sm ring-1 ring-slate-200 hover:ring-teal-300'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="font-['Poppins',sans-serif] text-2xl font-semibold text-slate-900">
              Featured destinations
            </h2>
            <p className="mt-1 text-sm text-slate-600">Hand-picked spots travelers love right now.</p>
          </div>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredPlaces.map((place) => (
            <article
              key={place.id}
              className="group relative overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-lg shadow-slate-200/50 transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={place.image}
                  alt=""
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                {place.tag ? (
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-teal-800 shadow-sm backdrop-blur">
                    {place.tag}
                  </span>
                ) : null}
              </div>
              <div className="p-5">
                <h3 className="font-['Poppins',sans-serif] text-xl font-semibold text-slate-900">{place.name}</h3>
                <p className="mt-1 text-sm text-slate-600">{place.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <StarRow value={place.rating} />
                  <span className="text-sm font-bold text-teal-700">from ${place.priceFrom}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-200/80 bg-white py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-['Poppins',sans-serif] text-2xl font-semibold text-slate-900">Places to explore</h2>
          <p className="mt-1 text-sm text-slate-600">
            {filteredPlaces.length} result{filteredPlaces.length === 1 ? '' : 's'}
            {q ? ` for “${q}”` : ''}
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPlaces.map((place) => (
              <PlaceCard key={place.id} place={place} />
            ))}
          </div>
          {filteredPlaces.length === 0 ? (
            <p className="mt-8 rounded-xl border border-dashed border-slate-200 bg-slate-50 py-12 text-center text-slate-500">
              No places match your search. Try another keyword or category.
            </p>
          ) : null}
        </div>
      </section>

      <Footer />
    </div>
  )
}
