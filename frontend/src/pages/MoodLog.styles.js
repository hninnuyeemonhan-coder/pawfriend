// src/pages/MoodLog.styles.js
import theme from '../styles/theme'

export const title = {
  fontSize: 'clamp(22px, 5vw, 32px)',
  fontWeight: 800,
  fontFamily: theme.fonts.heading,
  color: theme.colors.primaryDark,
  marginBottom: theme.spacing.lg,
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
}

export const todayCard = {
  background: theme.gradients.sunny,
  borderRadius: theme.radii.lg,
  padding: theme.spacing.xl,
  boxShadow: `0 6px 20px ${theme.colors.shadowWarm}`,
  marginBottom: theme.spacing.xl,
  border: `3px solid ${theme.colors.accent}`,
}

export const todayHeading = {
  fontSize: '20px',
  fontWeight: 800,
  fontFamily: theme.fonts.heading,
  color: theme.colors.primaryDark,
  marginBottom: theme.spacing.lg,
  textAlign: 'center',
}

export const moodGrid = {
  display: 'flex',
  gap: theme.spacing.md,
  marginBottom: theme.spacing.lg,
  justifyContent: 'center',
  flexWrap: 'wrap',
}

export const moodBtn = (selected, color) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '10px',
  padding: 0,
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  fontFamily: 'inherit',
  transition: 'transform 0.2s',
  '&:hover': { transform: 'translateY(-4px)' },
})

// The actual circle that holds the dog face
export const moodCircle = (selected, color) => ({
  width: '92px',
  height: '92px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: selected ? theme.colors.bgCard : theme.colors.bgCard + 'CC',
  border: selected ? `4px solid ${color}` : `3px solid ${theme.colors.border}`,
  boxShadow: selected
    ? `0 8px 20px ${color}40, 0 0 0 6px ${color}15`
    : `0 3px 10px ${theme.colors.shadow}`,
  transition: 'all 0.25s ease',
  transform: selected ? 'scale(1.05)' : 'scale(1)',
  '@media (max-width: 600px)': {
    width: '76px',
    height: '76px',
  },
})

export const moodEmoji = { fontSize: '36px' }

export const moodImage = {
  width: '68px',
  height: '68px',
  objectFit: 'contain',
  display: 'block',
  pointerEvents: 'none',
  '@media (max-width: 600px)': {
    width: '56px',
    height: '56px',
  },
}

export const moodLabel = (selected, color) => ({
  fontSize: '13px',
  fontWeight: 700,
  color: selected ? color : theme.colors.textLight,
})

export const textarea = {
  width: '100%',
  padding: '12px 16px',
  borderRadius: theme.radii.sm,
  border: `2px solid ${theme.colors.border}`,
  background: theme.colors.bgCard,
  fontSize: '14px',
  outline: 'none',
  resize: 'vertical',
  marginBottom: theme.spacing.md,
  transition: 'all 0.2s',
  fontFamily: 'inherit',
  '&:focus': {
    borderColor: theme.colors.primary,
    boxShadow: `0 0 0 4px ${theme.colors.primaryLight}30`,
  },
}

export const saveWrap = { textAlign: 'center' }

export const saveBtn = (canSave) => ({
  width: '100%',
  padding: '16px',
  background: canSave
    ? `linear-gradient(135deg, ${theme.colors.secondaryDark} 0%, ${theme.colors.dangerDark} 100%)`
    : theme.colors.border,
  color: theme.colors.textWhite,
  border: 'none',
  borderRadius: theme.radii.full,
  fontSize: '17px',
  fontWeight: 800,
  cursor: canSave ? 'pointer' : 'not-allowed',
  boxShadow: canSave ? `0 6px 16px ${theme.colors.shadowWarm}` : 'none',
  transition: 'all 0.2s',
  fontFamily: 'inherit',
  letterSpacing: '0.5px',
  '&:hover': canSave ? { transform: 'translateY(-2px)' } : {},
})

export const historyCard = {
  background: theme.colors.bgCard,
  borderRadius: theme.radii.lg,
  padding: theme.spacing.lg,
  boxShadow: `0 4px 12px ${theme.colors.shadow}`,
  border: `2px solid ${theme.colors.border}`,
}

export const historyTitle = {
  fontSize: '18px',
  fontWeight: 800,
  fontFamily: theme.fonts.heading,
  color: theme.colors.primaryDark,
  marginBottom: theme.spacing.md,
}

export const emptyText = { color: theme.colors.textLight, fontSize: '14px' }

export const historyList = {
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing.sm,
}

export const entry = (color) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing.md,
  padding: '14px',
  borderRadius: theme.radii.md,
  background: theme.colors.bgSoft,
  borderLeft: `5px solid ${color || theme.colors.border}`,
  transition: 'transform 0.2s',
  '&:hover': { transform: 'translateX(4px)' },
})

export const entryEmoji = { fontSize: '28px' }

export const entryImage = {
  width: '44px',
  height: '44px',
  objectFit: 'contain',
  flexShrink: 0,
  pointerEvents: 'none',
}
export const entryText = { flex: 1 }
export const entryLabel = {
  fontWeight: 700,
  fontSize: '14px',
  color: theme.colors.primaryDark,
}
export const entryNote = {
  fontSize: '13px',
  color: theme.colors.text,
  marginTop: '2px',
}
export const entryDate = {
  fontSize: '12px',
  color: theme.colors.textLight,
  fontWeight: 600,
}

export const loading = { padding: theme.spacing.xl, color: theme.colors.textLight }
