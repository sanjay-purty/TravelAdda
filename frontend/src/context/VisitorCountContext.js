import { createContext } from 'react'

/** @type {import('react').Context<null | { count: number }>} */
export const VisitorCountContext = createContext(null)
