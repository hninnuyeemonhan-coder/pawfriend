/** @jsxImportSource @emotion/react */
import { useState, useEffect } from 'react'
import api from '../api/axios'
import * as s from './StreakCalendar.styles'

export default function StreakCalendar() {
  const [completions, setCompletions] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => { loadCompletions() }, [])

  const loadCompletions = async () => {
    const dateMap = {}
    const today = new Date()
    for (let i = 29; i >= 0; i--) {
      const d = new Date(today)
      d.setDate(d.getDate() - i)
      const key = d.toISOString().split('T')[0]
      dateMap[key] = 0
    }

    try {
      const res = await api.get('/habits/list.php')
      const habits = res.data.habits || []

      const todayKey = today.toISOString().split('T')[0]
      const anyCompletedToday = habits.some(h => h.completed_today)
      if (anyCompletedToday) {
        dateMap[todayKey] = habits.filter(h => h.completed_today).length
      }

      habits.forEach(h => {
        const streak = h.current_streak || 0
        if (streak === 0) return

        const endDate = new Date(today)
        if (!h.completed_today) {
          endDate.setDate(endDate.getDate() - 1)
        }

        for (let i = 0; i < streak; i++) {
          const d = new Date(endDate)
          d.setDate(d.getDate() - i)
          const key = d.toISOString().split('T')[0]
          if (dateMap[key] !== undefined) {
            dateMap[key] = (dateMap[key] || 0) + 1
          }
        }
      })
    } catch (err) {
      console.error('Failed to load calendar data', err)
    } finally {
      setCompletions(dateMap)
      setLoading(false)
    }
  }

  const days = Object.entries(completions)
  const maxCount = Math.max(1, ...Object.values(completions))
  const totalActiveDays = days.filter(([_, c]) => c > 0).length

  return (
    <div css={s.container}>
      <div css={s.header}>
        <h3 css={s.heading}>📅 Last 30 Days</h3>
        {!loading && (
          <span css={s.activeCount}>
            🌱 {totalActiveDays} active {totalActiveDays === 1 ? 'day' : 'days'}
          </span>
        )}
      </div>

      <div css={s.grid}>
        {days.map(([date, count]) => {
          const intensity = count === 0 ? 0 : 0.3 + (count / maxCount) * 0.7
          const label = count === 0
            ? `${date} — no habits completed`
            : `${date} — ${count} habit${count === 1 ? '' : 's'} completed`

          return (
            <div key={date} title={label} css={s.cell(count, intensity)} />
          )
        })}
      </div>

      <div css={s.legend}>
        <span>Less</span>
        {[0, 0.4, 0.6, 0.8, 1].map((op, i) => (
          <div key={i} css={s.legendSwatch(op)} />
        ))}
        <span>More</span>
      </div>
    </div>
  )
}
