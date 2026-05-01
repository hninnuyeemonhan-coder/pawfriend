/** @jsxImportSource @emotion/react */
import { Link } from 'react-router-dom'
import theme from '../styles/theme'
import * as s from './Landing.styles'

const featureCards = [
  { emoji: '✅', title: 'Track Daily Habits', desc: 'Custom habits with flexible scheduling. Morning routines, evening wind-downs, whatever fits your life.', bg: theme.colors.bgCard,  accent: theme.colors.primary },
  { emoji: '🔥', title: 'Build Streaks',      desc: 'Streaks keep you motivated. Watch your consistency grow day by day and beat your records.',     bg: theme.colors.bgWarm,  accent: theme.colors.secondary },
  { emoji: '🐣', title: 'Grow Your Pet',      desc: 'Your puppy evolves as you keep up. From tiny pup to loyal companion — your progress is their growth!', bg: theme.colors.accent,  accent: theme.colors.primaryDark },
]

export default function Landing() {
  return (
    <div css={s.page}>
      {/* Decorations */}
      <div css={s.decorWrap}>
        <div css={s.decorCircle1} />
        <div css={s.decorCircle2} />
        <div css={s.decorCircle3} />
        <span css={s.floatA}>🌿</span>
        <span css={s.floatB}>🌸</span>
        <span css={s.floatC}>🐾</span>
        <span css={s.floatD}>🌼</span>
      </div>

      {/* Header */}
      <header css={s.header}>
        <h1 css={s.logo}>
          <span css={s.logoPaw}>🐾</span>
          <span css={s.logoAccent}>Paw</span>Friend
        </h1>

        <nav css={s.navLinks}>
          <Link to="/habit-guide" css={s.navLink}>Habit Guide</Link>
          <Link to="/wellness" css={s.navLink}>Wellness</Link>
        </nav>

        <div css={s.authGroup}>
          <Link to="/login" css={s.loginBtn}>Log In</Link>
          <Link to="/signup" css={s.signupBtn}>Get Started</Link>
        </div>
      </header>

      {/* Hero */}
      <section css={s.hero}>
        <img src="/assets/puppy-face.png" alt="PawFriend puppy" css={s.heroImage} />
        <h2 css={s.heroTitle}>
          Build Better Habits.<br />
          <span css={s.heroTitleAccent}>Grow Your Puppy.</span>
        </h2>
        <p css={s.heroSubtitle}>
          Turn your daily habits into a cozy adventure. Complete tasks, build streaks,
          and watch your golden retriever grow from tiny puppy to loyal companion! 🌿
        </p>
        <div css={s.ctaGroup}>
          <Link to="/signup" css={s.ctaPrimary}>Start Your Journey 🐾</Link>
          <Link to="/habit-guide" css={s.ctaSecondary}>Learn More</Link>
        </div>
      </section>

      {/* Features */}
      <section css={s.features}>
        {featureCards.map((f, i) => (
          <div key={i} css={s.featureCard(f.bg, f.accent)}>
            <div css={s.featureEmoji}>{f.emoji}</div>
            <h3 css={s.featureTitle}>{f.title}</h3>
            <p css={s.featureDesc}>{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Resources */}
      <section css={s.resources}>
        <h2 css={s.resourcesTitle}>Free Resources 🌱</h2>
        <p css={s.resourcesSubtitle}>No sign-up needed — take a peek at what we offer!</p>

        <div css={s.resourcesGrid}>
          <Link to="/habit-guide" css={s.resourceCardA}>
            <div css={s.resourceEmoji}>📖</div>
            <h3 css={s.resourceTitle}>Habit Guide</h3>
            <p css={s.resourceDesc}>
              New to building habits? Learn the science, get starter suggestions, and
              discover how small daily actions lead to big changes.
            </p>
            <p css={s.resourceLinkA}>Read the guide →</p>
          </Link>

          <Link to="/wellness" css={s.resourceCardB}>
            <div css={s.resourceEmoji}>🌿</div>
            <h3 css={s.resourceTitle}>Balance & Wellness</h3>
            <p css={s.resourceDesc}>
              Tips on time management, stress relief, sleep, and daily balance — made for
              students and workers who want to feel good and get things done.
            </p>
            <p css={s.resourceLinkB}>Explore wellness →</p>
          </Link>
        </div>
      </section>

      <footer css={s.footer}>
        <div css={s.footerInner}>
          {/* Logo centered at top */}
          <div css={s.footerBrand}>
            <img src="/assets/logo.png" alt="PawFriend" css={s.footerLogo} />
            <p css={s.footerTagline}>
              Build habits. Grow your puppy. 🐾
            </p>
          </div>

          {/* Link columns */}
          <div css={s.footerLinks}>
            <div css={s.footerColumn}>
              <h4 css={s.footerHeading}>Explore</h4>
              <Link to="/habit-guide" css={s.footerLink}>Habit Guide</Link>
              <Link to="/wellness"    css={s.footerLink}>Wellness</Link>
              <Link to="/signup"      css={s.footerLink}>Sign Up</Link>
              <Link to="/login"       css={s.footerLink}>Log In</Link>
            </div>

            <div css={s.footerColumn}>
              <h4 css={s.footerHeading}>Features</h4>
              <span css={s.footerItem}>🌱 Habit Tracking</span>
              <span css={s.footerItem}>🐶 Virtual Pet</span>
              <span css={s.footerItem}>🔥 Streak Building</span>
              <span css={s.footerItem}>💭 Mood Journal</span>
            </div>

            <div css={s.footerColumn}>
              <h4 css={s.footerHeading}>About</h4>
              <span css={s.footerItem}>🎓 University Project</span>
              <span css={s.footerItem}>📍 Northumbria University</span>
              <span css={s.footerItem}>💚 Made with love</span>
            </div>

            <div css={s.footerColumn}>
              <h4 css={s.footerHeading}>Resources</h4>
              <a href="#top" css={s.footerLink}>Back to top ↑</a>
              <span css={s.footerItem}>🔒 Your data is private</span>
              <span css={s.footerItem}>✨ Free forever</span>
            </div>
          </div>

          {/* Bottom bar */}
          <div css={s.footerBottom}>
            <p css={s.footerCopy}>
              © {new Date().getFullYear()} PawFriend. All rights reserved.
            </p>
            <p css={s.footerCredit}>
              Made with 💚 as a final year project
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
