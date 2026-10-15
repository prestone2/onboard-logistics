import { SEO } from '../components/ui/SEO'
import { Container } from '../components/ui/Container'
import { InternalPageHero } from '../components/layout/InternalPageHero'
import { EditorialList } from '../components/sections/shared/EditorialList'
import { EditorialPhoto } from '../components/sections/shared/EditorialPhoto'
import { EnterpriseCTA } from '../components/sections/shared/EnterpriseCTA'
import { safetyPage, safetyFrameworkIntro, safetyFramework, driverCareStory, driverCare, complianceStory } from '../data/safety'
import { pageImages } from '../data/pageImages'

export default function SafetyCompliancePage() {
  return (
    <>
      <SEO {...safetyPage.seo} />
      <InternalPageHero {...safetyPage.hero} />
      <section className="corporate-section" aria-labelledby="framework-title"><Container>
        <h2 className="corporate-heading" id="framework-title">{safetyFrameworkIntro.title}</h2><EditorialList items={safetyFramework} />
      </Container></section>
      <section className="corporate-section corporate-tinted" aria-labelledby="driver-care-title"><Container className="corporate-split">
        <EditorialPhoto image={pageImages.training} />
        <div><h2 className="corporate-heading" id="driver-care-title">{driverCareStory.title}</h2><div className="corporate-prose">{driverCareStory.paragraphs.map(text => <p key={text}>{text}</p>)}</div><ul className="workshop-practices">{driverCare.map(item => <li key={item.id}><h3>{item.title}</h3><p>{item.description}</p></li>)}</ul></div>
      </Container></section>
      <section className="corporate-section" aria-labelledby="compliance-title"><Container className="compliance-editorial"><div><h2 className="corporate-heading" id="compliance-title">{complianceStory.title}</h2></div><div className="corporate-prose">{complianceStory.paragraphs.map(text => <p key={text}>{text}</p>)}</div></Container></section>
      <EnterpriseCTA />
    </>
  )
}
