import { MetadataRoute } from 'next'
import { site }          from '@/lib/content'
import { serviceList }   from '@/lib/services'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base,               lastModified: new Date(), changeFrequency: 'weekly',  priority: 1 },
    { url: `${base}/about`,    lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/contact`,  lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/case-studies`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${base}/privacy-policy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
  ]

  const serviceRoutes: MetadataRoute.Sitemap = serviceList.map(service => ({
    url:             `${base}/services/${service.slug}`,
    lastModified:    new Date(),
    changeFrequency: 'monthly',
    priority:        0.8,
  }))

  return [...staticRoutes, ...serviceRoutes]
}
