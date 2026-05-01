/** @jsxImportSource @emotion/react */
import * as s from './ReminderBanner.styles'

export default function ReminderBanner({ habits }) {
  const timeOrder = { morning: 1, afternoon: 2, evening: 3, anytime: 4 }
  const upcoming = habits
    .filter(h => !h.completed_today)
    .sort((a, b) => (timeOrder[a.time_of_day] || 4) - (timeOrder[b.time_of_day] || 4))
    .slice(0, 3)

  if (upcoming.length === 0) return null

  return (
    <div css={s.banner}>
      <h3 css={s.heading}>⏰ Upcoming Habits</h3>
      <div css={s.list}>
        {upcoming.map(h => (
          <span key={h.id} css={s.chip(h.color)}>{h.title}</span>
        ))}
      </div>
    </div>
  )
}
