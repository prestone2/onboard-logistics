import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Container } from '../../ui/Container'
import { Button } from '../../ui/Button'
import { enterpriseQuote } from '../../../data/home'

export function EnterpriseQuoteCTA() {
  return (
    <section className="enterprise-quote home-section" aria-labelledby="enterprise-quote-title">
      <Container>
        <div className="quote-rule" aria-hidden="true" />
        <div className="quote-layout">
          <div><h2 className="home-heading" id="enterprise-quote-title">{enterpriseQuote.title}</h2></div>
          <div className="quote-details">
            <p className="completion-description">{enterpriseQuote.description}</p>
            <div className="quote-actions">
              <Button to="/request-quote">{enterpriseQuote.primaryLabel}</Button>
              <Link className="text-link" to="/contact">{enterpriseQuote.secondaryLabel}<ArrowRight size={18} aria-hidden="true" /></Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
