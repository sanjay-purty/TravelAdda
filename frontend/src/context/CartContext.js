import { createContext } from 'react'

/**
 * @typedef {Object} CartLine
 * @property {string} cartLineId
 * @property {string} serviceId
 * @property {string} title
 * @property {string} description
 * @property {number} price
 * @property {string} image
 */

/** @type {import('react').Context<null | {
 *   items: CartLine[],
 *   addToCart: (p: Omit<CartLine, 'cartLineId'>) => void,
 *   removeFromCart: (cartLineId: string) => void,
 *   clearCart: () => void,
 *   totalCount: number,
 *   totalPrice: number,
 * }>} */
export const CartContext = createContext(null)
