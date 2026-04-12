import { useCallback, useEffect, useMemo, useState } from 'react'
import { CartContext } from './CartContext.js'
import { readCartFromStorage, writeCartToStorage } from './cartSession.js'

/**
 * @param {Object} pkg
 * @param {string} pkg.serviceId
 * @param {string} pkg.title
 * @param {string} pkg.description
 * @param {number} pkg.price
 * @param {string} pkg.image
 */
function newLineId() {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) return crypto.randomUUID()
  return `line-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => readCartFromStorage())

  useEffect(() => {
    writeCartToStorage(items)
  }, [items])

  const addToCart = useCallback((pkg) => {
    setItems((prev) => [
      ...prev,
      {
        cartLineId: newLineId(),
        serviceId: pkg.serviceId,
        title: pkg.title,
        description: pkg.description,
        price: pkg.price,
        image: pkg.image,
      },
    ])
  }, [])

  const removeFromCart = useCallback((cartLineId) => {
    setItems((prev) => prev.filter((i) => i.cartLineId !== cartLineId))
  }, [])

  const clearCart = useCallback(() => {
    setItems([])
  }, [])

  const totalCount = items.length
  const totalPrice = items.reduce((sum, i) => sum + i.price, 0)

  const value = useMemo(
    () => ({
      items,
      addToCart,
      removeFromCart,
      clearCart,
      totalCount,
      totalPrice,
    }),
    [items, addToCart, removeFromCart, clearCart, totalCount, totalPrice],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
