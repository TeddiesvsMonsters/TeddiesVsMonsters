/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
        port: '',
        pathname: '/s/files/**',
        // For cloudinary
        // hostname: 'res.cloudinary.com',
        // pathname: '/dxxeknq1h/image/upload/**',
      },
    ],
  },
  env: {
    STRAPI_URL: process.env.STRAPI_URL,
    MAIN_URL: process.env.MAIN_URL,
  },
}

module.exports = nextConfig
