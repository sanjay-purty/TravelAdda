import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/useAuth.js'
import { useCart } from '../context/useCart.js'
import { useVisitorCount } from '../context/useVisitorCount.js'

function avatarLetter(name) {
  const t = (name || '').trim()
  if (!t) return '?'
  return t.charAt(0).toUpperCase()
}

const navLinkClass = ({ isActive }) =>
  `rounded-lg px-3 py-2 text-sm font-medium transition ${
    isActive
      ? 'bg-teal-50 text-teal-800'
      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
  }`

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const menuRef = useRef(null)
  const { user, isAuthenticated, logout } = useAuth()
  const { totalCount } = useCart()
  const { count: visitorCount } = useVisitorCount()
  const navigate = useNavigate()

  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setUserMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const closeMobile = () => setMobileOpen(false)

  const handleLogout = () => {
    setUserMenuOpen(false)
    closeMobile()
    logout()
    navigate('/login', { replace: true })
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          to="/"
          onClick={closeMobile}
          className="flex shrink-0 items-center gap-2.5 rounded-xl outline-none ring-teal-500/40 focus-visible:ring-2"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-teal-600 to-cyan-600 text-lg text-white shadow-md shadow-teal-600/25">
            <i className="fa-solid fa-earth-americas" aria-hidden />
          </span>
          <span className="font-['Poppins',sans-serif] text-lg font-semibold tracking-tight text-slate-900">
            TravelAdda
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          <NavLink to="/" end className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/services" className={navLinkClass}>
            Services
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            to="/cart"
            onClick={closeMobile}
            className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-teal-300 hover:text-teal-700 hover:shadow-md"
            aria-label={`Cart${totalCount ? `, ${totalCount} items` : ''}`}
          >
            <i className="fa-solid fa-cart-shopping text-lg" aria-hidden />
            {totalCount > 0 ? (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-gradient-to-r from-teal-600 to-cyan-600 px-1 text-[10px] font-bold text-white shadow-sm">
                {totalCount > 99 ? '99+' : totalCount}
              </span>
            ) : null}
          </Link>

          <div
            className="hidden items-center gap-1.5 rounded-full border border-teal-100 bg-gradient-to-r from-teal-50 to-cyan-50 px-3 py-1.5 text-xs font-medium text-teal-900 shadow-sm sm:flex"
            role="status"
            aria-live="polite"
            aria-label={`Visitors: ${visitorCount}`}
            title="Total recorded in this browser (localStorage)"
          >
            <span className="select-none text-sm leading-none" aria-hidden>
              👥
            </span>
            <span className="whitespace-nowrap tabular-nums">
              Visitors: <span className="font-semibold">{visitorCount}</span>
            </span>
          </div>

          {isAuthenticated ? (
            <div className="relative" ref={menuRef}>
              <button
                type="button"
                onClick={() => setUserMenuOpen((o) => !o)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-teal-600 to-cyan-600 text-sm font-bold text-white shadow-md shadow-teal-600/30 outline-none ring-offset-2 transition hover:shadow-lg focus-visible:ring-2 focus-visible:ring-teal-500"
                aria-expanded={userMenuOpen}
                aria-haspopup="menu"
                aria-label="Account menu"
              >
                {avatarLetter(user?.name || user?.email || '')}
              </button>
              {userMenuOpen ? (
                <div
                  className="absolute right-0 mt-2 w-48 origin-top-right rounded-xl border border-slate-200/80 bg-white py-1 shadow-xl shadow-slate-200/60"
                  role="menu"
                >
                  <Link
                    to="/profile"
                    role="menuitem"
                    className="block px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                    onClick={() => {
                      setUserMenuOpen(false)
                      closeMobile()
                    }}
                  >
                    <i className="fa-regular fa-user mr-2 text-slate-400" aria-hidden />
                    Profile
                  </Link>
                  <button
                    type="button"
                    role="menuitem"
                    className="w-full px-4 py-2.5 text-left text-sm font-medium text-red-600 transition hover:bg-red-50"
                    onClick={handleLogout}
                  >
                    <i className="fa-solid fa-arrow-right-from-bracket mr-2 opacity-70" aria-hidden />
                    Logout
                  </button>
                </div>
              ) : null}
            </div>
          ) : (
            <div className="hidden items-center gap-2 sm:flex">
              <Link
                to="/login"
                className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-teal-300 hover:shadow-md"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="rounded-xl bg-gradient-to-r from-teal-600 to-cyan-600 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-teal-600/25 transition hover:from-teal-500 hover:to-cyan-500"
              >
                Sign Up
              </Link>
            </div>
          )}

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-700 md:hidden"
            onClick={() => setMobileOpen((o) => !o)}
            aria-expanded={mobileOpen}
            aria-label="Toggle menu"
          >
            <i className={`fa-solid ${mobileOpen ? 'fa-xmark' : 'fa-bars'} text-lg`} aria-hidden />
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div className="border-t border-slate-100 bg-white px-4 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            <NavLink to="/" end className={navLinkClass} onClick={closeMobile}>
              Home
            </NavLink>
            <NavLink to="/services" className={navLinkClass} onClick={closeMobile}>
              Services
            </NavLink>
            <NavLink to="/about" className={navLinkClass} onClick={closeMobile}>
              About
            </NavLink>
            <Link
              to="/cart"
              className="flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100"
              onClick={closeMobile}
            >
              <span>Cart</span>
              {totalCount > 0 ? (
                <span className="rounded-full bg-teal-100 px-2 py-0.5 text-xs font-semibold text-teal-800">
                  {totalCount}
                </span>
              ) : null}
            </Link>
            <div className="flex items-center justify-center gap-2 rounded-full border border-teal-100 bg-gradient-to-r from-teal-50 to-cyan-50 px-3 py-2 text-xs font-medium text-teal-900 shadow-sm">
              <span aria-hidden>👥</span>
              <span className="tabular-nums">
                Visitors: <span className="font-semibold">{visitorCount}</span>
              </span>
            </div>
            {!isAuthenticated ? (
              <div className="mt-3 flex flex-col gap-2 border-t border-slate-100 pt-3">
                <Link
                  to="/login"
                  className="rounded-xl border border-slate-200 py-2.5 text-center text-sm font-semibold text-slate-700"
                  onClick={closeMobile}
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="rounded-xl bg-gradient-to-r from-teal-600 to-cyan-600 py-2.5 text-center text-sm font-semibold text-white"
                  onClick={closeMobile}
                >
                  Sign Up
                </Link>
              </div>
            ) : (
              <div className="mt-3 flex flex-col gap-1 border-t border-slate-100 pt-3">
                <Link
                  to="/profile"
                  className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100"
                  onClick={closeMobile}
                >
                  Profile
                </Link>
                <button
                  type="button"
                  className="rounded-lg px-3 py-2 text-left text-sm font-medium text-red-600 hover:bg-red-50"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      ) : null}
    </header>
  )
}
