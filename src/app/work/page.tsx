import type { Metadata } from 'next'
import { WorkPageContent } from '@/components/marketing/work-page'

export const metadata: Metadata = {
  title: 'Our Work',
  description: 'Real projects built by TekDev — cybersecurity platforms, agency websites, vendor storefronts. Full stack, AI/ML, Android, and HRMS development. Any scale, no bias.',
  alternates: { canonical: 'https://tekdev.in/work' },
  openGraph: {
    title: 'Our Work | TekDev',
    description: 'Real projects built by TekDev. Any scale, no bias.',
    url: 'https://tekdev.in/work',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'TekDev Work' }],
  },
}

export default function WorkPage() {
  return <WorkPageContent />
}
