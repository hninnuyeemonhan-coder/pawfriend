// src/pages/Dashboard.styles.js
import theme from '../styles/theme'

export const greetingWrap = {
  marginBottom: theme.spacing.xl,
}

export const greeting = {
  fontSize: 'clamp(22px, 5vw, 32px)',
  fontWeight: 800,
  fontFamily: theme.fonts.heading,
  color: theme.colors.primaryDark,
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  flexWrap: 'wrap',
}

export const greetingEmoji = {
  fontSize: '1.1em',
}

export const quote = {
  color: theme.colors.textLight,
  marginTop: '6px',
  fontStyle: 'italic',
  fontSize: '14px',
  paddingLeft: '4px',
}

// Top row: pet on left (no card!), progress + reminders on right
export const topRow = {
  display: 'grid',
  gridTemplateColumns: '260px 1fr',
  gap: theme.spacing.xl,
  marginBottom: theme.spacing.xl,
  alignItems: 'center',
  '@media (max-width: 768px)': {
    gridTemplateColumns: '1fr',
    gap: theme.spacing.lg,
    justifyItems: 'center',
  },
}

// Pet area — no background, no border, just the pet floating freely
export const petArea = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  textDecoration: 'none',
  color: theme.colors.text,
  cursor: 'pointer',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'translateY(-4px) scale(1.03)',
  },
}

// Wrapper that scales the small PetDisplay UP to make the puppy bigger
export const petScale = {
  transform: 'scale(1.6)',
  transformOrigin: 'center center',
  margin: `${theme.spacing.lg} 0`,
  '@media (max-width: 768px)': {
    transform: 'scale(1.4)',
    margin: `${theme.spacing.md} 0`,
  },
}

export const petCaption = {
  fontSize: '13px',
  color: theme.colors.primaryDark,
  fontWeight: 700,
  fontFamily: theme.fonts.heading,
  marginTop: theme.spacing.md,
}

export const habitsHeader = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: theme.spacing.md,
  gap: theme.spacing.sm,
  flexWrap: 'wrap',
}

export const habitsTitle = {
  fontSize: 'clamp(18px, 4vw, 22px)',
  fontWeight: 800,
  fontFamily: theme.fonts.heading,
  color: theme.colors.primaryDark,
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
}

export const newHabitBtn = {
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
  background: theme.gradients.sage,
  color: theme.colors.textWhite,
  padding: '10px 20px',
  borderRadius: theme.radii.full,
  fontSize: '14px',
  fontWeight: 700,
  boxShadow: `0 4px 12px ${theme.colors.shadow}`,
  transition: 'all 0.2s',
  '&:hover': { transform: 'translateY(-2px)' },
}

export const emptyState = {
  background: theme.colors.bgCard,
  borderRadius: theme.radii.lg,
  padding: theme.spacing.xxl,
  textAlign: 'center',
  boxShadow: `0 4px 16px ${theme.colors.shadow}`,
  border: `3px dashed ${theme.colors.primaryLight}`,
}

export const emptyEmoji = {
  fontSize: '56px',
  marginBottom: theme.spacing.md,
}

export const emptyText = {
  fontSize: '16px',
  color: theme.colors.text,
  marginBottom: theme.spacing.md,
}

export const emptyCta = {
  display: 'inline-block',
  marginTop: theme.spacing.sm,
  padding: '12px 28px',
  background: theme.gradients.sage,
  color: theme.colors.textWhite,
  borderRadius: theme.radii.full,
  fontWeight: 700,
  boxShadow: `0 4px 12px ${theme.colors.shadow}`,
}

export const habitsList = {
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing.md,
}

export const calendarWrap = {
  marginTop: theme.spacing.xl,
}

export const loading = {
  padding: theme.spacing.xl,
  color: theme.colors.textLight,
}
