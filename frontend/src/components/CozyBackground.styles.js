// src/components/CozyBackground.styles.js
import theme from '../styles/theme'

export const container = {
  position: 'fixed',
  inset: 0,
  pointerEvents: 'none',
  zIndex: 0,
  overflow: 'hidden',
}

export const circle1 = {
  position: 'absolute',
  top: '10%',
  left: '70%',
  width: '300px',
  height: '300px',
  borderRadius: '50%',
  background: `radial-gradient(circle, ${theme.colors.secondary}20 0%, transparent 70%)`,
}

export const circle2 = {
  position: 'absolute',
  top: '60%',
  left: '-10%',
  width: '350px',
  height: '350px',
  borderRadius: '50%',
  background: `radial-gradient(circle, ${theme.colors.accent}30 0%, transparent 70%)`,
}

export const circle3 = {
  position: 'absolute',
  top: '80%',
  left: '75%',
  width: '250px',
  height: '250px',
  borderRadius: '50%',
  background: `radial-gradient(circle, ${theme.colors.primaryLight}25 0%, transparent 70%)`,
}

export const floatingShape = (shape, index) => ({
  position: 'absolute',
  top: shape.top,
  left: shape.left,
  fontSize: `${shape.size}px`,
  opacity: shape.opacity,
  transform: `rotate(${shape.rotate}deg)`,
  animation: `floatBg${index} ${6 + index}s ease-in-out infinite`,
  [`@keyframes floatBg${index}`]: {
    '0%, 100%': { transform: `rotate(${shape.rotate}deg) translateY(0)` },
    '50%':      { transform: `rotate(${shape.rotate + 5}deg) translateY(-15px)` },
  },
})

export const shapes = [
  { emoji: '🐾', size: 40, top: '5%',  left: '8%',  rotate: -15, opacity: 0.08 },
  { emoji: '🌿', size: 50, top: '15%', left: '88%', rotate: 20,  opacity: 0.1  },
  { emoji: '☁️', size: 60, top: '40%', left: '3%',  rotate: 0,   opacity: 0.12 },
  { emoji: '🌸', size: 32, top: '55%', left: '92%', rotate: -10, opacity: 0.1  },
  { emoji: '🐾', size: 36, top: '72%', left: '6%',  rotate: 25,  opacity: 0.08 },
  { emoji: '🌼', size: 42, top: '85%', left: '90%', rotate: 0,   opacity: 0.1  },
  { emoji: '🍃', size: 38, top: '92%', left: '45%', rotate: -20, opacity: 0.08 },
  { emoji: '🌿', size: 48, top: '28%', left: '50%', rotate: 10,  opacity: 0.06 },
]
