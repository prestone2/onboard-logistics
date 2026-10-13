export interface EditorialImage {
  src: string
  alt: string
  width: number
  height: number
}

export interface PageIntro {
  eyebrow: string
  title: string
  intro: string
}

export interface CorporatePageData {
  hero: PageIntro
  seo: { title: string; description: string }
}

export interface ContentSection {
  eyebrow: string
  title: string
  paragraphs: readonly string[]
}

export interface EditorialItem {
  id: string
  title: string
  description: string
}

export interface ServiceDetail extends EditorialItem {
  number: string
  scope: readonly string[]
}

export interface CorridorDetail extends EditorialItem {
  number: string
  origin: string
  destination: string
  diagramLabel: string
  diagramNote: string
  themes: readonly string[]
}

export interface OperationalIllustrationRow {
  id: string
  vehicle: string
  route: string
  status: string
}
