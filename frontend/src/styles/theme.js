// src/styles/theme.js
// Warm, cozy, cartoon nature palette — golden retriever friendly 🐾

const theme = {
  colors: {
    primary: '#799351',
    primaryDark: '#355F2E',
    primaryLight: '#A8CD89',
    secondary: '#F9C0AB',
    secondaryDark: '#F4A58A',
    accent: '#F4E0AF',
    accentDark: '#E8C97E',
    success: '#A1DD70',
    successDark: '#7BB94A',
    warning: '#E8A546',
    danger: '#EE4E4E',
    dangerDark: '#D43838',
    bg: '#FAF6E8',
    bgCard: '#FFFBF0',
    bgSoft: '#F6EEDC',
    bgWarm: '#FEE8D6',
    bgSidebar: '#355F2E',
    text: '#3D2817',
    textLight: '#8A7558',
    textWhite: '#FFFBF0',
    textOnSage: '#FFFBF0',
    border: '#EFE4C8',
    borderStrong: '#D9C9A0',
    shadow: 'rgba(121, 147, 81, 0.15)',
    shadowStrong: 'rgba(61, 40, 23, 0.12)',
    shadowWarm: 'rgba(249, 192, 171, 0.2)',
  },
  radii: {
    sm: '10px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    full: '9999px',
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
  },
  fonts: {
    body: "'Nunito', 'Quicksand', -apple-system, system-ui, sans-serif",
    heading: "'Fredoka', 'Nunito', -apple-system, system-ui, sans-serif",
  },
  gradients: {
    sunny: 'linear-gradient(135deg, #F4E0AF 0%, #F9C0AB 100%)',
    meadow: 'linear-gradient(135deg, #A1DD70 0%, #799351 100%)',
    sage: 'linear-gradient(135deg, #799351 0%, #355F2E 100%)',
    peach: 'linear-gradient(135deg, #F9C0AB 0%, #F4A58A 100%)',
    warmSky: 'linear-gradient(135deg, #FAF6E8 0%, #FEE8D6 100%)',
    forestSky: 'linear-gradient(135deg, #355F2E 0%, #1E3A1A 100%)',
  },
}

export default theme
