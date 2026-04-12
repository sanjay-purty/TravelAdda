export const VISITOR_COUNT_KEY = 'traveladda_visitor_total'
export const VISITOR_RECORDED_KEY = 'traveladda_visitor_recorded'

/**
 * If this browser has not been counted yet, adds 2 to the stored total and sets the flag.
 * Safe under React StrictMode double-invoke: second call sees the flag already set.
 * @returns {number} Current total visitor score after any increment
 */
export function readAndApplyVisitorIncrement() {
  try {
    if (localStorage.getItem(VISITOR_RECORDED_KEY) === 'true') {
      const n = parseInt(localStorage.getItem(VISITOR_COUNT_KEY) || '0', 10)
      return Number.isFinite(n) ? n : 0
    }
    const current = parseInt(localStorage.getItem(VISITOR_COUNT_KEY) || '0', 10)
    const base = Number.isFinite(current) ? current : 0
    const next = base + 2
    localStorage.setItem(VISITOR_COUNT_KEY, String(next))
    localStorage.setItem(VISITOR_RECORDED_KEY, 'true')
    return next
  } catch {
    return 0
  }
}
