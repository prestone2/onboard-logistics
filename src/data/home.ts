import type { HomeCorridor, HomeService, OperationalControl, SectionIntro } from '../types/home'

// Blueprint-supplied capabilities and corridor coverage require client sign-off
// before launch. Do not infer fleet size, transit times or guaranteed performance.
export const positioning = {
  title: 'One Partner. Every Stage of the Journey.',
  paragraphs: [
    'Onboard Logistics brings freight, customs coordination and fleet oversight together—keeping cargo movements connected across East and Central Africa, from origin to final delivery.',
  ],
  linkLabel: 'About Onboard Logistics',
  imageCaption: 'Freight movement. Coordinated operations.',
} as const

export const operatingStages = [
  { title: 'Freight', description: 'Cargo & route planning' },
  { title: 'Customs', description: 'Border coordination' },
  { title: 'Fleet oversight', description: 'Movement visibility' },
  { title: 'Delivery', description: 'Destination planning' },
] as const

export const servicesIntro: SectionIntro = {
  eyebrow: 'Core Services',
  title: 'Freight Services That Work Together.',
  description: 'Transport, customs and fleet capacity, coordinated around your cargo and route.',
}

export const homeServices: readonly HomeService[] = [
  {
    id: 'cross-border-freight', number: '01', title: 'Cross-Border Freight',
    description: 'Long-haul freight operations connecting major East African trade gateways with regional commercial centers.',
    linkLabel: 'Explore Cross-Border Freight', href: '/services',
  },
  {
    id: 'clearing-forwarding', number: '02', title: 'Clearing & Forwarding',
    description: 'Customs documentation, transit processing and border coordination within one freight plan.',
    linkLabel: 'Explore Clearing & Forwarding', href: '/services',
  },
  {
    id: 'specialized-haulage', number: '03', title: 'Heavy & Specialized Haulage',
    description: 'Load and route planning for containerized, break-bulk, industrial and out-of-gauge cargo.',
    linkLabel: 'Explore Heavy & Specialized Haulage', href: '/services',
  },
  {
    id: 'fleet-operations', number: '04', title: 'Fleet & Subcontractor Operations',
    description: 'Fleet coordination with vetted third-party capacity for additional transport requirements.',
    linkLabel: 'Explore Fleet & Subcontractor Operations', href: '/services',
  },
]

export const corridorsIntro: SectionIntro = {
  eyebrow: 'Regional Corridors',
  title: 'From Mombasa. Across the Region.',
  description: 'Four independent freight corridors connect Mombasa with Uganda, Rwanda, Tanzania and eastern DRC.',
}

// Each destination is a separate route originating at Mombasa, not sequential stops.
export const homeCorridors: readonly HomeCorridor[] = [
  { id: 'uganda', origin: 'Mombasa', destination: 'Kampala', diagramLabel: 'Kampala', description: 'Primary Uganda gateway route.' },
  { id: 'rwanda', origin: 'Mombasa', destination: 'Rwanda', diagramLabel: 'Kigali / Rwanda', description: 'Regional freight connection into Rwanda.' },
  { id: 'tanzania', origin: 'Mombasa', destination: 'Tanzania', diagramLabel: 'Tanzania', description: 'Inter-regional cargo connectivity.' },
  { id: 'drc', origin: 'Mombasa', destination: 'DRC', diagramLabel: 'DRC', description: 'Cross-border freight route into eastern DRC.' },
]

// Blueprint themes only: obtain client confirmation of tracking coverage,
// monitoring processes and safety controls before launch. No guarantees,
// exact telemetry specifications, inspection counts or curfews are asserted.
export const fleetIntro: SectionIntro = {
  eyebrow: 'Fleet & Technology',
  title: 'A Clearer View of Every Movement.',
  description: 'Vehicle tracking, route oversight and maintenance planning help our team coordinate cargo throughout its journey.',
}

export const fleetCapabilities: readonly OperationalControl[] = [
  { id: 'vehicle-tracking', title: 'Live Vehicle Tracking', description: 'GPS tracking supports visibility of vehicle movements across regional routes.' },
  { id: 'route-adherence', title: 'Route Oversight', description: 'Route oversight and operational alerts support coordinated freight execution.' },
  { id: 'fleet-oversight', title: 'Fuel & Fleet Oversight', description: 'Fuel monitoring, maintenance systems and vetted third-party integration support fleet control.' },
  { id: 'cargo-visibility', title: 'Cargo Visibility', description: 'Centralized telemetry oversight supports accountability throughout the cargo journey.' },
]

export const fleetPreview = {
  imageCaption: 'Fleet oversight. Connected decisions.',
  linkLabel: 'Explore Fleet & Technology',
} as const

export const safetyIntro: SectionIntro = {
  eyebrow: 'Safety & Compliance',
  title: 'Prepared People. Ready Vehicles.',
  description: 'Driver readiness, vehicle condition and compliance guide how we plan and manage regional freight.',
}

export const safetyControls: readonly OperationalControl[] = [
  { id: 'driver-standards', title: 'Driver Standards', description: 'Defensive driver training, fatigue management and pre-trip health checks support driver readiness.' },
  { id: 'fleet-readiness', title: 'Fleet Readiness', description: 'Preventive maintenance and mechanical inspections support vehicle readiness for regional operations.' },
  { id: 'route-discipline', title: 'Route Discipline', description: 'Route rules and approved subcontractor vetting support disciplined freight movement.' },
  { id: 'regulatory-compliance', title: 'Regulatory Compliance', description: 'Regulatory and customs compliance form part of coordinated cross-border execution.' },
]

export const safetyPreview = {
  imageCaption: 'Fleet readiness. Disciplined execution.',
  linkLabel: 'Our Approach to Safety & Compliance',
} as const

export const enterpriseQuote = {
  eyebrow: 'Enterprise Freight',
  title: 'Let’s Plan Your Next Movement.',
  description: 'Share your cargo, origin and destination. Our team will review the requirements and help plan the next steps.',
  primaryLabel: 'Request a Freight Quote',
  secondaryLabel: 'Talk to Our Team',
} as const
