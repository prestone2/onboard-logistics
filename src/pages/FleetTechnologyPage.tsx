import { SEO } from '../components/ui/SEO'
import { Container } from '../components/ui/Container'
import { InternalPageHero } from '../components/layout/InternalPageHero'
import { EditorialPhoto } from '../components/sections/shared/EditorialPhoto'
import { EnterpriseCTA } from '../components/sections/shared/EnterpriseCTA'
import { OperationalIllustration } from '../components/sections/fleet/OperationalIllustration'
import { fleetPage, fleetControlIntro, fleetControls, telemetryIntro, workshopStory, maintenancePractices } from '../data/fleet'
import { pageImages } from '../data/pageImages'

export default function FleetTechnologyPage() {
  return (
    <>
      <SEO {...fleetPage.seo} />
      <InternalPageHero {...fleetPage.hero} variant="light" image={pageImages.telematics} breadcrumbLabel="Fleet & Technology" />
      <section className="corporate-section" aria-labelledby="fleet-control-title"><Container>
        <div className="corporate-section-intro"><div><h2 className="corporate-heading" id="fleet-control-title">{fleetControlIntro.title}</h2></div><p className="corporate-prose">{fleetControlIntro.description}</p></div>
        <dl className="fleet-control-register">{fleetControls.map(control => <div key={control.id}><dt>{control.title}</dt><dd>{control.description}</dd></div>)}</dl>
      </Container></section>
      <section className="corporate-section corporate-dark" aria-labelledby="telemetry-title"><Container>
        <div className="corporate-section-intro"><div><h2 className="corporate-heading" id="telemetry-title">{telemetryIntro.title}</h2></div><p className="corporate-prose">{telemetryIntro.description}</p></div>
        <OperationalIllustration />
      </Container></section>
      <section className="corporate-section" aria-labelledby="workshop-title"><Container className="corporate-split">
        <EditorialPhoto image={pageImages.maintenance} />
        <div><h2 className="corporate-heading" id="workshop-title">{workshopStory.title}</h2><div className="corporate-prose">{workshopStory.paragraphs.map(text => <p key={text}>{text}</p>)}</div><ul className="workshop-practices">{maintenancePractices.map(item => <li key={item.id}><h3>{item.title}</h3><p>{item.description}</p></li>)}</ul></div>
      </Container></section>
      <EnterpriseCTA />
    </>
  )
}
