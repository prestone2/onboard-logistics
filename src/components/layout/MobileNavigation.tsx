import { useEffect, useRef, type RefObject } from 'react'
import { createPortal } from 'react-dom'
import { NavLink } from 'react-router-dom'
import { X } from 'lucide-react'
import { navigation } from '../../data/navigation'
import { Button } from '../ui/Button'
import logo from '../../assets/brand/onboard-logistics-logo.png'

interface MobileNavigationProps {
  onClose: () => void
  returnFocusRef?: RefObject<HTMLButtonElement | null>
}

export function MobileNavigation({ onClose, returnFocusRef }: MobileNavigationProps) {
  const dialogRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const previouslyFocused = document.activeElement
    const previousOverflow = document.body.style.overflow
    const root = document.getElementById('root')
    const previousInert = root?.inert ?? false
    if (root) root.inert = true
    document.body.style.overflow = 'hidden'
    dialogRef.current?.querySelector<HTMLButtonElement>('button')?.focus()
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { event.preventDefault(); onClose(); return }
      if (event.key !== 'Tab') return
      const items = dialogRef.current?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])')
      if (!items?.length) return
      const first = items[0]
      const last = items[items.length - 1]
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus() }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus() }
    }
    document.addEventListener('keydown', onKeyDown)
    const desktop = window.matchMedia('(min-width: 1100px)')
    const onDesktop = () => { if (desktop.matches) onClose() }
    desktop.addEventListener('change', onDesktop)
    return () => {
      if (root) root.inert = previousInert
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKeyDown)
      desktop.removeEventListener('change', onDesktop)
      const focusTarget = returnFocusRef?.current ?? previouslyFocused
      if (focusTarget instanceof HTMLElement && focusTarget.isConnected) focusTarget.focus()
    }
  }, [onClose, returnFocusRef])

  return createPortal(
    <div ref={dialogRef} id="mobile-navigation" className="mobile-navigation" role="dialog" aria-modal="true" aria-labelledby="menu-title">
      <div className="mobile-navigation__top">
        <img src={logo} width="100" height="78" alt="Onboard Logistics Ltd" />
        <h2 id="menu-title" className="sr-only">Site navigation</h2>
        <button className="menu-toggle" type="button" onClick={onClose} aria-label="Close navigation"><X size={26} /></button>
      </div>
      <nav aria-label="Mobile navigation">
        {navigation.map(({ label, path }) => <NavLink key={path} to={path} end={path === '/'} onClick={onClose}>{label}</NavLink>)}
      </nav>
      <Button to="/request-quote" onClick={onClose}>Request a Quote</Button>
      <p className="mobile-navigation__note">Integrated freight. Regional execution.</p>
    </div>, document.body,
  )
}
