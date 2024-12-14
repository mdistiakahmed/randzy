import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: [
        '/',
        '/about',
        '/contact',
        '/privacy',
        '/random-number',
        '/random-name',
        '/password-generator',
        '/pin-generator',
        '/random-string',
        '/coin-flip',
        '/dice-roller',
        '/team-generator'
      ],
      disallow: [
        '/api/',
        '/private/'
      ]
    },
    sitemap: 'https://www.randzy.com/sitemap.xml'
  }
}