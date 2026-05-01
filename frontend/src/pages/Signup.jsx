/** @jsxImportSource @emotion/react */
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import theme from '../styles/theme'
import * as s from './auth.styles'

export default function Signup() {
  const [form, setForm] = useState({
    name: '', username: '', email: '', password: '', confirmPassword: '', pet_name: ''
  })
  const [error, setError] = useState('')
  const [pwErrors, setPwErrors] = useState([])
  const [loading, setLoading] = useState(false)
  const { signup } = useAuth()
  const navigate = useNavigate()

  const updateField = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }))
    if (field === 'password') validatePassword(value)
  }

  const validatePassword = (pw) => {
    const errors = []
    if (pw.length < 8) errors.push('At least 8 characters')
    if (!/[A-Z]/.test(pw)) errors.push('One uppercase letter')
    if (!/[a-z]/.test(pw)) errors.push('One lowercase letter')
    if (!/[0-9]/.test(pw)) errors.push('One number')
    if (!/[^A-Za-z0-9]/.test(pw)) errors.push('One special character (!@#$...)')
    setPwErrors(errors)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match')
      return
    }
    if (pwErrors.length > 0) {
      setError('Password does not meet requirements')
      return
    }
    setLoading(true)
    try {
      await signup({
        name: form.name, username: form.username, email: form.email,
        password: form.password, pet_name: form.pet_name || 'Buddy'
      })
      navigate('/dashboard')
    } catch (err) {
      setError(err.response?.data?.error || 'Signup failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div css={s.page}>
      <span css={s.decorTL}>🌿</span>
      <span css={s.decorTR}>🌸</span>
      <span css={s.decorBL}>🐾</span>
      <span css={s.decorBR}>🌼</span>

      <div css={s.card(theme.colors.secondary)}>
        <div css={s.header}>
          <div css={s.headerImageCenter}>
            <div css={s.headerImageWrap}>
              <img src="/assets/puppy-face.png" alt="Puppy" css={s.headerImageInline} />
              <span css={s.headerSparkle}>✨</span>
            </div>
          </div>
          <h1 css={s.title}>Join PawFriend!</h1>
          <p css={s.subtitle}>Create an account and name your pup 🐾</p>
        </div>

        {error && <div css={s.errorBox}>{error}</div>}

        <form onSubmit={handleSubmit}>
          <div css={s.twoColGrid}>
            <div>
              <label css={s.label}>Full Name</label>
              <input type="text" value={form.name}
                onChange={e => updateField('name', e.target.value)}
                placeholder="Jane Doe" required css={s.input} />
            </div>
            <div>
              <label css={s.label}>Username</label>
              <input type="text" value={form.username}
                onChange={e => updateField('username', e.target.value)}
                placeholder="jane_doe" required css={s.input} />
            </div>
          </div>

          <div css={s.fieldGroup}>
            <label css={s.label}>Email</label>
            <input type="email" value={form.email}
              onChange={e => updateField('email', e.target.value)}
              placeholder="you@example.com" required css={s.input} />
          </div>

          <div css={s.fieldGroup}>
            <label css={s.label}>Password</label>
            <input type="password" value={form.password}
              onChange={e => updateField('password', e.target.value)}
              placeholder="Strong password" required css={s.input} />
            {form.password && pwErrors.length > 0 && (
              <div css={s.pwErrors}>
                {pwErrors.map((err, i) => (
                  <span key={i} css={s.pwError}>✗ {err}</span>
                ))}
              </div>
            )}
            {form.password && pwErrors.length === 0 && (
              <span css={s.pwOk}>✓ Password is strong</span>
            )}
          </div>

          <div css={s.fieldGroup}>
            <label css={s.label}>Confirm Password</label>
            <input type="password" value={form.confirmPassword}
              onChange={e => updateField('confirmPassword', e.target.value)}
              placeholder="Repeat password" required css={s.input} />
          </div>

          <div css={s.fieldGroupLast}>
            <label css={s.label}>
              Name Your Puppy <img src="/assets/puppy-face.png" alt="" css={s.labelIcon} />
            </label>
            <input type="text" value={form.pet_name}
              onChange={e => updateField('pet_name', e.target.value)}
              placeholder="Buddy" css={s.input} />
          </div>

          <button type="submit" disabled={loading} css={s.submitBtn}>
            {loading ? 'Creating account...' : 'Create Account 🌟'}
          </button>
        </form>

        <p css={s.footerText}>
          Already have an account?{' '}
          <Link to="/login" css={s.footerLink}>Log in</Link>
        </p>
      </div>
    </div>
  )
}
