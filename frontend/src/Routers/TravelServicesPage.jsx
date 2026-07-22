import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import { useCart } from '../context/useCart.js'
import { ArrowLeft } from 'lucide-react'

const travelPackages = [
  { id: 'trvl-1', title: 'Guided City Tour', description: 'Professional guides for a smooth travel experience', price: 89, image: 'https://images.unsplash.com/photo-1522083165195-3424ed129620?fm=jpg&w=800&q=80' },
  { id: 'trvl-2', title: 'Luxury Hotel Booking', description: 'Premium accommodations in prime locations', price: 399, image: 'https://images.unsplash.com/photo-1542314831-c6a4d14d8376?fm=jpg&w=800&q=80' },
  { id: 'trvl-3', title: 'Intercity Transport', description: 'Comfortable air-conditioned intercity travel', price: 49, image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?fm=jpg&w=800&q=80' },
  { id: 'trvl-4', title: 'Custom Itinerary Planning', description: 'Personalized travel plans crafted for you', price: 149, image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?fm=jpg&w=800&q=80' },
  { id: 'trvl-5', title: 'Group Excursion', description: 'Fun and affordable group packages', price: 129, image: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?fm=jpg&w=800&q=80' },
  { id: 'trvl-6', title: 'Romantic Honeymoon', description: 'Romantic and memorable couple trips', price: 999, image: 'https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?fm=jpg&w=800&q=80' }
]

export default function TravelServicesPage() {
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
          <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl">Travel Services</h1>
          <p className="mt-4 text-lg text-slate-600">Everything you need for a seamless and comfortable journey.</p>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {travelPackages.map((pkg) => (
              <article key={pkg.id} className="flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-md shadow-slate-200/50 transition duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-xl">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={pkg.image} alt={pkg.title} className="h-full w-full object-cover transition duration-500 hover:scale-105" />
                  <span className="absolute left-3 top-3 rounded-lg bg-teal-600/90 px-2.5 py-1 text-xs font-semibold text-white shadow-sm backdrop-blur">
                    Travel Service
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="text-xl font-bold text-slate-900">{pkg.title}</h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{pkg.description}</p>
                  <div className="mt-4 flex items-center justify-between gap-3 border-t border-slate-100 pt-5">
                    <p className="text-2xl font-bold text-teal-600">${pkg.price}</p>
                    <button
                      type="button"
                      onClick={() => addToCart({ serviceId: pkg.id, title: pkg.title, description: pkg.description, price: pkg.price, image: pkg.image })}
                      className="rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-teal-500/25 transition hover:from-teal-400 hover:to-cyan-400 hover:shadow-lg"
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
