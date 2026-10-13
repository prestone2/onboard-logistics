import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { SEO } from '../components/ui/SEO'
import { Container } from '../components/ui/Container'
import { InternalPageHero } from '../components/layout/InternalPageHero'
import { EditorialList } from '../components/sections/shared/EditorialList'
import { careersPage, operatingTeams, opportunities, workingAtOnboard } from '../data/careers'

export default function CareersPage() {
  return (
    <>
      <SEO {...careersPage.seo} />
      <InternalPageHero {...careersPage.hero} breadcrumbLabel="Careers" />
      <section className="corporate-section corporate-careers" aria-labelledby="working-at-onboard-title"><Container className="careers-story">
        <div><h2 className="corporate-heading" id="working-at-onboard-title">{workingAtOnboard.title}</h2></div><p className="corporate-prose">{workingAtOnboard.description}</p>
      </Container></section>
      <section className="corporate-section corporate-tinted" aria-labelledby="teams-title"><Container>
        <h2 className="corporate-heading" id="teams-title">Different Roles. Shared Responsibility.</h2><EditorialList items={operatingTeams} className="careers-team-list" />
      </Container></section>
      <section className="corporate-section careers-opportunities" aria-labelledby="opportunities-title"><Container className="careers-story">
        <div><h2 className="corporate-heading" id="opportunities-title">{opportunities.title}</h2></div><div><p className="corporate-prose">{opportunities.description}</p><Link className="button button--primary careers-interest" to={opportunities.contactHref}><span>{opportunities.ctaLabel}</span><ArrowUpRight size={18} aria-hidden="true" /></Link></div>
      </Container></section>
    </>
  )
}
