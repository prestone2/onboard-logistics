import { useId } from 'react'
import { corridorDetails } from '../../../data/corridors'

export function CorridorRouteMap() {
  const id = useId().replace(/:/g, '')
  const gridId = `${id}-route-grid`
  const gradientId = `${id}-route-gradient`
  const captionId = `${id}-route-caption`

  return (
    <figure className="detail-route-map" aria-labelledby={captionId}>
      <svg className="route-map-canvas" viewBox="0 0 640 440" role="group" aria-label="Four independent freight corridors from the Port of Mombasa">
        <defs>
          <pattern id={gridId} width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M 32 0 H 0 V 32" fill="none" stroke="white" strokeOpacity="0.045" />
          </pattern>
          <linearGradient id={gradientId} x1="184" y1="0" x2="344" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#7298b0" /><stop offset="1" stopColor="#ef7070" />
          </linearGradient>
        </defs>
        <rect width="640" height="440" fill={`url(#${gridId})`} aria-hidden="true" />
        {corridorDetails.map((route, index) => {
          const y = 64 + index * 104
          const path = `M 184 220 C 248 220, 260 ${y}, 344 ${y}`
          return (
            <g key={route.id}>
              <path className="route-map-line" d={path} stroke={`url(#${gradientId})`} aria-hidden="true" />
              <path className={`route-map-flow route-map-flow--${index}`} d={path} aria-hidden="true" />
              <a className="route-map-destination" href={`#corridor-${route.id}`} aria-label={`Explore the Mombasa to ${route.destination} corridor`}>
                <rect className="route-map-card" x="344" y={y - 38} width="272" height="80" rx="14" />
                <circle className="route-map-pin-halo" cx="344" cy={y} r="10" />
                <circle className="route-map-pin" cx="344" cy={y} r="4" />
                <text className="route-map-label" x="366" y={y - 3}>{route.diagramLabel}</text>
                <text className="route-map-note" x="366" y={y + 22}>{route.diagramNote}</text>
                <path className="route-map-arrow" d={`M 584 ${y - 16} H 595 V ${y - 5} M 595 ${y - 16} L 583 ${y - 4}`} aria-hidden="true" />
              </a>
            </g>
          )
        })}
        <g aria-hidden="true">
          <rect className="route-map-origin-card" x="20" y="174" width="164" height="92" rx="14" />
          <text className="route-map-label" x="38" y="210">Mombasa</text>
          <text className="route-map-note" x="38" y="237">Port gateway</text>
          <circle className="route-map-hub-halo" cx="184" cy="220" r="17" />
          <circle className="route-map-hub" cx="184" cy="220" r="7" />
        </g>
      </svg>
      <figcaption id={captionId}>
        <span>Select a destination to explore its route.</span>
        <small>Schematic network · Independent routes, not a geographical map</small>
      </figcaption>
    </figure>
  )
}
