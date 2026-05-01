// src/pages/Wellness.styles.js
import theme from '../styles/theme'

export const hero = {
  background: `linear-gradient(135deg, #A1DD7025 0%, #F9C0AB25 100%)`,
  borderRadius: theme.radii.xl,
  padding: `${theme.spacing.xxl} ${theme.spacing.xl}`,
  marginBottom: theme.spacing.xl,
  textAlign: 'center',
  border: `3px solid ${theme.colors.primaryLight}`,
  boxShadow: `0 6px 20px ${theme.colors.shadow}`,
  position: 'relative',
  overflow: 'hidden',
}

export const deco = (top, left, size, opacity) => ({
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
  maxWidth: '640px',
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

export const grid = (minmax) => ({
  display: 'grid',
  gridTemplateColumns: `repeat(auto-fit, minmax(${minmax}, 1fr))`,
  gap: theme.spacing.md,
})

// Time management card
export const timeCard = (bgColor, color) => ({
  background: bgColor,
  borderRadius: theme.radii.lg,
  padding: theme.spacing.lg,
  border: `3px solid ${color}40`,
  transition: 'transform 0.2s',
  '&:hover': { transform: 'translateY(-4px)' },
})

export const timeCardHeader = {
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing.sm,
  marginBottom: theme.spacing.md,
}

export const timeCardEmoji = { fontSize: '44px' }

export const timeCardTitle = (color) => ({
  fontSize: '18px',
  fontWeight: 800,
  fontFamily: theme.fonts.heading,
  color: color,
})

export const timeCardDesc = {
  fontSize: '14px',
  color: theme.colors.text,
  lineHeight: 1.5,
  marginBottom: theme.spacing.sm,
  fontWeight: 500,
}

export const timeCardBest = (color) => ({
  fontSize: '11px',
  fontWeight: 700,
  color: color,
  padding: '5px 12px',
  background: `${color}20`,
  borderRadius: theme.radii.full,
  display: 'inline-block',
})

// Daily routine
export const routineCard = (color) => ({
  background: theme.colors.bgCard,
  borderRadius: theme.radii.lg,
  padding: theme.spacing.lg,
  boxShadow: `0 4px 12px ${theme.colors.shadow}`,
  borderLeft: `6px solid ${color}`,
  border: `2px solid ${theme.colors.border}`,
  borderLeftColor: color,
  transition: 'transform 0.2s',
  '&:hover': { transform: 'translateY(-3px)' },
})

export const routineHeader = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  marginBottom: theme.spacing.md,
}

export const routineEmoji = { fontSize: '36px' }

export const routineTitle = (color) => ({
  fontSize: '20px',
  fontWeight: 800,
  fontFamily: theme.fonts.heading,
  color: color,
})

export const list = { listStyle: 'none', padding: 0, margin: 0 }

export const routineItem = (isLast) => ({
  display: 'flex',
  alignItems: 'start',
  gap: '10px',
  padding: '10px 0',
  fontSize: '14px',
  lineHeight: 1.5,
  color: theme.colors.text,
  fontWeight: 500,
  borderBottom: isLast ? 'none' : `1px dashed ${theme.colors.border}`,
})

export const routineIcon = { fontSize: '18px', flexShrink: 0 }

// Pillars
export const pillarCard = (bgColor, color) => ({
  background: bgColor,
  borderRadius: theme.radii.lg,
  padding: theme.spacing.lg,
  border: `3px solid ${color}40`,
  transition: 'transform 0.2s',
  '&:hover': { transform: 'translateY(-3px)' },
})

export const pillarHead = { textAlign: 'center', marginBottom: theme.spacing.md }
export const pillarEmoji = { fontSize: '52px', marginBottom: '6px' }

export const pillarTitle = (color) => ({
  fontSize: '20px',
  fontWeight: 800,
  fontFamily: theme.fonts.heading,
  color,
})

export const pillarItem = (color) => ({
  display: 'flex',
  alignItems: 'start',
  gap: '8px',
  padding: '6px 0',
  fontSize: '13px',
  color: theme.colors.text,
  lineHeight: 1.4,
  fontWeight: 500,
})

export const pillarBullet = (color) => ({
  color,
  fontWeight: 800,
  marginTop: '2px',
})

// Stress relief
export const reliefCard = {
  background: theme.colors.bgCard,
  borderRadius: theme.radii.lg,
  padding: theme.spacing.lg,
  boxShadow: `0 4px 12px ${theme.colors.shadow}`,
  border: `2px solid ${theme.colors.border}`,
  textAlign: 'center',
  transition: 'all 0.2s',
  '&:hover': {
    transform: 'translateY(-4px)',
    borderColor: theme.colors.primaryLight,
    boxShadow: `0 6px 16px ${theme.colors.shadowStrong}`,
  },
}

export const reliefEmoji = { fontSize: '44px', marginBottom: theme.spacing.sm }

export const reliefTitle = {
  fontSize: '15px',
  fontWeight: 800,
  fontFamily: theme.fonts.heading,
  color: theme.colors.primaryDark,
  marginBottom: '4px',
}

export const reliefText = {
  fontSize: '12px',
  color: theme.colors.text,
  lineHeight: 1.5,
}

// Tailored tips
export const tailoredCard = (borderColor) => ({
  background: theme.colors.bgCard,
  borderRadius: theme.radii.lg,
  padding: theme.spacing.xl,
  boxShadow: `0 4px 12px ${theme.colors.shadow}`,
  borderTop: `5px solid ${borderColor}`,
  border: `2px solid ${theme.colors.border}`,
  borderTopColor: borderColor,
})

export const tailoredHeader = {
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing.sm,
  marginBottom: theme.spacing.md,
}

export const tailoredEmoji = { fontSize: '36px' }

export const tailoredTitle = {
  fontSize: '20px',
  fontWeight: 800,
  fontFamily: theme.fonts.heading,
  color: theme.colors.primaryDark,
}

export const tailoredItem = (isLast) => ({
  display: 'flex',
  alignItems: 'start',
  gap: '10px',
  padding: '12px 0',
  fontSize: '14px',
  lineHeight: 1.5,
  color: theme.colors.text,
  fontWeight: 500,
  borderBottom: isLast ? 'none' : `1px solid ${theme.colors.border}`,
})

export const tailoredIcon = { fontSize: '22px', flexShrink: 0 }

// CTA
export const cta = {
  textAlign: 'center',
  padding: theme.spacing.xxl,
  background: theme.gradients.sunny,
  borderRadius: theme.radii.xl,
  border: `3px solid ${theme.colors.accent}`,
  boxShadow: `0 6px 20px ${theme.colors.shadowWarm}`,
}

export const ctaEmoji = { fontSize: '56px', marginBottom: theme.spacing.md }

export const ctaTitle = {
  fontSize: '24px',
  fontWeight: 800,
  fontFamily: theme.fonts.heading,
  color: theme.colors.primaryDark,
  marginBottom: theme.spacing.sm,
}

export const ctaText = {
  color: theme.colors.text,
  marginBottom: theme.spacing.lg,
  fontSize: '15px',
  maxWidth: '520px',
  margin: `0 auto ${theme.spacing.lg}`,
  fontWeight: 500,
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
