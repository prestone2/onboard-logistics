import { FleetTechnology } from '../components/sections/home/FleetTechnology'
import { SafetyCompliance } from '../components/sections/home/SafetyCompliance'
import { EnterpriseQuoteCTA } from '../components/sections/home/EnterpriseQuoteCTA'
import { SEO } from '../components/ui/SEO'
import { HeroSection } from '../components/sections/home/HeroSection'
import { CorporatePositioning } from '../components/sections/home/CorporatePositioning'
import { CoreServices } from '../components/sections/home/CoreServices'
import { RegionalCorridors } from '../components/sections/home/RegionalCorridors'
import { QuickActions } from '../components/sections/home/QuickActions'
import { TrustMetrics } from '../components/sections/home/TrustMetrics'

export default function HomePage() {
  return <><SEO /><HeroSection /><TrustMetrics /><QuickActions /><CorporatePositioning /><CoreServices /><RegionalCorridors /><FleetTechnology /><SafetyCompliance /><EnterpriseQuoteCTA /></>
}
