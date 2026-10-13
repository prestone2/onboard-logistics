import type { ContentSection, CorporatePageData, EditorialItem } from '../types/corporate'

export const aboutPage: CorporatePageData = {
  hero: {
    eyebrow: 'About Onboard Logistics', title: 'Built Around Accountability.',
    intro: 'Onboard Logistics Ltd is a regional freight and logistics company focused on coordinated cross-border transport, clearing, fleet control and operational accountability across East and Central Africa.',
  },
  seo: { title: 'About Onboard Logistics Ltd | Uganda', description: 'Learn about Onboard Logistics Ltd, based in Kampala, Uganda, and its approach to coordinated regional freight and logistics execution.' },
}

export const companyStory: ContentSection = {
  eyebrow: 'Our Operating Model', title: 'One Team. A Connected Operating Model.',
  paragraphs: [
    'Based in Kampala, Onboard Logistics coordinates freight, customs and fleet operations across East and Central Africa.',
    'Bringing these functions together keeps cargo planning, movement visibility and operational responsibility connected from origin to delivery.',
  ],
}

export const purpose = {
  eyebrow: 'Direction & Purpose', title: 'Our Direction and Purpose.',
  items: [
    { id: 'vision', title: 'Our Vision', description: 'To build a secure, reliable and technologically supported regional logistics network across East and Central Africa.' },
    { id: 'mission', title: 'Our Mission', description: 'To reduce supply-chain risk through disciplined freight operations, trained drivers, regulatory compliance, fleet readiness and continuous cargo visibility.' },
  ] satisfies readonly EditorialItem[],
}

export const principlesIntro = { eyebrow: 'Core Principles', title: 'The Standards Behind Our Work.' }
export const corePrinciples: readonly EditorialItem[] = [
  { id: 'safety', title: 'Safety', description: 'Driver readiness, fleet condition and disciplined movement guide the way freight operations are planned.' },
  { id: 'integrity', title: 'Regulatory & Customs Integrity', description: 'Documentation, customs procedures and transport compliance are treated as part of freight execution.' },
  { id: 'accountability', title: 'Accountability & Traceability', description: 'Coordinated ownership and cargo visibility help keep operational responsibilities clear.' },
  { id: 'driver-care', title: 'Driver Care', description: 'Training, fatigue awareness and driver welfare support the people responsible for cargo movement.' },
  { id: 'agility', title: 'Operational Agility', description: 'Regional coordination and vetted capacity support responses to changing cargo and route requirements.' },
]
