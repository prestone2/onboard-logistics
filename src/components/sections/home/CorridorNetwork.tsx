import { Link } from 'react-router-dom'
import { useId } from 'react'
import { homeCorridors } from '../../../data/home'

// Shared equirectangular projection with the Natural Earth background.
// Country-level endpoints represent regional connections, not road itineraries.
const project = (longitude: number, latitude: number) => ({ x: (longitude - 24) * 30 + 300, y: (8 - latitude) * 30 + 40 })
const origin = project(39.67, -4.05)
const destinations = [
  { ...project(32.58, .35), labelX: 582, labelY: 252, country: 'UGANDA' },
  { ...project(30.06, -1.95), labelX: 270, labelY: 315, country: 'RWANDA' },
  { ...project(35, -6), labelX: 651, labelY: 493, country: 'TANZANIA' },
  { ...project(29, -3.5), labelX: 270, labelY: 427, country: 'EASTERN DR CONGO' },
]

function NetworkDrawing({ compact = false }: { compact?: boolean }) {
  const id = useId().replace(/:/g, '')
  return (
    <svg className={compact ? 'regional-network-mobile' : 'regional-network-desktop'} viewBox={compact ? '250 210 750 360' : '0 0 1000 570'} role="group" aria-label="Regional connections with Mombasa on the Kenyan coast">
      <defs>
        <linearGradient id={`${id}-horizontal`}><stop stopColor="white" stopOpacity="0" /><stop offset=".25" stopColor="white" stopOpacity=".7" /><stop offset=".65" stopColor="white" /><stop offset="1" stopColor="white" stopOpacity="0" /></linearGradient>
        <linearGradient id={`${id}-vertical`} x2="0" y2="1"><stop stopColor="white" stopOpacity="0" /><stop offset=".3" stopColor="white" /><stop offset=".8" stopColor="white" /><stop offset="1" stopColor="white" stopOpacity="0" /></linearGradient>
        <mask id={`${id}-mask-x`} maskUnits="userSpaceOnUse" x="0" y="0" width="1000" height="570"><rect width="1000" height="570" fill={`url(#${id}-horizontal)`} /></mask>
        <mask id={`${id}-mask-y`} maskUnits="userSpaceOnUse" x="0" y="0" width="1000" height="570"><rect width="1000" height="570" fill={`url(#${id}-vertical)`} /></mask>
      </defs>
      <g mask={`url(#${id}-mask-x)`} aria-hidden="true"><image className="regional-geographic-map" mask={`url(#${id}-mask-y)`} href="/maps/east-central-africa.svg" x="120" y="-200" width="1080" height="1020" /></g>
      {homeCorridors.map((corridor, index) => {
        const point = destinations[index]
        const path = `M ${origin.x} ${origin.y} C ${origin.x - 100} ${origin.y - 15}, ${point.x + 90} ${point.y - 20}, ${point.x} ${point.y}`
        return <g key={corridor.id}>
          <path className="regional-route" d={path} aria-hidden="true" />
          <path className="regional-route-flow" style={{ animationDelay: `${index * -.8}s` }} d={path} aria-hidden="true" />
          <Link className="regional-destination" to={`/regional-corridors#corridor-${corridor.id}`} aria-label={`Explore Mombasa to ${corridor.destination}`}>
            {!compact && <>
              <path className="regional-label-leader" d={`M ${point.x} ${point.y} L ${point.labelX + 5} ${point.labelY + 10}`} aria-hidden="true" />
              <rect className="regional-destination-hit" x={point.labelX - 10} y={point.labelY - 28} width={index === 1 ? 218 : 204} height="65" rx="10" />
              <text className="regional-destination-label" x={point.labelX} y={point.labelY}>{corridor.diagramLabel}</text>
              <text className="regional-country" x={point.labelX} y={point.labelY + 24}>{point.country}</text>
            </>}
            <circle className="regional-node-ring" cx={point.x} cy={point.y} r="12" />
            <circle className="regional-node" cx={point.x} cy={point.y} r="6" />
            {compact && <text className="regional-map-number" x={point.x - 30} y={point.y + 10}>{index + 1}</text>}
          </Link>
        </g>
      })}
      <g aria-hidden="true">
        <circle className="regional-hub-halo regional-hub-halo--outer" cx={origin.x} cy={origin.y} r="42" />
        <circle className="regional-hub-halo" cx={origin.x} cy={origin.y} r="30" />
        <circle className="regional-hub-ring" cx={origin.x} cy={origin.y} r="18" />
        <circle className="regional-hub" cx={origin.x} cy={origin.y} r="9" />
        <text className="regional-origin-label" x="800" y="410">Mombasa</text>
        {!compact && <text className="regional-origin-note" x="800" y="435">PORT GATEWAY</text>}
      </g>
    </svg>
  )
}

export function CorridorNetwork() {
  return (
    <figure className="regional-network-diagram">
      <NetworkDrawing />
      <NetworkDrawing compact />
      <ol className="regional-mobile-legend">
        {homeCorridors.map((corridor, index) => <li key={corridor.id}><Link to={`/regional-corridors#corridor-${corridor.id}`}><span>{index + 1}</span>{corridor.diagramLabel}</Link></li>)}
      </ol>
      <figcaption>Regional connections · Lines illustrate independent corridors, not road routes</figcaption>
    </figure>
  )
}
