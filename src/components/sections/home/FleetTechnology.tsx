import { motion } from 'framer-motion'
import { useScrollReveal } from '../../ui/useScrollReveal'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Container } from '../../ui/Container'
import { fleetCapabilities, fleetIntro, fleetPreview } from '../../../data/home'
import dispatchImage from '../../../assets/images/dispatch-oversight-branded.webp'

export function FleetTechnology() {
  const reveal = useScrollReveal()
  return (
    <section className="home-fleet home-section" aria-labelledby="fleet-title">
      <Container className="fleet-split">
        <motion.div className="fleet-copy" {...reveal}>
          <h2 className="home-heading" id="fleet-title">{fleetIntro.title}</h2>
          <p className="completion-description">{fleetIntro.description}</p>
          <ul className="fleet-capabilities">
            {fleetCapabilities.map((capability, index) => <li key={capability.id}><span className="control-number" aria-hidden="true">0{index + 1}</span><div><h3>{capability.title}</h3><p>{capability.description}</p></div></li>)}
          </ul>
          <Link className="text-link" to="/fleet-technology">{fleetPreview.linkLabel}<ArrowUpRight size={18} aria-hidden="true" /></Link>
        </motion.div>
        <motion.figure className="fleet-visual" {...reveal}>
          <img src={dispatchImage} width="1536" height="1024" loading="lazy" decoding="async" alt="Illustrative logistics coordinator at a dispatch workstation overlooking a container freight yard with Onboard Logistics branding" />
          <figcaption>{fleetPreview.imageCaption}</figcaption>
        </motion.figure>
      </Container>
    </section>
  )
}
