import type { Metadata } from 'next'
import { ServicesPageContent } from '@/components/marketing/services-page'

export const metadata: Metadata = {
  title: 'Services',
  description: 'TekDev builds full stack web apps, AI/ML systems, Android applications, HRMS portals, Chrome extensions, and handles domain & deployment. Fast delivery, crafted quality.',
}

export default function ServicesPage() {
  return <ServicesPageContent />
}
