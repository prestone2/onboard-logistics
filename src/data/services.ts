import type { CorporatePageData, EditorialItem, ServiceDetail } from '../types/corporate'

export const servicesPage: CorporatePageData = {
  hero: {
    eyebrow: 'Logistics Capabilities', title: 'Your Cargo. A Coordinated Freight Plan.',
    intro: 'Cross-border transport, customs coordination and fleet capacity, planned around your cargo and regional route.',
  },
  seo: { title: 'Freight & Logistics Services | Onboard Logistics Ltd', description: 'Explore cross-border haulage, clearing and forwarding, specialized cargo planning and fleet capacity management for regional freight.' },
}

// Source-based service scope. Confirm equipment availability and telematics
// integration coverage before launch; no direct customs API claim is made.
export const serviceDetails: readonly ServiceDetail[] = [
  { id: 'cross-border', number: '01', title: 'Cross-Border Long-Distance Haulage', description: 'Regional long-haul operations combine heavy-duty prime movers, cargo planning and route oversight to support freight movement across borders.', scope: ['Container transport and break-bulk cargo', 'Heavy and industrial cargo movements', 'GPS tracking and route control'] },
  { id: 'clearing', number: '02', title: 'Clearing & Forwarding', description: 'Customs coordination brings documentation, transit handling and border execution into the freight plan to reduce fragmentation across cargo movements.', scope: ['Customs and tariff documentation', 'Pre-arrival processing and transit handling', 'Border coordination and customs compliance'] },
  { id: 'specialized', number: '03', title: 'Heavy & Specialized Haulage', description: 'Industrial, break-bulk and out-of-gauge cargo require coordinated load assessment and route planning. Cargo requirements guide the proposed transport approach.', scope: ['Industrial and out-of-gauge cargo planning', 'Break-bulk handling requirements', 'Route assessment and heavy-haul configuration planning'] },
  { id: 'capacity', number: '04', title: 'Fleet & Capacity Management', description: 'Owned fleet operations are supported by vetted third-party overflow capacity, with screening and operational integration informing capacity decisions.', scope: ['Subcontractor safety and legal checks', 'Driver credential verification', 'Telematics integration and fleet oversight'] },
]

export const vettingIntro = {
  eyebrow: 'Subcontractor Framework', title: 'How We Assess Additional Capacity.',
  description: 'Third-party capacity is reviewed for legal standing, vehicle readiness, tracking compatibility and driver credentials, with ongoing operational oversight.',
}
export const subcontractorFramework: readonly EditorialItem[] = [
  { id: 'legal', title: 'Legal & Tax Integrity', description: 'Review of legal standing, tax documentation and transport eligibility.' },
  { id: 'mechanical', title: 'Mechanical Inspection', description: 'Assessment of vehicle condition and readiness for the proposed cargo movement.' },
  { id: 'telematics', title: 'Telematics Integration', description: 'Review of tracking compatibility and operational visibility requirements.' },
  { id: 'credentials', title: 'Driver Credentials', description: 'Verification of driver licensing, credentials and relevant preparation.' },
  { id: 'sla', title: 'SLA Compliance', description: 'Alignment on service obligations, operating procedures and accountability.' },
]
