/** @jsxImportSource @emotion/react */
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../api/axios'
import * as s from './CreateHabit.styles'

const colorOptions = [
  '#799351', '#F9C0AB', '#A1DD70', '#E8A546', '#F4E0AF',
  '#355F2E', '#EE4E4E', '#F4A58A', '#8A7558', '#D43838',
]

const iconOptions = [
  { value: 'book',      label: '📚 Reading' },
  { value: 'exercise',  label: '💪 Exercise' },
  { value: 'water',     label: '💧 Hydration' },
  { value: 'meditate',  label: '🧘 Meditate' },
  { value: 'code',      label: '💻 Coding' },
  { value: 'sleep',     label: '😴 Sleep' },
  { value: 'food',      label: '🥗 Eating' },
  { value: 'walk',      label: '🚶 Walk' },
  { value: 'journal',   label: '📝 Journal' },
  { value: 'star',      label: '⭐ Other' },
]

export default function CreateHabit() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    title: '', description: '', frequency: 'daily',
    time_of_day: 'anytime', scheduled_time: '',
    color: '#799351', icon: 'star',
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const update = (field, value) => setForm(prev => ({ ...prev, [field]: value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.title.trim()) {
      setError('Please enter a habit name')
      return
    }
    setError('')
    setLoading(true)
    try {
      await api.post('/habits/create.php', form)
      navigate('/dashboard')
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to create habit')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div css={s.page}>
      <h1 css={s.title}>🌱 Create New Habit</h1>

      <div css={s.formCard}>
        {error && <div css={s.errorBox}>{error}</div>}

        <form onSubmit={handleSubmit}>
          {/* Name + Description */}
          <div css={s.twoColumn}>
            <div>
              <label css={s.label}>Habit Name *</label>
              <input type="text" value={form.title}
                onChange={e => update('title', e.target.value)}
                placeholder="e.g. Read for 30 minutes" required css={s.input} />
            </div>
            <div>
              <label css={s.label}>Description (optional)</label>
              <input type="text" value={form.description}
                onChange={e => update('description', e.target.value)}
                placeholder="What does this habit involve?" css={s.input} />
            </div>
          </div>

          {/* Frequency + Specific Time */}
          <div css={s.twoColumn}>
            <div>
              <label css={s.label}>Frequency</label>
              <div css={s.freqRow}>
                {['daily', 'weekly'].map(freq => (
                  <button key={freq} type="button" onClick={() => update('frequency', freq)}
                    css={s.freqBtn(form.frequency === freq)}>
                    {freq}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label css={s.label}>Specific Time (optional)</label>
              <input type="time" value={form.scheduled_time}
                onChange={e => update('scheduled_time', e.target.value)} css={s.input} />
            </div>
          </div>

          {/* Time of Day */}
          <div css={s.fullRow}>
            <label css={s.label}>Time of Day</label>
            <div css={s.timeOfDayGrid}>
              {[
                { value: 'morning',   label: '🌅 Morning' },
                { value: 'afternoon', label: '☀️ Afternoon' },
                { value: 'evening',   label: '🌙 Evening' },
                { value: 'anytime',   label: '⏰ Anytime' },
              ].map(t => (
                <button key={t.value} type="button" onClick={() => update('time_of_day', t.value)}
                  css={s.timeBtn(form.time_of_day === t.value)}>
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* Colour + Category */}
          <div css={s.twoColumn} style={{ marginBottom: '32px' }}>
            <div>
              <label css={s.label}>Colour</label>
              <div css={s.colorRow}>
                {colorOptions.map(c => (
                  <button key={c} type="button" onClick={() => update('color', c)}
                    css={s.colorSwatch(c, form.color === c)} />
                ))}
              </div>
            </div>

            <div>
              <label css={s.label}>Category</label>
              <div css={s.categoryGrid}>
                {iconOptions.map(ic => (
                  <button key={ic.value} type="button" onClick={() => update('icon', ic.value)}
                    css={s.categoryBtn(form.icon === ic.value)}>
                    {ic.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Preview */}
          <div css={s.preview(form.color)}>
            <p css={s.previewLabel}>🌿 Preview</p>
            <p css={s.previewTitle}>{form.title || 'Your habit name'}</p>
            <p css={s.previewMeta}>
              {form.frequency} • {form.time_of_day}
              {form.scheduled_time && ` at ${form.scheduled_time}`}
            </p>
          </div>

          <button type="submit" disabled={loading} css={s.submitBtn(loading)}>
            {loading ? 'Creating...' : 'Create Habit 🌱'}
          </button>
        </form>
      </div>
    </div>
  )
}
