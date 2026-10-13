import { motion } from 'framer-motion'
import { useScrollReveal } from '../../ui/useScrollReveal'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Container } from '../../ui/Container'
import { safetyControls, safetyIntro, safetyPreview } from '../../../data/home'
import { pageImages } from '../../../data/pageImages'

export function SafetyCompliance() {
  const reveal = useScrollReveal()
  return (
    <section className="home-safety home-section" aria-labelledby="safety-title">
      <Container className="safety-split">
        <motion.figure className="safety-visual" {...reveal}>
          <img src={pageImages.inspection.src} width={pageImages.inspection.width} height={pageImages.inspection.height} loading="lazy" decoding="async" alt={pageImages.inspection.alt} />
          <figcaption>{safetyPreview.imageCaption}</figcaption>
        </motion.figure>
        <motion.div className="safety-copy" {...reveal}>
          <h2 className="home-heading" id="safety-title">{safetyIntro.title}</h2>
          <p className="completion-description">{safetyIntro.description}</p>
          <ol className="safety-controls">
            {safetyControls.map((control, index) => <li key={control.id}><span className="control-number" aria-hidden="true">0{index + 1}</span><div><h3>{control.title}</h3><p>{control.description}</p></div></li>)}
          </ol>
          <Link className="text-link" to="/safety-compliance">{safetyPreview.linkLabel}<ArrowUpRight size={18} aria-hidden="true" /></Link>
        </motion.div>
      </Container>
    </section>
  )
}
