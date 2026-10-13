export interface SectionIntro {
  eyebrow: string
  title: string
  description: string
}

export interface HomeService {
  id: string
  number: string
  title: string
  description: string
  linkLabel: string
  href: '/services'
}

export interface HomeCorridor {
  id: string
  origin: string
  destination: string
  diagramLabel: string
  description: string
}

export interface OperationalControl {
  id: string
  title: string
  description: string
}

export interface SiteLink {
  label: string
  href: string
}

export interface FooterLinkGroup {
  id: string
  title: string
  links: readonly SiteLink[]
}
