// src/pages/auth.styles.js
// Shared styles for Login + Signup
import theme from '../styles/theme'

export const page = {
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: theme.gradients.warmSky,
  padding: theme.spacing.lg,
  position: 'relative',
  overflow: 'hidden',
}

export const decorTL = { position: 'absolute', top: '8%',  left: '10%', fontSize: '48px', opacity: 0.3 }
export const decorTR = { position: 'absolute', top: '15%', right: '8%', fontSize: '40px', opacity: 0.35 }
export const decorBL = { position: 'absolute', bottom: '12%', left: '6%',  fontSize: '52px', opacity: 0.3 }
export const decorBR = { position: 'absolute', bottom: '10%', right: '12%', fontSize: '44px', opacity: 0.3 }

export const card = (borderColor) => ({
  width: '100%',
  maxWidth: '480px',
  background: theme.colors.bgCard,
  borderRadius: theme.radii.xl,
  padding: theme.spacing.xxl,
  boxShadow: `0 12px 40px ${theme.colors.shadowStrong}`,
  border: `3px solid ${borderColor}`,
  position: 'relative',
  zIndex: 1,
})

export const header = {
  textAlign: 'center',
  marginBottom: theme.spacing.xl,
}

export const headerEmoji = {
  fontSize: '56px',
  marginBottom: theme.spacing.sm,
}

export const headerImage = {
  width: '96px',
  height: '96px',
  objectFit: 'contain',
  display: 'block',
  margin: `0 auto ${theme.spacing.sm}`,
  filter: `drop-shadow(0 6px 12px ${theme.colors.shadowWarm})`,
  '@media (max-width: 600px)': {
    width: '80px',
    height: '80px',
  },
}

// For when the puppy sits next to the sparkle emoji (Signup page)
// No auto-margin — it stays tight next to its sibling inside the flex wrapper
export const headerImageInline = {
  width: '96px',
  height: '96px',
  objectFit: 'contain',
  display: 'block',
  filter: `drop-shadow(0 6px 12px ${theme.colors.shadowWarm})`,
  '@media (max-width: 600px)': {
    width: '80px',
    height: '80px',
  },
}

// Center wrapper — ensures the inline-flex group sits in the middle of the card
export const headerImageCenter = {
  display: 'flex',
  justifyContent: 'center',
  marginBottom: theme.spacing.sm,
}

// Wrapper for the signup header (puppy + sparkle side by side, tight together)
export const headerImageWrap = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing.sm,
  marginBottom: theme.spacing.sm,
  width: 'auto',
}

export const headerSparkle = {
  fontSize: '40px',
  display: 'inline-block',
  flexShrink: 0,
  animation: 'sparkle 2s ease-in-out infinite',
  '@keyframes sparkle': {
    '0%, 100%': { transform: 'scale(1) rotate(0deg)', opacity: 0.9 },
    '50%':      { transform: 'scale(1.15) rotate(15deg)', opacity: 1 },
  },
}

// Small puppy icon to use inline in labels (e.g. "Name Your Puppy 🐶")
export const labelIcon = {
  width: '20px',
  height: '20px',
  objectFit: 'contain',
  verticalAlign: 'middle',
  marginLeft: '4px',
  display: 'inline-block',
}

export const title = {
  fontSize: '30px',
  fontWeight: 800,
  fontFamily: theme.fonts.heading,
  color: theme.colors.primaryDark,
}

export const subtitle = {
  color: theme.colors.textLight,
  marginTop: '8px',
  fontSize: '14px',
}

export const errorBox = {
  background: theme.colors.danger + '20',
  color: theme.colors.dangerDark,
  padding: '12px 16px',
  borderRadius: theme.radii.sm,
  fontSize: '14px',
  marginBottom: theme.spacing.md,
  border: `2px solid ${theme.colors.danger}40`,
}

export const fieldGroup = {
  marginBottom: theme.spacing.md,
}

export const fieldGroupLast = {
  marginBottom: theme.spacing.lg,
}

export const label = {
  display: 'block',
  marginBottom: '6px',
  fontSize: '14px',
  fontWeight: 700,
  color: theme.colors.primaryDark,
}

export const input = {
  width: '100%',
  padding: '12px 16px',
  borderRadius: theme.radii.sm,
  border: `2px solid ${theme.colors.border}`,
  fontSize: '15px',
  outline: 'none',
  background: theme.colors.bgCard,
  transition: 'all 0.2s',
  fontFamily: 'inherit',
  '&:focus': {
    borderColor: theme.colors.primary,
    boxShadow: `0 0 0 4px ${theme.colors.primaryLight}30`,
  },
}

export const twoColGrid = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: theme.spacing.md,
  marginBottom: theme.spacing.md,
  '@media (max-width: 500px)': {
    gridTemplateColumns: '1fr',
  },
}

export const submitBtn = {
  width: '100%',
  padding: '14px',
  background: theme.gradients.sage,
  color: theme.colors.textWhite,
  border: 'none',
  borderRadius: theme.radii.full,
  fontSize: '16px',
  fontWeight: 800,
  boxShadow: `0 6px 16px ${theme.colors.shadow}`,
  transition: 'all 0.2s',
  fontFamily: 'inherit',
  cursor: 'pointer',
  '&:hover': { transform: 'translateY(-2px)' },
  '&:disabled': { cursor: 'not-allowed', opacity: 0.7 },
}

export const footerText = {
  textAlign: 'center',
  marginTop: theme.spacing.lg,
  fontSize: '14px',
  color: theme.colors.textLight,
}

export const footerLink = {
  color: theme.colors.primary,
  fontWeight: 700,
}

export const pwErrors = {
  marginTop: '8px',
  fontSize: '12px',
}

export const pwError = {
  color: theme.colors.danger,
  display: 'block',
}

export const pwOk = {
  fontSize: '12px',
  color: theme.colors.primaryDark,
  display: 'block',
  marginTop: '8px',
  fontWeight: 700,
}
