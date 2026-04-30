// src/pages/Landing.styles.js
import theme from '../styles/theme'

export const page = {
  minHeight: '100vh',
  background: theme.gradients.warmSky,
  color: theme.colors.text,
  position: 'relative',
  overflow: 'hidden',
}

export const decorWrap = {
  position: 'absolute',
  inset: 0,
  pointerEvents: 'none',
  overflow: 'hidden',
}

export const decorCircle1 = {
  position: 'absolute', top: '-10%', left: '-5%',
  width: '400px', height: '400px', borderRadius: '50%',
  background: `radial-gradient(circle, ${theme.colors.secondary}30 0%, transparent 70%)`,
}

export const decorCircle2 = {
  position: 'absolute', top: '20%', right: '-5%',
  width: '500px', height: '500px', borderRadius: '50%',
  background: `radial-gradient(circle, ${theme.colors.accent}40 0%, transparent 70%)`,
}

export const decorCircle3 = {
  position: 'absolute', bottom: '-10%', left: '30%',
  width: '450px', height: '450px', borderRadius: '50%',
  background: `radial-gradient(circle, ${theme.colors.primaryLight}30 0%, transparent 70%)`,
}

export const floatA = {
  position: 'absolute', top: '15%', left: '8%',
  fontSize: '40px', opacity: 0.3,
  animation: 'floatA 6s ease-in-out infinite',
  '@keyframes floatA': {
    '0%, 100%': { transform: 'translateY(0) rotate(-10deg)' },
    '50%': { transform: 'translateY(-20px) rotate(-5deg)' },
  },
}

export const floatB = {
  position: 'absolute', top: '25%', right: '12%',
  fontSize: '50px', opacity: 0.4,
  animation: 'floatB 7s ease-in-out infinite',
  '@keyframes floatB': {
    '0%, 100%': { transform: 'translateY(0) rotate(15deg)' },
    '50%': { transform: 'translateY(-25px) rotate(20deg)' },
  },
}

export const floatC = {
  position: 'absolute', top: '70%', left: '5%',
  fontSize: '45px', opacity: 0.3,
  animation: 'floatC 8s ease-in-out infinite',
  '@keyframes floatC': {
    '0%, 100%': { transform: 'translateY(0) rotate(0)' },
    '50%': { transform: 'translateY(-15px) rotate(10deg)' },
  },
}

export const floatD = {
  position: 'absolute', top: '60%', right: '8%',
  fontSize: '42px', opacity: 0.35,
  animation: 'floatD 9s ease-in-out infinite',
  '@keyframes floatD': {
    '0%, 100%': { transform: 'translateY(0) rotate(5deg)' },
    '50%': { transform: 'translateY(-18px) rotate(-5deg)' },
  },
}

export const header = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: `${theme.spacing.lg} ${theme.spacing.xxl}`,
  maxWidth: '1200px',
  margin: '0 auto',
  flexWrap: 'wrap',
  gap: theme.spacing.md,
  position: 'relative',
  zIndex: 2,
}

export const logo = {
  fontSize: '26px',
  fontWeight: 800,
  fontFamily: theme.fonts.heading,
  color: theme.colors.primaryDark,
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
}

export const logoPaw = { fontSize: '28px' }
export const logoAccent = { color: theme.colors.primary }

export const navLinks = {
  display: 'flex',
  gap: theme.spacing.lg,
  alignItems: 'center',
}

export const navLink = {
  color: theme.colors.text,
  fontSize: '14px',
  fontWeight: 600,
  '&:hover': { color: theme.colors.primary },
}

export const authGroup = { display: 'flex', gap: theme.spacing.md }

export const loginBtn = {
  padding: '10px 24px',
  borderRadius: theme.radii.full,
  border: `2px solid ${theme.colors.primary}`,
  color: theme.colors.primaryDark,
  fontSize: '14px',
  fontWeight: 700,
  transition: 'all 0.2s',
  '&:hover': { background: theme.colors.primary, color: theme.colors.textWhite },
}

export const signupBtn = {
  padding: '10px 24px',
  borderRadius: theme.radii.full,
  background: theme.gradients.sage,
  color: theme.colors.textWhite,
  fontSize: '14px',
  fontWeight: 700,
  boxShadow: `0 4px 12px ${theme.colors.shadow}`,
  transition: 'all 0.2s',
  '&:hover': { transform: 'translateY(-2px)', boxShadow: `0 6px 16px ${theme.colors.shadowStrong}` },
}

export const hero = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: `60px ${theme.spacing.xxl} 80px`,
  textAlign: 'center',
  position: 'relative',
  zIndex: 2,
}

export const heroEmoji = {
  fontSize: '80px',
  marginBottom: theme.spacing.md,
  animation: 'bounce 2s ease-in-out infinite',
  '@keyframes bounce': {
    '0%, 100%': { transform: 'translateY(0)' },
    '50%': { transform: 'translateY(-12px)' },
  },
}

export const heroImage = {
  width: '140px',
  height: '140px',
  objectFit: 'contain',
  display: 'block',
  margin: `0 auto ${theme.spacing.md}`,
  filter: `drop-shadow(0 8px 20px ${theme.colors.shadowWarm})`,
  animation: 'bounce 2s ease-in-out infinite',
  '@keyframes bounce': {
    '0%, 100%': { transform: 'translateY(0)' },
    '50%': { transform: 'translateY(-12px)' },
  },
  '@media (max-width: 600px)': {
    width: '110px',
    height: '110px',
  },
}

export const heroTitle = {
  fontSize: 'clamp(32px, 6vw, 56px)',
  fontWeight: 800,
  lineHeight: 1.1,
  marginBottom: theme.spacing.lg,
  fontFamily: theme.fonts.heading,
  color: theme.colors.primaryDark,
}

export const heroTitleAccent = {
  background: theme.gradients.peach,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
}

export const heroSubtitle = {
  fontSize: '18px',
  color: theme.colors.textLight,
  maxWidth: '600px',
  margin: '0 auto',
  lineHeight: 1.6,
  marginBottom: theme.spacing.xl,
}

export const ctaGroup = {
  display: 'flex',
  gap: theme.spacing.md,
  justifyContent: 'center',
  flexWrap: 'wrap',
}

export const ctaPrimary = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  padding: '16px 40px',
  borderRadius: theme.radii.full,
  background: theme.gradients.sage,
  color: theme.colors.textWhite,
  fontSize: '18px',
  fontWeight: 700,
  boxShadow: `0 6px 20px ${theme.colors.shadow}`,
  transition: 'all 0.2s',
  '&:hover': {
    transform: 'scale(1.05) translateY(-2px)',
    boxShadow: `0 8px 24px ${theme.colors.shadowStrong}`,
  },
}

export const ctaSecondary = {
  display: 'inline-block',
  padding: '16px 40px',
  borderRadius: theme.radii.full,
  border: `3px solid ${theme.colors.primary}`,
  color: theme.colors.primaryDark,
  background: theme.colors.bgCard,
  fontSize: '18px',
  fontWeight: 700,
  transition: 'all 0.2s',
  '&:hover': { background: theme.colors.primary, color: theme.colors.textWhite, transform: 'translateY(-2px)' },
}

export const features = {
  maxWidth: '1000px',
  margin: '0 auto',
  padding: `0 ${theme.spacing.xxl} 80px`,
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: theme.spacing.xl,
  position: 'relative',
  zIndex: 2,
}

export const featureCard = (bg, accent) => ({
  background: bg,
  borderRadius: theme.radii.lg,
  padding: theme.spacing.xl,
  textAlign: 'center',
  border: `3px solid ${accent}30`,
  boxShadow: `0 4px 16px ${theme.colors.shadow}`,
  transition: 'transform 0.2s',
  '&:hover': { transform: 'translateY(-6px)' },
})

export const featureEmoji = {
  fontSize: '56px',
  marginBottom: theme.spacing.md,
}

export const featureTitle = {
  fontSize: '20px',
  fontWeight: 700,
  marginBottom: theme.spacing.sm,
  color: theme.colors.primaryDark,
  fontFamily: theme.fonts.heading,
}

export const featureDesc = {
  fontSize: '14px',
  color: theme.colors.text,
  lineHeight: 1.6,
}

export const resources = {
  maxWidth: '1000px',
  margin: '0 auto',
  padding: `0 ${theme.spacing.xxl} 80px`,
  position: 'relative',
  zIndex: 2,
}

export const resourcesTitle = {
  fontSize: 'clamp(24px, 4vw, 32px)',
  fontWeight: 800,
  textAlign: 'center',
  marginBottom: theme.spacing.sm,
  fontFamily: theme.fonts.heading,
  color: theme.colors.primaryDark,
}

export const resourcesSubtitle = {
  textAlign: 'center',
  color: theme.colors.textLight,
  marginBottom: theme.spacing.xl,
  fontSize: '15px',
}

export const resourcesGrid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: theme.spacing.lg,
}

export const resourceCardA = {
  background: theme.colors.bgCard,
  border: `3px solid ${theme.colors.primary}30`,
  borderRadius: theme.radii.lg,
  padding: theme.spacing.xl,
  transition: 'all 0.2s',
  color: theme.colors.text,
  boxShadow: `0 4px 16px ${theme.colors.shadow}`,
  '&:hover': {
    transform: 'translateY(-4px)',
    borderColor: theme.colors.primary,
    boxShadow: `0 6px 20px ${theme.colors.shadowStrong}`,
  },
}

export const resourceCardB = {
  background: theme.colors.bgWarm,
  border: `3px solid ${theme.colors.secondary}`,
  borderRadius: theme.radii.lg,
  padding: theme.spacing.xl,
  transition: 'all 0.2s',
  color: theme.colors.text,
  boxShadow: `0 4px 16px ${theme.colors.shadowWarm}`,
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: `0 6px 20px ${theme.colors.shadowStrong}`,
  },
}

export const resourceEmoji = {
  fontSize: '48px',
  marginBottom: theme.spacing.md,
}

export const resourceTitle = {
  fontSize: '22px',
  fontWeight: 700,
  marginBottom: theme.spacing.sm,
  color: theme.colors.primaryDark,
  fontFamily: theme.fonts.heading,
}

export const resourceDesc = {
  fontSize: '14px',
  color: theme.colors.text,
  lineHeight: 1.6,
}

export const resourceLinkA = {
  fontSize: '14px',
  color: theme.colors.primary,
  marginTop: theme.spacing.md,
  fontWeight: 700,
}

export const resourceLinkB = {
  fontSize: '14px',
  color: theme.colors.secondaryDark,
  marginTop: theme.spacing.md,
  fontWeight: 700,
}

// ─── FOOTER ─────────────────────────────────────────────────────────────────
export const footer = {
  background: theme.gradients.forestSky,
  color: theme.colors.textWhite,
  padding: `${theme.spacing.xxl} ${theme.spacing.xxl} ${theme.spacing.lg}`,
  position: 'relative',
  zIndex: 2,
  borderTop: `4px solid ${theme.colors.accent}`,
  '@media (max-width: 600px)': {
    padding: `${theme.spacing.xl} ${theme.spacing.md} ${theme.spacing.md}`,
  },
}

export const footerInner = {
  maxWidth: '1200px',
  margin: '0 auto',
}

// ── Top brand section (centered) ─────────────────────────────────────
export const footerBrand = {
  textAlign: 'center',
  marginBottom: theme.spacing.xl,
  paddingBottom: theme.spacing.xl,
  borderBottom: `2px solid rgba(244, 224, 175, 0.2)`,
}

export const footerLogo = {
  width: '80px',
  height: '80px',
  borderRadius: '50%',
  border: `3px solid ${theme.colors.accent}`,
  background: theme.colors.bgCard,
  objectFit: 'cover',
  boxShadow: `0 4px 12px rgba(0,0,0,0.25)`,
  marginBottom: theme.spacing.sm,
  '@media (max-width: 600px)': {
    width: '64px',
    height: '64px',
  },
}

export const footerTagline = {
  fontSize: '15px',
  color: theme.colors.accent,
  fontFamily: theme.fonts.heading,
  fontWeight: 700,
  margin: 0,
}

// ── Link columns ─────────────────────────────────────────────────────
export const footerLinks = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
  gap: theme.spacing.xl,
  marginBottom: theme.spacing.xl,
  '@media (max-width: 600px)': {
    gap: theme.spacing.lg,
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
}

export const footerColumn = {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
}

export const footerHeading = {
  fontSize: '15px',
  fontWeight: 800,
  fontFamily: theme.fonts.heading,
  color: theme.colors.accent,
  marginBottom: '6px',
  textTransform: 'uppercase',
  letterSpacing: '1px',
}

export const footerLink = {
  fontSize: '14px',
  color: theme.colors.textWhite,
  textDecoration: 'none',
  fontWeight: 500,
  transition: 'all 0.2s',
  display: 'inline-block',
  '&:hover': {
    color: theme.colors.accent,
    transform: 'translateX(3px)',
  },
}

export const footerItem = {
  fontSize: '14px',
  color: 'rgba(255, 251, 240, 0.75)',
  fontWeight: 500,
}

// ── Bottom bar ───────────────────────────────────────────────────────
export const footerBottom = {
  paddingTop: theme.spacing.lg,
  borderTop: `2px solid rgba(244, 224, 175, 0.2)`,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: theme.spacing.sm,
  '@media (max-width: 600px)': {
    flexDirection: 'column',
    textAlign: 'center',
  },
}

export const footerCopy = {
  fontSize: '13px',
  color: 'rgba(255, 251, 240, 0.7)',
  margin: 0,
  fontWeight: 600,
}

export const footerCredit = {
  fontSize: '13px',
  color: theme.colors.accent,
  margin: 0,
  fontWeight: 600,
  fontStyle: 'italic',
}
