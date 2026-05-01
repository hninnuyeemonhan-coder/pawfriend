// src/components/StreakCalendar.styles.js
import theme from '../styles/theme'

export const container = {
  background: theme.colors.bgCard,
  borderRadius: theme.radii.lg,
  padding: theme.spacing.lg,
  boxShadow: `0 4px 16px ${theme.colors.shadow}`,
  border: `2px solid ${theme.colors.border}`,
}

export const header = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'baseline',
  marginBottom: theme.spacing.md,
  flexWrap: 'wrap',
  gap: '8px',
}

export const heading = {
  fontSize: '17px',
  fontWeight: 700,
  fontFamily: theme.fonts.heading,
  color: theme.colors.primaryDark,
}

export const activeCount = {
  fontSize: '13px',
  color: theme.colors.textLight,
  fontWeight: 600,
}

export const grid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(10, 1fr)',
  gap: '6px',
}

export const cell = (count, intensity) => ({
  width: '100%',
  paddingBottom: '100%',
  borderRadius: theme.radii.sm,
  background: count > 0 ? theme.colors.primary : theme.colors.bgSoft,
  border: `1px solid ${count > 0 ? theme.colors.primaryDark : theme.colors.border}`,
  opacity: count > 0 ? intensity : 1,
  transition: 'transform 0.2s',
  cursor: 'help',
  '&:hover': { transform: 'scale(1.15)' },
})

export const legend = {
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
  marginTop: theme.spacing.md,
  fontSize: '11px',
  color: theme.colors.textLight,
  fontWeight: 600,
  justifyContent: 'flex-end',
}

export const legendSwatch = (opacity) => ({
  width: '14px',
  height: '14px',
  borderRadius: '4px',
  background: opacity === 0 ? theme.colors.bgSoft : theme.colors.primary,
  border: `1px solid ${opacity === 0 ? theme.colors.border : theme.colors.primaryDark}`,
  opacity: opacity === 0 ? 1 : opacity,
})
