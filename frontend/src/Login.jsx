import { useState } from 'react'
import { Link } from 'react-router-dom'

const TRAVEL_BG =
  'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600&q=80'

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validateEmail(value) {
  if (!value.trim()) return 'Email address is required'
  if (!emailRegex.test(value.trim())) return 'Please enter a valid email address'
  return ''
}

function validatePassword(value) {
  if (!value) return 'Password is required'
  if (value.length < 6) return 'Password must be at least 6 characters'
  return ''
}

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const [errors, setErrors] = useState({ email: '', password: '' })
  const [touched, setTouched] = useState({ email: false, password: false })
  const [isLoading, setIsLoading] = useState(false)
  const [formError, setFormError] = useState('')

  const runFieldValidation = (field, value) => {
    if (field === 'email') return validateEmail(value)
    if (field === 'password') return validatePassword(value)
    return ''
  }

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }))
    const value = field === 'email' ? email : password
    setErrors((prev) => ({ ...prev, [field]: runFieldValidation(field, value) }))
  }

  const handleEmailChange = (e) => {
    const v = e.target.value
    setEmail(v)
    if (touched.email) setErrors((prev) => ({ ...prev, email: validateEmail(v) }))
    setFormError('')
  }

  const handlePasswordChange = (e) => {
    const v = e.target.value
    setPassword(v)
    if (touched.password) setErrors((prev) => ({ ...prev, password: validatePassword(v) }))
    setFormError('')
  }

  const submitData = async (e) => {
    e.preventDefault()
    setFormError('')

    const emailErr = validateEmail(email)
    const passwordErr = validatePassword(password)
    setTouched({ email: true, password: true })
    setErrors({ email: emailErr, password: passwordErr })
    if (emailErr || passwordErr) return

    setIsLoading(true)
    try {
      const res = await fetch('http://localhost:4500/login', {
        method: 'POST',
        body: JSON.stringify({ Email: email, Password: password }),
        headers: { 'Content-Type': 'application/json' },
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        setFormError(data?.message || data?.result || 'Sign in failed. Please try again.')
        return
      }
      if (data?.result && typeof data.result === 'string') {
        window.alert(data.result)
      }
    } catch {
      setFormError('Unable to reach the server. Check your connection or try again later.')
    } finally {
      setIsLoading(false)
    }
  }

  const inputRing =
    'rounded-xl border bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:ring-2 focus:ring-offset-0'

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 font-sans antialiased lg:flex-row">
      {/* Left: travel hero */}
      <div
        className="relative flex min-h-[280px] flex-col justify-end overflow-hidden bg-cover bg-center lg:min-h-screen lg:w-[46%] lg:max-w-none lg:justify-center lg:pb-0"
        style={{ backgroundImage: `url(${TRAVEL_BG})` }}
      >
        <div
          className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/55 to-slate-900/35 lg:bg-gradient-to-r lg:from-slate-900/85 lg:via-slate-900/45 lg:to-slate-900/20"
          aria-hidden
        />
        <div className="relative z-10 px-8 pb-10 pt-6 text-white lg:px-12 lg:pb-16 lg:pt-12">
          <h1 className="font-['Poppins',sans-serif] text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
            Welcome Back
          </h1>
          <p className="mt-4 max-w-md text-base leading-relaxed text-slate-200 lg:text-lg">
            Login to continue exploring amazing experiences
          </p>
        </div>
      </div>

      {/* Right: form */}
      <div className="flex flex-1 flex-col items-center justify-center px-4 py-10 sm:px-8 lg:px-12 lg:py-16">
        <div className="w-full max-w-md rounded-2xl border border-slate-200/80 bg-white p-8 shadow-lg shadow-slate-200/60 sm:p-10">
          <h2 className="font-['Poppins',sans-serif] text-2xl font-semibold text-slate-900">
            Sign In
          </h2>
          <p className="mt-1 text-sm text-slate-500">Enter your details to access your account</p>

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
              <label htmlFor="login-email" className="mb-1.5 block text-sm font-medium text-slate-700">
                Email address
              </label>
              <input
                id="login-email"
                name="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={handleEmailChange}
                onBlur={() => handleBlur('email')}
                aria-invalid={touched.email && !!errors.email}
                className={`${inputRing} w-full ${
                  touched.email && errors.email
                    ? 'border-red-300 focus:border-red-400 focus:ring-red-500/25'
                    : 'border-slate-200 focus:border-teal-500 focus:ring-teal-500/20'
                }`}
                placeholder="you@example.com"
              />
              {touched.email && errors.email ? (
                <p className="mt-1.5 text-sm text-red-600" role="status">
                  {errors.email}
                </p>
              ) : null}
            </div>

            <div>
              <div className="mb-1.5 flex items-center justify-between gap-2">
                <label htmlFor="login-password" className="text-sm font-medium text-slate-700">
                  Password
                </label>
                <a
                  href="#"
                  className="text-sm font-medium text-teal-600 transition hover:text-teal-700 hover:underline"
                >
                  Forgot Password?
                </a>
              </div>
              <input
                id="login-password"
                name="password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={handlePasswordChange}
                onBlur={() => handleBlur('password')}
                aria-invalid={touched.password && !!errors.password}
                className={`${inputRing} w-full ${
                  touched.password && errors.password
                    ? 'border-red-300 focus:border-red-400 focus:ring-red-500/25'
                    : 'border-slate-200 focus:border-teal-500 focus:ring-teal-500/20'
                }`}
                placeholder="••••••••"
              />
              {touched.password && errors.password ? (
                <p className="mt-1.5 text-sm text-red-600" role="status">
                  {errors.password}
                </p>
              ) : null}
            </div>

            <div className="flex items-center gap-2">
              <input
                id="remember-me"
                name="remember"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 rounded border-slate-300 text-teal-600 focus:ring-2 focus:ring-teal-500/30 focus:ring-offset-0"
              />
              <label htmlFor="remember-me" className="text-sm text-slate-600">
                Remember Me
              </label>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-teal-600 to-cyan-600 px-4 py-3.5 text-sm font-semibold text-white shadow-md shadow-teal-600/25 transition hover:from-teal-500 hover:to-cyan-500 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isLoading ? (
                <>
                  <svg
                    className="h-5 w-5 animate-spin text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Signing in…
                </>
              ) : (
                'Sign In'
              )}
            </button>
          </form>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center" aria-hidden>
              <div className="w-full border-t border-slate-200" />
            </div>
            <div className="relative flex justify-center text-xs uppercase tracking-wide">
              <span className="bg-white px-3 text-slate-400">OR</span>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:gap-3">
            <button
              type="button"
              className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 hover:shadow-md"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden>
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Google
            </button>
            <button
              type="button"
              className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 hover:shadow-md"
            >
              <svg className="h-5 w-5 text-[#1877F2]" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Facebook
            </button>
          </div>

          <p className="mt-10 text-center text-sm text-slate-600">
            Don&apos;t have an account?{' '}
            <Link
              to="/signup"
              className="font-semibold text-teal-600 transition hover:text-teal-700 hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
