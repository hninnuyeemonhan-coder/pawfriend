// src/pages/PetPage.styles.js
import theme from '../styles/theme'

export const heading = {
  fontSize: 'clamp(22px, 5vw, 32px)',
  fontWeight: 800,
  fontFamily: theme.fonts.heading,
  color: theme.colors.primaryDark,
  marginBottom: theme.spacing.xl,
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
}

// Dynamic hero card — background image swaps with time of day
export const petHero = (timeOfDay) => ({
  backgroundImage: `url('/assets/backgrounds/${timeOfDay}.png')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  borderRadius: theme.radii.xl,
  // Top padding gives the text room; bottom is reduced since pet sits at the floor
  padding: `${theme.spacing.lg} ${theme.spacing.xxl} 0`,
  boxShadow: `0 8px 32px ${theme.colors.shadowWarm}`,
  textAlign: 'center',
  marginBottom: theme.spacing.md,
  border: `4px solid ${theme.colors.accent}`,
  position: 'relative',
  overflow: 'hidden',
  minHeight: '560px',
  transition: 'background-image 1s ease-in-out',
  '@media (max-width: 600px)': {
    padding: `${theme.spacing.md} ${theme.spacing.md} 0`,
    minHeight: '460px',
  },
})

// Pet info card — sits BELOW the hero so it's always readable
export const petInfoCard = {
  background: theme.colors.bgCard,
  borderRadius: theme.radii.lg,
  padding: theme.spacing.lg,
  boxShadow: `0 4px 12px ${theme.colors.shadow}`,
  border: `2px solid ${theme.colors.accent}`,
  textAlign: 'center',
  marginBottom: theme.spacing.xl,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '6px',
}

export const petName = {
  fontSize: 'clamp(20px, 4vw, 26px)',
  fontWeight: 800,
  fontFamily: theme.fonts.heading,
  color: theme.colors.primaryDark,
  margin: 0,
}

export const petLevel = {
  fontSize: '14px',
  color: theme.colors.text,
  fontWeight: 700,
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
  flexWrap: 'wrap',
  justifyContent: 'center',
}

export const petLevelBadge = {
  background: theme.gradients.sage,
  color: theme.colors.textWhite,
  padding: '3px 10px',
  borderRadius: theme.radii.full,
  fontSize: '12px',
  fontWeight: 800,
}

export const petStageBadge = (stage) => ({
  background: stage === 'dog'
    ? theme.gradients.peach
    : stage === 'teen'
    ? theme.gradients.sunny
    : theme.colors.primaryLight,
  color: stage === 'puppy' ? theme.colors.primaryDark : theme.colors.text,
  padding: '3px 10px',
  borderRadius: theme.radii.full,
  fontSize: '12px',
  fontWeight: 800,
  textTransform: 'capitalize',
})

export const petInteractHint = {
  fontSize: '12px',
  color: theme.colors.textLight,
  fontStyle: 'italic',
  marginTop: '4px',
}

// Soft overlay to keep text readable over any background
export const heroOverlay = (timeOfDay) => ({
  position: 'absolute',
  inset: 0,
  background: timeOfDay === 'night'
    ? 'linear-gradient(180deg, rgba(20,20,40,0.15) 0%, rgba(20,20,40,0.35) 100%)'
    : timeOfDay === 'evening'
    ? 'linear-gradient(180deg, rgba(255,200,150,0.10) 0%, rgba(180,90,60,0.20) 100%)'
    : 'linear-gradient(180deg, rgba(255,250,235,0.10) 0%, rgba(255,250,235,0.05) 100%)',
  pointerEvents: 'none',
  zIndex: 1,
})

// Position the pet so it appears to be sitting ON the bed cushion in the background.
// Each stage gets a different bottom offset because their proportions differ —
// the puppy is small so it needs to sit higher on the cushion, the adult is tall
// so it naturally fills more vertical space and sits lower.
export const petPosition = (stage) => {
  // Stage scaling: clearer size gap between teen and adult so growth feels real
  // Puppy = 0.85 (small), Teen = 0.95 (mid), Adult = 1.25 (clearly biggest)
  const scale = stage === 'puppy' ? 0.85 : stage === 'teen' ? 0.95 : 1.25

  // Vertical position on the cushion — adult lifted up so it doesn't overflow
  const desktopBottom = stage === 'puppy' ? '8%'  : stage === 'teen' ? '5%' : '4%'
  const tabletBottom  = stage === 'puppy' ? '6%'  : stage === 'teen' ? '3%' : '2%'
  const mobileBottom  = stage === 'puppy' ? '5%'  : stage === 'teen' ? '2%' : '1%'

  return {
    position: 'absolute',
    bottom: desktopBottom,
    left: '50%',
    transform: `translateX(-50%) scale(${scale})`,
    transformOrigin: 'center bottom',
    transition: 'transform 0.4s ease, bottom 0.4s ease',
    zIndex: 3,
    '@media (max-width: 768px)': {
      bottom: tabletBottom,
      transform: `translateX(-50%) scale(${scale * 0.85})`,
    },
    '@media (max-width: 480px)': {
      bottom: mobileBottom,
      transform: `translateX(-50%) scale(${scale * 0.7})`,
    },
  }
}

export const petHeroContent = {
  position: 'relative',
  zIndex: 4, // Above the pet (zIndex 3) so adult dogs don't cover the text
  maxWidth: '420px',
  margin: '0 auto',
  padding: theme.spacing.md,
}

// Text gets strong shadows so it stays readable directly on the background
export const emotionText = (emotion, timeOfDay) => ({
  fontSize: 'clamp(15px, 3vw, 18px)',
  color: timeOfDay === 'night'
    ? '#FFFBF0'
    : emotion === 'happy'
    ? theme.colors.primaryDark
    : emotion === 'sad'
    ? theme.colors.dangerDark
    : theme.colors.primaryDark,
  fontWeight: 800,
  fontFamily: theme.fonts.heading,
  textTransform: 'uppercase',
  letterSpacing: '1px',
  textShadow: timeOfDay === 'night'
    ? '0 2px 8px rgba(0,0,0,0.8), 0 0 4px rgba(0,0,0,0.6)'
    : '0 2px 4px rgba(255,255,255,0.8), 0 1px 2px rgba(255,255,255,0.6)',
  marginBottom: theme.spacing.sm,
  margin: 0,
})

export const progressText = (timeOfDay) => ({
  fontSize: '14px',
  color: timeOfDay === 'night' ? '#FFFBF0' : theme.colors.primaryDark,
  marginTop: theme.spacing.sm,
  marginBottom: theme.spacing.sm,
  fontWeight: 700,
  textShadow: timeOfDay === 'night'
    ? '0 1px 4px rgba(0,0,0,0.7)'
    : '0 1px 2px rgba(255,255,255,0.7)',
})

export const habitProgressTrack = {
  height: '14px',
  width: '80%',
  maxWidth: '320px',
  margin: `0 auto ${theme.spacing.lg}`,
  background: 'rgba(255, 255, 255, 0.7)',
  borderRadius: theme.radii.full,
  overflow: 'hidden',
  border: `2px solid rgba(53, 95, 46, 0.3)`,
  boxShadow: `inset 0 2px 4px rgba(0,0,0,0.08)`,
}

export const habitProgressFill = (percent) => ({
  height: '100%',
  width: `${percent}%`,
  background: theme.gradients.meadow,
  borderRadius: theme.radii.full,
  transition: 'width 0.6s ease',
  boxShadow: `0 0 8px ${theme.colors.primary}80`,
})

// ─── Stage preview & rest of the page ───
export const previewBox = {
  background: theme.colors.bgWarm,
  border: `3px dashed ${theme.colors.warning}`,
  borderRadius: theme.radii.lg,
  padding: theme.spacing.lg,
  marginBottom: theme.spacing.xl,
}

export const previewHeading = {
  fontSize: '16px',
  fontWeight: 800,
  fontFamily: theme.fonts.heading,
  marginBottom: theme.spacing.md,
  color: theme.colors.warning,
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
}

export const previewPets = {
  display: 'flex',
  gap: theme.spacing.xl,
  justifyContent: 'center',
  flexWrap: 'wrap',
}

export const statsGrid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: theme.spacing.md,
  marginBottom: theme.spacing.xl,
  '@media (max-width: 600px)': { gap: theme.spacing.sm },
}

export const statCard = (bg, accent) => ({
  background: bg,
  borderRadius: theme.radii.lg,
  padding: theme.spacing.lg,
  textAlign: 'center',
  boxShadow: `0 4px 12px ${theme.colors.shadow}`,
  border: `3px solid ${accent}`,
  transition: 'transform 0.2s',
  '&:hover': { transform: 'translateY(-3px)' },
  '@media (max-width: 600px)': { padding: theme.spacing.md },
})

export const statEmoji = { fontSize: 'clamp(24px, 6vw, 36px)', marginBottom: '6px' }

export const statValue = {
  fontSize: 'clamp(16px, 4vw, 24px)',
  fontWeight: 800,
  fontFamily: theme.fonts.heading,
  color: theme.colors.primaryDark,
}

export const statLabel = {
  fontSize: '12px',
  color: theme.colors.textLight,
  fontWeight: 600,
}

export const xpBox = {
  background: theme.colors.bgCard,
  borderRadius: theme.radii.lg,
  padding: theme.spacing.lg,
  boxShadow: `0 4px 12px ${theme.colors.shadow}`,
  border: `2px solid ${theme.colors.border}`,
  marginBottom: theme.spacing.xl,
}

export const xpHeader = {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '10px',
  fontSize: '15px',
  flexWrap: 'wrap',
  gap: '6px',
}

export const xpTitle = {
  fontWeight: 700,
  color: theme.colors.primaryDark,
  fontFamily: theme.fonts.heading,
}

export const xpCount = {
  color: theme.colors.textLight,
  fontWeight: 600,
}

export const xpTrack = {
  height: '20px',
  background: theme.colors.bgSoft,
  borderRadius: theme.radii.full,
  overflow: 'hidden',
  border: `2px solid ${theme.colors.border}`,
}

export const xpFill = (percent) => ({
  height: '100%',
  width: `${percent}%`,
  background: theme.gradients.sunny,
  borderRadius: theme.radii.full,
  transition: 'width 0.6s ease',
  boxShadow: `0 0 12px ${theme.colors.accent}80`,
})

export const stagesBox = {
  background: theme.colors.bgCard,
  borderRadius: theme.radii.lg,
  padding: theme.spacing.lg,
  boxShadow: `0 4px 12px ${theme.colors.shadow}`,
  border: `2px solid ${theme.colors.border}`,
}

export const stagesHeading = {
  fontSize: '18px',
  fontWeight: 800,
  fontFamily: theme.fonts.heading,
  color: theme.colors.primaryDark,
  marginBottom: theme.spacing.md,
}

export const stagesDesc = {
  fontSize: '14px',
  color: theme.colors.text,
  marginBottom: theme.spacing.md,
  lineHeight: 1.6,
}

export const stagesRow = {
  display: 'flex',
  gap: theme.spacing.lg,
  justifyContent: 'center',
  flexWrap: 'wrap',
}

export const stageItem = (isCurrent) => ({
  textAlign: 'center',
  opacity: isCurrent ? 1 : 0.4,
  transition: 'opacity 0.3s',
})

export const stageCircle = (isCurrent) => ({
  width: '72px',
  height: '72px',
  borderRadius: theme.radii.full,
  background: isCurrent ? theme.gradients.sunny : theme.colors.bgSoft,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto 8px',
  border: isCurrent ? `3px solid ${theme.colors.primary}` : `3px solid transparent`,
  overflow: 'hidden',
  boxShadow: isCurrent ? `0 4px 12px ${theme.colors.shadowWarm}` : 'none',
})

export const stageImage = {
  width: '58px',
  height: '58px',
  objectFit: 'contain',
}

export const stageLabel = {
  fontSize: '13px',
  fontWeight: 700,
  textTransform: 'capitalize',
  color: theme.colors.primaryDark,
}

export const nextEvolution = {
  fontSize: '13px',
  color: theme.colors.primary,
  textAlign: 'center',
  marginTop: theme.spacing.md,
  fontWeight: 700,
}

export const loading = {
  padding: theme.spacing.xl,
  color: theme.colors.textLight,
}

export const error = {
  padding: theme.spacing.xl,
}

// Time-of-day badge in the corner of the hero
export const timeBadge = (timeOfDay) => ({
  position: 'absolute',
  top: theme.spacing.md,
  left: theme.spacing.md,
  background: timeOfDay === 'night' ? 'rgba(0,0,0,0.4)' : 'rgba(255,255,255,0.7)',
  color: timeOfDay === 'night' ? '#FFFBF0' : theme.colors.primaryDark,
  padding: '6px 14px',
  borderRadius: theme.radii.full,
  fontSize: '12px',
  fontWeight: 700,
  fontFamily: theme.fonts.heading,
  zIndex: 4,
  backdropFilter: 'blur(4px)',
  border: timeOfDay === 'night'
    ? '1px solid rgba(255,255,255,0.2)'
    : `1px solid ${theme.colors.border}`,
})
