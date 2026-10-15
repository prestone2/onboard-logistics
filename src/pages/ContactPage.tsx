import { useSearchParams } from 'react-router-dom'
import { SEO } from '../components/ui/SEO'
import { Container } from '../components/ui/Container'
import { InternalPageHero } from '../components/layout/InternalPageHero'
import { ContactEnquiryForm } from '../components/forms/ContactEnquiryForm'
import { contactPage, contactLocation } from '../data/contact'

export default function ContactPage() {
  const [searchParams] = useSearchParams()
  const careerEnquiry = searchParams.get('subject') === 'career' || searchParams.get('subject') === 'careers'
  return (
    <>
      <SEO {...contactPage.seo} />
      <InternalPageHero {...contactPage.hero} />
      <section className="contact-section" aria-labelledby="contact-context-title"><Container className="contact-layout">
        <aside className="contact-context"><h2 className="corporate-heading" id="contact-context-title">Let’s Talk About Your Requirements.</h2><p className="corporate-prose">Tell us about your cargo, route or question. Our team will help identify the support and information you need.</p><address><span>Location</span><strong>{contactLocation}</strong></address></aside>
        <ContactEnquiryForm careerEnquiry={careerEnquiry} />
      </Container></section>
    </>
  )
}
