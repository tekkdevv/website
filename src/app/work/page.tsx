import type { Metadata } from 'next'
import { WorkPageContent } from '@/components/marketing/work-page'

export const metadata: Metadata = {
  title: 'Our Work',
  description: 'Real projects built by TekDev — cybersecurity platforms, agency websites, vendor storefronts, and more. Full stack web apps, AI/ML systems, Android apps, and HRMS portals.',
}

export default function WorkPage() {
  return <WorkPageContent />
}
