import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://tekdev.in', lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: 'https://tekdev.in/work', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: 'https://tekdev.in/services', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://tekdev.in/about', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://tekdev.in/contact', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
  ]
}
