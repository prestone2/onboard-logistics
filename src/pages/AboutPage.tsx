import { SEO } from '../components/ui/SEO'
import { Container } from '../components/ui/Container'
import { InternalPageHero } from '../components/layout/InternalPageHero'
import { EditorialPhoto } from '../components/sections/shared/EditorialPhoto'
import { EditorialList } from '../components/sections/shared/EditorialList'
import { EnterpriseCTA } from '../components/sections/shared/EnterpriseCTA'
import { aboutPage, companyStory, purpose, principlesIntro, corePrinciples } from '../data/about'
import { pageImages } from '../data/pageImages'

export default function AboutPage() {
  return (
    <>
      <SEO {...aboutPage.seo} />
      <InternalPageHero {...aboutPage.hero} variant="light" />
      <section className="corporate-section" aria-labelledby="company-story-title"><Container className="corporate-split">
        <div><h2 className="corporate-heading" id="company-story-title">{companyStory.title}</h2><div className="corporate-prose">{companyStory.paragraphs.map(text => <p key={text}>{text}</p>)}</div></div>
        <EditorialPhoto image={pageImages.team} />
      </Container></section>
      <section className="corporate-section corporate-dark" aria-labelledby="purpose-title"><Container>
        <h2 className="corporate-heading" id="purpose-title">{purpose.title}</h2>
        <div className="purpose-editorial">{purpose.items.map(item => <article key={item.id}><h3>{item.title}</h3><p>{item.description}</p></article>)}</div>
      </Container></section>
      <section className="corporate-section" aria-labelledby="principles-title"><Container>
        <h2 className="corporate-heading" id="principles-title">{principlesIntro.title}</h2><EditorialList items={corePrinciples} />
      </Container></section>
      <EnterpriseCTA />
    </>
  )
}
