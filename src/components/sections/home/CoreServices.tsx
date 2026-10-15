import { motion } from 'framer-motion'
import { Truck, FileCheck2, PackageOpen, Network, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Container } from '../../ui/Container'
import { useScrollReveal } from '../../ui/useScrollReveal'
import { homeServices, servicesIntro } from '../../../data/home'
import type { HomeService } from '../../../types/home'
import { pageImages } from '../../../data/pageImages'

const icons = [Truck, FileCheck2, PackageOpen, Network]
export function CoreServices() {
  const reveal = useScrollReveal()
  return (
    <section className="home-services home-section" aria-labelledby="services-title"><Container>
      <div className="logis-section-title"><span className="logis-title-shadow" aria-hidden="true">Services</span><h2 className="home-heading" id="services-title">{servicesIntro.title}</h2><p>{servicesIntro.description}</p></div>
      <div className="services-showcase">
        <motion.figure className="services-photo" {...reveal}><img src={pageImages.port.src} width={pageImages.port.width} height={pageImages.port.height} alt={pageImages.port.alt} loading="lazy" decoding="async" /><figcaption>From the port to your destination.</figcaption></motion.figure>
        <div className="services-card-grid">{homeServices.map((service, index) => <ServiceCard key={service.id} service={service} index={index} />)}</div>
      </div>
    </Container></section>
  )
}
function ServiceCard({ service, index }: { service: HomeService; index: number }) {
  const reveal = useScrollReveal(index * .06)
  const Icon = icons[index]
  return <motion.article className="logis-service-card" {...reveal}><Icon size={34} strokeWidth={1.5} aria-hidden="true" /><h3>{service.title}</h3><p>{service.description}</p><Link className="text-link" to={service.href} aria-label={service.linkLabel}>View service<ArrowRight size={17} aria-hidden="true" /></Link></motion.article>
}
