/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/sitemap_1.xml',
            destination: '/api/sitemap',
          },
        ]
      },
}

module.exports = nextConfig
