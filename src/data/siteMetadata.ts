import { company } from './company'
import { aboutPage } from './about'
import { servicesPage } from './services'
import { corridorsPage } from './corridors'
import { fleetPage } from './fleet'
import { safetyPage } from './safety'
import { sustainabilityPage } from './sustainability'
import { careersPage } from './careers'
import { contactPage } from './contact'
import { quotePage } from './quote'

export interface RouteMetadata {
  title: string
  description: string
  breadcrumb?: string
  indexable: boolean
}

// This is the single route metadata registry used by SEO, prerendering and sitemap generation.
export const routeMetadata: Readonly<Record<string, RouteMetadata>> = {
  '/': { title: company.homepageTitle, description: company.description, indexable: true },
  '/about': { ...aboutPage.seo, breadcrumb: 'About', indexable: true },
  '/services': { ...servicesPage.seo, breadcrumb: 'Services', indexable: true },
  '/regional-corridors': { ...corridorsPage.seo, breadcrumb: 'Regional Corridors', indexable: true },
  '/fleet-technology': { ...fleetPage.seo, breadcrumb: 'Fleet & Technology', indexable: true },
  '/safety-compliance': { ...safetyPage.seo, breadcrumb: 'Safety & Compliance', indexable: true },
  '/sustainability': { ...sustainabilityPage.seo, breadcrumb: 'Sustainability', indexable: true },
  '/careers': { ...careersPage.seo, breadcrumb: 'Careers', indexable: true },
  '/contact': { ...contactPage.seo, breadcrumb: 'Contact', indexable: true },
  '/request-quote': { ...quotePage.seo, breadcrumb: 'Freight Quotation', indexable: true },
  '/privacy': { title: 'Privacy | Onboard Logistics Ltd', description: 'How this website handles information when you browse or send an enquiry.', breadcrumb: 'Privacy', indexable: false },
  '/terms': { title: 'Terms | Onboard Logistics Ltd', description: 'Information about using the Onboard Logistics Ltd website and requesting logistics services.', breadcrumb: 'Terms', indexable: false },
}

export const notFoundMetadata: RouteMetadata = {
  title: 'Page Not Found | Onboard Logistics Ltd',
  description: 'The requested page could not be found. Return to Onboard Logistics to explore regional freight services.',
  indexable: false,
}
