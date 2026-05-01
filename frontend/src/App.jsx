import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from './context/AuthContext'

import Landing from './pages/Landing'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import CreateHabit from './pages/CreateHabit'
import PetPage from './pages/PetPage'
import Profile from './pages/Profile'
import Achievements from './pages/Achievements'
import MoodLog from './pages/MoodLog'
import Accessories from './pages/Accessories'
import HabitGuide from './pages/HabitGuide'
import Wellness from './pages/Wellness'

import ProtectedRoute from './components/ProtectedRoute'
import Layout from './components/Layout'

export default function App() {
  const { user, loading } = useAuth()

  if (loading) return null

  return (
    <Routes>
      <Route path="/" element={user ? <Navigate to="/dashboard" /> : <Landing />} />
      <Route path="/login" element={user ? <Navigate to="/dashboard" /> : <Login />} />
      <Route path="/signup" element={user ? <Navigate to="/dashboard" /> : <Signup />} />

      {/* Public info pages — accessible to everyone. Wrap in Layout for logged-in users so they get the sidebar. */}
      <Route path="/habit-guide" element={
        user ? <Layout><HabitGuide /></Layout> : <HabitGuide />
      } />
      <Route path="/wellness" element={
        user ? <Layout><Wellness /></Layout> : <Wellness />
      } />

      <Route path="/dashboard" element={
        <ProtectedRoute><Layout><Dashboard /></Layout></ProtectedRoute>
      } />
      <Route path="/create-habit" element={
        <ProtectedRoute><Layout><CreateHabit /></Layout></ProtectedRoute>
      } />
      <Route path="/pet" element={
        <ProtectedRoute><Layout><PetPage /></Layout></ProtectedRoute>
      } />
      <Route path="/profile" element={
        <ProtectedRoute><Layout><Profile /></Layout></ProtectedRoute>
      } />
      <Route path="/achievements" element={
        <ProtectedRoute><Layout><Achievements /></Layout></ProtectedRoute>
      } />
      <Route path="/mood" element={
        <ProtectedRoute><Layout><MoodLog /></Layout></ProtectedRoute>
      } />
      <Route path="/accessories" element={
        <ProtectedRoute><Layout><Accessories /></Layout></ProtectedRoute>
      } />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
