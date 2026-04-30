// src/pages/Accessories.styles.js
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

export const summaryGrid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: theme.spacing.md,
  marginBottom: theme.spacing.xl,
}

export const summaryCard = (accent) => ({
  background: theme.colors.bgCard,
  borderRadius: theme.radii.lg,
  padding: theme.spacing.lg,
  textAlign: 'center',
  boxShadow: `0 4px 12px ${theme.colors.shadow}`,
  border: `3px solid ${accent}`,
})

export const summaryEmoji = { fontSize: '32px', marginBottom: '4px' }
export const summaryValue = {
  fontSize: '24px',
  fontWeight: 800,
  fontFamily: theme.fonts.heading,
  color: theme.colors.primaryDark,
}
export const summaryLabel = { fontSize: '13px', color: theme.colors.textLight, fontWeight: 600 }

export const sectionWrap = { marginBottom: theme.spacing.xxl }

export const sectionHeading = {
  fontSize: '24px',
  fontWeight: 800,
  fontFamily: theme.fonts.heading,
  color: theme.colors.primaryDark,
  marginBottom: theme.spacing.md,
}

export const puppyHint = {
  fontSize: '13px',
  fontWeight: 500,
  color: theme.colors.warning,
  marginLeft: '10px',
}

export const puppyMsg = {
  background: theme.colors.bgWarm,
  borderRadius: theme.radii.md,
  padding: theme.spacing.lg,
  textAlign: 'center',
  color: theme.colors.text,
  fontSize: '14px',
  border: `2px dashed ${theme.colors.secondary}`,
}

export const grid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
  gap: theme.spacing.lg,
}

export const card = (equipped, unlocked) => ({
  background: theme.colors.bgCard,
  borderRadius: theme.radii.lg,
  padding: theme.spacing.lg,
  boxShadow: `0 4px 12px ${theme.colors.shadow}`,
  opacity: unlocked ? 1 : 0.9,
  border: equipped ? `3px solid ${theme.colors.primary}` : `2px solid ${theme.colors.border}`,
  transition: 'all 0.2s',
  textAlign: 'center',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: `0 6px 16px ${theme.colors.shadowStrong}`,
  },
})

export const imageBox = {
  width: '180px',
  height: '180px',
  margin: '0 auto 12px',
  background: theme.gradients.warmSky,
  borderRadius: theme.radii.md,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  padding: theme.spacing.md,
  position: 'relative',
  border: `2px solid ${theme.colors.border}`,
}

export const image = (unlocked) => ({
  width: '100%',
  height: '100%',
  objectFit: 'contain',
  filter: unlocked ? 'none' : 'grayscale(100%) brightness(0.7)',
  opacity: unlocked ? 1 : 0.5,
  transition: 'all 0.2s',
})

export const lockOverlay = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  fontSize: '48px',
  filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.4))',
}

export const itemName = {
  fontSize: '17px',
  fontWeight: 700,
  fontFamily: theme.fonts.heading,
  color: theme.colors.primaryDark,
  marginBottom: '4px',
}

export const itemDesc = {
  fontSize: '13px',
  color: theme.colors.textLight,
  marginBottom: '12px',
}

export const equipBtn = (equipped) => ({
  padding: '10px 24px',
  background: equipped ? theme.colors.danger : theme.gradients.sage,
  color: theme.colors.textWhite,
  border: 'none',
  borderRadius: theme.radii.full,
  fontSize: '13px',
  fontWeight: 700,
  cursor: 'pointer',
  boxShadow: `0 3px 8px ${theme.colors.shadow}`,
  transition: 'all 0.2s',
  fontFamily: 'inherit',
  '&:hover': { transform: 'translateY(-2px)' },
})

export const lockedChip = {
  display: 'inline-block',
  padding: '6px 14px',
  background: theme.colors.bgSoft,
  borderRadius: theme.radii.full,
  fontSize: '12px',
  color: theme.colors.textLight,
  fontWeight: 600,
}

export const loading = { padding: theme.spacing.xl, color: theme.colors.textLight }
