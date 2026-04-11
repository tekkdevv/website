import type { Metadata } from 'next'
import { AboutPageContent } from '@/components/marketing/about-page'

export const metadata: Metadata = {
  title: 'About',
  description: 'TekkDevv started as freelancers who got tired of the wait. We built an agency around one obsession: delivering dream ideas fast, without the AI slop and without cutting corners.',
  alternates: { canonical: 'https://tekkdevv.com/about' },
  openGraph: {
    title: 'About TekkDevv',
    description: 'We got tired of the wait. So we built something better.',
    url: 'https://tekkdevv.com/about',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'About TekkDevv' }],
  },
}

export default function AboutPage() {
  return <AboutPageContent />
}
