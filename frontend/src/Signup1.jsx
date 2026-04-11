import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

const TRAVEL_BG =
  'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1600&q=80'

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validateFullName(value) {
  if (!value.trim()) return 'Full name is required'
  if (value.trim().length < 2) return 'Please enter your full name'
  return ''
}

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

function validateConfirm(password, confirm) {
  if (!confirm) return 'Please confirm your password'
  if (password !== confirm) return 'Passwords do not match'
  return ''
}

/** @returns {{ score: number; label: string; barClass: string }} score 0–4 */
function getPasswordStrength(password) {
  if (!password) return { score: 0, label: '', barClass: 'bg-slate-200' }
  let score = 0
  if (password.length >= 6) score++
  if (password.length >= 10) score++
  if (/[a-z]/.test(password) && /[A-Z]/.test(password)) score++
  if (/\d/.test(password)) score++
  if (/[^A-Za-z0-9]/.test(password)) score++
  score = Math.min(4, score)

  if (score <= 1) return { score, label: 'Weak', barClass: 'bg-red-400' }
  if (score === 2) return { score, label: 'Fair', barClass: 'bg-amber-400' }
  if (score === 3) return { score, label: 'Good', barClass: 'bg-teal-500' }
  return { score, label: 'Strong', barClass: 'bg-emerald-500' }
}

function EyeIcon({ open }) {
  if (open) {
    return (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.75}
          d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
        />
      </svg>
    )
  }
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.75}
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.75}
        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
      />
    </svg>
  )
}

export default function Signup1() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [agreeTerms, setAgreeTerms] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)

  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    terms: '',
  })
  const [touched, setTouched] = useState({
    fullName: false,
    email: false,
    password: false,
    confirmPassword: false,
    terms: false,
  })
  const [isLoading, setIsLoading] = useState(false)
  const [formError, setFormError] = useState('')

  const strength = useMemo(() => getPasswordStrength(password), [password])

  const inputRing =
    'rounded-xl border bg-white py-3 pl-4 pr-4 text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:ring-2 focus:ring-offset-0'

  const setFieldError = (field, err) => setErrors((prev) => ({ ...prev, [field]: err }))

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }))
    if (field === 'fullName') setFieldError('fullName', validateFullName(fullName))
    if (field === 'email') setFieldError('email', validateEmail(email))
    if (field === 'password') {
      setFieldError('password', validatePassword(password))
      if (touched.confirmPassword || confirmPassword) {
        setFieldError('confirmPassword', validateConfirm(password, confirmPassword))
      }
    }
    if (field === 'confirmPassword') {
      setFieldError('confirmPassword', validateConfirm(password, confirmPassword))
    }
    if (field === 'terms') {
      setFieldError(
        'terms',
        agreeTerms ? '' : 'You must agree to the Terms & Conditions',
      )
    }
  }

  const onFullNameChange = (e) => {
    const v = e.target.value
    setFullName(v)
    if (touched.fullName) setFieldError('fullName', validateFullName(v))
    setFormError('')
  }

  const onEmailChange = (e) => {
    const v = e.target.value
    setEmail(v)
    if (touched.email) setFieldError('email', validateEmail(v))
    setFormError('')
  }

  const onPasswordChange = (e) => {
    const v = e.target.value
    setPassword(v)
    if (touched.password) setFieldError('password', validatePassword(v))
    if (touched.confirmPassword) setFieldError('confirmPassword', validateConfirm(v, confirmPassword))
    setFormError('')
  }

  const onConfirmChange = (e) => {
    const v = e.target.value
    setConfirmPassword(v)
    if (touched.confirmPassword) setFieldError('confirmPassword', validateConfirm(password, v))
    setFormError('')
  }

  const onTermsChange = (e) => {
    const checked = e.target.checked
    setAgreeTerms(checked)
    if (checked) setFieldError('terms', '')
    setFormError('')
  }

  const submitData = async (e) => {
    e.preventDefault()
    setFormError('')

    const fullNameErr = validateFullName(fullName)
    const emailErr = validateEmail(email)
    const passwordErr = validatePassword(password)
    const confirmErr = validateConfirm(password, confirmPassword)
    const termsErr = agreeTerms ? '' : 'You must agree to the Terms & Conditions'

    setTouched({
      fullName: true,
      email: true,
      password: true,
      confirmPassword: true,
      terms: true,
    })
    setErrors({
      fullName: fullNameErr,
      email: emailErr,
      password: passwordErr,
      confirmPassword: confirmErr,
      terms: termsErr,
    })

    if (fullNameErr || emailErr || passwordErr || confirmErr || termsErr) return

    setIsLoading(true)
    try {
      const res = await fetch('http://localhost:4500/register', {
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
        setFormError(data?.message || data?.result || 'Registration failed. Please try again.')
        return
      }
      window.alert(data?.result || 'Signup Successful')
    } catch {
      setFormError('Unable to reach the server. Check your connection or try again later.')
    } finally {
      setIsLoading(false)
    }
  }

  const fieldErrorClass = (hasErr) =>
    hasErr
      ? 'border-red-300 focus:border-red-400 focus:ring-red-500/25'
      : 'border-slate-200 focus:border-teal-500 focus:ring-teal-500/20'

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 font-sans antialiased lg:flex-row">
      <div
        className="relative flex min-h-[260px] flex-col justify-end overflow-hidden bg-cover bg-center lg:min-h-screen lg:w-[46%] lg:max-w-none lg:justify-center lg:pb-0"
        style={{ backgroundImage: `url(${TRAVEL_BG})` }}
      >
        <div
          className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/55 to-slate-900/35 lg:bg-gradient-to-r lg:from-slate-900/85 lg:via-slate-900/45 lg:to-slate-900/20"
          aria-hidden
        />
        <div className="relative z-10 px-8 pb-10 pt-6 text-white lg:px-12 lg:pb-16 lg:pt-12">
          <h1 className="font-['Poppins',sans-serif] text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
            Start Your Journey
          </h1>
          <p className="mt-4 max-w-md text-base leading-relaxed text-slate-200 lg:text-lg">
            Create an account to discover unforgettable experiences around the world
          </p>
        </div>
      </div>

      <div className="flex flex-1 flex-col items-center justify-center px-4 py-10 sm:px-8 lg:px-12 lg:py-16">
        <div className="w-full max-w-md rounded-2xl border border-slate-200/80 bg-white p-8 shadow-lg shadow-slate-200/60 sm:p-10">
          <h2 className="font-['Poppins',sans-serif] text-2xl font-semibold text-slate-900">
            Create Account
          </h2>
          <p className="mt-1 text-sm text-slate-500">Fill in your details to get started</p>

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
                onChange={onFullNameChange}
                onBlur={() => handleBlur('fullName')}
                aria-invalid={touched.fullName && !!errors.fullName}
                className={`${inputRing} w-full ${fieldErrorClass(touched.fullName && !!errors.fullName)}`}
                placeholder="Jane Doe"
              />
              {touched.fullName && errors.fullName ? (
                <p className="mt-1.5 text-sm text-red-600" role="status">
                  {errors.fullName}
                </p>
              ) : null}
            </div>

            <div>
              <label htmlFor="signup-email" className="mb-1.5 block text-sm font-medium text-slate-700">
                Email Address
              </label>
              <input
                id="signup-email"
                name="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={onEmailChange}
                onBlur={() => handleBlur('email')}
                aria-invalid={touched.email && !!errors.email}
                className={`${inputRing} w-full ${fieldErrorClass(touched.email && !!errors.email)}`}
                placeholder="you@example.com"
              />
              {touched.email && errors.email ? (
                <p className="mt-1.5 text-sm text-red-600" role="status">
                  {errors.email}
                </p>
              ) : null}
            </div>

            <div>
              <label htmlFor="signup-password" className="mb-1.5 block text-sm font-medium text-slate-700">
                Password
              </label>
              <div className="relative">
                <input
                  id="signup-password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="new-password"
                  value={password}
                  onChange={onPasswordChange}
                  onBlur={() => handleBlur('password')}
                  aria-invalid={touched.password && !!errors.password}
                  className={`${inputRing} w-full pr-12 ${fieldErrorClass(touched.password && !!errors.password)}`}
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  tabIndex={-1}
                  onClick={() => setShowPassword((s) => !s)}
                  className="absolute inset-y-0 right-0 flex items-center rounded-r-xl px-3 text-slate-500 transition hover:text-slate-800"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  <EyeIcon open={showPassword} />
                </button>
              </div>
              {password ? (
                <div className="mt-2 space-y-1.5">
                  <div className="flex gap-1" aria-hidden>
                    {[0, 1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className={`h-1.5 flex-1 rounded-full transition-colors ${
                          i < strength.score ? strength.barClass : 'bg-slate-200'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-xs font-medium text-slate-600" aria-live="polite">
                    Strength: <span className="text-slate-800">{strength.label}</span>
                  </p>
                </div>
              ) : null}
              {touched.password && errors.password ? (
                <p className="mt-1.5 text-sm text-red-600" role="status">
                  {errors.password}
                </p>
              ) : null}
            </div>

            <div>
              <label htmlFor="signup-confirm" className="mb-1.5 block text-sm font-medium text-slate-700">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  id="signup-confirm"
                  name="confirmPassword"
                  type={showConfirm ? 'text' : 'password'}
                  autoComplete="new-password"
                  value={confirmPassword}
                  onChange={onConfirmChange}
                  onBlur={() => handleBlur('confirmPassword')}
                  aria-invalid={touched.confirmPassword && !!errors.confirmPassword}
                  className={`${inputRing} w-full pr-12 ${fieldErrorClass(
                    touched.confirmPassword && !!errors.confirmPassword,
                  )}`}
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  tabIndex={-1}
                  onClick={() => setShowConfirm((s) => !s)}
                  className="absolute inset-y-0 right-0 flex items-center rounded-r-xl px-3 text-slate-500 transition hover:text-slate-800"
                  aria-label={showConfirm ? 'Hide confirm password' : 'Show confirm password'}
                >
                  <EyeIcon open={showConfirm} />
                </button>
              </div>
              {touched.confirmPassword && errors.confirmPassword ? (
                <p className="mt-1.5 text-sm text-red-600" role="status">
                  {errors.confirmPassword}
                </p>
              ) : null}
            </div>

            <div>
              <div className="flex items-start gap-2">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  checked={agreeTerms}
                  onChange={onTermsChange}
                  onBlur={() => handleBlur('terms')}
                  className="mt-0.5 h-4 w-4 shrink-0 rounded border-slate-300 text-teal-600 focus:ring-2 focus:ring-teal-500/30 focus:ring-offset-0"
                />
                <label htmlFor="terms" className="text-sm text-slate-600">
                  I agree to{' '}
                  <a href="#" className="font-medium text-teal-600 hover:text-teal-700 hover:underline">
                    Terms &amp; Conditions
                  </a>
                </label>
              </div>
              {touched.terms && errors.terms ? (
                <p className="mt-1.5 text-sm text-red-600" role="status">
                  {errors.terms}
                </p>
              ) : null}
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
                  Creating account…
                </>
              ) : (
                'Create Account'
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
            Already have an account?{' '}
            <Link
              to="/login"
              className="font-semibold text-teal-600 transition hover:text-teal-700 hover:underline"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
