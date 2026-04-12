import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import { useCart } from '../context/useCart.js'
import { servicePackages } from '../data/travelData.js'

export default function Services() {
  const { addToCart } = useCart()

  return (
    <div className="min-h-screen bg-slate-50 font-sans antialiased">
      <Navbar />

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900 py-20 sm:py-24">
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
          <h1 className="font-['Poppins',sans-serif] text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Tour packages &amp; services
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-teal-100/90">
            Day tours, sightseeing, adventure, and cultural experiences — add what you love to your cart.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {servicePackages.map((svc) => (
            <article
              key={svc.id}
              className="flex flex-col overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-md shadow-slate-200/50 transition duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-xl"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={svc.image} alt="" className="h-full w-full object-cover transition duration-500 hover:scale-105" />
                <span className="absolute left-3 top-3 rounded-lg bg-white/90 px-2.5 py-1 text-xs font-semibold text-teal-800 shadow-sm backdrop-blur">
                  {svc.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h2 className="font-['Poppins',sans-serif] text-lg font-semibold text-slate-900">{svc.title}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{svc.description}</p>
                <div className="mt-4 flex items-center justify-between gap-3 border-t border-slate-100 pt-4">
                  <p className="text-lg font-bold text-teal-700">${svc.price}</p>
                  <button
                    type="button"
                    onClick={() =>
                      addToCart({
                        serviceId: svc.id,
                        title: svc.title,
                        description: svc.description,
                        price: svc.price,
                        image: svc.image,
                      })
                    }
                    className="rounded-xl bg-gradient-to-r from-teal-600 to-cyan-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-teal-600/25 transition hover:from-teal-500 hover:to-cyan-500 hover:shadow-lg"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
