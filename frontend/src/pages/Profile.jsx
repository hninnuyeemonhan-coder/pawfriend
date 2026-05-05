/** @jsxImportSource @emotion/react */
import { useState, useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import api from '../api/axios'
import { FiEdit2, FiSave, FiX, FiCamera } from 'react-icons/fi'
import theme from '../styles/theme'
import * as s from './Profile.styles'

export default function Profile() {
  const { user, setUser } = useAuth()
  const [profile, setProfile] = useState(null)
  const [stats, setStats] = useState({})
  const [habits, setHabits] = useState([])
  const [editing, setEditing] = useState(false)
  const [editForm, setEditForm] = useState({})
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  useEffect(() => { loadProfile() }, [])

  const loadProfile = async () => {
    try {
      const res = await api.get('/profile/get.php')
      setProfile(res.data.user)
      setStats(res.data.stats)
      setHabits(res.data.habits || [])
      setEditForm({
        name: res.data.user.name,
        username: res.data.user.username,
        phone: res.data.user.phone || '',
        pet_name: res.data.user.pet_name || '',
      })
    } catch (err) {
      console.error('Failed to load profile')
    } finally {
      setLoading(false)
    }
  }

  const handleSave = async () => {
    setSaving(true)
    try {
      await api.post('/profile/update.php', editForm)
      setProfile(prev => ({ ...prev, ...editForm }))
      setUser(prev => ({ ...prev, name: editForm.name, username: editForm.username }))
      setEditing(false)
    } catch (err) {
      alert(err.response?.data?.error || 'Update failed')
    } finally {
      setSaving(false)
    }
  }

  const handleAvatarUpload = async (e) => {
    const file = e.target.files[0]
    if (!file) return
    // Reset the input so the same file can be reselected later
    e.target.value = ''

    // Match backend limit (2MB) — give user instant feedback
    if (file.size > 2 * 1024 * 1024) {
      alert('Image is too large — please pick something under 2MB.')
      return
    }

    // Validate file type to match backend
    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp']
    if (!allowedTypes.includes(file.type)) {
      alert('Only JPG, PNG, or WebP images are allowed.')
      return
    }

    const formData = new FormData()
    formData.append('avatar', file)
    try {
      const res = await api.post('/profile/upload_avatar.php', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      })
      // Reload the profile so we get the fresh avatar URL from the server
      // (don't trust the response shape; just re-fetch to be safe)
      await loadProfile()
    } catch (err) {
      console.error('Avatar upload failed:', err)
      alert(err.response?.data?.error || 'Avatar upload failed. Please try again.')
    }
  }

  // Convert a relative avatar path from the backend into an absolute URL
  // so the <img> can actually find the file on the backend server.
  const resolveAvatarUrl = (url) => {
    if (!url) return null
    // Already absolute? Return as-is
    if (url.startsWith('http://') || url.startsWith('https://')) return url
    // Relative path — prepend the backend base URL
    const backendBase = 'https://w25043192.nuwebspace.co.uk/backend'
    // Make sure we don't end up with double slashes
    return `${backendBase}${url.startsWith('/') ? '' : '/'}${url}`
  }

  if (loading) return <div css={s.loading}>Loading profile... 🐾</div>

  const memberSince = profile?.created_at
    ? new Date(profile.created_at).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })
    : 'Unknown'

  const statItems = [
    { label: 'Active Habits',     value: stats.total_habits || 0,        emoji: '🌱', accent: theme.colors.primary },
    { label: 'Total Completions', value: stats.total_completions || 0,   emoji: '✅', accent: theme.colors.accent },
    { label: 'Best Streak',       value: `${stats.best_streak || 0} days`, emoji: '🔥', accent: theme.colors.secondary },
  ]

  return (
    <div css={s.page}>
      <h1 css={s.title}>🌿 My Profile</h1>

      {/* Profile card */}
      <div css={s.profileCard}>
        <div css={s.cardRow}>
          <div css={s.avatarWrap}>
            <div css={s.avatar}>
              {profile?.avatar_url
                ? <img
                    src={resolveAvatarUrl(profile.avatar_url)}
                    alt="Avatar"
                    css={s.avatarImg}
                    onError={(e) => {
                      console.warn('Avatar failed to load:', e.target.src)
                      // Hide broken image so the initial letter shows instead
                      e.target.style.display = 'none'
                    }}
                  />
                : (profile?.name?.charAt(0)?.toUpperCase() || '?')
              }
            </div>
            <label css={s.cameraBadge}>
              <FiCamera size={14} />
              <input type="file" accept="image/*" onChange={handleAvatarUpload} css={s.hiddenInput} />
            </label>
          </div>

          <div css={s.info}>
            {editing ? (
              <div css={s.editFormRow}>
                <div>
                  <label css={s.editLabel}>Name</label>
                  <input type="text" value={editForm.name} onChange={e => setEditForm(p => ({ ...p, name: e.target.value }))} css={s.input} />
                </div>
                <div>
                  <label css={s.editLabel}>Username</label>
                  <input type="text" value={editForm.username} onChange={e => setEditForm(p => ({ ...p, username: e.target.value }))} css={s.input} />
                </div>
                <div>
                  <label css={s.editLabel}>Phone</label>
                  <input type="text" value={editForm.phone} onChange={e => setEditForm(p => ({ ...p, phone: e.target.value }))} placeholder="Optional" css={s.input} />
                </div>
                <div>
                  <label css={s.editLabel}>Pet Name</label>
                  <input type="text" value={editForm.pet_name} onChange={e => setEditForm(p => ({ ...p, pet_name: e.target.value }))} css={s.input} />
                </div>
                <div css={s.btnRow}>
                  <button onClick={handleSave} disabled={saving} css={s.saveBtn}>
                    <FiSave /> {saving ? 'Saving...' : 'Save'}
                  </button>
                  <button onClick={() => setEditing(false)} css={s.cancelBtn}>
                    <FiX /> Cancel
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div css={s.viewHeader}>
                  <div>
                    <h2 css={s.name}>{profile?.name}</h2>
                    <p css={s.username}>@{profile?.username}</p>
                  </div>
                  <button onClick={() => setEditing(true)} css={s.editBtn}>
                    <FiEdit2 size={14} /> Edit
                  </button>
                </div>
                <div css={s.contact}>
                  <p css={s.contactLine}>📧 {profile?.email}</p>
                  {profile?.phone && <p css={s.contactLine}>📞 {profile.phone}</p>}
                  <p css={s.memberSince}>🐾 Member since {memberSince}</p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div css={s.statsGrid}>
        {statItems.map((item, i) => (
          <div key={i} css={s.statCard(item.accent)}>
            <div css={s.statEmoji}>{item.emoji}</div>
            <div css={s.statValue}>{item.value}</div>
            <div css={s.statLabel}>{item.label}</div>
          </div>
        ))}
      </div>

      {/* Habits */}
      <div css={s.habitsCard}>
        <h3 css={s.habitsTitle}>🌿 My Habits ({habits.length})</h3>
        {habits.length === 0 ? (
          <p css={s.emptyText}>No habits created yet.</p>
        ) : (
          <div css={s.habitsList}>
            {habits.map(h => (
              <div key={h.id} css={s.habitRow(h.color)}>
                <span css={s.habitTitle}>{h.title}</span>
                <span css={s.habitFreq}>{h.frequency}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
