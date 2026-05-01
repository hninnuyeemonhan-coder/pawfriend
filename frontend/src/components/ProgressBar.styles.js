// src/components/ProgressBar.styles.js
import theme from '../styles/theme'

export const container = {
  marginBottom: theme.spacing.lg,
}

export const header = {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '8px',
  fontSize: '14px',
  alignItems: 'baseline',
}

export const title = {
  fontWeight: 700,
  color: theme.colors.primaryDark,
  fontFamily: theme.fonts.heading,
  fontSize: '16px',
}

export const counter = {
  color: theme.colors.textLight,
  fontWeight: 600,
}

export const track = {
  height: '16px',
  background: theme.colors.bgSoft,
  borderRadius: theme.radii.full,
  overflow: 'hidden',
  border: `2px solid ${theme.colors.border}`,
}

export const fill = (percent) => ({
  height: '100%',
  width: `${percent}%`,
  background: percent === 100 ? theme.gradients.meadow : theme.gradients.sunny,
  borderRadius: theme.radii.full,
  transition: 'width 0.6s ease',
  boxShadow: percent > 0 ? `0 0 10px ${theme.colors.accent}80` : 'none',
})
