// src/pages/Achievements.styles.js
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

export const progressCard = {
  background: theme.colors.bgCard,
  borderRadius: theme.radii.lg,
  padding: theme.spacing.lg,
  boxShadow: `0 4px 12px ${theme.colors.shadow}`,
  border: `3px solid ${theme.colors.accent}`,
  marginBottom: theme.spacing.xl,
}

export const progressHeader = {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '10px',
  fontSize: '15px',
}

export const progressTitle = {
  fontWeight: 700,
  color: theme.colors.primaryDark,
  fontFamily: theme.fonts.heading,
}

export const progressPercent = { color: theme.colors.textLight, fontWeight: 600 }

export const progressTrack = {
  height: '16px',
  background: theme.colors.bgSoft,
  borderRadius: theme.radii.full,
  overflow: 'hidden',
  border: `2px solid ${theme.colors.border}`,
}

export const progressFill = (percent) => ({
  height: '100%',
  width: `${percent}%`,
  background: theme.gradients.sunny,
  borderRadius: theme.radii.full,
  transition: 'width 0.6s ease',
  boxShadow: percent > 0 ? `0 0 10px ${theme.colors.accent}80` : 'none',
})

export const grid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
  gap: theme.spacing.md,
}

export const card = (earned, badgeColor) => ({
  background: earned ? theme.colors.bgCard : theme.colors.bgSoft,
  borderRadius: theme.radii.lg,
  padding: theme.spacing.lg,
  boxShadow: `0 4px 12px ${theme.colors.shadow}`,
  opacity: earned ? 1 : 0.7,
  border: earned
    ? `3px solid ${badgeColor || theme.colors.primary}`
    : `2px solid ${theme.colors.border}`,
  position: 'relative',
  overflow: 'hidden',
  transition: 'transform 0.2s',
  '&:hover': { transform: 'translateY(-3px)' },
})

export const earnedBadge = (color) => ({
  position: 'absolute',
  top: 0,
  right: 0,
  background: color || theme.colors.primary,
  color: theme.colors.textWhite,
  fontSize: '10px',
  fontWeight: 800,
  padding: '5px 14px',
  borderBottomLeftRadius: theme.radii.sm,
})

export const cardContent = { display: 'flex', gap: theme.spacing.md, alignItems: 'start' }

export const iconCircle = (earned, badgeColor) => ({
  width: '56px',
  height: '56px',
  borderRadius: theme.radii.full,
  background: earned ? `${badgeColor || theme.colors.primary}30` : theme.colors.bg,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '28px',
  flexShrink: 0,
  border: `2px solid ${earned ? badgeColor || theme.colors.primary : theme.colors.border}`,
})

export const details = { flex: 1 }

export const name = {
  fontSize: '16px',
  fontWeight: 700,
  fontFamily: theme.fonts.heading,
  color: theme.colors.primaryDark,
  marginBottom: '4px',
}

export const desc = {
  fontSize: '13px',
  color: theme.colors.text,
  marginBottom: '8px',
  lineHeight: 1.5,
}

export const tags = {
  display: 'flex',
  gap: theme.spacing.sm,
  fontSize: '11px',
  flexWrap: 'wrap',
}

export const requirement = {
  background: theme.colors.bgSoft,
  padding: '4px 10px',
  borderRadius: theme.radii.full,
  color: theme.colors.textLight,
  fontWeight: 600,
}

export const xp = {
  background: theme.colors.accent + '60',
  padding: '4px 10px',
  borderRadius: theme.radii.full,
  color: theme.colors.primaryDark,
  fontWeight: 700,
}

export const earnedAt = {
  fontSize: '11px',
  color: theme.colors.textLight,
  marginTop: '10px',
  textAlign: 'right',
  fontWeight: 600,
}

export const loading = { padding: theme.spacing.xl, color: theme.colors.textLight }
