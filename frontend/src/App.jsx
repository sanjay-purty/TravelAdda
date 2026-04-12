import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Signup from './Signup'
import Login from './Login'
import Home from './Routers/Home.jsx'
import About from './Routers/About.jsx'
import Services from './Routers/Services.jsx'
import Contact from './Routers/Contact.jsx'
import ActivitiesHome from './activities/ActivitiesHome.jsx'
import Cart from './Routers/Cart.jsx'
import Profile from './Routers/Profile.jsx'
import ProtectedRoute from './routes/ProtectedRoute.jsx'
import GuestRoute from './routes/GuestRoute.jsx'

function App() {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <GuestRoute>
            <Login />
          </GuestRoute>
        }
      />
      <Route
        path="/signup"
        element={
          <GuestRoute>
            <Signup />
          </GuestRoute>
        }
      />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path="/about"
        element={
          <ProtectedRoute>
            <About />
          </ProtectedRoute>
        }
      />
      <Route
        path="/services"
        element={
          <ProtectedRoute>
            <Services />
          </ProtectedRoute>
        }
      />
      <Route path="/service" element={<Navigate to="/services" replace />} />
      <Route
        path="/cart"
        element={
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
      <Route
        path="/contact"
        element={
          <ProtectedRoute>
            <Contact />
          </ProtectedRoute>
        }
      />
      <Route
        path="/activities"
        element={
          <ProtectedRoute>
            <ActivitiesHome />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  )
}

export default App
