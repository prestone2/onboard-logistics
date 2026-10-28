import type { CompanyMetric } from '../types/company'

export const company = {
  name: 'Onboard Logistics Ltd',
  location: 'Uganda',
  homepageTitle: 'Onboard Logistics Ltd | Cross-Border Freight & Logistics East Africa',
  description: 'Integrated cross-border freight, clearing and forwarding, fleet operations and regional logistics solutions across East and Central Africa.',
  heroDescription: 'From the Port of Mombasa across the regional hinterland, Onboard Logistics Ltd combines cross-border freight, clearing expertise, fleet control and regional execution to keep supply chains moving safely, efficiently and on time.',
}

// Company copy and operating metrics approved by the owner, 28 October 2026.
export const trustMetrics: readonly CompanyMetric[] = [
  { value: '1,200,000+', label: 'Safe Kilometers Driven Annually', icon: 'route' },
  { value: '100%', label: 'Asset-Backed Fleet & Vetted Third-Party Operations', icon: 'truck' },
  { value: '24/7', label: 'Fleet & Cargo Monitoring', icon: 'monitor' },
  { value: 'Regional', label: 'Cross-Border Operations', icon: 'globe' },
  { value: 'Integrated', label: 'Clearing & Forwarding', icon: 'customs' },
]
