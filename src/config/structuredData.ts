import { company } from '../data/company'
import { contactAddress } from '../data/contact'
import { routeMetadata } from '../data/siteMetadata'
import { absoluteSiteUrl } from './site'

function safeJson(data: unknown) {
  return JSON.stringify(data).replace(/</g, '\\u003c')
}

export function structuredDataForPath(path: string) {
  if (path === '/') {
    const organizationId = `${absoluteSiteUrl('/')}#organization`
    return [
      {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        '@id': organizationId,
        name: company.name,
        url: absoluteSiteUrl('/'),
        logo: absoluteSiteUrl('/brand/onboard-logistics-logo.png'),
        address: {
          '@type': 'PostalAddress',
          streetAddress: contactAddress.street,
          postOfficeBoxNumber: contactAddress.postal.replace('P.O. Box ', ''),
          addressLocality: contactAddress.locality,
          addressCountry: 'UG',
        },
      },
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: company.name,
        url: absoluteSiteUrl('/'),
        publisher: { '@id': organizationId },
      },
    ]
  }

  const metadata = routeMetadata[path]
  if (!metadata?.indexable || !metadata.breadcrumb) return []
  return [{
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: absoluteSiteUrl('/') },
      { '@type': 'ListItem', position: 2, name: metadata.breadcrumb, item: absoluteSiteUrl(path) },
    ],
  }]
}

export function structuredDataScript(path: string) {
  return structuredDataForPath(path).map((schema, index) => `<script type="application/ld+json" data-site-schema="${index}">${safeJson(schema)}</script>`).join('')
}
