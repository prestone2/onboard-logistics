import { motion } from 'framer-motion'
import { trustMetrics } from '../../../data/company'
import { Container } from '../../ui/Container'
import { useScrollReveal } from '../../ui/useScrollReveal'

export function TrustMetrics() {
  const reveal = useScrollReveal()
  return (
    <section className="trust-metrics" aria-labelledby="metrics-title">
      <Container><h2 id="metrics-title" className="sr-only">Operational confidence across every kilometer</h2>
        <motion.dl className="metrics-grid" {...reveal}>{trustMetrics.map(({ value, label, icon }) => <div className="metric" key={icon}><dt>{label}</dt><dd>{value}</dd></div>)}</motion.dl>
      </Container>
    </section>
  )
}
