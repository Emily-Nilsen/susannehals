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
    domains: ['res.cloudinary.com'],
    unoptimized: true,
  },
}

module.exports = nextConfig
