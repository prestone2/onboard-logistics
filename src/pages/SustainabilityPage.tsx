import { SEO } from '../components/ui/SEO'
import { Container } from '../components/ui/Container'
import { InternalPageHero } from '../components/layout/InternalPageHero'
import { EditorialList } from '../components/sections/shared/EditorialList'
import { EnterpriseCTA } from '../components/sections/shared/EnterpriseCTA'
import { responsibilityAreas, responsibleOperations, sustainabilityDirection, sustainabilityPage } from '../data/sustainability'
import { pageImages } from '../data/pageImages'

export default function SustainabilityPage() {
  return (
    <>
      <SEO {...sustainabilityPage.seo} />
      <InternalPageHero {...sustainabilityPage.hero} variant="light" breadcrumbLabel="Sustainability" image={pageImages.sustainability} />
      <section className="corporate-section" aria-labelledby="responsible-operations-title"><Container className="corporate-split">
        <div><h2 className="corporate-heading" id="responsible-operations-title">{responsibleOperations.title}</h2><p className="corporate-prose responsible-intro">{responsibleOperations.description}</p></div>
        <div className="responsible-register">{responsibleOperations.practices.map((practice, index) => <div className="responsible-row" key={practice.id}><span aria-hidden="true">0{index + 1}</span><div><h3>{practice.title}</h3><p>{practice.description}</p></div></div>)}</div>
      </Container></section>
      <section className="corporate-section corporate-dark" aria-labelledby="responsibility-areas-title"><Container>
        <h2 className="corporate-heading" id="responsibility-areas-title">Responsibility Across Our Operations.</h2><EditorialList items={responsibilityAreas} className="sustainability-areas" />
      </Container></section>
      <section className="corporate-section corporate-tinted" aria-labelledby="sustainability-direction-title"><Container className="sustainability-direction">
        <div><h2 className="corporate-heading" id="sustainability-direction-title">{sustainabilityDirection.title}</h2></div><p className="corporate-prose">{sustainabilityDirection.description}</p>
      </Container></section>
      <EnterpriseCTA />
    </>
  )
}
