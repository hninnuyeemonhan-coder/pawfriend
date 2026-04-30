/** @jsxImportSource @emotion/react */
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import api from '../api/axios'
import HabitCard from '../components/HabitCard'
import PetDisplay from '../components/PetDisplay'
import ProgressBar from '../components/ProgressBar'
import ReminderBanner from '../components/ReminderBanner'
import StreakCalendar from '../components/StreakCalendar'
import { FiPlus } from 'react-icons/fi'
import * as s from './Dashboard.styles'

const quotes = [
  "Small steps every day lead to big changes.",
  "Your pet believes in you — keep going!",
  "Consistency beats perfection.",
  "One habit at a time, one day at a time.",
  "The secret of getting ahead is getting started.",
  "You don't have to be great to start, but you have to start to be great.",
  "A little progress each day adds up to big results.",
]

export default function Dashboard() {
  const { user } = useAuth()
  const [habits, setHabits] = useState([])
  const [pet, setPet] = useState(null)
  const [loading, setLoading] = useState(true)

  const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0)) / 86400000)
  const todayQuote = quotes[dayOfYear % quotes.length]

  useEffect(() => { loadData() }, [])

  const loadData = async () => {
    try {
      const [habitsRes, petRes] = await Promise.all([
        api.get('/habits/list.php'),
        api.get('/pet/status.php'),
      ])
      setHabits(habitsRes.data.habits || [])
      setPet(petRes.data.pet || null)
    } catch (err) {
      console.error('Failed to load dashboard data', err)
    } finally {
      setLoading(false)
    }
  }

  const handleComplete = async (habitId) => {
    try {
      await api.post('/habits/complete.php', { habit_id: habitId })
      loadData()
    } catch (err) {
      alert(err.response?.data?.error || 'Failed to complete habit')
    }
  }

  const handleDelete = async (habitId) => {
    if (!window.confirm('Delete this habit? This cannot be undone.')) return
    try {
      await api.post('/habits/delete.php', { habit_id: habitId })
      setHabits(prev => prev.filter(h => h.id !== habitId))
    } catch (err) {
      alert('Failed to delete habit')
    }
  }

  const completedCount = habits.filter(h => h.completed_today).length
  const greeting = new Date().getHours() < 12 ? 'morning' : new Date().getHours() < 18 ? 'afternoon' : 'evening'
  const greetingEmoji = greeting === 'morning' ? '🌅' : greeting === 'afternoon' ? '☀️' : '🌙'

  if (loading) {
    return <div css={s.loading}>Loading dashboard... 🐾</div>
  }

  return (
    <div>
      <div css={s.greetingWrap}>
        <h1 css={s.greeting}>
          <span css={s.greetingEmoji}>{greetingEmoji}</span>
          Good {greeting}, {user?.name?.split(' ')[0]}!
        </h1>
        <p css={s.quote}>"{todayQuote}"</p>
      </div>

      <div css={s.topRow}>
        {/* Pet — no frame, just the puppy floating, scaled bigger */}
        <Link to="/pet" css={s.petArea}>
          <div css={s.petScale}>
            <PetDisplay pet={pet} size="small" />
          </div>
          <p css={s.petCaption}>Tap to visit {pet?.name} 🐾</p>
        </Link>

        <div>
          <ProgressBar completed={completedCount} total={habits.length} />
          <ReminderBanner habits={habits} />
        </div>
      </div>

      <div css={s.habitsHeader}>
        <h2 css={s.habitsTitle}>🌿 My Habits</h2>
        <Link to="/create-habit" css={s.newHabitBtn}>
          <FiPlus /> New Habit
        </Link>
      </div>

      {habits.length === 0 ? (
        <div css={s.emptyState}>
          <p css={s.emptyEmoji}>🌱</p>
          <p css={s.emptyText}>
            No habits yet! Plant your first habit and watch it grow with your puppy.
          </p>
          <Link to="/create-habit" css={s.emptyCta}>
            Create First Habit 🌿
          </Link>
        </div>
      ) : (
        <div css={s.habitsList}>
          {habits.map(habit => (
            <HabitCard
              key={habit.id}
              habit={habit}
              onComplete={handleComplete}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}

      <div css={s.calendarWrap}>
        <StreakCalendar />
      </div>
    </div>
  )
}
