import { SEO } from '../components/ui/SEO'
import { Container } from '../components/ui/Container'
import { InternalPageHero } from '../components/layout/InternalPageHero'
import { EditorialList } from '../components/sections/shared/EditorialList'
import { EnterpriseCTA } from '../components/sections/shared/EnterpriseCTA'
import { servicesPage, vettingIntro, subcontractorFramework } from '../data/services'
import { ServiceExplorer } from '../components/sections/shared/ServiceExplorer'
import { pageImages } from '../data/pageImages'

export default function ServicesPage() {
  return (
    <>
      <SEO {...servicesPage.seo} />
      <InternalPageHero {...servicesPage.hero} image={pageImages.cargo} />
      <ServiceExplorer />
      <section className="corporate-section corporate-dark" aria-labelledby="vetting-title"><Container>
        <div className="corporate-section-intro"><div><h2 className="corporate-heading" id="vetting-title">{vettingIntro.title}</h2></div><p className="corporate-prose">{vettingIntro.description}</p></div>
        <EditorialList items={subcontractorFramework} className="process-list" />
      </Container></section>
      <EnterpriseCTA />
    </>
  )
}
