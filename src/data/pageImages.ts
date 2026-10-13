import port from '../assets/images/services-port-branded.webp'
import inspection from '../assets/images/safety-inspection-branded.webp'
import team from '../assets/images/about-team-branded.webp'
import cargo from '../assets/images/services-cargo-branded.webp'
import telematics from '../assets/images/fleet-telematics-branded.webp'
import maintenance from '../assets/images/fleet-maintenance-branded.webp'
import training from '../assets/images/safety-training-branded.webp'
import sustainability from '../assets/images/sustainability-depot-branded.webp'
import type { EditorialImage } from '../types/corporate'

// Generated editorial imagery; these scenes do not document client facilities or staff.
export const pageImages = {
  port: { src: port, width: 1536, height: 1024, alt: 'Illustrative container port with a crane loading cargo onto a terminal tractor with Onboard Logistics branding' },
  inspection: { src: inspection, width: 1536, height: 1024, alt: 'Illustrative freight driver inspecting a truck tire with a pre-trip checklist with Onboard Logistics branding' },
  team: { src: team, width: 1536, height: 1024, alt: 'Illustrative logistics colleagues reviewing cargo paperwork at a container depot with Onboard Logistics branding' },
  cargo: { src: cargo, width: 1536, height: 1024, alt: 'Illustrative forklift moving a wrapped pallet through an organized freight warehouse with Onboard Logistics branding' },
  telematics: { src: telematics, width: 1536, height: 1024, alt: 'Illustrative fleet supervisor reviewing a route on a tablet beside parked trucks with Onboard Logistics branding' },
  maintenance: { src: maintenance, width: 1536, height: 1024, alt: 'Illustrative mechanic servicing a heavy truck in a maintenance workshop with Onboard Logistics branding' },
  training: { src: training, width: 1536, height: 1024, alt: 'Illustrative drivers and a supervisor reviewing a route during a safety briefing with Onboard Logistics branding' },
  sustainability: { src: sustainability, width: 1536, height: 1024, alt: 'Illustrative distribution center with rooftop solar panels and a landscaped perimeter with Onboard Logistics branding' },
} satisfies Record<string, EditorialImage>
