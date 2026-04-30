/** @jsxImportSource @emotion/react */
import { useState, useEffect } from 'react'
import api from '../api/axios'
import * as s from './Achievements.styles'

const iconMap = {
  star: '⭐', plus: '➕', fire: '🔥', check: '✅', trophy: '🏆',
  award: '🏅', crown: '👑', calendar: '📅', zap: '⚡', list: '📋',
  rocket: '🚀',
}

const typeLabels = {
  streak: 'Day Streak',
  completions: 'Completions',
  habits_created: 'Habits Created',
  level: 'Pet Level',
  days_active: 'Days Active',
}

export default function Achievements() {
  const [achievements, setAchievements] = useState([])
  const [earnedCount, setEarnedCount] = useState(0)
  const [totalCount, setTotalCount] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => { loadAchievements() }, [])

  const loadAchievements = async () => {
    try {
      const res = await api.get('/achievements/list.php')
      setAchievements(res.data.achievements || [])
      setEarnedCount(res.data.earned_count || 0)
      setTotalCount(res.data.total_count || 0)
    } catch (err) {
      console.error('Failed to load achievements')
    } finally {
      setLoading(false)
    }
  }

  if (loading) return <div css={s.loading}>Loading achievements... 🏆</div>

  const percent = totalCount > 0 ? Math.round((earnedCount / totalCount) * 100) : 0

  return (
    <div>
      <h1 css={s.title}>🏆 Achievements</h1>

      <div css={s.progressCard}>
        <div css={s.progressHeader}>
          <span css={s.progressTitle}>
            🏆 {earnedCount} / {totalCount} Achievements Unlocked
          </span>
          <span css={s.progressPercent}>{percent}%</span>
        </div>
        <div css={s.progressTrack}>
          <div css={s.progressFill(percent)} />
        </div>
      </div>

      <div css={s.grid}>
        {achievements.map(a => (
          <div key={a.id} css={s.card(a.earned, a.badge_color)}>
            {a.earned && (
              <div css={s.earnedBadge(a.badge_color)}>EARNED ✨</div>
            )}

            <div css={s.cardContent}>
              <div css={s.iconCircle(a.earned, a.badge_color)}>
                {a.earned ? iconMap[a.icon] || '🏆' : '🔒'}
              </div>

              <div css={s.details}>
                <h3 css={s.name}>{a.name}</h3>
                <p css={s.desc}>{a.description}</p>
                <div css={s.tags}>
                  <span css={s.requirement}>
                    {a.requirement_value} {typeLabels[a.requirement_type]}
                  </span>
                  <span css={s.xp}>+{a.xp_reward} XP</span>
                </div>
              </div>
            </div>

            {a.earned && a.earned_at && (
              <p css={s.earnedAt}>
                Earned {new Date(a.earned_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
