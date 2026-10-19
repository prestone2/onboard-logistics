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
    { id: 'vision', title: 'Our Vision', description: 'To be East Africa’s most trusted partner in logistics.' },
    { id: 'mission', title: 'Our Mission', description: 'To provide safe, reliable, timely and cost-effective transport and clearing solutions that simplify trade, exceed customer expectations and create lasting value for our clients and partners.' },
  ] satisfies readonly EditorialItem[],
}

export const principlesIntro = { eyebrow: 'Core Values', title: 'Our Core Values.' }
export const corePrinciples: readonly EditorialItem[] = [
  { id: 'reliability', title: 'Reliability', description: 'We deliver what we promise.' },
  { id: 'integrity', title: 'Integrity', description: 'We operate with honesty and transparency.' },
  { id: 'customer-focus', title: 'Customer Focus', description: 'Our customers are at the center of our business.' },
  { id: 'efficiency', title: 'Efficiency', description: 'We continuously improve our processes and service delivery.' },
  { id: 'safety', title: 'Safety', description: 'We protect people, cargo, vehicles, and the environment.' },
  { id: 'professionalism', title: 'Professionalism', description: 'We maintain high standards in every operation.' },
  { id: 'teamwork', title: 'Teamwork', description: 'We work together to achieve sustainable results.' },
]
