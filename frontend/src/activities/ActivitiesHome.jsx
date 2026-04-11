import { useMemo, useState } from 'react'
import { activities as allActivities, categoryTabs } from './activitiesData.js'
import { Navbar } from './Navbar.jsx'
import { CategoryTabs } from './CategoryTabs.jsx'
import { FilterSidebar } from './FilterSidebar.jsx'
import { ListingsGrid } from './ListingsGrid.jsx'

const PAGE_SIZE = 4

const sidebarCategories = categoryTabs

function matchesSearch(activity, query) {
  if (!query.trim()) return true
  const q = query.toLowerCase()
  return (
    activity.title.toLowerCase().includes(q) ||
    activity.description.toLowerCase().includes(q) ||
    activity.tags.some((t) => t.toLowerCase().includes(q))
  )
}

export default function ActivitiesHome() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [destination, setDestination] = useState('Auckland, New Zealand')
  const [activitySearch, setActivitySearch] = useState('')
  const [sortBy, setSortBy] = useState('popularity')
  const [page, setPage] = useState(1)

  const filteredSorted = useMemo(() => {
    let list = allActivities.filter((a) => matchesSearch(a, activitySearch))
    if (selectedCategory !== 'all') {
      list = list.filter((a) => a.category === selectedCategory)
    }
    const sorted = [...list]
    switch (sortBy) {
      case 'score':
        sorted.sort((a, b) => b.score - a.score)
        break
      case 'price':
        sorted.sort((a, b) => a.price - b.price)
        break
      case 'name':
        sorted.sort((a, b) => a.title.localeCompare(b.title))
        break
      case 'popularity':
      default:
        sorted.sort((a, b) => b.popularity - a.popularity)
    }
    return sorted
  }, [selectedCategory, activitySearch, sortBy])

  const totalCount = filteredSorted.length
  const totalPages = Math.max(1, Math.ceil(totalCount / PAGE_SIZE))
  const safePage = Math.min(page, totalPages)
  const pageSlice = useMemo(() => {
    const p = Math.min(page, totalPages)
    const start = (p - 1) * PAGE_SIZE
    return filteredSorted.slice(start, start + PAGE_SIZE)
  }, [filteredSorted, page, totalPages])

  const setCategory = (id) => {
    setSelectedCategory(id)
    setPage(1)
  }

  const setSort = (id) => {
    setSortBy(id)
    setPage(1)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100/90 via-slate-50 to-white font-sans text-slate-900 antialiased">
      <Navbar />
      <CategoryTabs selectedId={selectedCategory} onSelect={setCategory} tabs={categoryTabs} />

      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8">
        <div className="mb-6 md:hidden">
          <FilterSidebar
            destination={destination}
            onDestinationChange={setDestination}
            activitySearch={activitySearch}
            onActivitySearchChange={(v) => {
              setActivitySearch(v)
              setPage(1)
            }}
            categories={sidebarCategories}
            selectedCategoryId={selectedCategory}
            onCategorySelect={setCategory}
          />
        </div>

        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-8">
          <div className="hidden lg:block lg:w-72 lg:flex-shrink-0">
            <FilterSidebar
              destination={destination}
              onDestinationChange={setDestination}
              activitySearch={activitySearch}
              onActivitySearchChange={(v) => {
                setActivitySearch(v)
                setPage(1)
              }}
              categories={sidebarCategories}
              selectedCategoryId={selectedCategory}
              onCategorySelect={setCategory}
            />
          </div>

          <ListingsGrid
            activities={pageSlice}
            totalCount={totalCount}
            sortBy={sortBy}
            onSortChange={setSort}
            page={safePage}
            pageSize={PAGE_SIZE}
            totalPages={totalPages}
            onPageChange={setPage}
          />
        </div>
      </main>

      <footer className="border-t border-slate-200/80 bg-white/80 py-6 text-center text-sm text-slate-500">
        Sample travel UI — destination filter is illustrative only.
      </footer>
    </div>
  )
}
