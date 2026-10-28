import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { PassThrough } from 'node:stream'
import { createServer as createHttpServer } from 'node:http'
import { createElement } from 'react'
import { renderToPipeableStream } from 'react-dom/server'
import { MemoryRouter } from 'react-router-dom'
import { createServer, loadEnv } from 'vite'

const root = process.cwd()
const dist = path.join(root, 'dist')
const env = loadEnv('production', root, 'VITE_')
const siteUrlOverride = env.VITE_SITE_URL?.trim()
let siteUrl = ''
let structuredDataScript = () => ''

const vite = await createServer({
  configFile: path.join(root, 'vite.config.ts'),
  mode: 'production',
  server: { middlewareMode: true, hmr: { server: createHttpServer() } },
  appType: 'custom',
  logLevel: 'error',
})

function escapeAttribute(value) {
  return value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')
}
function absoluteUrl(route) { return new URL(route.replace(/^\//, ''), `${siteUrl}/`).href }
function headMetadata(route, metadata) {
  const canonical = route === '/404' ? '' : `<link rel="canonical" href="${escapeAttribute(absoluteUrl(route))}" />`
  const robots = metadata.indexable ? 'index, follow' : 'noindex, follow'
  const image = absoluteUrl('/og/onboard-logistics-og-placeholder.jpg')
  return `${canonical}<meta name="description" content="${escapeAttribute(metadata.description)}" /><meta name="robots" content="${robots}" /><meta property="og:type" content="website" /><meta property="og:title" content="${escapeAttribute(metadata.title)}" /><meta property="og:description" content="${escapeAttribute(metadata.description)}" />${canonical ? `<meta property="og:url" content="${escapeAttribute(absoluteUrl(route))}" />` : ''}<meta property="og:image" content="${escapeAttribute(image)}" /><meta property="og:image:alt" content="Illustrative regional freight preview for Onboard Logistics Ltd" /><meta name="twitter:card" content="summary_large_image" /><meta name="twitter:title" content="${escapeAttribute(metadata.title)}" /><meta name="twitter:description" content="${escapeAttribute(metadata.description)}" /><meta name="twitter:image" content="${escapeAttribute(image)}" />${structuredDataScript(route)}`
}
function render(element) {
  return new Promise((resolve, reject) => {
    let didError = false
    const stream = renderToPipeableStream(element, {
      onAllReady() {
        const output = new PassThrough()
        const chunks = []
        output.on('data', chunk => chunks.push(chunk))
        output.on('end', () => didError ? reject(new Error('React reported an error while prerendering.')) : resolve(Buffer.concat(chunks).toString('utf8')))
        stream.pipe(output)
      },
      onShellError: reject,
      onError(error) { didError = true; console.error(error) },
    })
  })
}

try {
  const [{ AppRoutes }, metadataModule, siteModule, schemaModule, template, manifestText] = await Promise.all([
    vite.ssrLoadModule('/src/routes/AppRoutes.tsx'),
    vite.ssrLoadModule('/src/data/siteMetadata.ts'),
    vite.ssrLoadModule('/src/config/site.ts'),
    vite.ssrLoadModule('/src/config/structuredData.ts'),
    readFile(path.join(dist, 'index.html'), 'utf8'),
    readFile(path.join(dist, '.vite/manifest.json'), 'utf8'),
  ])
  const { routeMetadata, notFoundMetadata } = metadataModule
  const { SITE_URL } = siteModule
  siteUrl = (siteUrlOverride || SITE_URL).replace(/\/+$/, '')
  structuredDataScript = schemaModule.structuredDataScript
  const manifest = JSON.parse(manifestText)
  const assetMap = Object.entries(manifest).map(([source, entry]) => [source.replace(/^\//, ''), `/${entry.file}`])
  const heroAsset = assetMap.find(([source]) => source.includes('hero-freight-placeholder.webp'))?.[1]

  async function writeRoute(route, outputPath, metadata) {
    let page = await render(createElement(MemoryRouter, { initialEntries: [route] }, createElement(AppRoutes)))
    for (const [source, bundled] of assetMap) {
      page = page.replaceAll(`/${source}`, bundled).replaceAll(source, bundled.slice(1))
    }
    let html = template.replace('<div id="root"></div>', `<div id="root">${page}</div>`)
    html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeAttribute(metadata.title)}</title>`)
    html = html.replace(/<meta name="description"[^>]*\/>/, '')
    const preload = route === '/' && heroAsset ? `<link rel="preload" as="image" href="${heroAsset}" fetchpriority="high" />` : ''
    html = html.replace('</head>', `${headMetadata(route, metadata)}${preload}</head>`)
    const destination = path.join(dist, outputPath)
    await mkdir(path.dirname(destination), { recursive: true })
    await writeFile(destination, html)
  }

  for (const [route, metadata] of Object.entries(routeMetadata)) {
    const outputPath = route === '/' ? 'index.html' : `${route.slice(1)}/index.html`
    await writeRoute(route, outputPath, metadata)
  }
  await writeRoute('/404', '404.html', notFoundMetadata)

  const sitemapRoutes = Object.entries(routeMetadata).filter(([, metadata]) => metadata.indexable).map(([route]) => route)
  const urls = sitemapRoutes.map(route => `  <url><loc>${escapeAttribute(absoluteUrl(route))}</loc></url>`).join('\n')
  await writeFile(path.join(dist, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`)
  await writeFile(path.join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${absoluteUrl('/sitemap.xml')}\n`)
  console.log(`Prerendered ${Object.keys(routeMetadata).length} routes and 404; sitemap includes ${sitemapRoutes.length} indexable routes.`)
} finally {
  await vite.close()
}
