import { motion } from 'framer-motion'
import { usePrefersReducedMotion as useReducedMotion } from '../../../hooks/usePrefersReducedMotion'
import { ArrowUpRight, Truck, FileCheck2, Radio, Flag } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Container } from '../../ui/Container'
import { operatingStages, positioning } from '../../../data/home'
import operationsImage from '../../../assets/images/operations-yard-branded.webp'

const stageIcons = [Truck, FileCheck2, Radio, Flag]

export function CorporatePositioning() {
  const reducedMotion = useReducedMotion()
  return (
    <section className="home-positioning home-section" aria-labelledby="positioning-title">
      <Container className="positioning-grid">
        <motion.div className="positioning-copy" initial={reducedMotion ? false : { opacity: 0, y: 16 }} animate={reducedMotion ? { opacity: 1, y: 0 } : undefined} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: reducedMotion ? 0 : 0.6 }}>
          <h2 className="home-heading" id="positioning-title">{positioning.title}</h2>
          <div className="positioning-body">
            {positioning.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <ol className="operating-stages" aria-label="Our integrated operating model">
            {operatingStages.map((stage, index) => {
              const Icon = stageIcons[index]
              return (
                <motion.li key={stage.title} initial={reducedMotion ? false : { opacity: 0, y: 8 }} animate={reducedMotion ? { opacity: 1, y: 0 } : undefined} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: reducedMotion ? 0 : 0.6, delay: reducedMotion ? 0 : index * 0.07 }}>
                  <span className="operating-stage-icon"><Icon size={20} strokeWidth={1.5} aria-hidden="true" /></span>
                  <h3>{stage.title}</h3>
                  <p>{stage.description}</p>
                </motion.li>
              )
            })}
          </ol>
          <Link className="text-link positioning-link" to="/about">{positioning.linkLabel}<ArrowUpRight size={18} aria-hidden="true" /></Link>
        </motion.div>
        <motion.figure className="positioning-image" initial={reducedMotion ? false : { opacity: 0, y: 20 }} animate={reducedMotion ? { opacity: 1, y: 0 } : undefined} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: reducedMotion ? 0 : 0.6, delay: reducedMotion ? 0 : 0.1 }}>
          <img src={operationsImage} width="1536" height="1024" loading="lazy" decoding="async" alt="Illustrative white freight trucks and container trailers in an operations yard, with shipping containers and green hills beyond with Onboard Logistics branding" />
          <figcaption>{positioning.imageCaption}</figcaption>
        </motion.figure>
      </Container>
    </section>
  )
}
