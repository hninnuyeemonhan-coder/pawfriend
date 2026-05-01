/** @jsxImportSource @emotion/react */
import { useState, useEffect } from 'react'
import api from '../api/axios'
import theme from '../styles/theme'
import * as s from './Accessories.styles'

const typeLabels = {
  hat: '🎩 Hats',
  collar: '📿 Collars',
  toy: '🧸 Toys',
}

const unlockLabels = {
  level: 'Level',
  streak: 'Day Streak',
  completions: 'Completions',
  achievement: 'Achievement',
}

function getAccessoryPreviewPath(imageUrl) {
  return `/assets/pets/accessories/${imageUrl}.png`
}

export default function Accessories() {
  const [accessories, setAccessories] = useState([])
  const [loading, setLoading] = useState(true)
  const [equipping, setEquipping] = useState(null)
  const [petStage, setPetStage] = useState('puppy')

  useEffect(() => { loadData() }, [])

  const loadData = async () => {
    try {
      const [accRes, petRes] = await Promise.all([
        api.get('/accessories/list.php'),
        api.get('/pet/status.php'),
      ])
      setAccessories(accRes.data.accessories || [])
      setPetStage(petRes.data.pet?.stage || 'puppy')
    } catch (err) {
      console.error('Failed to load accessories')
    } finally {
      setLoading(false)
    }
  }

  const handleEquip = async (accessoryId, currentlyEquipped) => {
    setEquipping(accessoryId)
    try {
      await api.post('/accessories/equip.php', {
        accessory_id: accessoryId,
        equip: !currentlyEquipped,
      })
      loadData()
    } catch (err) {
      alert(err.response?.data?.error || 'Failed to equip')
    } finally {
      setEquipping(null)
    }
  }

  if (loading) return <div css={s.loading}>Loading accessories... 🎁</div>

  const grouped = { hat: [], collar: [], toy: [] }
  accessories.forEach(a => { if (grouped[a.type]) grouped[a.type].push(a) })

  const unlockedCount = accessories.filter(a => a.unlocked).length
  const equippedCount = accessories.filter(a => a.is_equipped).length

  const summaryItems = [
    { label: 'Total Items', value: accessories.length, emoji: '🎁', accent: theme.colors.accent },
    { label: 'Unlocked',    value: unlockedCount,      emoji: '🔓', accent: theme.colors.primary },
    { label: 'Equipped',    value: equippedCount,      emoji: '✨', accent: theme.colors.secondary },
  ]

  return (
    <div>
      <h1 css={s.title}>🎁 Pet Accessories</h1>

      <div css={s.summaryGrid}>
        {summaryItems.map((item, i) => (
          <div key={i} css={s.summaryCard(item.accent)}>
            <div css={s.summaryEmoji}>{item.emoji}</div>
            <div css={s.summaryValue}>{item.value}</div>
            <div css={s.summaryLabel}>{item.label}</div>
          </div>
        ))}
      </div>

      {Object.entries(grouped).map(([type, items]) => {
        if (type === 'collar' && petStage === 'puppy') {
          return (
            <div key={type} css={s.sectionWrap}>
              <h2 css={s.sectionHeading}>
                {typeLabels[type]}
                <span css={s.puppyHint}>(Available at Teen stage)</span>
              </h2>
              <div css={s.puppyMsg}>
                🐶 Your puppy is too small for collars! Grow to Teen to unlock them.
              </div>
            </div>
          )
        }

        return (
          <div key={type} css={s.sectionWrap}>
            <h2 css={s.sectionHeading}>{typeLabels[type]}</h2>

            <div css={s.grid}>
              {items.map(acc => (
                <div key={acc.id} css={s.card(acc.is_equipped, acc.unlocked)}>
                  <div css={s.imageBox}>
                    <img src={getAccessoryPreviewPath(acc.image_url)} alt={acc.name}
                      css={s.image(acc.unlocked)} />
                    {!acc.unlocked && <div css={s.lockOverlay}>🔒</div>}
                  </div>

                  <h3 css={s.itemName}>{acc.name}</h3>
                  <p css={s.itemDesc}>{acc.description}</p>

                  {acc.unlocked ? (
                    <button onClick={() => handleEquip(acc.id, acc.is_equipped)}
                      disabled={equipping === acc.id}
                      css={s.equipBtn(acc.is_equipped)}>
                      {equipping === acc.id ? '...' : acc.is_equipped ? 'Remove' : 'Equip'}
                    </button>
                  ) : (
                    <span css={s.lockedChip}>
                      🔒 {acc.unlock_value} {unlockLabels[acc.unlock_type]}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}
