import type { FooterLinkGroup, SiteLink } from '../types/home'

export const footerContent = {
  positioning: 'Integrated regional freight, clearing and logistics execution across East and Central Africa.',
  contactTitle: 'Contact',
} as const

export const footerLinks: readonly FooterLinkGroup[] = [
  {
    id: 'company', title: 'Company', links: [
      { label: 'About', href: '/about' },
      { label: 'Safety & Compliance', href: '/safety-compliance' },
      { label: 'Sustainability', href: '/sustainability' },
      { label: 'Careers', href: '/careers' },
    ],
  },
  {
    id: 'services', title: 'Services', links: [
      { label: 'Cross-Border Freight', href: '/services' },
      { label: 'Clearing & Forwarding', href: '/services' },
      { label: 'Heavy Haulage', href: '/services' },
      { label: 'Fleet Operations', href: '/fleet-technology' },
    ],
  },
  {
    id: 'regional-network', title: 'Regional Network', links: [
      { label: 'Uganda', href: '/regional-corridors' },
      { label: 'Rwanda', href: '/regional-corridors' },
      { label: 'Tanzania', href: '/regional-corridors' },
      { label: 'DRC', href: '/regional-corridors' },
    ],
  },
]

export const footerContactLinks: readonly SiteLink[] = [
  { label: 'Contact', href: '/contact' },
  { label: 'Request a Quote', href: '/request-quote' },
]

export const footerLegalLinks: readonly SiteLink[] = [
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
]
