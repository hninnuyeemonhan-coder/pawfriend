// src/components/ReminderBanner.styles.js
import theme from '../styles/theme'

export const banner = {
  background: theme.gradients.sunny,
  border: `2px solid ${theme.colors.secondary}`,
  borderRadius: theme.radii.md,
  padding: theme.spacing.lg,
  marginBottom: theme.spacing.lg,
  boxShadow: `0 4px 12px ${theme.colors.shadowWarm}`,
}

export const heading = {
  fontSize: '16px',
  fontWeight: 700,
  marginBottom: '10px',
  color: theme.colors.primaryDark,
  fontFamily: theme.fonts.heading,
}

export const list = {
  display: 'flex',
  gap: theme.spacing.sm,
  flexWrap: 'wrap',
}

export const chip = (color) => ({
  background: theme.colors.bgCard,
  padding: '8px 16px',
  borderRadius: theme.radii.full,
  fontSize: '13px',
  fontWeight: 600,
  color: theme.colors.text,
  borderLeft: `4px solid ${color || theme.colors.primary}`,
  boxShadow: `0 2px 6px ${theme.colors.shadow}`,
})
