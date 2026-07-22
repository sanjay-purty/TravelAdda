import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import { useCart } from '../context/useCart.js'
import { ArrowLeft } from 'lucide-react'

const uniquePackages = [
  { id: 'uniq-1', title: 'Heritage Cultural Walk', description: 'Explore ancient traditions and local heritage', price: 59, image: 'https://images.unsplash.com/photo-1528164344705-47542687000d?fm=jpg&w=800&q=80' },
  { id: 'uniq-2', title: 'Authentic Food Tour', description: 'Taste authentic local and street cuisines', price: 79, image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?fm=jpg&w=800&q=80' },
  { id: 'uniq-3', title: 'Jungle Wildlife Safari', description: 'Close encounters with nature in an open reserve', price: 189, image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?fm=jpg&w=800&q=80' },
  { id: 'uniq-4', title: 'Stargazing Camping Experience', description: 'Stay under the vibrant night sky with bonfires', price: 119, image: 'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?fm=jpg&w=800&q=80' },
  { id: 'uniq-5', title: 'Luxury River Cruise', description: 'Lavish journeys on water with scenic sunsets', price: 299, image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?fm=jpg&w=800&q=80' },
  { id: 'uniq-6', title: 'Tea Estate Visit', description: 'Learn about tea harvesting with tasting sessions', price: 69, image: 'https://images.unsplash.com/photo-1531776999252-f9dcfcead3f7?fm=jpg&w=800&q=80' }
]

export default function UniqueExperiencesPage() {
  const { addToCart } = useCart()
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-slate-50 font-sans antialiased flex flex-col">
      <Navbar />
      <main className="flex-grow pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6">
          <button 
            onClick={() => navigate(-1)} 
            className="group inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm border border-slate-200 transition-all hover:bg-slate-50 hover:text-slate-900 hover:shadow-md"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" /> Back
          </button>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center pt-8">
          <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl">Unique Experiences</h1>
          <p className="mt-4 text-lg text-slate-600">Dive deeply into local culture, cuisines, and awe-inspiring sights.</p>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {uniquePackages.map((pkg) => (
              <article key={pkg.id} className="flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-md shadow-slate-200/50 transition duration-300 hover:-translate-y-1 hover:border-purple-200 hover:shadow-xl">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={pkg.image} alt={pkg.title} className="h-full w-full object-cover transition duration-500 hover:scale-105" />
                  <span className="absolute left-3 top-3 rounded-lg bg-purple-600/90 px-2.5 py-1 text-xs font-semibold text-white shadow-sm backdrop-blur">
                    Unique
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="text-xl font-bold text-slate-900">{pkg.title}</h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{pkg.description}</p>
                  <div className="mt-4 flex items-center justify-between gap-3 border-t border-slate-100 pt-5">
                    <p className="text-2xl font-bold text-purple-600">${pkg.price}</p>
                    <button
                      type="button"
                      onClick={() => addToCart({ serviceId: pkg.id, title: pkg.title, description: pkg.description, price: pkg.price, image: pkg.image })}
                      className="rounded-xl bg-gradient-to-r from-purple-500 to-fuchsia-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-purple-500/25 transition hover:from-purple-400 hover:to-fuchsia-400 hover:shadow-lg"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
