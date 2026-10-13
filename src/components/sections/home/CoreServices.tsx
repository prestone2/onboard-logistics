import { motion } from 'framer-motion'
import { useScrollReveal } from '../../ui/useScrollReveal'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Container } from '../../ui/Container'
import { homeServices, servicesIntro } from '../../../data/home'
import type { HomeService } from '../../../types/home'
import { pageImages } from '../../../data/pageImages'

function ServiceContent({ service }: { service: HomeService }) {
  return (
    <>
      <h3>{service.title}</h3>
      <p className="service-description">{service.description}</p>
      <Link className="text-link" to={service.href} aria-label={service.linkLabel}>View service<ArrowUpRight size={17} aria-hidden="true" /></Link>
    </>
  )
}

export function CoreServices() {
  const reveal = useScrollReveal()
  const [featuredService, ...otherServices] = homeServices
  return (
    <section className="home-services home-section" aria-labelledby="services-title">
      <Container>
        <div className="home-section-intro">
          <div><h2 className="home-heading" id="services-title">{servicesIntro.title}</h2></div>
          <p className="home-intro-description">{servicesIntro.description}</p>
        </div>
        <motion.div className="services-editorial" {...reveal}>
          {featuredService && <article className="service-featured">
            <div className="service-image"><img src={pageImages.port.src} width={pageImages.port.width} height={pageImages.port.height} loading="lazy" decoding="async" alt={pageImages.port.alt} /></div>
            <span className="service-number" aria-hidden="true">{featuredService.number}</span>
            <ServiceContent service={featuredService} />
          </article>}
          <div className="service-rows">
            {otherServices.map(service => <article className="service-row" key={service.id}><span className="service-number" aria-hidden="true">{service.number}</span><div><ServiceContent service={service} /></div></article>)}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
