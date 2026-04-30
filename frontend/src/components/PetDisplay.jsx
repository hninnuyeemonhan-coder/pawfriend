/** @jsxImportSource @emotion/react */
import { useState, useEffect, useRef } from 'react'
import theme from '../styles/theme'

const stageFileNames = {
  puppy: 'puppy',
  teen: 'teen',
  dog: 'adult',
}

function getPartPath(stage, emotion, part) {
  const stageName = stageFileNames[stage] || stage
  return `/assets/pets/parts/${stageName}-${emotion}-${part}.png`
}

// Build the accessory image path based on pet stage and accessory type
// e.g. type='hat', image_url='party-hat', stage='puppy' → /assets/pets/accessories/hats/puppy-party-hat.png
function getAccessoryPath(stage, type, imageUrl) {
  const stageName = stageFileNames[stage] || stage
  const folder = type === 'hat' ? 'hats' : type === 'collar' ? 'collars' : 'toys'
  return `/assets/pets/accessories/${folder}/${stageName}-${imageUrl}.png`
}

// Floating custom heart images
function FloatingHearts({ show }) {
  if (!show) return null
  const hearts = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    left: 10 + Math.random() * 80,
    delay: Math.random() * 3,
    duration: 3 + Math.random() * 3,
    size: 20 + Math.random() * 25,
    img: i % 2 === 0 ? '/assets/pets/hearts1.png' : '/assets/pets/hearts2.png',
    rotate: Math.random() * 40 - 20,
  }))
  return (
    <div css={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden', borderRadius: '50%', zIndex: 10 }}>
      {hearts.map(h => (
        <img key={h.id} src={h.img} alt="" css={{
          position: 'absolute', bottom: '-20px', left: `${h.left}%`,
          width: `${h.size}px`, height: `${h.size}px`, objectFit: 'contain',
          animation: `floatHeart ${h.duration}s ease-in-out ${h.delay}s infinite`, opacity: 0,
          transform: `rotate(${h.rotate}deg)`,
          '@keyframes floatHeart': {
            '0%': { transform: `translateY(0) scale(0) rotate(${h.rotate}deg)`, opacity: 0 },
            '15%': { opacity: 0.9, transform: `translateY(-30px) scale(1) rotate(${h.rotate}deg)` },
            '70%': { opacity: 0.6 },
            '100%': { transform: `translateY(-160px) scale(0.4) rotate(${h.rotate + 20}deg)`, opacity: 0 },
          },
        }} />
      ))}
    </div>
  )
}

// Sad teardrops
function SadTears({ show }) {
  if (!show) return null
  return (
    <div css={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden', borderRadius: '50%', zIndex: 10 }}>
      {Array.from({ length: 4 }, (_, i) => (
        <span key={i} css={{
          position: 'absolute', top: '-10px', left: `${20 + i * 20}%`, fontSize: '10px', opacity: 0,
          animation: `rainDrop 3s linear ${i * 0.7}s infinite`,
          '@keyframes rainDrop': {
            '0%': { transform: 'translateY(0)', opacity: 0 },
            '10%': { opacity: 0.5 },
            '90%': { opacity: 0.3 },
            '100%': { transform: 'translateY(150px)', opacity: 0 },
          },
        }}>💧</span>
      ))}
    </div>
  )
}

// Click burst with custom heart images
function ClickBurst({ bursts }) {
  return (
    <>
      {bursts.map(burst => (
        <div key={burst.id} css={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'visible', zIndex: 10 }}>
          {burst.hearts.map((h, i) => (
            h.isImage ? (
              <img key={i} src={h.img} alt="" css={{
                position: 'absolute', left: `${h.x}%`, top: `${h.y}%`,
                width: `${h.size}px`, height: `${h.size}px`, objectFit: 'contain',
                animation: 'burstHeart 1.5s ease-out forwards',
                '@keyframes burstHeart': {
                  '0%': { transform: 'scale(0) translate(0, 0)', opacity: 1 },
                  '50%': { transform: `scale(1.2) translate(${h.dx}px, ${h.dy}px)`, opacity: 1 },
                  '100%': { transform: `scale(0.3) translate(${h.dx * 2}px, ${h.dy * 2}px)`, opacity: 0 },
                },
              }} />
            ) : (
              <span key={i} css={{
                position: 'absolute', left: `${h.x}%`, top: `${h.y}%`, fontSize: `${h.size}px`,
                animation: 'burstHeart 1.5s ease-out forwards',
                '@keyframes burstHeart': {
                  '0%': { transform: 'scale(0) translate(0, 0)', opacity: 1 },
                  '50%': { transform: `scale(1.2) translate(${h.dx}px, ${h.dy}px)`, opacity: 1 },
                  '100%': { transform: `scale(0.3) translate(${h.dx * 2}px, ${h.dy * 2}px)`, opacity: 0 },
                },
              }}>{h.emoji}</span>
            )
          ))}
        </div>
      ))}
    </>
  )
}

export default function PetDisplay({ pet, size = 'medium', interactive = false, equippedAccessories = [] }) {
  const [clicked, setClicked] = useState(false)
  const [bursts, setBursts] = useState([])
  const [isBlinking, setIsBlinking] = useState(false)
  const [earTwitch, setEarTwitch] = useState(false)
  const audioRef = useRef(null)

  const sizes = {
    small: '120px',
    medium: '200px',
    large: '350px',
  }

  useEffect(() => {
    if (!interactive) return
    const interval = setInterval(() => {
      setIsBlinking(true)
      setTimeout(() => setIsBlinking(false), 150)
    }, 3000 + Math.random() * 2000)
    return () => clearInterval(interval)
  }, [interactive])

  useEffect(() => {
    if (!interactive) return
    const interval = setInterval(() => {
      setEarTwitch(true)
      setTimeout(() => setEarTwitch(false), 800)
    }, 5000 + Math.random() * 3000)
    return () => clearInterval(interval)
  }, [interactive])

  useEffect(() => {
    if (interactive) {
      audioRef.current = new Audio('/assets/pets/bark.mp3')
      audioRef.current.volume = 0.5
    }
  }, [interactive])

  const handleClick = () => {
    if (!interactive) return
    setClicked(true)
    setTimeout(() => setClicked(false), 600)

    if (audioRef.current) {
      audioRef.current.currentTime = 0
      audioRef.current.play().catch(() => {})
    }

    const isSad = pet.emotion === 'sad'
    const newBurst = {
      id: Date.now(),
      hearts: Array.from({ length: 10 }, () => ({
        x: 20 + Math.random() * 60, y: 20 + Math.random() * 60,
        dx: (Math.random() - 0.5) * 100, dy: -30 - Math.random() * 80,
        size: isSad ? (16 + Math.random() * 14) : (20 + Math.random() * 20),
        isImage: !isSad,
        img: Math.random() > 0.5 ? '/assets/pets/hearts1.png' : '/assets/pets/hearts2.png',
        emoji: ['😢', '💧', '🥺'][Math.floor(Math.random() * 3)],
      })),
    }
    setBursts(prev => [...prev, newBurst])
    setTimeout(() => setBursts(prev => prev.filter(b => b.id !== newBurst.id)), 2000)
  }

  if (!pet) return null

  const isHappy = pet.emotion === 'happy'
  const isSad = pet.emotion === 'sad'
  const stage = pet.stage
  const emotion = pet.emotion

  const layerStyle = {
    position: 'absolute',
    top: 0, left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    pointerEvents: 'none',
  }

  // Helper: filter accessories by type.
  // Puppies don't wear collars — skip them at the puppy stage.
  const accessoriesByType = (type) => {
    if (type === 'collar' && stage === 'puppy') return []
    return equippedAccessories.filter(a => a.type === type)
  }

  // Non-interactive: simple single image
  if (!interactive) {
    const fullImage = `/assets/pets/${stageFileNames[stage] || stage}-${emotion}.png`
    return (
      <div css={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: theme.spacing.md }}>
        <div css={{
          width: sizes[size], height: sizes[size], borderRadius: '50%', overflow: 'hidden',
          background: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center',
          animation: isHappy ? 'happyBounceSimple 1s ease-in-out infinite' : 'none',
          '@keyframes happyBounceSimple': {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-10px)' },
          },
        }}>
          <img src={fullImage} alt={pet.name} css={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        </div>
        {size !== 'small' && (
          <div css={{ textAlign: 'center' }}>
            <p css={{ fontWeight: 600, fontSize: '18px' }}>{pet.name}</p>
            <p css={{ fontSize: '13px', color: theme.colors.textLight }}>
              Level {pet.level} • {pet.stage.charAt(0).toUpperCase() + pet.stage.slice(1)}
            </p>
          </div>
        )}
      </div>
    )
  }

  // Interactive layered version
  return (
    <div css={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: theme.spacing.md }}>
      {/* Outer container */}
      <div css={{ position: 'relative', width: sizes[size], height: sizes[size] }}>
        {/* Shadow underneath — stays still while pet breathes */}
        <div css={{
          position: 'absolute',
          bottom: '8%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '60%',
          height: '8%',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.05) 60%, transparent 100%)',
          filter: 'blur(2px)',
          zIndex: 0,
        }} />

        {/* Pet container with aura */}
        <div
          onClick={handleClick}
          css={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            overflow: 'visible',
            background: 'transparent',
            position: 'relative',
            cursor: 'pointer',
            userSelect: 'none',
            zIndex: 1,
            filter: isHappy
              ? `drop-shadow(0 0 20px rgba(255, 215, 0, 0.4)) drop-shadow(0 0 40px rgba(255, 215, 0, 0.2)) drop-shadow(0 0 60px rgba(255, 215, 0, 0.1))`
              : isSad
              ? `drop-shadow(0 0 15px rgba(100, 100, 180, 0.3)) drop-shadow(0 0 30px rgba(100, 100, 180, 0.15))`
              : `drop-shadow(0 0 10px rgba(255, 215, 0, 0.15)) drop-shadow(0 0 20px rgba(255, 215, 0, 0.05))`,
            transition: 'filter 0.3s ease',
          }}
        >
          {/* Inner wrapper for click squish — applies to everything */}
          <div css={{
            position: 'absolute', inset: 0,
            animation: clicked ? 'squish 0.6s ease-out' : 'none',
            '@keyframes squish': {
              '0%': { transform: 'scale(1, 1)' },
              '20%': { transform: 'scale(0.9, 1.08)' },
              '40%': { transform: 'scale(1.06, 0.94)' },
              '60%': { transform: 'scale(0.97, 1.03)' },
              '80%': { transform: 'scale(1.01, 0.99)' },
              '100%': { transform: 'scale(1, 1)' },
            },
          }}>
            {/* Body — subtle breathing scale animation */}
            <img src={getPartPath(stage, emotion, 'body')} alt="" css={{
              ...layerStyle,
              transformOrigin: '50% 85%',
              animation: isSad
                ? 'bodyBreathSad 4s ease-in-out infinite'
                : isHappy
                ? 'bodyBreathHappy 2.5s ease-in-out infinite'
                : 'bodyBreath 3.5s ease-in-out infinite',
              '@keyframes bodyBreath': {
                '0%, 100%': { transform: 'scale(1)' },
                '50%': { transform: 'scale(1.015)' },
              },
              '@keyframes bodyBreathHappy': {
                '0%, 100%': { transform: 'scale(1)' },
                '50%': { transform: 'scale(1.025)' },
              },
              '@keyframes bodyBreathSad': {
                '0%, 100%': { transform: 'scale(1)' },
                '50%': { transform: 'scale(0.99)' },
              },
            }} />

            {/* Collar — sits between body and head (skipped for puppies) */}
            {accessoriesByType('collar').map(a => (
              <img
                key={`collar-${a.id}`}
                src={getAccessoryPath(stage, 'collar', a.image_url)}
                alt=""
                css={layerStyle}
              />
            ))}

            {/* Head — stays still, no breathing animation */}
            <img src={getPartPath(stage, emotion, 'head')} alt="" css={layerStyle} />
            <img src={getPartPath(stage, emotion, 'ear-left')} alt="" css={{
              ...layerStyle,
              ...(stage === 'puppy' ? {
                transformOrigin: '65% 90%',
                transition: 'transform 0.4s ease-in-out',
                transform: earTwitch ? 'rotate(-3deg)' : 'rotate(0deg)',
              } : {}),
            }} />
            <img src={getPartPath(stage, emotion, 'ear-right')} alt="" css={{
              ...layerStyle,
              ...(stage === 'puppy' ? {
                transformOrigin: '35% 90%',
                transition: 'transform 0.4s ease-in-out',
                transform: earTwitch ? 'rotate(3deg)' : 'rotate(0deg)',
              } : {}),
            }} />
            <img
              src={getPartPath(stage, emotion, isBlinking ? 'eyes-closed' : 'eyes-open')}
              alt=""
              css={layerStyle}
            />
            <img src={getPartPath(stage, emotion, 'mouth')} alt="" css={layerStyle} />

            {/* Hat — sits on top of the head, after mouth */}
            {accessoriesByType('hat').map(a => (
              <img
                key={`hat-${a.id}`}
                src={getAccessoryPath(stage, 'hat', a.image_url)}
                alt=""
                css={layerStyle}
              />
            ))}

            {/* Toy — topmost layer */}
            {accessoriesByType('toy').map(a => (
              <img
                key={`toy-${a.id}`}
                src={getAccessoryPath(stage, 'toy', a.image_url)}
                alt=""
                css={layerStyle}
              />
            ))}
          </div>

          {/* Effects */}
          <FloatingHearts show={!isSad} />
          <SadTears show={isSad} />
          <ClickBurst bursts={bursts} />
        </div>
      </div>

      <div css={{ textAlign: 'center' }}>
        <p css={{ fontWeight: 600, fontSize: '18px' }}>{pet.name}</p>
        <p css={{ fontSize: '13px', color: theme.colors.textLight }}>
          Level {pet.level} • {pet.stage.charAt(0).toUpperCase() + pet.stage.slice(1)}
        </p>
        <p css={{ fontSize: '12px', color: theme.colors.textLight, marginTop: '4px', opacity: 0.6 }}>
          Tap to interact!
        </p>
      </div>
    </div>
  )
}
