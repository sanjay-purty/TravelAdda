import { useMemo, useState } from 'react'
import { VisitorCountContext } from './VisitorCountContext.js'
import { readAndApplyVisitorIncrement } from './visitorSession.js'

export function VisitorCountProvider({ children }) {
  const [count] = useState(() => readAndApplyVisitorIncrement())

  const value = useMemo(() => ({ count }), [count])

  return <VisitorCountContext.Provider value={value}>{children}</VisitorCountContext.Provider>
}
