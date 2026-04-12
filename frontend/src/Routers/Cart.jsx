import { Link } from 'react-router-dom'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import { useCart } from '../context/useCart.js'

export default function Cart() {
  const { items, removeFromCart, totalPrice, clearCart } = useCart()

  const handleCheckout = () => {
    if (items.length === 0) return
    clearCart()
    window.alert('Thank you! Your booking request has been received. We will contact you shortly.')
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans antialiased">
      <Navbar />

      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="font-['Poppins',sans-serif] text-3xl font-bold text-slate-900">Your cart</h1>
        <p className="mt-1 text-slate-600">Review your selected services before checkout.</p>

        {items.length === 0 ? (
          <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-12 text-center shadow-sm">
            <i className="fa-solid fa-cart-shopping mb-4 text-4xl text-slate-300" aria-hidden />
            <p className="text-slate-600">Your cart is empty.</p>
            <Link
              to="/services"
              className="mt-6 inline-flex rounded-xl bg-gradient-to-r from-teal-600 to-cyan-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:from-teal-500 hover:to-cyan-500"
            >
              Browse services
            </Link>
          </div>
        ) : (
          <ul className="mt-8 space-y-4">
            {items.map((line) => (
              <li
                key={line.cartLineId}
                className="flex gap-4 rounded-xl border border-slate-200/80 bg-white p-4 shadow-md shadow-slate-200/40 sm:items-center sm:p-5"
              >
                <img
                  src={line.image}
                  alt=""
                  className="h-24 w-28 shrink-0 rounded-lg object-cover sm:h-20 sm:w-24"
                />
                <div className="min-w-0 flex-1">
                  <h2 className="font-semibold text-slate-900">{line.title}</h2>
                  <p className="mt-1 line-clamp-2 text-sm text-slate-600">{line.description}</p>
                  <p className="mt-2 text-sm font-bold text-teal-700">${line.price}</p>
                </div>
                <button
                  type="button"
                  onClick={() => removeFromCart(line.cartLineId)}
                  className="shrink-0 self-start rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm font-medium text-red-700 transition hover:bg-red-100 sm:self-center"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}

        {items.length > 0 ? (
          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-md">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <span className="text-lg font-semibold text-slate-800">Total</span>
              <span className="text-2xl font-bold text-teal-700">${totalPrice.toFixed(2)}</span>
            </div>
            <button
              type="button"
              onClick={handleCheckout}
              className="mt-6 w-full rounded-xl bg-gradient-to-r from-teal-600 to-cyan-600 py-3.5 text-sm font-semibold text-white shadow-lg shadow-teal-600/25 transition hover:from-teal-500 hover:to-cyan-500"
            >
              Checkout
            </button>
          </div>
        ) : null}
      </div>

      <Footer />
    </div>
  )
}
