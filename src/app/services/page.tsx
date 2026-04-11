import type { Metadata } from 'next'
import { ServicesPageContent } from '@/components/marketing/services-page'
import { ServicesJsonLd } from '@/components/marketing/json-ld'

export const metadata: Metadata = {
  title: 'Services',
  description: 'TekkDevv builds full stack web apps, AI/ML systems, Android applications, HRMS portals, Chrome extensions, and handles domain & deployment. Fast delivery, crafted quality.',
  alternates: { canonical: 'https://tekkdevv.com/services' },
  openGraph: {
    title: 'Services | TekkDevv',
    description: 'Full stack, AI/ML, Android, HRMS, Chrome extensions and more.',
    url: 'https://tekkdevv.com/services',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'TekkDevv Services' }],
  },
}

export default function ServicesPage() {
  return (
    <>
      <ServicesJsonLd />
      <ServicesPageContent />
    </>
  )
}
