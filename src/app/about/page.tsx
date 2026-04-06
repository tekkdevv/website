import type { Metadata } from 'next'
import { AboutPageContent } from '@/components/marketing/about-page'

export const metadata: Metadata = {
  title: 'About',
  description: 'TekDev started as freelancers who got tired of the wait. We built an agency around one obsession: delivering dream ideas fast, without the AI slop and without cutting corners.',
  alternates: { canonical: 'https://tekdev.in/about' },
  openGraph: {
    title: 'About TekDev',
    description: 'We got tired of the wait. So we built something better.',
    url: 'https://tekdev.in/about',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'About TekDev' }],
  },
}

export default function AboutPage() {
  return <AboutPageContent />
}
