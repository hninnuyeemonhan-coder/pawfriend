// src/pages/Profile.styles.js
import theme from '../styles/theme'

export const page = { width: '100%' }

export const title = {
  fontSize: 'clamp(22px, 5vw, 32px)',
  fontWeight: 800,
  fontFamily: theme.fonts.heading,
  color: theme.colors.primaryDark,
  marginBottom: theme.spacing.xl,
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
}

export const profileCard = {
  background: theme.gradients.sunny,
  borderRadius: theme.radii.lg,
  padding: theme.spacing.xl,
  boxShadow: `0 6px 20px ${theme.colors.shadowWarm}`,
  marginBottom: theme.spacing.xl,
  border: `3px solid ${theme.colors.accent}`,
}

export const cardRow = {
  display: 'flex',
  gap: theme.spacing.xl,
  alignItems: 'start',
  flexWrap: 'wrap',
}

export const avatarWrap = { position: 'relative' }

export const avatar = {
  width: '110px',
  height: '110px',
  borderRadius: theme.radii.full,
  background: theme.gradients.sage,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  fontSize: '44px',
  color: theme.colors.textWhite,
  border: `4px solid ${theme.colors.bgCard}`,
  boxShadow: `0 6px 16px ${theme.colors.shadow}`,
  fontFamily: theme.fonts.heading,
  fontWeight: 800,
}

export const avatarImg = { width: '100%', height: '100%', objectFit: 'cover' }

export const cameraBadge = {
  position: 'absolute',
  bottom: 0,
  right: 0,
  width: '36px',
  height: '36px',
  borderRadius: theme.radii.full,
  background: theme.colors.primary,
  color: theme.colors.textWhite,
  border: `3px solid ${theme.colors.bgCard}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  transition: 'transform 0.2s',
  '&:hover': { transform: 'scale(1.1)' },
}

export const hiddenInput = { display: 'none' }

export const info = { flex: 1, minWidth: '260px' }

export const editFormRow = {
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing.md,
}

export const editLabel = {
  fontSize: '12px',
  fontWeight: 700,
  color: theme.colors.primaryDark,
}

export const input = {
  width: '100%',
  padding: '10px 14px',
  borderRadius: theme.radii.sm,
  border: `2px solid ${theme.colors.border}`,
  background: theme.colors.bgCard,
  fontSize: '14px',
  outline: 'none',
  transition: 'all 0.2s',
  fontFamily: 'inherit',
  '&:focus': {
    borderColor: theme.colors.primary,
    boxShadow: `0 0 0 4px ${theme.colors.primaryLight}30`,
  },
}

export const btnRow = { display: 'flex', gap: theme.spacing.sm }

export const saveBtn = {
  padding: '10px 20px',
  background: theme.gradients.sage,
  color: theme.colors.textWhite,
  border: 'none',
  borderRadius: theme.radii.full,
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
  fontSize: '14px',
  fontWeight: 700,
  boxShadow: `0 3px 8px ${theme.colors.shadow}`,
  fontFamily: 'inherit',
}

export const cancelBtn = {
  padding: '10px 20px',
  background: theme.colors.bgCard,
  border: `2px solid ${theme.colors.border}`,
  borderRadius: theme.radii.full,
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
  fontSize: '14px',
  fontWeight: 700,
  color: theme.colors.text,
  fontFamily: 'inherit',
}

export const viewHeader = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'start',
  flexWrap: 'wrap',
  gap: theme.spacing.sm,
}

export const name = {
  fontSize: '24px',
  fontWeight: 800,
  fontFamily: theme.fonts.heading,
  color: theme.colors.primaryDark,
}

export const username = {
  color: theme.colors.textLight,
  fontSize: '14px',
  fontWeight: 600,
}

export const editBtn = {
  padding: '8px 16px',
  background: theme.colors.bgCard,
  border: `2px solid ${theme.colors.primary}`,
  borderRadius: theme.radii.full,
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
  fontSize: '13px',
  fontWeight: 700,
  color: theme.colors.primaryDark,
  transition: 'all 0.2s',
  fontFamily: 'inherit',
  '&:hover': { background: theme.colors.primary, color: theme.colors.textWhite },
}

export const contact = {
  marginTop: theme.spacing.md,
  fontSize: '14px',
  color: theme.colors.text,
}

export const contactLine = { fontWeight: 600 }
export const memberSince = {
  marginTop: '8px',
  fontSize: '13px',
  color: theme.colors.textLight,
  fontWeight: 600,
}

export const statsGrid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: theme.spacing.md,
  marginBottom: theme.spacing.xl,
  '@media (max-width: 600px)': {
    gap: theme.spacing.sm,
  },
}

export const statCard = (accent) => ({
  background: theme.colors.bgCard,
  borderRadius: theme.radii.lg,
  padding: theme.spacing.lg,
  textAlign: 'center',
  boxShadow: `0 4px 12px ${theme.colors.shadow}`,
  border: `3px solid ${accent}`,
  transition: 'transform 0.2s',
  '&:hover': { transform: 'translateY(-3px)' },
})

export const statEmoji = { fontSize: '32px', marginBottom: '4px' }
export const statValue = {
  fontSize: '22px',
  fontWeight: 800,
  fontFamily: theme.fonts.heading,
  color: theme.colors.primaryDark,
}
export const statLabel = { fontSize: '12px', color: theme.colors.textLight, fontWeight: 600 }

export const habitsCard = {
  background: theme.colors.bgCard,
  borderRadius: theme.radii.lg,
  padding: theme.spacing.lg,
  boxShadow: `0 4px 12px ${theme.colors.shadow}`,
  border: `2px solid ${theme.colors.border}`,
}

export const habitsTitle = {
  fontSize: '18px',
  fontWeight: 800,
  fontFamily: theme.fonts.heading,
  color: theme.colors.primaryDark,
  marginBottom: theme.spacing.md,
}

export const habitsList = {
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing.sm,
}

export const habitRow = (color) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing.md,
  padding: '12px 14px',
  borderRadius: theme.radii.md,
  background: theme.colors.bgSoft,
  borderLeft: `5px solid ${color || theme.colors.primary}`,
  transition: 'transform 0.2s',
  '&:hover': { transform: 'translateX(4px)' },
})

export const habitTitle = {
  flex: 1,
  fontSize: '14px',
  fontWeight: 700,
  color: theme.colors.text,
}

export const habitFreq = {
  fontSize: '12px',
  color: theme.colors.primaryDark,
  background: theme.colors.primaryLight + '40',
  padding: '4px 10px',
  borderRadius: theme.radii.full,
  textTransform: 'capitalize',
  fontWeight: 700,
}

export const loading = { padding: theme.spacing.xl, color: theme.colors.textLight }
export const emptyText = { color: theme.colors.textLight, fontSize: '14px' }
