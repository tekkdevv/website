import Link from 'next/link'
import { MarketingNavigation } from '@/components/marketing/navigation'
import { MarketingFooter } from '@/components/marketing/footer'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[hsl(201,100%,8%)] flex flex-col">
      <MarketingNavigation />
      <div className="flex flex-1 flex-col items-center justify-center px-5 text-center">
        <p className="mb-4 text-[10px] font-medium tracking-[0.2em] text-white/30 uppercase">404</p>
        <h1
          className="mb-4 text-5xl font-normal text-white sm:text-7xl"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Page not found.
        </h1>
        <p className="mb-10 text-base text-white/40 max-w-sm">
          This page doesn&apos;t exist — but the rest of the site does.
        </p>
        <Link
          href="/"
          className="liquid-glass inline-flex items-center rounded-full px-8 py-3.5 text-sm font-medium text-white transition-transform hover:scale-[1.03]"
        >
          Back to Home
        </Link>
      </div>
      <MarketingFooter />
    </div>
  )
}
