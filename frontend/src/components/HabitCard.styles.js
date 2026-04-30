// src/components/HabitCard.styles.js
import theme from '../styles/theme'

export const card = (completed, color) => ({
  background: completed ? theme.colors.bgSoft : theme.colors.bgCard,
  borderRadius: theme.radii.md,
  padding: theme.spacing.lg,
  boxShadow: `0 3px 12px ${theme.colors.shadow}`,
  border: `2px solid ${completed ? theme.colors.primaryLight : theme.colors.border}`,
  borderLeft: `6px solid ${color || theme.colors.primary}`,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: theme.spacing.md,
  transition: 'all 0.2s',
  opacity: completed ? 0.85 : 1,
  '&:hover': {
    transform: 'translateY(-3px)',
    boxShadow: `0 6px 16px ${theme.colors.shadowStrong}`,
  },
  '@media (max-width: 600px)': {
    flexDirection: 'column',
    alignItems: 'stretch',
  },
})

export const infoSection = {
  flex: 1,
  minWidth: 0,
}

export const titleRow = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  flexWrap: 'wrap',
}

export const title = (completed) => ({
  fontSize: '17px',
  fontWeight: 700,
  fontFamily: theme.fonts.heading,
  textDecoration: completed ? 'line-through' : 'none',
  color: completed ? theme.colors.textLight : theme.colors.text,
  wordBreak: 'break-word',
  margin: 0,
})

export const weeklyBadge = {
  display: 'inline-block',
  background: theme.colors.secondary,
  color: theme.colors.dangerDark,
  fontSize: '10px',
  fontWeight: 800,
  letterSpacing: '0.5px',
  padding: '2px 8px',
  borderRadius: theme.radii.full,
}

export const meta = {
  display: 'flex',
  gap: theme.spacing.md,
  marginTop: '6px',
  fontSize: '13px',
  color: theme.colors.textLight,
  flexWrap: 'wrap',
}

export const doneInfo = {
  marginTop: '8px',
  fontSize: '12px',
  fontWeight: 600,
  color: theme.colors.primaryDark,
  fontStyle: 'italic',
}

export const actions = {
  display: 'flex',
  gap: theme.spacing.sm,
  alignItems: 'center',
  flexShrink: 0,
  '@media (max-width: 600px)': {
    justifyContent: 'space-between',
  },
}

export const doneButton = {
  background: theme.gradients.meadow,
  color: theme.colors.textWhite,
  border: 'none',
  borderRadius: theme.radii.full,
  padding: '9px 18px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '6px',
  fontSize: '14px',
  fontWeight: 700,
  boxShadow: `0 3px 8px ${theme.colors.shadow}`,
  transition: 'all 0.2s',
  fontFamily: 'inherit',
  '&:hover': {
    transform: 'translateY(-1px)',
    boxShadow: `0 5px 12px ${theme.colors.shadowStrong}`,
  },
  '@media (max-width: 600px)': { flex: 1 },
}

export const completedBadge = {
  color: theme.colors.primaryDark,
  fontWeight: 700,
  fontSize: '14px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '4px',
  padding: '6px 14px',
  background: theme.colors.primaryLight + '30',
  borderRadius: theme.radii.full,
  '@media (max-width: 600px)': { flex: 1 },
}

export const deleteButton = {
  background: theme.colors.bgSoft,
  border: `2px solid ${theme.colors.border}`,
  borderRadius: theme.radii.full,
  padding: '8px 10px',
  cursor: 'pointer',
  color: theme.colors.danger,
  transition: 'all 0.2s',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '&:hover': {
    background: theme.colors.danger + '20',
    borderColor: theme.colors.danger,
  },
}
