import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/useAuth.js'

export default function GuestRoute({ children }) {
  const { isAuthenticated } = useAuth()

  if (isAuthenticated) {
    return <Navigate to="/" replace />
  }

  return children
}
