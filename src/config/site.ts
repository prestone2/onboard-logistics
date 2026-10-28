// Approved canonical origin. VITE_SITE_URL can override it for other environments.
export const SITE_URL = (import.meta.env.VITE_SITE_URL?.trim() || 'https://www.onboardlogisticsltd.com').replace(/\/+$/, '')

export function absoluteSiteUrl(path: string) {
  return new URL(path.replace(/^\//, ''), `${SITE_URL}/`).href
}
