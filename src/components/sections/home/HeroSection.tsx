import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Container } from '../../ui/Container'
import { Button } from '../../ui/Button'
import { company } from '../../../data/company'
import hero from '../../../assets/images/hero-freight-branded.webp'

export function HeroSection() {
  const reducedMotion = useReducedMotion()
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '12%'])
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.04, 1.12])
  return (
    <section ref={heroRef} className="hero" aria-labelledby="hero-title">
      <motion.img className="hero-image" style={reducedMotion ? undefined : { y: imageY, scale: imageScale }} src={hero} width="1536" height="864" alt="Illustrative heavy freight truck carrying a shipping container along a highway through green East African hills with Onboard Logistics branding" fetchPriority="high" decoding="async" />
      <div className="hero-overlay" />
      <Container className="hero-container">
        <motion.div className="hero-content" initial={reducedMotion ? false : { opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }}>
          <h1 id="hero-title"><span className="hero-title-line">Integrated Freight.</span><span className="hero-title-line">Customs. Regional Transport.</span><span className="hero-title-line hero-title-accent">One Accountable Partner.</span></h1>
          <p className="hero-description">{company.heroDescription}</p>
          <div className="hero-actions">
            <Button to="/request-quote">Request a Freight Quote</Button>
            <Link className="hero-secondary" to="/regional-corridors">Explore Regional Corridors <ArrowRight size={18} aria-hidden="true" /></Link>
          </div>
        </motion.div>
        <div className="hero-bottom" aria-label="Regional reach"><span>Uganda-based. Regionally connected.</span><span>Mombasa <i /> Kampala <i /> East & Central Africa</span></div>
      </Container>
    </section>
  )
}
