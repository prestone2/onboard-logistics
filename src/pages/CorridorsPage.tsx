import { SEO } from '../components/ui/SEO'
import { Container } from '../components/ui/Container'
import { InternalPageHero } from '../components/layout/InternalPageHero'
import { CorridorRouteMap } from '../components/sections/corridors/CorridorRouteMap'
import { EnterpriseCTA } from '../components/sections/shared/EnterpriseCTA'
import { corridorsPage, networkIntro, corridorDetails, corridorCTA } from '../data/corridors'

export default function CorridorsPage() {
  return (
    <>
      <SEO {...corridorsPage.seo} />
      <InternalPageHero {...corridorsPage.hero} variant="light" breadcrumbLabel="Regional Corridors" />
      <section className="corporate-section corporate-dark" aria-labelledby="network-title"><Container className="corporate-split corridor-overview">
        <CorridorRouteMap />
        <div><h2 className="corporate-heading" id="network-title">{networkIntro.title}</h2><p className="corporate-prose">{networkIntro.description}</p><ul className="network-route-key">{corridorDetails.map(route => <li key={route.id}><span>{route.number}</span><span>{route.origin} → {route.destination}</span></li>)}</ul></div>
      </Container></section>
      <div className="corridor-detail-system">{corridorDetails.map(route => <section className="corporate-section corridor-detail-section" key={route.id} aria-labelledby={`corridor-${route.id}`}><Container className="corporate-section-intro">
        <div><h2 className="corporate-heading" id={`corridor-${route.id}`}>{route.title}</h2></div><div><p className="corporate-prose">{route.description}</p><ul className="scope-list">{route.themes.map(theme => <li key={theme}>{theme}</li>)}</ul></div>
      </Container></section>)}</div>
      <EnterpriseCTA title={corridorCTA.title} />
    </>
  )
}
