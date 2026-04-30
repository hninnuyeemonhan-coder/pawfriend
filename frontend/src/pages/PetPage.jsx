/** @jsxImportSource @emotion/react */
import { useState, useEffect } from 'react'
import api from '../api/axios'
import * as s from './PetPage.styles'
import PetDisplay from '../components/PetDisplay'

const stageInfo = {
  puppy: {
    label: 'Puppy',
    description: 'Your pet is a tiny, adorable puppy! Keep completing habits to help them grow big and strong.',
    nextStage: 'Teen (Level 4)',
    emoji: '🐶',
  },
  teen: {
    label: 'Teen',
    description: "Your pet is growing up fast! They're getting stronger with every streak you build.",
    nextStage: 'Adult (Level 8)',
    emoji: '🐕',
  },
  dog: {
    label: 'Adult',
    description: "Your pet is fully grown and so loyal! You've done an amazing job — they love you.",
    nextStage: null,
    emoji: '🦮',
  },
}

const emotionMessages = {
  happy:  "is thrilled! All habits done today! 🎉",
  normal: "is doing fine. Keep going! 💪",
  sad:    "misses you... Complete some habits! 😢",
}

// Time-of-day buckets — picks one of the 4 backgrounds based on the hour
function getTimeOfDay() {
  const hour = new Date().getHours()
  if (hour >= 5  && hour < 11) return 'morning'   // 5am – 11am
  if (hour >= 11 && hour < 16) return 'noon'      // 11am – 4pm
  if (hour >= 16 && hour < 20) return 'evening'   // 4pm – 8pm
  return 'night'                                  // 8pm – 5am
}

const timeLabels = {
  morning: '🌅 Morning',
  noon:    '☀️ Afternoon',
  evening: '🌇 Evening',
  night:   '🌙 Night',
}

export default function PetPage() {
  const [pet, setPet] = useState(null)
  const [loading, setLoading] = useState(true)
  const [equippedAccessories, setEquippedAccessories] = useState([])
  const [timeOfDay, setTimeOfDay] = useState(getTimeOfDay())

  useEffect(() => { loadPet() }, [])

  // Re-check time every 5 minutes so the background updates live as time passes
  useEffect(() => {
    const interval = setInterval(() => setTimeOfDay(getTimeOfDay()), 5 * 60 * 1000)
    return () => clearInterval(interval)
  }, [])

  const loadPet = async () => {
    try {
      const petRes = await api.get('/pet/status.php')
      setPet(petRes.data.pet)
    } catch (err) {
      console.error('Failed to load pet', err)
    }

    try {
      const accRes = await api.get('/accessories/list.php')
      const equipped = (accRes.data.accessories || []).filter(a => a.is_equipped)
      setEquippedAccessories(equipped)
    } catch (err) {
      console.error('Failed to load accessories', err)
    }

    setLoading(false)
  }

  if (loading) return <div css={s.loading}>Loading your pet... 🐾</div>
  if (!pet) return <div css={s.error}>Could not load pet data.</div>

  const info = stageInfo[pet.stage]
  const xpPercent = pet.xp_needed > 0 ? Math.min((pet.xp_progress / pet.xp_needed) * 100, 100) : 0

  return (
    <div>
      <h1 css={s.heading}>🐾 My Pet</h1>

      {/* Hero — background changes with time of day */}
      <div css={s.petHero(timeOfDay)}>
        <div css={s.heroOverlay(timeOfDay)} />

        {/* Time-of-day badge in the corner */}
        <div css={s.timeBadge(timeOfDay)}>{timeLabels[timeOfDay]}</div>

        {/* Top section: status text + progress bar */}
        <div css={s.petHeroContent}>
          <p css={s.emotionText(pet.emotion, timeOfDay)}>
            {pet.name} {emotionMessages[pet.emotion]}
          </p>
          <p css={s.progressText(timeOfDay)}>
            Today: {pet.habits_completed}/{pet.habits_total} habits completed
          </p>
          <div css={s.habitProgressTrack}>
            <div css={s.habitProgressFill(
              pet.habits_total > 0 ? (pet.habits_completed / pet.habits_total) * 100 : 0
            )} />
          </div>
        </div>

        {/* Pet — absolutely positioned to sit on the bed */}
        <div css={s.petPosition(pet.stage)}>
          <PetDisplay pet={pet} size="large" interactive={true} equippedAccessories={equippedAccessories} />
        </div>
      </div>

      {/* Pet info card — sits below the hero, always clearly readable */}
      <div css={s.petInfoCard}>
        <h2 css={s.petName}>{pet.name}</h2>
        <div css={s.petLevel}>
          <span css={s.petLevelBadge}>⭐ Level {pet.level}</span>
          <span css={s.petStageBadge(pet.stage)}>
            {info.emoji} {pet.stage === 'dog' ? 'Adult' : pet.stage}
          </span>
        </div>
        <p css={s.petInteractHint}>Tap your pet to play! 🐾</p>
      </div>

      {/* Stats cards */}
      <div css={s.statsGrid}>
        {[
          { label: 'Level',    value: pet.level, emoji: '⭐',     bg: 'var(--bgCard, #FFFBF0)', accent: '#F4E0AF' },
          { label: 'Total XP', value: pet.xp,    emoji: '✨',     bg: '#FEE8D6', accent: '#F9C0AB' },
          { label: 'Stage',    value: info.label, emoji: info.emoji, bg: '#FFFBF0', accent: '#799351' },
        ].map((stat, i) => (
          <div key={i} css={s.statCard(stat.bg, stat.accent)}>
            <div css={s.statEmoji}>{stat.emoji}</div>
            <div css={s.statValue}>{stat.value}</div>
            <div css={s.statLabel}>{stat.label}</div>
          </div>
        ))}
      </div>

      {/* XP Progress */}
      <div css={s.xpBox}>
        <div css={s.xpHeader}>
          <span css={s.xpTitle}>✨ XP to Next Level</span>
          <span css={s.xpCount}>{pet.xp_progress} / {pet.xp_needed} XP</span>
        </div>
        <div css={s.xpTrack}>
          <div css={s.xpFill(xpPercent)} />
        </div>
      </div>

      {/* Growth Stages */}
      <div css={s.stagesBox}>
        <h3 css={s.stagesHeading}>🌱 Growth Stages</h3>
        <p css={s.stagesDesc}>{info.description}</p>

        <div css={s.stagesRow}>
          {[
            { stage: 'puppy', file: 'puppy' },
            { stage: 'teen',  file: 'teen' },
            { stage: 'dog',   file: 'adult' },
          ].map(({ stage, file }) => (
            <div key={stage} css={s.stageItem(stage === pet.stage)}>
              <div css={s.stageCircle(stage === pet.stage)}>
                <img src={`/assets/pets/${file}-normal.png`} alt={stage} css={s.stageImage} />
              </div>
              <span css={s.stageLabel}>{stage === 'dog' ? 'Adult' : stage}</span>
            </div>
          ))}
        </div>

        {info.nextStage && (
          <p css={s.nextEvolution}>🌟 Next evolution: {info.nextStage}</p>
        )}
      </div>
    </div>
  )
}
