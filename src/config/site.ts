// Set VITE_SITE_URL to the approved production origin (for example, https://www.example.com).
// The reserved example.com origin keeps local production builds valid, but must be replaced before deployment.
export const SITE_URL = (import.meta.env.VITE_SITE_URL?.trim() || 'https://example.com').replace(/\/+$/, '')

export function absoluteSiteUrl(path: string) {
  return new URL(path.replace(/^\//, ''), `${SITE_URL}/`).href
}
