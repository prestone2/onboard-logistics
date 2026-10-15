import { ArrowUp } from 'lucide-react'
import { usePrefersReducedMotion as useReducedMotion } from '../../hooks/usePrefersReducedMotion'
import { useScrolled } from '../../hooks/useScrolled'

export function BackToTop() {
  const visible = useScrolled(400)
  const reducedMotion = useReducedMotion()
  if (!visible) return null
  return <button className="back-to-top" type="button" aria-label="Back to top" onClick={() => {
    document.getElementById('main-content')?.focus({ preventScroll: true })
    window.scrollTo({ top: 0, behavior: reducedMotion ? 'instant' : 'smooth' })
  }}><ArrowUp size={20} aria-hidden="true" /></button>
}
