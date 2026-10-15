import { SEO } from '../components/ui/SEO'
import { Container } from '../components/ui/Container'
import { InternalPageHero } from '../components/layout/InternalPageHero'
import { FreightQuoteForm } from '../components/forms/FreightQuoteForm'
import { quotePage } from '../data/quote'

export default function QuotePage() {
  return (
    <>
      <SEO {...quotePage.seo} />
      <InternalPageHero {...quotePage.hero} variant="light" />
      <section className="quote-page-section" aria-labelledby="quote-form-heading"><Container className="quote-page-container"><h2 className="sr-only" id="quote-form-heading">Prepare a freight quote request</h2><FreightQuoteForm /></Container></section>
    </>
  )
}
