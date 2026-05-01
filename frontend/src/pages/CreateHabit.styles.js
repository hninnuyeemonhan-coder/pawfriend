// src/pages/CreateHabit.styles.js
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

export const formCard = {
  background: theme.colors.bgCard,
  borderRadius: theme.radii.lg,
  padding: theme.spacing.xxl,
  boxShadow: `0 6px 20px ${theme.colors.shadow}`,
  border: `3px solid ${theme.colors.accent}`,
  width: '100%',
  '@media (max-width: 600px)': {
    padding: theme.spacing.lg,
  },
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

export const twoColumn = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
  gap: theme.spacing.lg,
  marginBottom: theme.spacing.lg,
}

export const fullRow = { marginBottom: theme.spacing.lg }

export const label = {
  display: 'block',
  marginBottom: '8px',
  fontSize: '15px',
  fontWeight: 700,
  color: theme.colors.primaryDark,
  fontFamily: theme.fonts.heading,
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

export const freqRow = { display: 'flex', gap: theme.spacing.md }

export const freqBtn = (selected) => ({
  flex: 1,
  padding: '12px',
  borderRadius: theme.radii.sm,
  border: `2px solid ${selected ? theme.colors.primary : theme.colors.border}`,
  background: selected ? theme.colors.primaryLight + '30' : theme.colors.bgCard,
  color: selected ? theme.colors.primaryDark : theme.colors.text,
  fontWeight: 700,
  cursor: 'pointer',
  fontSize: '14px',
  textTransform: 'capitalize',
  transition: 'all 0.2s',
  fontFamily: 'inherit',
})

export const timeOfDayGrid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
  gap: theme.spacing.sm,
}

export const timeBtn = (selected) => ({
  padding: '12px',
  borderRadius: theme.radii.sm,
  border: `2px solid ${selected ? theme.colors.primary : theme.colors.border}`,
  background: selected ? theme.colors.primaryLight + '30' : theme.colors.bgCard,
  cursor: 'pointer',
  fontSize: '14px',
  fontWeight: selected ? 700 : 500,
  transition: 'all 0.2s',
  fontFamily: 'inherit',
})

export const colorRow = {
  display: 'flex',
  gap: '10px',
  flexWrap: 'wrap',
}

export const colorSwatch = (color, selected) => ({
  width: '40px',
  height: '40px',
  borderRadius: theme.radii.full,
  background: color,
  border: selected ? `3px solid ${theme.colors.primaryDark}` : '3px solid transparent',
  cursor: 'pointer',
  transition: 'transform 0.2s',
  '&:hover': { transform: 'scale(1.15)' },
})

export const categoryGrid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))',
  gap: theme.spacing.sm,
}

export const categoryBtn = (selected) => ({
  padding: '10px 4px',
  borderRadius: theme.radii.sm,
  border: `2px solid ${selected ? theme.colors.primary : theme.colors.border}`,
  background: selected ? theme.colors.primaryLight + '30' : theme.colors.bgCard,
  cursor: 'pointer',
  fontSize: '12px',
  fontWeight: 600,
  textAlign: 'center',
  transition: 'all 0.2s',
  fontFamily: 'inherit',
})

export const preview = (color) => ({
  background: theme.gradients.sunny,
  borderRadius: theme.radii.md,
  padding: theme.spacing.lg,
  marginBottom: theme.spacing.lg,
  borderLeft: `6px solid ${color}`,
  border: `2px solid ${theme.colors.accent}`,
})

export const previewLabel = {
  fontSize: '12px',
  color: theme.colors.primaryDark,
  marginBottom: '6px',
  fontWeight: 700,
  fontFamily: theme.fonts.heading,
}

export const previewTitle = {
  fontWeight: 700,
  color: theme.colors.text,
  fontSize: '16px',
}

export const previewMeta = {
  fontSize: '13px',
  color: theme.colors.text,
  fontWeight: 500,
  marginTop: '2px',
}

export const submitBtn = (loading) => ({
  width: '100%',
  padding: '16px',
  background: theme.gradients.sage,
  color: theme.colors.textWhite,
  border: 'none',
  borderRadius: theme.radii.full,
  fontSize: '17px',
  fontWeight: 800,
  cursor: loading ? 'not-allowed' : 'pointer',
  boxShadow: `0 6px 16px ${theme.colors.shadow}`,
  transition: 'all 0.2s',
  fontFamily: 'inherit',
  '&:hover': { transform: 'translateY(-2px)' },
})
