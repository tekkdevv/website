# TekDev SEO Setup Checklist

## Already done in code
- sitemap.xml at /sitemap
- robots.txt at /robots
- Open Graph image (auto-generated)
- Twitter Card image (auto-generated)
- JSON-LD structured data (Organization + WebSite + Services)
- IndexNow key file at /tekdev-indexnow.txt
- IndexNow ping route at /api/indexnow
- Web App Manifest
- 404 page
- Per-page canonical URLs
- Per-page metadata (title, description, OG, twitter)

## You need to do these (5-10 mins each)

### 1. Google Search Console
1. Go to https://search.google.com/search-console
2. Add property -> URL prefix -> https://tekdev.in
3. Choose "HTML tag" verification method
4. Copy the content value (looks like: abc123def456...)
5. In `/src/app/layout.tsx`, replace `REPLACE_WITH_YOUR_GOOGLE_VERIFICATION_CODE` with that value

### 2. Bing Webmaster Tools
1. Go to https://www.bing.com/webmasters
2. Add your site -> https://tekdev.in
3. Choose "Meta tag" verification
4. Copy the content value
5. In `/src/app/layout.tsx`, replace `REPLACE_WITH_YOUR_BING_VERIFICATION_CODE` with that value

### 3. Submit Sitemap to Google
1. In Google Search Console -> Sitemaps
2. Enter: https://tekdev.in/sitemap.xml
3. Click Submit

### 4. Submit Sitemap to Bing
1. In Bing Webmaster -> Sitemaps
2. Enter: https://tekdev.in/sitemap.xml

### 5. Ping IndexNow (after deploying)
- Hit: https://tekdev.in/api/indexnow
- This tells Google, Bing, Yandex your pages exist immediately
- Run this whenever you publish new content

### 6. Add favicon files to /public
- /public/favicon.ico (32x32)
- /public/icon-192.png (192x192)
- /public/icon-512.png (512x512)
Use https://favicon.io to generate from your logo/text.

### 7. Update social links in JSON-LD
In `/src/components/marketing/json-ld.tsx`, fill in the `sameAs` array with your social profiles:
- LinkedIn URL
- Twitter/X URL
- GitHub URL (if applicable)

### 8. Update contact email
In `/src/components/marketing/json-ld.tsx`, update the email in `contactPoint`.
