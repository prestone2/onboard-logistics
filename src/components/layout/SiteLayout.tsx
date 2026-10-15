import { useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'
import { BackToTop } from '../ui/BackToTop'
import { useSiteMotion } from '../ui/useSiteMotion'

export function SiteLayout() {
  const { pathname, hash } = useLocation()
  const mainRef = useRef<HTMLElement>(null)
  const previousPath = useRef(pathname)
  useSiteMotion(mainRef, pathname)
  useEffect(() => {
    if (previousPath.current !== pathname) {
      window.scrollTo({ top: 0, behavior: 'instant' })
      mainRef.current?.focus({ preventScroll: true })
      previousPath.current = pathname
    }
  }, [pathname])
  useEffect(() => {
    if (!hash || !mainRef.current) return
    let frame = 0
    const observer = new MutationObserver(scrollToTarget)
    function scrollToTarget() {
      const target = document.getElementById(hash.slice(1))
      if (!target) return
      observer.disconnect()
      frame = requestAnimationFrame(() => target.scrollIntoView({ block: 'start', behavior: 'instant' }))
    }
    observer.observe(mainRef.current, { childList: true, subtree: true })
    scrollToTarget()
    return () => { observer.disconnect(); cancelAnimationFrame(frame) }
  }, [pathname, hash])
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Header />
      <main id="main-content" tabIndex={-1} ref={mainRef}><Outlet /></main>
      <Footer />
      <BackToTop />
    </>
  )
}
