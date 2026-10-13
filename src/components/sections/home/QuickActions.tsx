import { ArrowUpRight, FileText, MapPinned, Truck, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Container } from '../../ui/Container'

const actions = [
  { label: 'Request a quote', detail: 'Plan your cargo movement', href: '/request-quote', icon: FileText },
  { label: 'Explore our services', detail: 'Transport, customs & fleet', href: '/services', icon: Truck },
  { label: 'Find your corridor', detail: 'Mombasa to the region', href: '/regional-corridors', icon: MapPinned },
  { label: 'Talk to our team', detail: 'Get help with your requirements', href: '/contact', icon: MessageCircle },
] as const

export function QuickActions() {
  return (
    <nav className="quick-actions" aria-label="Freight planning shortcuts">
      <Container className="quick-actions-grid">
        {actions.map(({ label, detail, href, icon: Icon }) => (
          <Link className="quick-action" key={href} to={href}>
            <span className="quick-action-icon"><Icon size={21} strokeWidth={1.6} aria-hidden="true" /></span>
            <span><strong>{label}</strong><small>{detail}</small></span>
            <ArrowUpRight size={16} className="quick-action-arrow" aria-hidden="true" />
          </Link>
        ))}
      </Container>
    </nav>
  )
}
