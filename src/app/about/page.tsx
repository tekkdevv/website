import type { Metadata } from 'next'
import { AboutPageContent } from '@/components/marketing/about-page'

export const metadata: Metadata = {
  title: 'About',
  description: 'TekDev started as freelancers who got tired of the wait. We built an agency around one obsession: delivering dream ideas fast, without the AI slop and without cutting corners.',
}

export default function AboutPage() {
  return <AboutPageContent />
}
