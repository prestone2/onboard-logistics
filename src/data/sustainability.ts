import type { CorporatePageData, EditorialItem } from '../types/corporate'

export const sustainabilityPage: CorporatePageData = {
  hero: {
    eyebrow: 'Responsible Operations', title: 'Responsible Freight. Practical Action.',
    intro: 'Maintenance, fuel oversight and careful route planning guide our approach to responsible regional logistics.',
  },
  seo: { title: 'Responsible Logistics | Onboard Logistics Ltd', description: 'Explore Onboard Logistics’ responsible operations direction, focused on fleet efficiency, driver responsibility and regional logistics.' },
}

export const responsibleOperations = {
  eyebrow: 'Responsible Operations', title: 'Better Planning. Careful Use of Resources.',
  description: 'Careful planning and consistent fleet oversight help operations use vehicles, fuel and time responsibly. This is an operating direction, not a claim of measured environmental outcomes.',
  practices: [
    { id: 'maintenance', title: 'Preventive Maintenance', description: 'Maintenance planning supports fleet condition and readiness.' },
    { id: 'vehicle-readiness', title: 'Vehicle Readiness', description: 'Vehicle condition is considered before freight is assigned.' },
    { id: 'fuel', title: 'Fuel Oversight', description: 'Fuel monitoring forms part of operational fleet oversight.' },
    { id: 'route-planning', title: 'Route Planning', description: 'Route choices consider cargo, movement and operating requirements.' },
    { id: 'downtime', title: 'Avoidable Downtime', description: 'Fleet management practices aim to reduce disruption during operations.' },
  ] satisfies readonly EditorialItem[],
}

export const responsibilityAreas: readonly EditorialItem[] = [
  { id: 'fleet-efficiency', title: 'Fleet Efficiency', description: 'Maintenance discipline, vehicle condition and fuel oversight support careful fleet management.' },
  { id: 'people-safety', title: 'People & Safety', description: 'Driver welfare, training, safe operations and responsibility toward other road users shape our approach.' },
  { id: 'regional-responsibility', title: 'Regional Responsibility', description: 'Compliance and respectful freight operations guide how we work across communities and borders.' },
]

export const sustainabilityDirection = {
  eyebrow: 'Looking Ahead', title: 'Improving How We Operate.',
  description: 'Onboard Logistics intends to continue improving operational efficiency, fleet visibility and responsible logistics practices as the business grows. Future programs and targets will be shared when they are defined and verified.',
}
