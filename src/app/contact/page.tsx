import type { Metadata } from 'next'
import { MarketingNavigation } from '@/components/marketing/navigation'
import { ContactSection } from '@/components/marketing/contact-section'
import { MarketingFooter } from '@/components/marketing/footer'
import { CosmicBackground } from '@/components/marketing/home-sections'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with TekDev. Tell us what you need to build — web app, mobile, AI, HRMS, or anything else. We respond fast.',
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
