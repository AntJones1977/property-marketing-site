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
    '/guides/sa105-landlord-tax',
    '/guides/ct600-property-spv-tax',
    '/guides/sa900-estate-trust-tax',
    '/guides/form-4a-rent-increase',
    '/guides/hmo-licensing',
    '/guides/section-42-lease-extension',
    '/rra-check',
    '/about',
    '/contact',
    '/privacy',
    '/terms',
  ]
  return routes.map((path) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: path.startsWith('/guides') || path === '/rra-check' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : path.startsWith('/guides') || path === '/rra-check' ? 0.8 : 0.6,
  }))
}
