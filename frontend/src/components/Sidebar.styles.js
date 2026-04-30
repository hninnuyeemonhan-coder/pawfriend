// src/components/Sidebar.styles.js
import theme from '../styles/theme'

// ── Mobile top bar ──
export const topBar = {
  position: 'fixed',
  top: 0, left: 0, right: 0,
  height: '60px',
  background: theme.gradients.forestSky,
  color: theme.colors.textWhite,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: `0 ${theme.spacing.md}`,
  boxShadow: `0 2px 12px ${theme.colors.shadow}`,
  zIndex: 200,
}

export const topBarLogo = {
  fontSize: '20px',
  fontWeight: 800,
  fontFamily: theme.fonts.heading,
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
  margin: 0,
}

export const logoIcon = {
  width: '38px',
  height: '38px',
  borderRadius: '50%',
  objectFit: 'cover',
  border: `2px solid ${theme.colors.accent}`,
  background: theme.colors.bgCard,
  boxShadow: `0 2px 6px rgba(0,0,0,0.15)`,
  flexShrink: 0,
}

export const logoAccent = {
  color: theme.colors.accent,
}

export const hamburgerButton = {
  background: 'none',
  border: 'none',
  color: theme.colors.textWhite,
  cursor: 'pointer',
  padding: '8px',
  borderRadius: theme.radii.sm,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'background 0.2s',
  '&:hover': { background: 'rgba(255,255,255,0.1)' },
}

export const overlay = {
  position: 'fixed',
  inset: 0,
  background: 'rgba(0,0,0,0.5)',
  zIndex: 198,
  animation: 'fadeIn 0.2s ease',
  '@keyframes fadeIn': { from: { opacity: 0 }, to: { opacity: 1 } },
}

export const drawer = (open) => ({
  position: 'fixed',
  top: 0, right: 0,
  width: '280px',
  maxWidth: '85vw',
  height: '100vh',
  background: theme.gradients.forestSky,
  color: theme.colors.textWhite,
  display: 'flex',
  flexDirection: 'column',
  padding: `${theme.spacing.lg} 0`,
  boxShadow: `-4px 0 20px ${theme.colors.shadowStrong}`,
  zIndex: 199,
  transform: open ? 'translateX(0)' : 'translateX(100%)',
  transition: 'transform 0.3s ease',
  overflowY: 'auto',
})

// ── Desktop sidebar ──
export const sidebar = {
  width: '240px',
  minHeight: '100vh',
  background: theme.gradients.forestSky,
  color: theme.colors.textWhite,
  display: 'flex',
  flexDirection: 'column',
  padding: `${theme.spacing.lg} 0`,
  position: 'fixed',
  left: 0,
  top: 0,
  zIndex: 100,
  boxShadow: `4px 0 20px ${theme.colors.shadow}`,
}

// ── Shared ──
export const pawsBackground = {
  position: 'absolute',
  inset: 0,
  pointerEvents: 'none',
  overflow: 'hidden',
  opacity: 0.06,
}

export const paw1 = {
  position: 'absolute',
  top: '15%',
  left: '10%',
  fontSize: '80px',
  transform: 'rotate(-20deg)',
}
export const paw2 = {
  position: 'absolute',
  top: '55%',
  left: '65%',
  fontSize: '60px',
  transform: 'rotate(15deg)',
}
export const paw3 = {
  position: 'absolute',
  top: '85%',
  left: '15%',
  fontSize: '70px',
  transform: 'rotate(-5deg)',
}

export const logoSection = {
  padding: `0 ${theme.spacing.lg}`,
  marginBottom: theme.spacing.xl,
  position: 'relative',
  zIndex: 1,
}

export const logoHeading = {
  fontSize: '26px',
  fontWeight: 800,
  fontFamily: theme.fonts.heading,
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
}

export const logoHeadingIcon = {
  width: '52px',
  height: '52px',
  borderRadius: '50%',
  objectFit: 'cover',
  border: `3px solid ${theme.colors.accent}`,
  background: theme.colors.bgCard,
  boxShadow: `0 3px 8px rgba(0,0,0,0.2)`,
  flexShrink: 0,
}

export const greeting = {
  fontSize: '12px',
  opacity: 0.75,
  marginTop: '6px',
  color: theme.colors.accent,
}

export const greetingMobile = {
  fontSize: '13px',
  opacity: 0.85,
  color: theme.colors.accent,
  fontWeight: 600,
  margin: 0,
}

export const mobileGreetingWrap = {
  padding: `0 ${theme.spacing.lg}`,
  marginBottom: theme.spacing.lg,
  position: 'relative',
  zIndex: 1,
}

export const nav = {
  flex: 1,
  overflowY: 'auto',
  position: 'relative',
  zIndex: 1,
  padding: '0 12px',
}

export const navLink = {
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  padding: '11px 16px',
  marginBottom: '4px',
  color: theme.colors.textWhite,
  fontSize: '15px',
  fontWeight: 500,
  borderRadius: theme.radii.sm,
  transition: 'all 0.2s',
  '&:hover': {
    background: 'rgba(244, 224, 175, 0.15)',
    transform: 'translateX(4px)',
  },
  '&.active': {
    background: theme.colors.accent,
    color: theme.colors.primaryDark,
    fontWeight: 700,
    boxShadow: `0 2px 8px rgba(0,0,0,0.2)`,
  },
}

export const navLinkMobile = {
  ...navLink,
  padding: '13px 16px',
  '&:hover': { background: 'rgba(244, 224, 175, 0.15)' },
  '&.active': {
    background: theme.colors.accent,
    color: theme.colors.primaryDark,
    fontWeight: 700,
  },
}

export const navIcon = {
  fontSize: '18px',
  display: 'flex',
}

export const logoutWrap = {
  padding: '0 12px',
  position: 'relative',
  zIndex: 1,
}

export const logoutButton = {
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  padding: '11px 16px',
  color: theme.colors.textWhite,
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  fontSize: '15px',
  fontWeight: 500,
  width: '100%',
  borderRadius: theme.radii.sm,
  textAlign: 'left',
  transition: 'all 0.2s',
  fontFamily: 'inherit',
  '&:hover': { background: 'rgba(238, 78, 78, 0.25)' },
}
