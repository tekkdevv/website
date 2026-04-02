import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://tekdev.in'),
  title: {
    default: 'TekDev — Software Development Agency',
    template: '%s | TekDev',
  },
  description: 'TekDev is a software development agency building full stack web apps, AI/ML systems, Android apps, HRMS portals, and Chrome extensions. Fast delivery. No AI slop. Real quality.',
  keywords: ['software development agency', 'full stack web development', 'AI ML development', 'HRMS portal development', 'Android app development', 'Chrome extension development', 'Next.js agency', 'React development company'],
  authors: [{ name: 'TekDev' }],
  creator: 'TekDev',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://tekdev.in',
    siteName: 'TekDev',
    title: 'TekDev — Software Development Agency',
    description: 'Full stack web apps, AI/ML, Android, HRMS portals & more. Fast. Crafted. No shortcuts.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TekDev — Software Development Agency',
    description: 'Full stack web apps, AI/ML, Android, HRMS portals & more. Fast. Crafted. No shortcuts.',
  },
  robots: { index: true, follow: true },
};

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
        <main className="relative min-h-screen">{children}</main>
      </body>
    </html>
  );
}
