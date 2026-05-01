/** @jsxImportSource @emotion/react */
import { useState, useEffect } from 'react'
import Sidebar from './Sidebar'
import CozyBackground from './CozyBackground'
import * as s from './Layout.styles'

const MOBILE_BREAKPOINT = 768

export default function Layout({ children }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < MOBILE_BREAKPOINT)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div css={s.container}>
      <Sidebar />
      <main css={s.main(isMobile)}>
        <CozyBackground />
        <div css={s.contentWrap}>
          {children}
        </div>
      </main>
    </div>
  )
}
