import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'TekDev — Software Development Agency',
    short_name: 'TekDev',
    description: 'Full stack web apps, AI/ML, Android apps, HRMS portals, Chrome extensions. Fast delivery. Real quality.',
    start_url: '/',
    display: 'standalone',
    background_color: '#00263d',
    theme_color: '#00263d',
    icons: [
      { src: '/favicon.ico', sizes: 'any', type: 'image/x-icon' },
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
  }
}
