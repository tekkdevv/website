import { NextResponse } from 'next/server'

const INDEXNOW_KEY = 'tekdev2024indexnow'
const SITE_URL = 'https://tekdev.in'

const URLS_TO_INDEX = [
  SITE_URL,
  `${SITE_URL}/work`,
  `${SITE_URL}/services`,
  `${SITE_URL}/about`,
  `${SITE_URL}/contact`,
]

export async function GET() {
  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        host: 'tekdev.in',
        key: INDEXNOW_KEY,
        keyLocation: `${SITE_URL}/tekdev-indexnow.txt`,
        urlList: URLS_TO_INDEX,
      }),
    })
    return NextResponse.json({ status: response.status, message: 'IndexNow pinged' })
  } catch (err) {
    return NextResponse.json({ error: 'Failed to ping IndexNow' }, { status: 500 })
  }
}
