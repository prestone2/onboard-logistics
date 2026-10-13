import { motion } from 'framer-motion'
import { Package, ChartNoAxesColumnIncreasing, ShieldCheck, Users, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useScrollReveal } from '../../ui/useScrollReveal'
import { Container } from '../../ui/Container'
import { CorridorNetwork } from './CorridorNetwork'

const benefits = [
  { icon: Package, title: 'Stronger connectivity', description: 'Linking global trade to regional markets.' },
  { icon: ChartNoAxesColumnIncreasing, title: 'Independent corridors', description: 'Four routes planned around your cargo.' },
  { icon: ShieldCheck, title: 'Coordinated logistics', description: 'Transport, customs and cargo oversight.' },
  { icon: Users, title: 'Greater opportunity', description: 'Supporting trade across East & Central Africa.' },
]

export function RegionalCorridors() {
  const reveal = useScrollReveal()
  return (
    <section className="home-corridors home-section" aria-labelledby="corridors-title">
      <Container>
        <motion.div className="regional-network-panel" {...reveal}>
          <div className="regional-network-main">
            <div className="regional-network-copy">
              <h2 id="corridors-title">Strategic East &amp;<br />Central Africa Network</h2>
              <p>Four independent corridors connecting Mombasa to key markets across East and Central Africa, bringing freight, customs and regional execution together.</p>
              <Link className="text-link" to="/regional-corridors">Explore the network <ArrowUpRight size={18} aria-hidden="true" /></Link>
            </div>
            <CorridorNetwork />
          </div>
          <ul className="regional-network-benefits">
            {benefits.map(({ icon: Icon, title, description }) => (
              <li key={title}><span className="regional-benefit-icon"><Icon size={24} strokeWidth={1.6} aria-hidden="true" /></span><div><h3>{title}</h3><p>{description}</p></div></li>
            ))}
          </ul>
        </motion.div>
      </Container>
    </section>
  )
}
