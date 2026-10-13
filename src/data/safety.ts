import type { ContentSection, CorporatePageData, EditorialItem } from '../types/corporate'

export const safetyPage: CorporatePageData = {
  hero: {
    eyebrow: 'Safety & Compliance', title: 'Disciplined Operations. Safer Movements.',
    intro: 'Onboard Logistics applies structured driver, fleet and compliance controls designed to support safer and more predictable regional freight operations.',
  },
  seo: { title: 'Safety & Compliance | Onboard Logistics Ltd', description: 'Learn about driver standards, fleet readiness, route discipline and regulatory compliance supporting Onboard Logistics regional freight operations.' },
}
export const safetyFrameworkIntro = { eyebrow: 'Safety Framework', title: 'Four Areas of Operational Discipline.' }
// Client confirmation is required for exact procedures. Avoid accident-outcome
// promises, remote immobilization, fixed curfews or inspection-count claims.
export const safetyFramework: readonly EditorialItem[] = [
  { id: 'driver', title: 'Driver Standards', description: 'Defensive driving, long-haul preparation, credential checks and fatigue awareness support driver readiness.' },
  { id: 'fleet', title: 'Fleet Readiness', description: 'Preventive maintenance and inspections address braking, suspension, tires and mechanical condition before movement.' },
  { id: 'route', title: 'Route Discipline', description: 'Route adherence, operating procedures, monitored movement and planned stops support coordinated execution.' },
  { id: 'compliance', title: 'Regulatory Compliance', description: 'Licensing, customs procedures and cross-border transport documentation support regional compliance requirements.' },
]
export const driverCareStory: ContentSection = {
  eyebrow: 'Driver Care', title: 'Supporting the People Behind the Wheel.',
  paragraphs: ['Long-distance freight places demands on drivers as well as vehicles. Driver welfare and preparation form part of the approach to disciplined regional operations.'],
}
export const driverCare: readonly EditorialItem[] = [
  { id: 'health', title: 'Health & Readiness', description: 'Pre-trip health checks and welfare awareness support driver preparation.' },
  { id: 'rest', title: 'Rest & Fatigue Awareness', description: 'Rest requirements and fatigue awareness support long-haul readiness.' },
  { id: 'training', title: 'Training & Safety Culture', description: 'Defensive driving training and safety incentives support responsible driving practices.' },
]
export const complianceStory: ContentSection = {
  eyebrow: 'Across Jurisdictions', title: 'Compliance Travels With the Cargo.',
  paragraphs: [
    'Customs, tax, licensing and transport requirements are coordinated as part of each regional freight plan.',
    'Structured document preparation, regulatory review and border coordination support compliance throughout cargo movement. Clearance remains subject to the applicable procedures and authorities.',
  ],
}
