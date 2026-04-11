import type { Metadata } from 'next'
import { WorkPageContent } from '@/components/marketing/work-page'

export const metadata: Metadata = {
  title: 'Our Work',
  description: 'Real projects built by TekkDevv — cybersecurity platforms, agency websites, vendor storefronts. Full stack, AI/ML, Android, and HRMS development. Any scale, no bias.',
  alternates: { canonical: 'https://tekkdevv.com/work' },
  openGraph: {
    title: 'Our Work | TekkDevv',
    description: 'Real projects built by TekkDevv. Any scale, no bias.',
    url: 'https://tekkdevv.com/work',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'TekkDevv Work' }],
  },
}

export default function WorkPage() {
  return <WorkPageContent />
}
