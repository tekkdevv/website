import type { Metadata } from 'next'
import { MarketingNavigation } from '@/components/marketing/navigation'
import { ContactSection } from '@/components/marketing/contact-section'
import { MarketingFooter } from '@/components/marketing/footer'
import { CosmicBackground } from '@/components/marketing/home-sections'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with TekDev. Tell us what you need to build — web app, mobile, AI, HRMS, or anything else. We respond fast.',
  alternates: { canonical: 'https://tekdev.in/contact' },
  openGraph: {
    title: 'Contact TekDev',
    description: 'Tell us what you need. We respond fast.',
    url: 'https://tekdev.in/contact',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Contact TekDev' }],
  },
}

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-[hsl(201,100%,8%)]">
      <CosmicBackground />
      <MarketingNavigation />
      <div className="pt-24 relative z-10">
        <ContactSection />
      </div>
      <MarketingFooter />
    </div>
  )
}
