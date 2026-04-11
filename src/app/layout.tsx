import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { OrganizationJsonLd, WebSiteJsonLd } from "@/components/marketing/json-ld";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://tekkdevv.com'),
  title: {
    default: 'TekkDevv — Software Development Agency',
    template: '%s | TekkDevv',
  },
  description: 'TekkDevv is a software development agency building full stack web apps, AI/ML systems, Android apps, HRMS portals, and Chrome extensions. Fast delivery. No AI slop. Real quality.',
  keywords: ['software development agency', 'full stack web development', 'AI ML development', 'HRMS portal development', 'Android app development', 'Chrome extension development', 'Next.js development agency', 'React development company', 'web development company India'],
  authors: [{ name: 'TekkDevv', url: 'https://tekkdevv.com' }],
  creator: 'TekkDevv',
  publisher: 'TekkDevv',
  alternates: { canonical: 'https://tekkdevv.com' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://tekkdevv.com',
    siteName: 'TekkDevv',
    title: 'TekkDevv — Software Development Agency',
    description: 'Full stack web apps, AI/ML, Android, HRMS portals & more. Fast. Crafted. No shortcuts.',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'TekkDevv — Software Development Agency' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TekkDevv — Software Development Agency',
    description: 'Full stack web apps, AI/ML, Android, HRMS portals & more. Fast. Crafted. No shortcuts.',
    images: ['/twitter-image'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  verification: {
    google: 'REPLACE_WITH_YOUR_GOOGLE_VERIFICATION_CODE',
    other: { 'msvalidate.01': 'REPLACE_WITH_YOUR_BING_VERIFICATION_CODE' },
  },
};

import { CursorGlow } from "@/components/marketing/cursor-glow";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-foreground font-body antialiased selection:bg-blue-400/20">
        <OrganizationJsonLd />
        <WebSiteJsonLd />
        <CursorGlow />
        <main className="relative min-h-screen">{children}</main>
      </body>
    </html>
  );
}
