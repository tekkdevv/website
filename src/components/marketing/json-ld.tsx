export function OrganizationJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'TekkDevv',
    url: 'https://tekkdevv.com',
    logo: 'https://tekkdevv.com/logo.png',
    description: 'TekkDevv is a software development agency building full stack web apps, AI/ML systems, Android apps, HRMS portals, and Chrome extensions.',
    foundingDate: '2024',
    sameAs: [],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'contact@tekdev.dev',
      contactType: 'customer service',
    },
    areaServed: 'Worldwide',
    serviceType: [
      'Full Stack Web Development',
      'AI/ML Development',
      'Android App Development',
      'HRMS Portal Development',
      'Chrome Extension Development',
      'Bug Fixing and Optimization',
      'API Integration',
      'Domain and Deployment',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function WebSiteJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'TekkDevv',
    url: 'https://tekkdevv.com',
    description: 'Software development agency — full stack web apps, AI/ML, Android, HRMS portals.',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://tekkdevv.com/?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function ServicesJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'TekkDevv Services',
    description: 'Software development services offered by TekkDevv',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Full Stack Web Development', description: 'Next.js, React, TypeScript web applications from landing pages to complex SaaS platforms.' },
      { '@type': 'ListItem', position: 2, name: 'AI / ML Development', description: 'Custom AI models, LLM integrations, and intelligent product features.' },
      { '@type': 'ListItem', position: 3, name: 'Android App Development', description: 'Native and cross-platform Android applications.' },
      { '@type': 'ListItem', position: 4, name: 'HRMS & Portal Development', description: 'HR management systems, employee portals, and internal tools.' },
      { '@type': 'ListItem', position: 5, name: 'Chrome Extension Development', description: 'Custom browser extensions for productivity, AI, and automation.' },
      { '@type': 'ListItem', position: 6, name: 'Bug Fixing & Optimization', description: 'Fast diagnosis and reliable fixes for existing codebases.' },
      { '@type': 'ListItem', position: 7, name: 'API & Integrations', description: 'Third-party API connections, payment gateways, CRMs, and more.' },
      { '@type': 'ListItem', position: 8, name: 'Domain & Deployment', description: 'DNS setup, hosting configuration, and full go-live support.' },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
