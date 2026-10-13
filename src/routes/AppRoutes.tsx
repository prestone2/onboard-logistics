import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { SiteLayout } from '../components/layout/SiteLayout'
import NotFoundPage from '../pages/NotFoundPage'

const HomePage = lazy(() => import('../pages/HomePage'))
const AboutPage = lazy(() => import('../pages/AboutPage'))
const ServicesPage = lazy(() => import('../pages/ServicesPage'))
const CorridorsPage = lazy(() => import('../pages/CorridorsPage'))
const FleetTechnologyPage = lazy(() => import('../pages/FleetTechnologyPage'))
const SafetyCompliancePage = lazy(() => import('../pages/SafetyCompliancePage'))
const SustainabilityPage = lazy(() => import('../pages/SustainabilityPage'))
const CareersPage = lazy(() => import('../pages/CareersPage'))
const QuotePage = lazy(() => import('../pages/QuotePage'))
const ContactPage = lazy(() => import('../pages/ContactPage'))
const PrivacyPage = lazy(() => import('../pages/PrivacyPage'))
const TermsPage = lazy(() => import('../pages/TermsPage'))

function RouteLoading() {
  return <div className="route-loading" role="status" aria-live="polite">Loading page…</div>
}

export function AppRoutes() {
  return <Suspense fallback={<RouteLoading />}><Routes><Route element={<SiteLayout />}>
    <Route index element={<HomePage />} />
    <Route path="about" element={<AboutPage />} />
    <Route path="services" element={<ServicesPage />} />
    <Route path="regional-corridors" element={<CorridorsPage />} />
    <Route path="fleet-technology" element={<FleetTechnologyPage />} />
    <Route path="safety-compliance" element={<SafetyCompliancePage />} />
    <Route path="sustainability" element={<SustainabilityPage />} />
    <Route path="careers" element={<CareersPage />} />
    <Route path="request-quote" element={<QuotePage />} />
    <Route path="contact" element={<ContactPage />} />
    <Route path="privacy" element={<PrivacyPage />} />
    <Route path="terms" element={<TermsPage />} />
    <Route path="*" element={<NotFoundPage />} />
  </Route></Routes></Suspense>
}
