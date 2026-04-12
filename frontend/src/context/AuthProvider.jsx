import { useCallback, useMemo, useState } from 'react'
import { AuthContext } from './AuthContext.js'
import { AUTH_STORAGE_KEY, readStoredUser, toSessionUser } from './authSession.js'

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => readStoredUser())

  const setSession = useCallback((rawUser) => {
    const payload = toSessionUser(rawUser)
    if (!payload) return
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(payload))
    setUser(payload)
  }, [])

  const logout = useCallback(() => {
    localStorage.removeItem(AUTH_STORAGE_KEY)
    setUser(null)
  }, [])

  const value = useMemo(
    () => ({
      user,
      setSession,
      logout,
      isAuthenticated: Boolean(user),
    }),
    [user, setSession, logout],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
