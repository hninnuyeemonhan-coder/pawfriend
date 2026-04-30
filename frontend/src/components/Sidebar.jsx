/** @jsxImportSource @emotion/react */
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import {
  FiHome, FiPlusCircle, FiHeart, FiUser, FiLogOut,
  FiAward, FiSmile, FiGift, FiBookOpen, FiSun,
  FiMenu, FiX,
} from 'react-icons/fi'
import * as s from './Sidebar.styles'

const navItems = [
  { path: '/dashboard',    label: 'Dashboard',    icon: <FiHome /> },
  { path: '/create-habit', label: 'New Habit',    icon: <FiPlusCircle /> },
  { path: '/pet',          label: 'My Pet',       icon: <FiHeart /> },
  { path: '/accessories',  label: 'Accessories',  icon: <FiGift /> },
  { path: '/achievements', label: 'Achievements', icon: <FiAward /> },
  { path: '/mood',         label: 'Mood Log',     icon: <FiSmile /> },
  { path: '/habit-guide',  label: 'Habit Guide',  icon: <FiBookOpen /> },
  { path: '/wellness',     label: 'Wellness',     icon: <FiSun /> },
  { path: '/profile',      label: 'Profile',      icon: <FiUser /> },
]

const MOBILE_BREAKPOINT = 768

function PawDecorations() {
  return (
    <div css={s.pawsBackground}>
      <span css={s.paw1}>🐾</span>
      <span css={s.paw2}>🐾</span>
      <span css={s.paw3}>🐾</span>
    </div>
  )
}

function Logo() {
  return (
    <h1 css={s.logoHeading}>
      <img src="/assets/logo.png" alt="PawFriend logo" css={s.logoHeadingIcon} />
      <span css={s.logoAccent}>Paw</span>Friend
    </h1>
  )
}

export default function Sidebar() {
  const { logout, user } = useAuth()
  const [isMobile, setIsMobile] = useState(window.innerWidth < MOBILE_BREAKPOINT)
  const [drawerOpen, setDrawerOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const closeDrawer = () => setDrawerOpen(false)

  useEffect(() => {
    document.body.style.overflow = (isMobile && drawerOpen) ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMobile, drawerOpen])

  // ─── MOBILE ───
  if (isMobile) {
    return (
      <>
        <header css={s.topBar}>
          <h1 css={s.topBarLogo}>
            <img src="/assets/logo.png" alt="PawFriend logo" css={s.logoIcon} />
            <span css={s.logoAccent}>Paw</span>Friend
          </h1>
          <button onClick={() => setDrawerOpen(o => !o)}
            aria-label="Toggle menu"
            css={s.hamburgerButton}>
            {drawerOpen ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>
        </header>

        {drawerOpen && <div onClick={closeDrawer} css={s.overlay} />}

        <aside css={s.drawer(drawerOpen)}>
          <PawDecorations />
          <div css={s.mobileGreetingWrap}>
            <p css={s.greetingMobile}>
              Hello, {user?.name?.split(' ')[0]}! 🌿
            </p>
          </div>

          <nav css={s.nav}>
            {navItems.map(item => (
              <NavLink key={item.path} to={item.path} onClick={closeDrawer} css={s.navLinkMobile}>
                <span css={s.navIcon}>{item.icon}</span>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div css={s.logoutWrap}>
            <button onClick={() => { closeDrawer(); logout() }} css={s.logoutButton}>
              <FiLogOut size={18} />
              Log Out
            </button>
          </div>
        </aside>
      </>
    )
  }

  // ─── DESKTOP ───
  return (
    <aside css={s.sidebar}>
      <PawDecorations />

      <div css={s.logoSection}>
        <Logo />
        <p css={s.greeting}>
          Hello, {user?.name?.split(' ')[0]}! 🌿
        </p>
      </div>

      <nav css={s.nav}>
        {navItems.map(item => (
          <NavLink key={item.path} to={item.path} css={s.navLink}>
            <span css={s.navIcon}>{item.icon}</span>
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div css={s.logoutWrap}>
        <button onClick={logout} css={s.logoutButton}>
          <FiLogOut size={18} />
          Log Out
        </button>
      </div>
    </aside>
  )
}
