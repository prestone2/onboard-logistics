import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Container } from '../../ui/Container'
import { Button } from '../../ui/Button'
import { enterpriseCTA } from '../../../data/shared'

export function EnterpriseCTA({ title = enterpriseCTA.title }: { title?: string }) {
  return (
    <section className="enterprise-quote home-section" aria-labelledby="shared-cta-title">
      <Container>
        <div className="quote-rule" aria-hidden="true" />
        <div className="quote-layout">
          <div><h2 className="home-heading" id="shared-cta-title">{title}</h2></div>
          <div className="quote-details"><p className="completion-description">{enterpriseCTA.description}</p><div className="quote-actions"><Button to="/request-quote">{enterpriseCTA.primaryLabel}</Button><Link className="text-link" to="/contact">{enterpriseCTA.secondaryLabel}<ArrowRight size={18} aria-hidden="true" /></Link></div></div>
        </div>
      </Container>
    </section>
  )
}
