// src/pages/HabitGuide.styles.js
import theme from '../styles/theme'

export const hero = {
  background: theme.gradients.sunny,
  borderRadius: theme.radii.xl,
  padding: `${theme.spacing.xxl} ${theme.spacing.xl}`,
  marginBottom: theme.spacing.xl,
  textAlign: 'center',
  border: `3px solid ${theme.colors.accent}`,
  boxShadow: `0 6px 20px ${theme.colors.shadowWarm}`,
  position: 'relative',
  overflow: 'hidden',
}

export const heroDeco = (top, left, size, opacity) => ({
  position: 'absolute',
  top, left,
  fontSize: `${size}px`,
  opacity,
})

export const heroEmoji = {
  fontSize: '72px',
  marginBottom: theme.spacing.md,
  position: 'relative',
}

export const heroTitle = {
  fontSize: 'clamp(26px, 5vw, 36px)',
  fontWeight: 800,
  fontFamily: theme.fonts.heading,
  marginBottom: theme.spacing.sm,
  color: theme.colors.primaryDark,
  position: 'relative',
}

export const heroSubtitle = {
  fontSize: '16px',
  color: theme.colors.text,
  maxWidth: '600px',
  margin: '0 auto',
  lineHeight: 1.6,
  fontWeight: 500,
  position: 'relative',
}

export const section = { marginBottom: theme.spacing.xxl }

export const sectionHeader = {
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing.sm,
  marginBottom: theme.spacing.lg,
}

export const sectionEmoji = { fontSize: '32px' }

export const sectionTitle = {
  fontSize: 'clamp(22px, 4vw, 26px)',
  fontWeight: 800,
  fontFamily: theme.fonts.heading,
  color: theme.colors.primaryDark,
}

export const sectionSubtitle = {
  color: theme.colors.textLight,
  marginBottom: theme.spacing.lg,
  fontSize: '14px',
  fontWeight: 500,
}

export const grid3 = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
  gap: theme.spacing.md,
}

export const grid4 = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
  gap: theme.spacing.md,
}

export const benefitCard = (color) => ({
  background: theme.colors.bgCard,
  borderRadius: theme.radii.lg,
  padding: theme.spacing.lg,
  boxShadow: `0 4px 12px ${theme.colors.shadow}`,
  border: `2px solid ${theme.colors.border}`,
  borderTop: `5px solid ${color}`,
  transition: 'all 0.2s',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: `0 8px 20px ${theme.colors.shadowStrong}`,
  },
})

export const benefitIcon = (color) => ({
  width: '48px',
  height: '48px',
  borderRadius: theme.radii.md,
  background: `${color}25`,
  color: color,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '22px',
  marginBottom: theme.spacing.md,
})

export const benefitTitle = {
  fontSize: '16px',
  fontWeight: 800,
  fontFamily: theme.fonts.heading,
  color: theme.colors.primaryDark,
  marginBottom: '6px',
}

export const benefitDesc = {
  fontSize: '13px',
  color: theme.colors.text,
  lineHeight: 1.5,
}

export const tipCard = {
  background: theme.colors.bgCard,
  borderRadius: theme.radii.lg,
  padding: theme.spacing.lg,
  boxShadow: `0 4px 12px ${theme.colors.shadow}`,
  border: `2px solid ${theme.colors.border}`,
  position: 'relative',
  overflow: 'hidden',
  transition: 'transform 0.2s',
  '&:hover': { transform: 'translateY(-3px)' },
}

export const tipBigNumber = {
  position: 'absolute',
  top: '-15px',
  right: '-5px',
  fontSize: '110px',
  fontWeight: 900,
  fontFamily: theme.fonts.heading,
  color: `${theme.colors.primary}15`,
  lineHeight: 1,
  pointerEvents: 'none',
}

export const tipEmoji = {
  fontSize: '40px',
  marginBottom: theme.spacing.sm,
  position: 'relative',
}

export const tipTitle = {
  fontSize: '17px',
  fontWeight: 800,
  fontFamily: theme.fonts.heading,
  color: theme.colors.primaryDark,
  marginBottom: '8px',
  position: 'relative',
}

export const tipText = {
  fontSize: '13px',
  color: theme.colors.text,
  lineHeight: 1.6,
  position: 'relative',
}

export const starterCard = (bgColor, color) => ({
  background: bgColor,
  borderRadius: theme.radii.lg,
  padding: theme.spacing.lg,
  border: `3px solid ${color}40`,
  transition: 'transform 0.2s',
  '&:hover': { transform: 'translateY(-3px)' },
})

export const starterHeader = {
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing.sm,
  marginBottom: theme.spacing.md,
}

export const starterIcon = (color) => ({
  width: '44px',
  height: '44px',
  borderRadius: theme.radii.full,
  background: color,
  color: theme.colors.textWhite,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '20px',
  boxShadow: `0 3px 8px ${color}60`,
})

export const starterTitle = (color) => ({
  fontSize: '20px',
  fontWeight: 800,
  fontFamily: theme.fonts.heading,
  color: color,
})

export const starterList = {
  listStyle: 'none',
  padding: 0,
  margin: 0,
}

export const starterItem = (color, isLast) => ({
  display: 'flex',
  alignItems: 'start',
  gap: '10px',
  padding: '10px 0',
  fontSize: '14px',
  color: theme.colors.text,
  lineHeight: 1.4,
  fontWeight: 500,
  borderBottom: isLast ? 'none' : `1px solid ${color}25`,
})

export const starterCheck = (color) => ({
  color,
  fontWeight: 800,
  marginTop: '2px',
})

export const vision = {
  background: theme.gradients.forestSky,
  borderRadius: theme.radii.xl,
  padding: theme.spacing.xxl,
  color: theme.colors.textWhite,
  marginBottom: theme.spacing.xxl,
  textAlign: 'center',
  boxShadow: `0 8px 24px ${theme.colors.shadow}`,
  position: 'relative',
  overflow: 'hidden',
}

export const visionDecoTL = {
  position: 'absolute', top: '15%', left: '10%',
  fontSize: '48px', opacity: 0.15,
}
export const visionDecoBR = {
  position: 'absolute', bottom: '15%', right: '10%',
  fontSize: '56px', opacity: 0.15,
}

export const visionEmoji = {
  fontSize: '56px',
  marginBottom: theme.spacing.md,
  position: 'relative',
}

export const visionTitle = {
  fontSize: '28px',
  fontWeight: 800,
  fontFamily: theme.fonts.heading,
  marginBottom: theme.spacing.md,
  color: theme.colors.accent,
  position: 'relative',
}

export const visionText = {
  fontSize: '16px',
  opacity: 0.95,
  maxWidth: '600px',
  margin: '0 auto',
  lineHeight: 1.7,
  position: 'relative',
}

export const visionAccent = { color: theme.colors.accent }

export const cta = {
  textAlign: 'center',
  padding: theme.spacing.xxl,
  background: theme.colors.bgCard,
  borderRadius: theme.radii.xl,
  boxShadow: `0 6px 20px ${theme.colors.shadow}`,
  border: `3px dashed ${theme.colors.primaryLight}`,
}

export const ctaEmoji = {
  fontSize: '64px',
  marginBottom: theme.spacing.md,
}

export const ctaTitle = {
  fontSize: '26px',
  fontWeight: 800,
  fontFamily: theme.fonts.heading,
  color: theme.colors.primaryDark,
  marginBottom: theme.spacing.sm,
}

export const ctaSubtitle = {
  color: theme.colors.textLight,
  marginBottom: theme.spacing.lg,
  fontSize: '15px',
}

export const ctaBtn = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  padding: '16px 36px',
  background: theme.gradients.sage,
  color: theme.colors.textWhite,
  borderRadius: theme.radii.full,
  fontSize: '17px',
  fontWeight: 800,
  boxShadow: `0 6px 20px ${theme.colors.shadow}`,
  transition: 'all 0.2s',
  '&:hover': {
    transform: 'translateY(-3px) scale(1.02)',
    boxShadow: `0 8px 24px ${theme.colors.shadowStrong}`,
  },
}
