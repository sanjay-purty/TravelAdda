import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'

const HERO_IMG =
  'https://images.unsplash.com/photo-1488646953014-85cb44e25828?fm=jpg&q=85&w=2400&auto=format&fit=crop'

function useCountUp(target, options = {}) {
  const { duration = 1600, decimals = 0, enabled = true } = options
  const ref = useRef(null)
  const [value, setValue] = useState(0)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || !enabled) return
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setActive(true)
      },
      { threshold: 0.25 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [enabled])

  useEffect(() => {
    if (!active) return
    let cancelled = false
    const start = performance.now()
    const step = (now) => {
      if (cancelled) return
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - (1 - p) ** 2
      const raw = target * eased
      if (p >= 1) {
        setValue(decimals > 0 ? Number(target.toFixed(decimals)) : Math.floor(target))
        return
      }
      setValue(decimals > 0 ? Number(raw.toFixed(decimals)) : Math.floor(raw))
      requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
    return () => {
      cancelled = true
    }
  }, [active, target, duration, decimals])

  return { ref, value }
}

function StatCard({ icon, target, suffix, label, decimals = 0 }) {
  const { ref, value } = useCountUp(target, { decimals })
  const display =
    decimals > 0 ? value.toFixed(decimals) : value.toLocaleString('en-US')

  return (
    <div
      ref={ref}
      className="group rounded-xl border border-slate-200/80 bg-white p-6 shadow-md shadow-slate-200/50 transition duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-xl hover:shadow-teal-900/10"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 text-lg text-white shadow-lg shadow-teal-600/25 transition group-hover:scale-105">
        <i className={`fa-solid ${icon}`} aria-hidden />
      </div>
      <p className="mt-4 font-['Poppins',sans-serif] text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        {display}
        {suffix}
      </p>
      <p className="mt-1 text-sm font-medium text-slate-600">{label}</p>
    </div>
  )
}

const testimonials = [
  {
    name: 'Priya Sharma',
    location: 'Mumbai',
    rating: 5,
    text: 'Seamless booking and honest pricing. Our Kerala trip was organized perfectly from hotels to day tours.',
  },
  {
    name: 'James Chen',
    location: 'Singapore',
    rating: 5,
    text: 'Support replied within minutes when we had a flight change. Felt genuinely looked after the whole way.',
  },
  {
    name: 'Elena Rossi',
    location: 'Milan',
    rating: 4,
    text: 'Clear itineraries and verified partners. Already planning our next adventure through TravelAdda.',
  },
]

function StarRating({ value }) {
  return (
    <span className="flex gap-0.5 text-amber-400" aria-label={`${value} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <i
          key={i}
          className={i < value ? 'fa-solid fa-star text-sm' : 'fa-regular fa-star text-sm text-slate-300'}
          aria-hidden
        />
      ))}
    </span>
  )
}

export default function About() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 antialiased">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[min(55vh,520px)] overflow-hidden">
        <img src={HERO_IMG} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/88 via-slate-900/65 to-teal-900/45" />
        <div className="relative mx-auto flex max-w-7xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:px-8 lg:pb-24">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-teal-300">TravelAdda</p>
          <h1 className="mt-3 font-['Poppins',sans-serif] text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            About Us
          </h1>
          <p className="mt-4 max-w-xl text-lg text-slate-200">
            Discover who we are and what we&apos;ve achieved
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200/80 bg-white p-8 shadow-lg shadow-slate-200/40 sm:p-10 lg:p-12">
          <h2 className="font-['Poppins',sans-serif] text-2xl font-semibold text-slate-900 sm:text-3xl">
            Our story
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600">
            <p>
              TravelAdda was created because planning a trip shouldn&apos;t feel overwhelming. We saw how
              many travelers struggled to compare options, trust providers, and book with confidence—so we
              built a single place to explore destinations, curated services, and real experiences.
            </p>
            <p>
              Our vision is simple:{' '}
              <strong className="font-semibold text-slate-800">
                help people explore the world easily
              </strong>
              . Whether it&apos;s a weekend escape or a multi-country journey, we believe everyone deserves
              clear information, fair pricing, and support when things change.
            </p>
            <p>
              We are travelers first. That passion for new places, cultures, and stories drives every
              product decision we make—and every partnership we choose.
            </p>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="border-y border-slate-200/80 bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-['Poppins',sans-serif] text-2xl font-semibold text-slate-900 sm:text-3xl">
              Achievements
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-slate-600">
              Numbers that reflect the trust travelers place in us every day.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard icon="fa-face-smile" target={10000} suffix="+" label="Happy Travelers" />
            <StatCard icon="fa-earth-americas" target={500} suffix="+" label="Destinations Covered" />
            <StatCard icon="fa-route" target={1200} suffix="+" label="Tours Completed" />
            <StatCard icon="fa-star" target={4.8} suffix="⭐" label="Average Rating" decimals={1} />
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <h2 className="text-center font-['Poppins',sans-serif] text-2xl font-semibold text-slate-900 sm:text-3xl">
          Why trust us
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-slate-600">
          Your safety, time, and money matter. Here&apos;s how we earn your confidence.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: 'fa-shield-halved',
              title: 'Verified travel services',
              desc: 'We work with vetted operators and accommodations so you book what was promised.',
            },
            {
              icon: 'fa-lock',
              title: 'Secure booking system',
              desc: 'Encrypted flows and industry-standard practices protect your data and payments.',
            },
            {
              icon: 'fa-tags',
              title: 'Transparent pricing',
              desc: 'No hidden fees in the fine print—see what you pay before you commit.',
            },
            {
              icon: 'fa-headset',
              title: '24/7 customer support',
              desc: 'Real humans ready to help before, during, and after your trip.',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-slate-200/80 bg-white p-6 shadow-md shadow-slate-200/40 transition duration-300 hover:-translate-y-0.5 hover:border-teal-200 hover:shadow-lg"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-teal-50 text-teal-700">
                <i className={`fa-solid ${item.icon} text-lg`} aria-hidden />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900 py-16 text-white lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-['Poppins',sans-serif] text-2xl font-semibold sm:text-3xl">
            Our team
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-teal-100/90">
            Built by passionate travelers, designers, and engineers who believe great trips start with
            great tools.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              {
                name: 'Aisha Khan',
                role: 'Head of Experiences',
                img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?fm=jpg&q=80&w=400&auto=format&fit=crop',
              },
              {
                name: 'Marcus Webb',
                role: 'Product & Partnerships',
                img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?fm=jpg&q=80&w=400&auto=format&fit=crop',
              },
              {
                name: 'Sofia Alvarez',
                role: 'Customer Success',
                img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?fm=jpg&q=80&w=400&auto=format&fit=crop',
              },
            ].map((person) => (
              <div
                key={person.name}
                className="overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-xl backdrop-blur-sm transition duration-300 hover:bg-white/10"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={person.img}
                    alt=""
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <p className="font-semibold text-white">{person.name}</p>
                  <p className="mt-1 text-sm text-teal-200">{person.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <h2 className="text-center font-['Poppins',sans-serif] text-2xl font-semibold text-slate-900 sm:text-3xl">
          What travelers say
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-slate-600">
          Real feedback from people who explored with us.
        </p>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <blockquote
              key={t.name}
              className="flex flex-col rounded-xl border border-slate-200/80 bg-white p-6 shadow-md shadow-slate-200/50 transition hover:border-teal-200 hover:shadow-lg"
            >
              <StarRating value={t.rating} />
              <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">&ldquo;{t.text}&rdquo;</p>
              <footer className="mt-6 border-t border-slate-100 pt-4">
                <cite className="not-italic">
                  <span className="font-semibold text-slate-900">{t.name}</span>
                  <span className="mt-0.5 block text-xs text-slate-500">{t.location}</span>
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-200/80 bg-gradient-to-r from-teal-600 to-cyan-600 py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-['Poppins',sans-serif] text-2xl font-bold text-white sm:text-3xl">
            Start your journey with us today!
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-teal-100">
            Browse destinations and services tailored to how you love to travel.
          </p>
          <Link
            to="/services"
            className="mt-8 inline-flex items-center justify-center rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-teal-800 shadow-lg shadow-teal-900/20 transition hover:bg-teal-50 hover:shadow-xl"
          >
            Explore Now
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
