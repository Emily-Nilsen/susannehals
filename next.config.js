/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate')

const nextConfig = {
  ...nextTranslate(),
  reactStrictMode: true,
  experimental: {
    newNextLinkBehavior: true,
    scrollRestoration: true,
    images: {
      allowFutureImage: true,
    },
  },
  images: {
    minimumCacheTTL: 31536000,
    unoptimized: true,
  },
}

;(module.exports = nextConfig),
  {
    async redirects() {
      return [
        {
          source: 'http://susannehals.com/',
          destination: 'https://susannehals.com/',
          permanent: true,
        },
        {
          source: 'http://www.susannehals.com/',
          destination: 'https://susannehals.com/',
          permanent: true,
        },
      ]
    },
  }
