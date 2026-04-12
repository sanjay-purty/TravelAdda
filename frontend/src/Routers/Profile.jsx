import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import { useAuth } from '../context/useAuth.js'

export default function Profile() {
  const { user } = useAuth()

  return (
    <div className="min-h-screen bg-slate-50 font-sans antialiased">
      <Navbar />
      <div className="mx-auto max-w-lg px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="font-['Poppins',sans-serif] text-3xl font-bold text-slate-900">Profile</h1>
        <p className="mt-1 text-slate-600">Your account details</p>
        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-8 shadow-md">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-teal-600 to-cyan-600 text-2xl font-bold text-white shadow-lg">
            {(user?.name || user?.email || '?').charAt(0).toUpperCase()}
          </div>
          <dl className="mt-6 space-y-4">
            <div>
              <dt className="text-xs font-medium uppercase tracking-wide text-slate-500">Name</dt>
              <dd className="mt-1 text-lg font-medium text-slate-900">{user?.name || '—'}</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wide text-slate-500">Email</dt>
              <dd className="mt-1 text-lg font-medium text-slate-900">{user?.email || '—'}</dd>
            </div>
          </dl>
        </div>
      </div>
      <Footer />
    </div>
  )
}
