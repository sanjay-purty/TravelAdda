import { useContext } from 'react'
import { VisitorCountContext } from './VisitorCountContext.js'

export function useVisitorCount() {
  const ctx = useContext(VisitorCountContext)
  if (!ctx) {
    throw new Error('useVisitorCount must be used within VisitorCountProvider')
  }
  return ctx
}
