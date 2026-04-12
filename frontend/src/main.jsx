import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthProvider.jsx'
import { CartProvider } from './context/CartProvider.jsx'
import { VisitorCountProvider } from './context/VisitorCountProvider.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
      <CartProvider>
        <VisitorCountProvider>
          <App />
        </VisitorCountProvider>
      </CartProvider>
    </AuthProvider>
  </BrowserRouter>,
)
