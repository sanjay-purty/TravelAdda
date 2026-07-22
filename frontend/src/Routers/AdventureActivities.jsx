import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import { useCart } from '../context/useCart.js'
import { ArrowLeft } from 'lucide-react'

const adventurePackages = [
  { id: 'adv-1', title: 'Everest Base Camp Trek', description: 'Explore mountains and scenic trails with expert guides', price: 1299, image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?fm=jpg&w=800&q=80' },
  { id: 'adv-2', title: 'White Water Rafting', description: 'Thrilling water adventure in fast-flowing rivers', price: 149, image: 'https://images.unsplash.com/photo-1530866495561-507c90e16f62?fm=jpg&w=800&q=80' },
  { id: 'adv-3', title: 'Alpine Paragliding', description: 'Fly high and enjoy breathtaking aerial views', price: 199, image: 'https://images.unsplash.com/photo-1507425807971-d14d24a91986?fm=jpg&w=800&q=80' },
  { id: 'adv-4', title: 'Deep Sea Scuba Diving', description: 'Discover underwater life and coral reefs', price: 299, image: 'https://images.unsplash.com/photo-1544520775-6e9f19dc1839?fm=jpg&w=800&q=80' },
  { id: 'adv-5', title: 'Bungee Jumping', description: 'Experience the ultimate adrenaline rush', price: 99, image: 'https://images.unsplash.com/photo-1594951460395-9bfefb6c69bf?fm=jpg&w=800&q=80' },
  { id: 'adv-6', title: 'Sunset Desert Safari', description: 'Ride through dunes with cultural entertainment', price: 159, image: 'https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?fm=jpg&w=800&q=80' }
]

export default function AdventureActivities() {
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
          <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl">Adventure Activities</h1>
          <p className="mt-4 text-lg text-slate-600">Add adrenaline-pumping experiences to your ultimate trip.</p>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {adventurePackages.map((pkg) => (
              <article key={pkg.id} className="flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-md shadow-slate-200/50 transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={pkg.image} alt={pkg.title} className="h-full w-full object-cover transition duration-500 hover:scale-105" />
                  <span className="absolute left-3 top-3 rounded-lg bg-orange-600/90 px-2.5 py-1 text-xs font-semibold text-white shadow-sm backdrop-blur">
                    Adventure
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="text-xl font-bold text-slate-900">{pkg.title}</h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{pkg.description}</p>
                  <div className="mt-4 flex items-center justify-between gap-3 border-t border-slate-100 pt-5">
                    <p className="text-2xl font-bold text-orange-600">${pkg.price}</p>
                    <button
                      type="button"
                      onClick={() => addToCart({ serviceId: pkg.id, title: pkg.title, description: pkg.description, price: pkg.price, image: pkg.image })}
                      className="rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-orange-500/25 transition hover:from-orange-400 hover:to-amber-400 hover:shadow-lg"
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
