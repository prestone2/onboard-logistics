import type { CorporatePageData, CorridorDetail } from '../types/corporate'

export const corridorsPage: CorporatePageData = {
  hero: {
    eyebrow: 'Regional Network', title: 'Connecting East & Central Africa.',
    intro: 'Onboard Logistics coordinates freight movement along key regional corridors linking the Port of Mombasa with Uganda, Rwanda, Tanzania and the Democratic Republic of Congo.',
  },
  seo: { title: 'Regional Freight Corridors | East Africa Logistics', description: 'Explore regional freight connections from Mombasa to Uganda, Rwanda, Tanzania and eastern DRC, coordinated by Onboard Logistics Ltd.' },
}
export const networkIntro = {
  eyebrow: 'One Origin. Regional Reach.', title: 'Four Corridors. Coordinated Execution.',
  description: 'The Port of Mombasa connects to four independent regional freight corridors. Cargo, destination and border requirements inform the operating plan for each movement.',
  caption: 'Schematic regional network · Independent routes, not a geographical map',
}
// Independent routes, not sequential stops. Gateway selection is movement-specific.
// Confirm coverage and route procedures; no security or transit-time guarantee.
export const corridorDetails: readonly CorridorDetail[] = [
  { id: 'uganda', number: '01', title: 'Mombasa → Kampala', origin: 'Mombasa', destination: 'Kampala', diagramLabel: 'Kampala', diagramNote: 'Malaba / Busia gateways', description: 'The primary Uganda trade corridor supports inland freight movement into Kampala, with Malaba or Busia gateways informing border coordination.', themes: ['Primary Uganda trade corridor', 'Malaba / Busia border coordination', 'Inland delivery planning into Kampala'] },
  { id: 'rwanda', number: '02', title: 'Mombasa → Rwanda', origin: 'Mombasa', destination: 'Rwanda', diagramLabel: 'Kigali / Rwanda', diagramNote: 'Cross-border transit', description: 'Freight movement toward Kigali and Rwanda requires coordinated transit handling and customs preparation across borders.', themes: ['Freight movement toward Kigali / Rwanda', 'Cross-border transit documentation', 'Regional customs coordination'] },
  { id: 'tanzania', number: '03', title: 'Mombasa → Tanzania', origin: 'Mombasa', destination: 'Tanzania', diagramLabel: 'Tanzania', diagramNote: 'Inter-regional connectivity', description: 'Inter-regional freight connectivity supports industrial and commercial cargo movements between trade gateways and destinations in Tanzania.', themes: ['Inter-regional freight connectivity', 'Industrial cargo planning', 'Commercial cargo movements'] },
  { id: 'drc', number: '04', title: 'Mombasa → DRC', origin: 'Mombasa', destination: 'DRC', diagramLabel: 'Eastern DRC', diagramNote: 'Movement-specific planning', description: 'Eastern DRC connectivity involves complex terrain and higher operational coordination requirements. Route and cargo needs are assessed for each proposed movement.', themes: ['Eastern DRC freight connectivity', 'Terrain and route planning', 'Coordinated cross-border execution'] },
]
export const corridorCTA = { title: 'Planning a Cross-Border Movement?' }
