import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'TekDev — Software Development Agency'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'hsl(201, 100%, 8%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Top label */}
        <div style={{ fontSize: 18, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.25em', marginBottom: 32, textTransform: 'uppercase' }}>
          Software Development Studio
        </div>
        {/* Brand */}
        <div style={{ fontSize: 96, color: 'white', fontWeight: 300, lineHeight: 1, marginBottom: 28 }}>
          TekDev
        </div>
        {/* Tagline */}
        <div style={{ fontSize: 36, color: 'rgba(255,255,255,0.55)', marginBottom: 56, lineHeight: 1.3 }}>
          Your dream idea. Shipped fast.
        </div>
        {/* Service pills row */}
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          {['Full Stack', 'AI / ML', 'Android', 'HRMS Portals', 'Chrome Extensions'].map((s) => (
            <div key={s} style={{
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: 999,
              padding: '10px 22px',
              fontSize: 18,
              color: 'rgba(255,255,255,0.4)',
            }}>{s}</div>
          ))}
        </div>
        {/* Bottom domain */}
        <div style={{ position: 'absolute', bottom: 60, right: 80, fontSize: 20, color: 'rgba(255,255,255,0.25)' }}>
          tekdev.in
        </div>
      </div>
    ),
    { ...size }
  )
}
