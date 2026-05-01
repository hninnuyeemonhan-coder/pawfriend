/** @jsxImportSource @emotion/react */
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import {
  FiTarget, FiTrendingUp, FiHeart, FiZap, FiSmile,
  FiBookOpen, FiDroplet, FiCoffee, FiMusic, FiAward, FiPlus
} from 'react-icons/fi'
import * as s from './HabitGuide.styles'

const benefits = [
  { icon: <FiTrendingUp />, title: 'Small Wins, Big Changes',    description: 'Tiny daily actions compound over time. Reading 10 pages a day means 15+ books a year!',               color: '#799351' },
  { icon: <FiZap />,        title: 'Mental Energy Saver',         description: 'When a habit becomes automatic, your brain saves willpower for bigger decisions.',                 color: '#E8A546' },
  { icon: <FiSmile />,      title: 'Better Mood, Less Stress',    description: 'Consistent routines reduce anxiety and give you a sense of control over your day.',               color: '#A1DD70' },
  { icon: <FiHeart />,      title: 'Physical Wellbeing',          description: 'Healthy habits like drinking water, sleeping on time, and moving boost your energy.',             color: '#F4A58A' },
  { icon: <FiAward />,      title: 'Confidence Builder',          description: 'Every completed habit is proof you can follow through. Self-trust grows daily.',                   color: '#E8C97E' },
  { icon: <FiTarget />,     title: 'Goal Achievement',            description: 'Big dreams happen through consistent small steps — habits turn dreams into done.',                color: '#355F2E' },
]

const tips = [
  { number: '1', title: 'Start Ridiculously Small', text: 'Want to read more? Start with ONE page a day. Want to exercise? Start with 2 minutes. Make it so easy you can\'t say no.', emoji: '🌱' },
  { number: '2', title: 'Attach It to Something',    text: 'Link your new habit to an existing one. "After I brush my teeth, I\'ll do 5 pushups." Your brain loves this.',             emoji: '🔗' },
  { number: '3', title: 'Track Your Streak',         text: 'Seeing a chain of completed days is motivating. Your pet in PawFriend grows stronger with every streak!',                  emoji: '🔥' },
  { number: '4', title: 'Be Kind When You Slip',     text: 'Missing a day doesn\'t ruin anything. Just don\'t miss two in a row — that\'s the one real rule.',                          emoji: '💛' },
]

const starterHabits = [
  { category: 'Health', color: '#799351', bgColor: '#E8F5E9',   icon: <FiDroplet />,  items: ['Drink a glass of water when you wake up', 'Take a 10-minute walk after lunch', 'Eat one piece of fruit a day', 'Stretch for 5 minutes before bed'] },
  { category: 'Mind',   color: '#355F2E', bgColor: '#F4E0AF50', icon: <FiBookOpen />, items: ['Read 1 page of a book daily', 'Write 3 things you\'re grateful for', 'Practice deep breathing for 2 minutes', 'Learn one new word each day'] },
  { category: 'Focus',  color: '#E8A546', bgColor: '#FFF3E0',   icon: <FiCoffee />,   items: ['No phone for the first 30 minutes of the day', 'Plan tomorrow before going to sleep', 'Do the hardest task first', 'Work in 25-minute focused chunks'] },
  { category: 'Joy',    color: '#F4A58A', bgColor: '#FEE8D6',   icon: <FiMusic />,    items: ['Listen to one song that makes you happy', 'Message a friend or family member', 'Step outside for 5 minutes of sunlight', 'Do something creative for 10 minutes'] },
]

export default function HabitGuide() {
  const { user } = useAuth()
  const ctaLink = user ? '/create-habit' : '/signup'
  const ctaLabel = user ? 'Create My First Habit' : 'Sign Up to Start'

  return (
    <div>
      {/* Hero */}
      <div css={s.hero}>
        <span css={s.heroDeco('15%', '8%',  32, 0.5)}>🌸</span>
        <span css={s.heroDeco('20%', '90%', 28, 0.5)}>🌿</span>
        <span css={s.heroDeco('85%', '10%', 28, 0.5)}>🌼</span>
        <span css={s.heroDeco('85%', '88%', 32, 0.5)}>🍃</span>

        <div css={s.heroEmoji}>🐾✨</div>
        <h1 css={s.heroTitle}>Start Your Habit Journey</h1>
        <p css={s.heroSubtitle}>
          Building good habits is like training a puppy — patient, consistent, and rewarding.
          Let's help you get started the right way! 🌿
        </p>
      </div>

      {/* Why build habits */}
      <section css={s.section}>
        <div css={s.sectionHeader}>
          <span css={s.sectionEmoji}>💡</span>
          <h2 css={s.sectionTitle}>Why Build Habits?</h2>
        </div>

        <div css={s.grid3}>
          {benefits.map((b, i) => (
            <div key={i} css={s.benefitCard(b.color)}>
              <div css={s.benefitIcon(b.color)}>{b.icon}</div>
              <h3 css={s.benefitTitle}>{b.title}</h3>
              <p css={s.benefitDesc}>{b.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How to start */}
      <section css={s.section}>
        <div css={s.sectionHeader}>
          <span css={s.sectionEmoji}>🚀</span>
          <h2 css={s.sectionTitle}>How to Actually Start</h2>
        </div>

        <div css={s.grid4}>
          {tips.map((tip) => (
            <div key={tip.number} css={s.tipCard}>
              <span css={s.tipBigNumber}>{tip.number}</span>
              <div css={s.tipEmoji}>{tip.emoji}</div>
              <h3 css={s.tipTitle}>{tip.title}</h3>
              <p css={s.tipText}>{tip.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Starter habits */}
      <section css={s.section}>
        <div css={s.sectionHeader}>
          <span css={s.sectionEmoji}>🌟</span>
          <h2 css={s.sectionTitle}>Great Habits to Try First</h2>
        </div>
        <p css={s.sectionSubtitle}>Pick just one or two from these categories. Don't overwhelm yourself!</p>

        <div css={s.grid3}>
          {starterHabits.map((cat) => (
            <div key={cat.category} css={s.starterCard(cat.bgColor, cat.color)}>
              <div css={s.starterHeader}>
                <div css={s.starterIcon(cat.color)}>{cat.icon}</div>
                <h3 css={s.starterTitle(cat.color)}>{cat.category}</h3>
              </div>

              <ul css={s.starterList}>
                {cat.items.map((item, i) => (
                  <li key={i} css={s.starterItem(cat.color, i === cat.items.length - 1)}>
                    <span css={s.starterCheck(cat.color)}>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Vision */}
      <section css={s.vision}>
        <span css={s.visionDecoTL}>🌿</span>
        <span css={s.visionDecoBR}>🐾</span>

        <div css={s.visionEmoji}>🌅</div>
        <h2 css={s.visionTitle}>Where You'll Be in a Year</h2>
        <p css={s.visionText}>
          Just 15 minutes of a new habit every day adds up to over{' '}
          <strong css={s.visionAccent}>90 hours</strong> in a year.
          That's enough time to learn a new language, read 20 books, or transform your fitness.
          Your future self will thank you for starting today. 🌟
        </p>
      </section>

      {/* CTA */}
      <div css={s.cta}>
        <div css={s.ctaEmoji}>🐶💪</div>
        <h2 css={s.ctaTitle}>Ready to Start?</h2>
        <p css={s.ctaSubtitle}>
          Pick one tiny habit. Just one. Your puppy is waiting to grow with you!
        </p>
        <Link to={ctaLink} css={s.ctaBtn}>
          <FiPlus /> {ctaLabel}
        </Link>
      </div>
    </div>
  )
}
