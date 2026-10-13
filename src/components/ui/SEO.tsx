import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { routeMetadata, notFoundMetadata } from '../../data/siteMetadata'
import { absoluteSiteUrl } from '../../config/site'
import { structuredDataForPath } from '../../config/structuredData'

interface SEOProps { title?: string; description?: string; noIndex?: boolean }

function updateMeta(attribute: 'name' | 'property', key: string, content: string | null) {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`)
  if (!content) { element?.remove(); return }
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }
  element.content = content
}

export function SEO({ title, description, noIndex }: SEOProps) {
  const { pathname } = useLocation()
  const path = pathname === '/' ? '/' : pathname.replace(/\/+$/, '')
  const metadata = routeMetadata[path] ?? notFoundMetadata
  const resolvedTitle = title ?? metadata.title
  const resolvedDescription = description ?? metadata.description
  const resolvedNoIndex = noIndex ?? !metadata.indexable

  useEffect(() => {
    const canonical = path in routeMetadata ? absoluteSiteUrl(path) : null
    const socialImage = absoluteSiteUrl('/og/onboard-logistics-og-placeholder.jpg')
    document.title = resolvedTitle
    updateMeta('name', 'description', resolvedDescription)
    updateMeta('name', 'robots', resolvedNoIndex ? 'noindex, follow' : 'index, follow')
    updateMeta('property', 'og:type', 'website')
    updateMeta('property', 'og:title', resolvedTitle)
    updateMeta('property', 'og:description', resolvedDescription)
    updateMeta('property', 'og:url', canonical)
    updateMeta('property', 'og:image', socialImage)
    updateMeta('property', 'og:image:alt', 'Illustrative regional freight preview for Onboard Logistics Ltd')
    updateMeta('name', 'twitter:card', 'summary_large_image')
    updateMeta('name', 'twitter:title', resolvedTitle)
    updateMeta('name', 'twitter:description', resolvedDescription)
    updateMeta('name', 'twitter:image', socialImage)

    let canonicalLink = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (canonical) {
      if (!canonicalLink) { canonicalLink = document.createElement('link'); canonicalLink.rel = 'canonical'; document.head.appendChild(canonicalLink) }
      canonicalLink.href = canonical
    } else canonicalLink?.remove()

    document.head.querySelectorAll('script[data-site-schema]').forEach(script => script.remove())
    for (const [index, schema] of structuredDataForPath(path).entries()) {
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.dataset.siteSchema = String(index)
      script.textContent = JSON.stringify(schema).replace(/</g, '\\u003c')
      document.head.appendChild(script)
    }
  }, [path, resolvedTitle, resolvedDescription, resolvedNoIndex])

  return null
}
