/** @jsxImportSource @emotion/react */
import { FiCheck, FiTrash2 } from 'react-icons/fi'
import * as s from './HabitCard.styles'

const timeLabels = {
  morning: '🌅 Morning',
  afternoon: '☀️ Afternoon',
  evening: '🌙 Evening',
  anytime: '⏰ Anytime',
}

export default function HabitCard({ habit, onComplete, onDelete }) {
  const isWeekly = habit.frequency === 'weekly'
  const done = habit.completed_today

  return (
    <div css={s.card(done, habit.color)}>
      <div css={s.infoSection}>
        <div css={s.titleRow}>
          <h3 css={s.title(done)}>{habit.title}</h3>
          {isWeekly && <span css={s.weeklyBadge}>WEEKLY</span>}
        </div>
        <div css={s.meta}>
          <span>{timeLabels[habit.time_of_day]}</span>
          <span>🔥 {habit.current_streak} {isWeekly ? 'week' : 'day'} streak</span>
          <span>🏆 Best: {habit.longest_streak}</span>
        </div>
        {done && (
          <p css={s.doneInfo}>
            {isWeekly
              ? (habit.days_until_due > 0
                  ? `✅ Done this week — next due in ${habit.days_until_due} day${habit.days_until_due === 1 ? '' : 's'}`
                  : '✅ Done this week')
              : '✅ Done today — come back tomorrow!'}
          </p>
        )}
      </div>

      <div css={s.actions}>
        {!done ? (
          <button onClick={() => onComplete(habit.id)} css={s.doneButton}>
            <FiCheck /> Done
          </button>
        ) : (
          <span css={s.completedBadge}>✅ Done!</span>
        )}
        <button onClick={() => onDelete(habit.id)} css={s.deleteButton}>
          <FiTrash2 />
        </button>
      </div>
    </div>
  )
}
