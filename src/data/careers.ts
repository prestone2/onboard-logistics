import type { CorporatePageData, EditorialItem } from '../types/corporate'

export const careersPage: CorporatePageData = {
  hero: {
    eyebrow: 'Careers', title: 'Build the Network That Keeps Trade Moving.',
    intro: 'Onboard Logistics depends on disciplined drivers, operations teams, fleet specialists and logistics professionals working together across regional freight movements.',
  },
  seo: { title: 'Careers | Onboard Logistics Ltd', description: 'Learn about the functional teams that support regional freight operations at Onboard Logistics Ltd and how to register your interest.' },
}

export const workingAtOnboard = {
  eyebrow: 'Working at Onboard', title: 'Shared Responsibility. Everyday Teamwork.',
  description: 'Drivers, dispatchers, customs teams and fleet specialists work together to keep freight moving. Safety, teamwork and professional development shape our approach.',
}

// Functional areas only. These categories do not indicate current vacancies.
export const operatingTeams: readonly EditorialItem[] = [
  { id: 'drivers-fleet', title: 'Drivers & Fleet Operations', description: 'Driving, vehicle readiness and coordinated fleet movements.' },
  { id: 'clearing-forwarding', title: 'Clearing & Forwarding', description: 'Documentation, transit handling and border coordination.' },
  { id: 'dispatch', title: 'Dispatch & Logistics Coordination', description: 'Freight planning, route coordination and operational oversight.' },
  { id: 'maintenance', title: 'Fleet Maintenance', description: 'Vehicle servicing, mechanical readiness and workshop operations.' },
  { id: 'corporate', title: 'Corporate & Administration', description: 'Business support and administration across the operation.' },
]

export const opportunities = {
  eyebrow: 'Current Opportunities', title: 'No vacancies listed at this time.',
  description: 'There are no publicly listed vacancies at this time. Interested professionals may submit their details for future consideration.',
  ctaLabel: 'Submit Your Interest',
  contactHref: '/contact?subject=career',
}
