import { useEffect, useRef, useState } from 'react'
import { ChevronDown, ArrowUpRight } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const companyLinks = [
  { label: 'About Onboard', description: 'Our company and operating model', path: '/about' },
  { label: 'Safety & Compliance', description: 'People, vehicles and regional standards', path: '/safety-compliance' },
  { label: 'Sustainability', description: 'Our approach to responsible operations', path: '/sustainability' },
  { label: 'Careers', description: 'The teams behind every movement', path: '/careers' },
] as const

export function DesktopNavigation({ pathname }: { pathname: string }) {
  const [open, setOpen] = useState(false)
  const groupRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const activeCompany = companyLinks.some(link => link.path === pathname)

  useEffect(() => {
    if (!open) return
    const closeOutside = (event: PointerEvent) => {
      if (event.target instanceof Node && !groupRef.current?.contains(event.target)) setOpen(false)
    }
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        triggerRef.current?.focus()
      }
    }
    document.addEventListener('pointerdown', closeOutside)
    document.addEventListener('keydown', closeOnEscape)
    return () => {
      document.removeEventListener('pointerdown', closeOutside)
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [open])

  return (
    <nav className="desktop-navigation" aria-label="Main navigation">
      <NavLink to="/" end>Home</NavLink>
      <NavLink to="/services">Services</NavLink>
      <NavLink to="/regional-corridors">Regional Corridors</NavLink>
      <NavLink to="/fleet-technology">Fleet & Technology</NavLink>
      <div className={`nav-group${activeCompany ? ' nav-group--active' : ''}`} ref={groupRef} onBlur={event => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false)
      }}>
        <button ref={triggerRef} className="nav-group-trigger" type="button" aria-expanded={open} aria-controls="company-navigation" onClick={() => setOpen(!open)}>Company<ChevronDown size={14} aria-hidden="true" /></button>
        <div className="nav-group-panel" id="company-navigation" hidden={!open}>
          {companyLinks.map(link => (
            <NavLink key={link.path} to={link.path} onClick={() => setOpen(false)}>
              <span><strong>{link.label}</strong><small>{link.description}</small></span>
              <ArrowUpRight size={16} aria-hidden="true" />
            </NavLink>
          ))}
        </div>
      </div>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  )
}
