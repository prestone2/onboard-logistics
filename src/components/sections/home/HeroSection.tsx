import { useEffect, useRef, useState, type KeyboardEvent } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Container } from '../../ui/Container'
import { Button } from '../../ui/Button'
import { useScrollReveal } from '../../ui/useScrollReveal'
import { usePrefersReducedMotion } from '../../../hooks/usePrefersReducedMotion'
import { company } from '../../../data/company'
import highway from '../../../assets/images/hero-freight-branded.webp'
import port from '../../../assets/images/hero-port-departure-branded.webp'
import regional from '../../../assets/images/hero-regional-highway-branded.webp'

const slides = [
  { src: highway, label: 'Regional freight, connected.', alt: 'Illustrative Onboard Logistics container truck on an East African highway at sunset' },
  { src: port, label: 'From the port to your destination.', alt: 'Illustrative Onboard Logistics container truck departing a coastal cargo terminal at dawn' },
  { src: regional, label: 'One partner across the region.', alt: 'Illustrative Onboard Logistics truck with a red trailer travelling through green regional countryside' },
]
const interval = 6500

export function HeroSection() {
  const reveal = useScrollReveal()
  const reducedMotion = usePrefersReducedMotion()
  const root = useRef<HTMLElement>(null)
  const images = useRef<Array<HTMLImageElement | null>>([])
  const touchStart = useRef<{ x: number; y: number } | null>(null)
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [visible, setVisible] = useState(true)
  const [pageVisible, setPageVisible] = useState(true)
  const running = !reducedMotion && !paused && !hovered && visible && pageVisible

  useEffect(() => {
    const update = () => setPageVisible(!document.hidden)
    update()
    document.addEventListener('visibilitychange', update)
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: .1 })
    if (root.current) observer.observe(root.current)
    return () => { document.removeEventListener('visibilitychange', update); observer.disconnect() }
  }, [])

  useEffect(() => {
    if (!running) return
    const timer = window.setInterval(() => setActive(index => {
      const next = (index + 1) % slides.length
      const image = images.current[next]
      return image?.complete && image.naturalWidth ? next : index
    }), interval)
    return () => window.clearInterval(timer)
  }, [running])

  const select = (index: number) => {
    setPaused(true)
    setActive((index + slides.length) % slides.length)
  }
  const onControlKey = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowLeft') { event.preventDefault(); select(active - 1) }
    if (event.key === 'ArrowRight') { event.preventDefault(); select(active + 1) }
    if (event.key === 'Home') { event.preventDefault(); select(0) }
    if (event.key === 'End') { event.preventDefault(); select(slides.length - 1) }
  }

  return (
    <section ref={root} className={`hero hero-carousel${running ? ' hero-carousel--playing' : ''}`} aria-labelledby="hero-title" aria-roledescription="carousel"
      onPointerEnter={event => { if (event.pointerType === 'mouse') setHovered(true) }} onPointerLeave={() => setHovered(false)}
      onPointerDown={event => {
        if (event.pointerType === 'mouse' || (event.target instanceof Element && event.target.closest('a, button'))) return
        touchStart.current = { x: event.clientX, y: event.clientY }
        event.currentTarget.setPointerCapture(event.pointerId)
      }}
      onPointerCancel={() => { touchStart.current = null }}
      onPointerUp={event => {
        const start = touchStart.current
        touchStart.current = null
        if (!start) return
        const x = event.clientX - start.x
        const y = event.clientY - start.y
        if (Math.abs(x) > 50 && Math.abs(x) > Math.abs(y) * 1.3) select(active + (x < 0 ? 1 : -1))
      }}
      onFocusCapture={event => { if (!(event.relatedTarget instanceof Node) || !event.currentTarget.contains(event.relatedTarget)) setPaused(true) }}>
      <div className="hero-slides">
        {slides.map((slide, index) => <div key={slide.src} className={`hero-slide${active === index ? ' is-active' : ''}`} role="group" aria-roledescription="slide" aria-label={`${index + 1} of ${slides.length}: ${slide.label}`} aria-hidden={index !== active}>
          <img ref={image => { images.current[index] = image }} src={slide.src} width="1536" height="864" alt={slide.alt} loading={index === 0 ? 'eager' : 'lazy'} fetchPriority={index === 0 ? 'high' : 'low'} decoding="async" />
        </div>)}
      </div>
      <div className="hero-overlay" aria-hidden="true" />
      <Container className="hero-container">
        <motion.div className="hero-content" {...reveal}>
          <h1 id="hero-title">Integrated Freight.<br />Customs. Regional Transport.<br /><span>One Accountable Partner.</span></h1>
          <p className="hero-description"><span className="hero-description-full">{company.heroDescription}</span><span className="hero-description-compact">Freight, customs and fleet oversight—coordinated from Mombasa across East and Central Africa.</span></p>
          <div className="hero-actions"><Button to="/request-quote">Request a Freight Quote</Button><Link className="hero-secondary" to="/regional-corridors">Explore Regional Corridors <ArrowRight size={18} aria-hidden="true" /></Link></div>
        </motion.div>
        <div className="hero-footer">
          <div className="hero-caption" aria-live={paused ? 'polite' : 'off'} aria-atomic="true"><strong>{slides[active].label}</strong><span>Uganda-based. Regionally connected.</span><span className="sr-only">Slide {active + 1} of {slides.length}</span></div>
          <div className="hero-controls" role="group" aria-label="Hero slideshow controls" onKeyDown={onControlKey}>
            <button type="button" className="hero-arrow" aria-label="Previous photo" onClick={() => select(active - 1)}><ChevronLeft size={20} aria-hidden="true" /></button>
            <div className="hero-indicators">{slides.map((slide, index) => <button key={slide.src} className="hero-indicator" type="button" aria-label={`Show photo ${index + 1}: ${slide.label}`} aria-current={active === index ? 'true' : undefined} onClick={() => select(index)}><span /></button>)}</div>
            <button type="button" className="hero-arrow" aria-label="Next photo" onClick={() => select(active + 1)}><ChevronRight size={20} aria-hidden="true" /></button>
            {!reducedMotion && <button type="button" className="hero-playback" aria-label={paused ? 'Start automatic slideshow' : 'Pause automatic slideshow'} onClick={() => setPaused(value => !value)}>{paused ? <Play size={16} aria-hidden="true" /> : <Pause size={16} aria-hidden="true" />}</button>}
          </div>
        </div>
      </Container>
    </section>
  )
}
