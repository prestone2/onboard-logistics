import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Route, Truck, Radio, Globe2, FileCheck2 } from 'lucide-react'
import { trustMetrics } from '../../../data/company'
import { Container } from '../../ui/Container'

const icons = { route: Route, truck: Truck, monitor: Radio, globe: Globe2, customs: FileCheck2 }

export function TrustMetrics() {
  const reducedMotion = useReducedMotion()
  const viewportRef = useRef<HTMLDivElement>(null)
  const groupRef = useRef<HTMLDListElement>(null)
  const [paused, setPaused] = useState(false)
  const [interacting, setInteracting] = useState(false)
  const running = !reducedMotion && !paused && !interacting

  useEffect(() => {
    const viewport = viewportRef.current
    const group = groupRef.current
    if (!running || !viewport || !group) return
    let frame = 0
    let previousTime = 0
    let position = viewport.scrollLeft
    const tick = (time: number) => {
      if (previousTime) {
        position += Math.min(time - previousTime, 50) * 0.028
        if (position >= group.offsetWidth) position %= group.offsetWidth
        viewport.scrollLeft = position
      }
      previousTime = time
      frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [running])

  return (
    <section className={`trust-metrics${running ? '' : ' trust-metrics--paused'}`} aria-labelledby="metrics-title">
      <Container>
        <h2 id="metrics-title" className="sr-only">Operational confidence across every kilometer</h2>
        <motion.div className="metrics-content" initial={reducedMotion ? false : { opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.45 }}>
          <div
            className="metrics-carousel"
            ref={viewportRef}
            tabIndex={0}
            role="region"
            aria-label="Our five operational statistics. Scroll horizontally to explore."
            onMouseEnter={() => setInteracting(true)}
            onMouseLeave={() => setInteracting(false)}
            onFocus={() => setInteracting(true)}
            onBlur={() => setInteracting(false)}
            onPointerDown={() => setPaused(true)}
            onWheel={() => setPaused(true)}
          >
            <div className="metrics-track">
              {[false, true].map((duplicate) => (
                <dl className="metrics-group" key={String(duplicate)} ref={duplicate ? undefined : groupRef} aria-hidden={duplicate || undefined}>
                  {trustMetrics.map(({ value, label, icon }, index) => {
                    const Icon = icons[icon]
                    return (
                      <div className={`metric metric--${index}`} key={icon}>
                        <Icon className="metric-icon" size={24} strokeWidth={1.5} aria-hidden="true" />
                        <dt>{label}</dt><dd>{value}</dd>
                      </div>
                    )
                  })}
                </dl>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
