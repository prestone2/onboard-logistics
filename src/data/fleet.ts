import type { ContentSection, CorporatePageData, EditorialItem, OperationalIllustrationRow } from '../types/corporate'

export const fleetPage: CorporatePageData = {
  hero: {
    eyebrow: 'Fleet & Technology', title: 'Control, Visibility and Fleet Readiness.',
    intro: 'Regional freight reliability depends on visibility, maintenance discipline and operational control. Onboard Logistics brings these elements together across its fleet operations.',
  },
  seo: { title: 'Fleet & Technology | Onboard Logistics Ltd', description: 'Explore fleet oversight, telemetry, route controls and maintenance practices supporting regional freight operations at Onboard Logistics Ltd.' },
}
export const fleetControlIntro = { eyebrow: 'Fleet Control', title: 'Visibility That Supports Execution.', description: 'Vehicle monitoring and centralized oversight support informed operational coordination across regional freight movements.' }
// Confirm coverage and device availability before launch. These are source themes,
// not an assertion that every owned or third-party vehicle has identical equipment.
export const fleetControls: readonly EditorialItem[] = [
  { id: 'gps', title: 'GPS Tracking', description: 'Vehicle location visibility supports movement coordination and operational traceability.' },
  { id: 'fuel', title: 'Fuel Monitoring', description: 'Fuel oversight supports fleet management and review of operating conditions.' },
  { id: 'axle', title: 'Axle-Load Monitoring', description: 'Load monitoring supports review of cargo loading and transport compliance requirements.' },
  { id: 'route', title: 'Route Adherence', description: 'Route oversight supports alignment with the planned freight movement.' },
  { id: 'telemetry', title: 'Centralized Telemetry', description: 'Coordinated telemetry oversight brings available vehicle information into the operating model.' },
  { id: 'alerts', title: 'Operational Alerts', description: 'Operational notifications support review and response during freight execution.' },
]
export const telemetryIntro = {
  eyebrow: 'Telemetry & Coordination', title: 'A Shared View of Freight Operations.',
  description: 'Location, movement status and maintenance readiness support coordinated decisions. This illustration shows the type of operational context used in fleet oversight; it is not a live tracking interface.',
  panelTitle: 'Operational Illustration',
  disclaimer: 'Illustrative vehicles and statuses only. No live client data.',
  columns: ['Vehicle', 'Movement / Location', 'Status'] as const,
}
// User-supplied examples only. Never connect these illustrative rows to claims
// about the actual fleet, current vehicle locations or verified operating status.
export const operationalIllustration: readonly OperationalIllustrationRow[] = [
  { id: '014', vehicle: 'Truck 014', route: 'Mombasa → Kampala', status: 'In Transit' },
  { id: '028', vehicle: 'Truck 028', route: 'Kampala → Kigali', status: 'Border Processing' },
  { id: '041', vehicle: 'Truck 041', route: 'Kasangati Depot', status: 'Scheduled Maintenance' },
]
export const workshopStory: ContentSection = {
  eyebrow: 'Kasangati Workshop', title: 'Readiness Starts Before Departure.',
  paragraphs: [
    'At Kasangati, preventive maintenance and inspections prepare vehicles for long-distance freight.',
    'Fault assessment, servicing and readiness checks are planned around the proposed cargo movement.',
  ],
}
// Exact equipment, OEM parts policy and servicing intervals await confirmation.
// Do not publish an equipment inventory or maintenance timetable from this list.
export const maintenancePractices: readonly EditorialItem[] = [
  { id: 'preventive', title: 'Preventive Maintenance', description: 'Planned servicing and mechanical review support vehicle preparation.' },
  { id: 'diagnostics', title: 'Diagnostic Review', description: 'ECU diagnostics and fault assessment inform maintenance planning.' },
  { id: 'inspection', title: 'Fleet Inspections', description: 'Mechanical condition and readiness checks support departure planning.' },
]
