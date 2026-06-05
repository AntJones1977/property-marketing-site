import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://www.marpropertyinvestments.co.uk/sitemap.xml',
    host: 'https://www.marpropertyinvestments.co.uk',
  }
}
