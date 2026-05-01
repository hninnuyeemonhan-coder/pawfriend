// src/components/Layout.styles.js
import theme from '../styles/theme'

export const container = {
  display: 'flex',
  minHeight: '100vh',
  position: 'relative',
}

export const main = (isMobile) => ({
  flex: 1,
  marginLeft: isMobile ? 0 : '240px',
  marginTop: isMobile ? '60px' : 0,
  padding: isMobile
    ? `${theme.spacing.md} ${theme.spacing.sm}`
    : `${theme.spacing.xl} ${theme.spacing.xxl}`,
  background: theme.gradients.warmSky,
  minHeight: isMobile ? 'calc(100vh - 60px)' : '100vh',
  maxWidth: isMobile ? '100vw' : 'calc(100vw - 240px)',
  position: 'relative',
})

export const contentWrap = {
  maxWidth: '1000px',
  margin: '0 auto',
  width: '100%',
  position: 'relative',
  zIndex: 1,
}
