import { useCallback, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu } from 'lucide-react'
import logo from '../../assets/brand/onboard-logistics-logo.png'
import { useScrolled } from '../../hooks/useScrolled'
import { Container } from '../ui/Container'
import { Button } from '../ui/Button'
import { MobileNavigation } from './MobileNavigation'
import { DesktopNavigation } from './DesktopNavigation'

export function Header() {
  const { pathname } = useLocation()
  const scrolled = useScrolled()
  const [menuOpen, setMenuOpen] = useState(false)
  const menuToggleRef = useRef<HTMLButtonElement>(null)
  const closeMenu = useCallback(() => setMenuOpen(false), [])

  return (
    <header className={`site-header site-header--solid${scrolled ? ' site-header--scrolled' : ''}`}>
      <Container className="header-inner">
        <Link className="brand" to="/" aria-label="Onboard Logistics Ltd — home">
          <img src={logo} width="100" height="78" alt="Onboard Logistics Ltd" />
        </Link>
        <DesktopNavigation pathname={pathname} key={pathname} />
        <Button className="header-quote" to="/request-quote">Request a Quote</Button>
        <button ref={menuToggleRef} className="menu-toggle" type="button" aria-label="Open navigation" aria-expanded={menuOpen} aria-controls={menuOpen ? 'mobile-navigation' : undefined} onClick={() => setMenuOpen(true)}><Menu size={26} /></button>
      </Container>
      {menuOpen && <MobileNavigation onClose={closeMenu} returnFocusRef={menuToggleRef} />}
    </header>
  )
}
