/** @jsxImportSource @emotion/react */
import { useState, useEffect } from 'react'
import api from '../api/axios'
import * as s from './MoodLog.styles'

const moods = [
  { value: 'great',    img: '/assets/pets/moods/great.png',    label: 'Great',    color: '#A1DD70' },
  { value: 'good',     img: '/assets/pets/moods/good.png',     label: 'Good',     color: '#799351' },
  { value: 'okay',     img: '/assets/pets/moods/okay.png',     label: 'Okay',     color: '#E8A546' },
  { value: 'bad',      img: '/assets/pets/moods/bad.png',      label: 'Bad',      color: '#F4A58A' },
  { value: 'terrible', img: '/assets/pets/moods/terrible.png', label: 'Terrible', color: '#EE4E4E' },
]

export default function MoodLog() {
  const [todayMood, setTodayMood] = useState(null)
  const [history, setHistory] = useState([])
  const [selectedMood, setSelectedMood] = useState('')
  const [note, setNote] = useState('')
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  useEffect(() => { loadMoodData() }, [])

  const loadMoodData = async () => {
    try {
      const res = await api.get('/mood/history.php')
      setHistory(res.data.history || [])
      if (res.data.today) {
        setTodayMood(res.data.today)
        setSelectedMood(res.data.today.mood)
        setNote(res.data.today.note || '')
      }
    } catch (err) {
      console.error('Failed to load mood data')
    } finally {
      setLoading(false)
    }
  }

  const handleSave = async () => {
    if (!selectedMood) return
    setSaving(true)
    try {
      await api.post('/mood/log.php', { mood: selectedMood, note })
      setTodayMood({ mood: selectedMood, note })
      loadMoodData()
    } catch (err) {
      alert('Failed to save mood')
    } finally {
      setSaving(false)
    }
  }

  const getMoodInfo = (value) => moods.find(m => m.value === value)

  if (loading) return <div css={s.loading}>Loading mood data... 🌸</div>

  return (
    <div>
      <h1 css={s.title}>💭 Mood Log</h1>

      {/* Today's mood */}
      <div css={s.todayCard}>
        <h2 css={s.todayHeading}>How are you feeling today? 🌿</h2>

        <div css={s.moodGrid}>
          {moods.map(m => {
            const selected = selectedMood === m.value
            return (
              <button key={m.value} onClick={() => setSelectedMood(m.value)}
                css={s.moodBtn(selected, m.color)}>
                <div css={s.moodCircle(selected, m.color)}>
                  <img src={m.img} alt={m.label} css={s.moodImage} />
                </div>
                <span css={s.moodLabel(selected, m.color)}>{m.label}</span>
              </button>
            )
          })}
        </div>

        <textarea value={note} onChange={e => setNote(e.target.value)}
          placeholder="Any thoughts about today? (optional)" rows={3}
          css={s.textarea} />

        <div css={s.saveWrap}>
          <button onClick={handleSave} disabled={!selectedMood || saving}
            css={s.saveBtn(Boolean(selectedMood))}>
            {saving ? 'Saving...' : todayMood ? 'Update Mood 🌸' : 'Log Mood 🌸'}
          </button>
        </div>
      </div>

      {/* Mood history */}
      <div css={s.historyCard}>
        <h3 css={s.historyTitle}>📖 Mood History</h3>

        {history.length === 0 ? (
          <p css={s.emptyText}>No mood entries yet.</p>
        ) : (
          <div css={s.historyList}>
            {history.map((e, i) => {
              const moodInfo = getMoodInfo(e.mood)
              return (
                <div key={i} css={s.entry(moodInfo?.color)}>
                  {moodInfo?.img && (
                    <img src={moodInfo.img} alt={moodInfo.label} css={s.entryImage} />
                  )}
                  <div css={s.entryText}>
                    <span css={s.entryLabel}>{moodInfo?.label}</span>
                    {e.note && <p css={s.entryNote}>{e.note}</p>}
                  </div>
                  <span css={s.entryDate}>
                    {new Date(e.log_date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}
                  </span>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
