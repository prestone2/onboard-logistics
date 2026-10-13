import { Container } from '../components/ui/Container'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Button } from '../components/ui/Button'
import { SEO } from '../components/ui/SEO'

export default function NotFoundPage() {
  return <><SEO title="Page Not Found | Onboard Logistics Ltd" noIndex /><section className="page-shell"><Container><SectionHeading eyebrow="Error 404" title="The route ends here." description="We couldn’t find that page. Return to our homepage to continue exploring." /><Button to="/">Back to Home</Button></Container></section></>
}
