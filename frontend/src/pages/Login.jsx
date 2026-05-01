/** @jsxImportSource @emotion/react */
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import theme from '../styles/theme'
import * as s from './auth.styles'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      await login(email, password)
      navigate('/dashboard')
    } catch (err) {
      setError(err.response?.data?.error || 'Login failed')
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

      <div css={s.card(theme.colors.accent)}>
        <div css={s.header}>
          <img src="/assets/puppy-face.png" alt="Puppy" css={s.headerImage} />
          <h1 css={s.title}>Welcome Back!</h1>
          <p css={s.subtitle}>Your puppy missed you 🐾</p>
        </div>

        {error && <div css={s.errorBox}>{error}</div>}

        <form onSubmit={handleSubmit}>
          <div css={s.fieldGroup}>
            <label css={s.label}>Email</label>
            <input type="email" value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="you@example.com" required css={s.input} />
          </div>

          <div css={s.fieldGroupLast}>
            <label css={s.label}>Password</label>
            <input type="password" value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Enter your password" required css={s.input} />
          </div>

          <button type="submit" disabled={loading} css={s.submitBtn}>
            {loading ? 'Logging in...' : 'Log In 🐾'}
          </button>
        </form>

        <p css={s.footerText}>
          Don't have an account?{' '}
          <Link to="/signup" css={s.footerLink}>Sign up</Link>
        </p>
      </div>
    </div>
  )
}
