import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from './context/useAuth.js'

const HERO_BG =
  'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1600&q=80'

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validateFullName(value) {
  if (!value.trim()) return 'Full name is required'
  if (value.trim().length < 2) return 'Enter your full name'
  return ''
}

function validateEmail(value) {
  if (!value.trim()) return 'Email is required'
  if (!emailRegex.test(value.trim())) return 'Enter a valid email'
  return ''
}

function validatePassword(value) {
  if (!value) return 'Password is required'
  if (value.length < 6) return 'At least 6 characters'
  return ''
}

function validateConfirm(password, confirm) {
  if (!confirm) return 'Confirm your password'
  if (password !== confirm) return 'Passwords do not match'
  return ''
}

const inputClass =
  'w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20'

const inputErrorClass =
  'border-red-300 focus:border-red-400 focus:ring-red-500/20'

export default function Signup() {
  const navigate = useNavigate()
  const { setSession } = useAuth()
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [touched, setTouched] = useState({
    fullName: false,
    email: false,
    password: false,
    confirmPassword: false,
  })
  const [isLoading, setIsLoading] = useState(false)
  const [formError, setFormError] = useState('')

  const submitData = async (e) => {
    e.preventDefault()
    setFormError('')
    const fullNameErr = validateFullName(fullName)
    const emailErr = validateEmail(email)
    const passwordErr = validatePassword(password)
    const confirmErr = validateConfirm(password, confirmPassword)
    setTouched({ fullName: true, email: true, password: true, confirmPassword: true })
    setErrors({
      fullName: fullNameErr,
      email: emailErr,
      password: passwordErr,
      confirmPassword: confirmErr,
    })
    if (fullNameErr || emailErr || passwordErr || confirmErr) return

    setIsLoading(true)
    try {
      const res = await fetch('https://traveladda-1.onrender.com/register', {
        method: 'POST',
        body: JSON.stringify({
          Name: fullName.trim(),
          Email: email.trim(),
          Password: password,
        }),
        headers: { 'Content-Type': 'application/json' },
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        setFormError(data?.message || data?.result || 'Registration failed. Try again.')
        return
      }
      setSession({
        ...data,
        Name: data?.Name ?? fullName.trim(),
        Email: data?.Email ?? email.trim(),
      })
      navigate('/', { replace: true })
    } catch {
      setFormError('Unable to reach the server. Try again later.')
    } finally {
      setIsLoading(false)
    }
  }

  const fieldClass = (field) =>
    `${inputClass} ${touched[field] && errors[field] ? inputErrorClass : ''}`

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-slate-50 via-white to-cyan-50/40 font-sans antialiased lg:flex-row">
      <div
        className="relative flex min-h-[220px] flex-col justify-end overflow-hidden bg-cover bg-center lg:min-h-screen lg:w-[44%] lg:justify-center lg:pb-0"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      >
        <div
          className="absolute inset-0 bg-gradient-to-t from-slate-900/88 via-slate-900/50 to-slate-900/25 lg:bg-gradient-to-r lg:from-slate-900/82 lg:via-slate-900/40 lg:to-transparent"
          aria-hidden
        />
        <div className="relative z-10 px-8 pb-8 pt-6 text-white lg:px-12 lg:pb-16 lg:pt-12">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
            Join us
          </h1>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-200 lg:text-base">
            Create an account in a few steps.
          </p>
        </div>
      </div>

      <div className="flex flex-1 items-center justify-center px-4 py-12 sm:px-8">
        <div className="w-full max-w-[420px] rounded-2xl border border-slate-200/80 bg-white/90 p-8 shadow-xl shadow-slate-200/50 backdrop-blur-sm sm:p-10">
          <h2 className="text-2xl font-semibold text-slate-900">Create Account</h2>
          <p className="mt-1 text-sm text-slate-500">Fill in your details</p>

          <form className="mt-8 space-y-5" onSubmit={submitData} noValidate>
            {formError ? (
              <div
                className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
                role="alert"
              >
                {formError}
              </div>
            ) : null}

            <div>
              <label htmlFor="signup-name" className="mb-1.5 block text-sm font-medium text-slate-700">
                Full Name
              </label>
              <input
                id="signup-name"
                name="name"
                type="text"
                autoComplete="name"
                value={fullName}
                onChange={(e) => {
                  const v = e.target.value
                  setFullName(v)
                  if (touched.fullName) setErrors((p) => ({ ...p, fullName: validateFullName(v) }))
                  setFormError('')
                }}
                onBlur={() => {
                  setTouched((p) => ({ ...p, fullName: true }))
                  setErrors((p) => ({ ...p, fullName: validateFullName(fullName) }))
                }}
                className={fieldClass('fullName')}
                placeholder="Jane Doe"
              />
              {touched.fullName && errors.fullName ? (
                <p className="mt-1.5 text-sm text-red-600">{errors.fullName}</p>
              ) : null}
            </div>

            <div>
              <label htmlFor="signup-email" className="mb-1.5 block text-sm font-medium text-slate-700">
                Email
              </label>
              <input
                id="signup-email"
                name="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => {
                  const v = e.target.value
                  setEmail(v)
                  if (touched.email) setErrors((p) => ({ ...p, email: validateEmail(v) }))
                  setFormError('')
                }}
                onBlur={() => {
                  setTouched((p) => ({ ...p, email: true }))
                  setErrors((p) => ({ ...p, email: validateEmail(email) }))
                }}
                className={fieldClass('email')}
                placeholder="you@example.com"
              />
              {touched.email && errors.email ? (
                <p className="mt-1.5 text-sm text-red-600">{errors.email}</p>
              ) : null}
            </div>

            <div>
              <label htmlFor="signup-password" className="mb-1.5 block text-sm font-medium text-slate-700">
                Password
              </label>
              <input
                id="signup-password"
                name="password"
                type="password"
                autoComplete="new-password"
                value={password}
                onChange={(e) => {
                  const v = e.target.value
                  setPassword(v)
                  if (touched.password) setErrors((p) => ({ ...p, password: validatePassword(v) }))
                  if (touched.confirmPassword)
                    setErrors((p) => ({ ...p, confirmPassword: validateConfirm(v, confirmPassword) }))
                  setFormError('')
                }}
                onBlur={() => {
                  setTouched((p) => ({ ...p, password: true }))
                  setErrors((p) => ({
                    ...p,
                    password: validatePassword(password),
                    confirmPassword: validateConfirm(password, confirmPassword),
                  }))
                }}
                className={fieldClass('password')}
                placeholder="••••••••"
              />
              {touched.password && errors.password ? (
                <p className="mt-1.5 text-sm text-red-600">{errors.password}</p>
              ) : null}
            </div>

            <div>
              <label htmlFor="signup-confirm" className="mb-1.5 block text-sm font-medium text-slate-700">
                Confirm Password
              </label>
              <input
                id="signup-confirm"
                name="confirmPassword"
                type="password"
                autoComplete="new-password"
                value={confirmPassword}
                onChange={(e) => {
                  const v = e.target.value
                  setConfirmPassword(v)
                  if (touched.confirmPassword)
                    setErrors((p) => ({ ...p, confirmPassword: validateConfirm(password, v) }))
                  setFormError('')
                }}
                onBlur={() => {
                  setTouched((p) => ({ ...p, confirmPassword: true }))
                  setErrors((p) => ({ ...p, confirmPassword: validateConfirm(password, confirmPassword) }))
                }}
                className={fieldClass('confirmPassword')}
                placeholder="••••••••"
              />
              {touched.confirmPassword && errors.confirmPassword ? (
                <p className="mt-1.5 text-sm text-red-600">{errors.confirmPassword}</p>
              ) : null}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full rounded-xl bg-gradient-to-r from-teal-600 to-cyan-600 py-3.5 text-sm font-semibold text-white shadow-lg shadow-teal-600/25 transition hover:from-teal-500 hover:to-cyan-500 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-65"
            >
              {isLoading ? 'Creating account…' : 'Create Account'}
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-slate-600">
            Already have an account?{' '}
            <Link
              to="/login"
              className="font-semibold text-teal-600 transition hover:text-teal-700 hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
