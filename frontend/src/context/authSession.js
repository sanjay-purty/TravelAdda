export const AUTH_STORAGE_KEY = 'app_user_session'

/** @param {Record<string, unknown> | null | undefined} source */
export function toSessionUser(source) {
  if (!source || typeof source !== 'object') return null
  const id = source._id ?? source.id
  const name = source.Name ?? source.name ?? ''
  const email = source.Email ?? source.email ?? ''
  if (typeof email !== 'string' || !email.trim()) return null
  return {
    id: id != null ? String(id) : '',
    name: typeof name === 'string' ? name : String(name),
    email: email.trim(),
  }
}

export function readStoredUser() {
  try {
    const raw = localStorage.getItem(AUTH_STORAGE_KEY)
    if (!raw) return null
    return toSessionUser(JSON.parse(raw))
  } catch {
    return null
  }
}
