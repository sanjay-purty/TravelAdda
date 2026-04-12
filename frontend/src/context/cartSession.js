export const CART_STORAGE_KEY = 'travel_app_cart'

/** @param {unknown} data */
function isCartLine(data) {
  if (!data || typeof data !== 'object') return false
  const o = /** @type {Record<string, unknown>} */ (data)
  return (
    typeof o.cartLineId === 'string' &&
    typeof o.serviceId === 'string' &&
    typeof o.title === 'string' &&
    typeof o.description === 'string' &&
    typeof o.price === 'number' &&
    typeof o.image === 'string'
  )
}

export function readCartFromStorage() {
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []
    return parsed.filter(isCartLine)
  } catch {
    return []
  }
}

/** @param {Array<Record<string, unknown>>} items */
export function writeCartToStorage(items) {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items))
  } catch {
    /* ignore quota */
  }
}
