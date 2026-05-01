/** @jsxImportSource @emotion/react */
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { FiPlus } from 'react-icons/fi'
import * as s from './Wellness.styles'

const timeMethods = [
  { name: 'Pomodoro Technique', emoji: '🍅', color: '#EE4E4E', bgColor: '#FEE8D6', description: 'Work for 25 minutes, then rest for 5. After 4 rounds, take a longer 15-30 minute break.', bestFor: 'Studying, deep focus work, assignments' },
  { name: 'Time Blocking',      emoji: '📅', color: '#799351', bgColor: '#E8F5E9', description: 'Block out specific hours in your calendar for specific tasks. Treat them like appointments with yourself.', bestFor: 'Managing multiple projects, busy schedules' },
  { name: 'Eat the Frog',       emoji: '🐸', color: '#355F2E', bgColor: '#F4E0AF50', description: 'Do your hardest or most dreaded task FIRST thing in the morning. Everything else feels easier after!', bestFor: 'Procrastinators, morning people' },
  { name: '2-Minute Rule',      emoji: '⚡', color: '#E8A546', bgColor: '#FFF3E0', description: 'If a task takes less than 2 minutes, do it now. Don\'t let tiny tasks pile up into a mountain.', bestFor: 'Inbox zero, small chores, quick replies' },
]

const dailyRoutine = [
  { time: 'Morning',   emoji: '🌅', color: '#E8A546', items: [
    { icon: '💧', text: 'Drink water as soon as you wake up' },
    { icon: '☀️', text: 'Get natural sunlight within 30 minutes' },
    { icon: '📝', text: 'Write down your top 3 tasks for today' },
    { icon: '🚫', text: 'Avoid your phone for the first 30 minutes' },
  ]},
  { time: 'Afternoon', emoji: '☀️', color: '#F4A58A', items: [
    { icon: '🍽️', text: 'Eat lunch away from your desk' },
    { icon: '🚶', text: 'Take a 10-minute walk to reset' },
    { icon: '🔕', text: 'Do focused work in blocks, no notifications' },
    { icon: '💪', text: 'Stretch every hour to avoid stiffness' },
  ]},
  { time: 'Evening',   emoji: '🌙', color: '#355F2E', items: [
    { icon: '📵', text: 'Stop screens 1 hour before bed' },
    { icon: '📖', text: 'Read something relaxing, not work-related' },
    { icon: '🛁', text: 'Do a calming ritual (shower, skincare, tea)' },
    { icon: '📋', text: 'Plan tomorrow before sleeping' },
  ]},
]

const stressReliefActions = [
  { emoji: '🌬️', title: '4-7-8 Breathing', text: 'Breathe in for 4 seconds, hold for 7, exhale for 8. Repeat 4 times. Calms nerves fast.' },
  { emoji: '🚶', title: 'Quick Walk',       text: 'Even 5 minutes outside changes your mood. Movement + fresh air = instant reset.' },
  { emoji: '🎵', title: 'Music Break',      text: 'Put on ONE song that makes you happy. Dance if nobody\'s watching!' },
  { emoji: '💧', title: 'Cold Water',       text: 'Splash your face with cold water. It triggers a calming reflex in your body.' },
  { emoji: '📞', title: 'Talk It Out',      text: 'Call a friend or family member. Don\'t carry heavy feelings alone.' },
  { emoji: '✍️', title: 'Brain Dump',       text: 'Write everything swirling in your head onto paper. No filter, no grammar — just get it out.' },
]

const pillars = [
  { title: 'Sleep',    emoji: '😴', color: '#355F2E', bgColor: '#F4E0AF50', tips: ['Aim for 7-9 hours every night', 'Keep the same sleep and wake times', 'Cool, dark, quiet room works best', 'No caffeine after 2pm'] },
  { title: 'Food',     emoji: '🥗', color: '#799351', bgColor: '#E8F5E9', tips: ['Don\'t skip breakfast on busy days', 'Keep healthy snacks at your desk', 'Drink water before coffee', 'Eat slowly, away from screens'] },
  { title: 'Movement', emoji: '🏃', color: '#EE4E4E', bgColor: '#FEE8D6', tips: ['Stand and stretch every hour', 'Take stairs when you can', 'Walk during phone calls', '20 minutes of any movement daily'] },
  { title: 'Rest',     emoji: '🧘', color: '#E8A546', bgColor: '#FFF3E0', tips: ['Schedule breaks — don\'t just hope for them', 'One full day off screens per week', 'Do nothing sometimes. Seriously.', 'Hobbies ≠ productivity (that\'s the point)'] },
]

const studentTips = [
  { icon: '📚', text: 'Review notes within 24 hours — memory drops sharply after that' },
  { icon: '🎯', text: 'Study in 25-50 minute chunks, not 4-hour marathons' },
  { icon: '🔄', text: 'Active recall (quizzing yourself) beats re-reading every time' },
  { icon: '📍', text: 'Always study in the same quiet spot — your brain learns to focus there' },
  { icon: '🤝', text: 'Teach a concept to someone else — it reveals what you don\'t know' },
]

const workerTips = [
  { icon: '🚦', text: 'Triage your email — not everything needs a reply right now' },
  { icon: '📵', text: 'Set "deep work" hours with notifications OFF' },
  { icon: '🗓️', text: 'Block time for unplanned interruptions — they will happen' },
  { icon: '🛑', text: 'Learn to say "I\'ll get back to you" instead of auto-yes' },
  { icon: '🏠', text: 'When work ends, close the laptop. Rest is part of the job.' },
]

export default function Wellness() {
  const { user } = useAuth()
  const ctaLink = user ? '/create-habit' : '/signup'

  return (
    <div>
      {/* Hero */}
      <div css={s.hero}>
        <span css={s.deco('15%', '10%', 36, 0.4)}>🌿</span>
        <span css={s.deco('20%', null, 32, 0.4)} style={{ right: '12%' }}>🌸</span>
        <span css={s.deco(null, '12%', 32, 0.4)} style={{ bottom: '15%' }}>🍃</span>
        <span css={s.deco(null, null, 36, 0.4)} style={{ bottom: '15%', right: '10%' }}>🌼</span>

        <div css={s.heroEmoji}>🌿🐾</div>
        <h1 css={s.heroTitle}>Balance & Wellness</h1>
        <p css={s.heroSubtitle}>
          Whether you're juggling assignments or deadlines, taking care of yourself isn't optional —
          it's what makes everything else possible. 🌱
        </p>
      </div>

      {/* Time management methods */}
      <section css={s.section}>
        <div css={s.sectionHeader}>
          <span css={s.sectionEmoji}>⏰</span>
          <h2 css={s.sectionTitle}>Time Management Methods</h2>
        </div>
        <p css={s.sectionSubtitle}>
          There's no one-size-fits-all. Try a few and see what fits your brain.
        </p>

        <div css={s.grid('280px')}>
          {timeMethods.map((m) => (
            <div key={m.name} css={s.timeCard(m.bgColor, m.color)}>
              <div css={s.timeCardHeader}>
                <span css={s.timeCardEmoji}>{m.emoji}</span>
                <h3 css={s.timeCardTitle(m.color)}>{m.name}</h3>
              </div>
              <p css={s.timeCardDesc}>{m.description}</p>
              <div css={s.timeCardBest(m.color)}>Best for: {m.bestFor}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Daily routine */}
      <section css={s.section}>
        <div css={s.sectionHeader}>
          <span css={s.sectionEmoji}>📆</span>
          <h2 css={s.sectionTitle}>A Balanced Day Looks Like...</h2>
        </div>

        <div css={s.grid('280px')}>
          {dailyRoutine.map((block) => (
            <div key={block.time} css={s.routineCard(block.color)}>
              <div css={s.routineHeader}>
                <span css={s.routineEmoji}>{block.emoji}</span>
                <h3 css={s.routineTitle(block.color)}>{block.time}</h3>
              </div>
              <ul css={s.list}>
                {block.items.map((item, i) => (
                  <li key={i} css={s.routineItem(i === block.items.length - 1)}>
                    <span css={s.routineIcon}>{item.icon}</span>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Four pillars */}
      <section css={s.section}>
        <div css={s.sectionHeader}>
          <span css={s.sectionEmoji}>🏛️</span>
          <h2 css={s.sectionTitle}>The Four Pillars</h2>
        </div>

        <div css={s.grid('240px')}>
          {pillars.map((p) => (
            <div key={p.title} css={s.pillarCard(p.bgColor, p.color)}>
              <div css={s.pillarHead}>
                <div css={s.pillarEmoji}>{p.emoji}</div>
                <h3 css={s.pillarTitle(p.color)}>{p.title}</h3>
              </div>
              <ul css={s.list}>
                {p.tips.map((tip, i) => (
                  <li key={i} css={s.pillarItem(p.color)}>
                    <span css={s.pillarBullet(p.color)}>•</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Stress relief */}
      <section css={s.section}>
        <div css={s.sectionHeader}>
          <span css={s.sectionEmoji}>🌊</span>
          <h2 css={s.sectionTitle}>Stress Relief in Minutes</h2>
        </div>
        <p css={s.sectionSubtitle}>
          Quick things you can do right now when stress hits.
        </p>

        <div css={s.grid('220px')}>
          {stressReliefActions.map((a, i) => (
            <div key={i} css={s.reliefCard}>
              <div css={s.reliefEmoji}>{a.emoji}</div>
              <h3 css={s.reliefTitle}>{a.title}</h3>
              <p css={s.reliefText}>{a.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Students vs workers */}
      <section css={s.section}>
        <div css={s.sectionHeader}>
          <span css={s.sectionEmoji}>🎯</span>
          <h2 css={s.sectionTitle}>Tailored Tips</h2>
        </div>

        <div css={s.grid('320px')}>
          <div css={s.tailoredCard('#799351')}>
            <div css={s.tailoredHeader}>
              <span css={s.tailoredEmoji}>🎓</span>
              <h3 css={s.tailoredTitle}>For Students</h3>
            </div>
            <ul css={s.list}>
              {studentTips.map((t, i) => (
                <li key={i} css={s.tailoredItem(i === studentTips.length - 1)}>
                  <span css={s.tailoredIcon}>{t.icon}</span>
                  <span>{t.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div css={s.tailoredCard('#F9C0AB')}>
            <div css={s.tailoredHeader}>
              <span css={s.tailoredEmoji}>💼</span>
              <h3 css={s.tailoredTitle}>For Workers</h3>
            </div>
            <ul css={s.list}>
              {workerTips.map((t, i) => (
                <li key={i} css={s.tailoredItem(i === workerTips.length - 1)}>
                  <span css={s.tailoredIcon}>{t.icon}</span>
                  <span>{t.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <div css={s.cta}>
        <div css={s.ctaEmoji}>🐾💚</div>
        <h2 css={s.ctaTitle}>Turn These Into Habits</h2>
        <p css={s.ctaText}>
          Reading tips is easy — doing them is the hard part. Pick ONE thing from this page and turn it into a daily habit.
        </p>
        <Link to={ctaLink} css={s.ctaBtn}>
          <FiPlus /> {user ? 'Turn a Tip Into a Habit' : 'Get Started'}
        </Link>
      </div>
    </div>
  )
}
