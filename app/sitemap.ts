import type { MetadataRoute } from 'next'

const BASE = 'https://www.marpropertyinvestments.co.uk'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const routes = [
    '',
    '/features',
    '/pricing',
    '/guides',
    '/guides/renters-rights-act-2026',
    '/about',
    '/contact',
    '/privacy',
    '/terms',
  ]
  return routes.map((path) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: path.startsWith('/guides') ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : path.startsWith('/guides') ? 0.8 : 0.6,
  }))
}
