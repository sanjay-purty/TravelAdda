import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import {
  Mountain,
  Waves,
  Wind,
  Navigation,
  Zap,
  Sun,
  Snowflake,
  MapPin,
  Bed,
  Car,
  Calendar,
  Users,
  Heart,
  Compass,
  Utensils,
  Camera,
  Tent,
  Ship,
  ArrowRight
} from 'lucide-react'

const adventureActivities = [
  { icon: <Mountain size={32} />, title: 'Trekking', desc: 'Explore mountains and scenic trails with expert guides' },
  { icon: <Waves size={32} />, title: 'River Rafting', desc: 'Thrilling water adventure in fast-flowing rivers' },
  { icon: <Wind size={32} />, title: 'Paragliding', desc: 'Fly high and enjoy breathtaking aerial views' },
  { icon: <Navigation size={32} />, title: 'Scuba Diving', desc: 'Discover underwater life and coral reefs' },
  { icon: <Zap size={32} />, title: 'Bungee Jumping', desc: 'Experience the ultimate adrenaline rush' },
  { icon: <Sun size={32} />, title: 'Desert Safari', desc: 'Ride through dunes with cultural entertainment' },
  { icon: <Snowflake size={32} />, title: 'Skiing & Snowboarding', desc: 'Enjoy snow sports in winter destinations' }
]

const travelServices = [
  { icon: <MapPin size={32} />, title: 'Guided Tours', desc: 'Professional guides for a smooth travel experience' },
  { icon: <Bed size={32} />, title: 'Hotel Booking', desc: 'Budget to luxury accommodations' },
  { icon: <Car size={32} />, title: 'Transport Services', desc: 'Comfortable local and intercity travel' },
  { icon: <Calendar size={32} />, title: 'Custom Travel Planning', desc: 'Personalized itineraries' },
  { icon: <Users size={32} />, title: 'Group Tours', desc: 'Fun and affordable group packages' },
  { icon: <Heart size={32} />, title: 'Honeymoon Packages', desc: 'Romantic and memorable trips' }
]

const uniqueExperiences = [
  { icon: <Compass size={32} />, title: 'Cultural Walks', desc: 'Explore traditions and local heritage' },
  { icon: <Utensils size={32} />, title: 'Food Tours', desc: 'Taste authentic local cuisines' },
  { icon: <Camera size={32} />, title: 'Wildlife Safaris', desc: 'Close encounters with nature' },
  { icon: <Tent size={32} />, title: 'Camping Experiences', desc: 'Stay under the stars' },
  { icon: <Ship size={32} />, title: 'Cruise Trips', desc: 'Luxury journeys on water' }
]

export default function Services() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-slate-50 font-sans antialiased flex flex-col">
      <Navbar />

      <main className="flex-grow pb-24">
        {/* Banner Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900 py-24 sm:py-32">
          <div
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?fm=jpg&q=60&w=2000&auto=format&fit=crop)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <h1 className="font-['Poppins',sans-serif] text-5xl font-bold tracking-tight text-white sm:text-6xl">
              Our Services &amp; Activities
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-teal-100/90">
              Discover thrilling adventures, unparalleled travel services, and unique experiences crafted just for you.
            </p>
          </div>
        </section>

        {/* Content Container */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-8 relative z-10 space-y-20">
          
          {/* Adventure Activities */}
          <section className="rounded-3xl bg-white p-8 shadow-xl shadow-slate-200/50 sm:p-12">
            <div className="mb-12 flex flex-col items-center text-center">
              <span className="mb-3 rounded-full bg-orange-100 px-4 py-1.5 text-sm font-semibold text-orange-700">Adrenaline Rush</span>
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">🎯 Adventure Activities</h2>
              <p className="mt-4 max-w-2xl text-lg text-slate-600">Push your limits with our highly curated extreme sports and wilderness explorations.</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {adventureActivities.map((item, index) => (
                <div key={index} className="group relative flex flex-col items-center rounded-2xl border border-slate-100 bg-slate-50 p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-2xl hover:shadow-orange-900/10 hover:border-orange-100 cursor-pointer">
                  <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-orange-100 text-orange-600 transition-transform duration-300 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white group-hover:rotate-6">
                    {item.icon}
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-slate-900">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 flex justify-center">
              <button 
                onClick={() => navigate('/services/adventure')}
                className="group flex items-center gap-2 rounded-full bg-slate-900 px-8 py-4 text-sm font-bold text-white transition-all hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-600/30"
              >
                Explore More Adventures <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </section>

          {/* Travel Services */}
          <section className="rounded-3xl bg-white p-8 shadow-xl shadow-slate-200/50 sm:p-12">
            <div className="mb-12 flex flex-col items-center text-center">
              <span className="mb-3 rounded-full bg-teal-100 px-4 py-1.5 text-sm font-semibold text-teal-700">Seamless Journeys</span>
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">🧳 Travel Services</h2>
              <p className="mt-4 max-w-2xl text-lg text-slate-600">Let us handle the details while you sit back and enjoy a smooth travel experience.</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {travelServices.map((item, index) => (
                <div key={index} className="group relative flex flex-col items-center rounded-2xl border border-slate-100 bg-slate-50 p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-2xl hover:shadow-teal-900/10 hover:border-teal-100 cursor-pointer">
                  <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-teal-100 text-teal-600 transition-transform duration-300 group-hover:scale-110 group-hover:bg-teal-500 group-hover:text-white group-hover:-rotate-6">
                    {item.icon}
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-slate-900">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 flex justify-center">
              <button 
                onClick={() => navigate('/services/travel')}
                className="group flex items-center gap-2 rounded-full bg-slate-900 px-8 py-4 text-sm font-bold text-white transition-all hover:bg-teal-600 hover:shadow-lg hover:shadow-teal-600/30"
              >
                Explore Travel Services <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </section>

          {/* Unique Experiences */}
          <section className="rounded-3xl bg-white p-8 shadow-xl shadow-slate-200/50 sm:p-12">
            <div className="mb-12 flex flex-col items-center text-center">
              <span className="mb-3 rounded-full bg-purple-100 px-4 py-1.5 text-sm font-semibold text-purple-700">Unforgettable</span>
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">✨ Unique Experiences</h2>
              <p className="mt-4 max-w-2xl text-lg text-slate-600">Dive deeply into local culture, exotic cuisines, and awe-inspiring sights.</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {uniqueExperiences.map((item, index) => (
                <div key={index} className="group relative flex flex-col items-center rounded-2xl border border-slate-100 bg-slate-50 p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-2xl hover:shadow-purple-900/10 hover:border-purple-100 cursor-pointer">
                  <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-purple-100 text-purple-600 transition-transform duration-300 group-hover:scale-110 group-hover:bg-purple-500 group-hover:text-white group-hover:rotate-6">
                    {item.icon}
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-slate-900">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 flex justify-center">
              <button 
                onClick={() => navigate('/services/unique')}
                className="group flex items-center gap-2 rounded-full bg-slate-900 px-8 py-4 text-sm font-bold text-white transition-all hover:bg-purple-600 hover:shadow-lg hover:shadow-purple-600/30"
              >
                Explore Unique Experiences <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  )
}

