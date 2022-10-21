/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/test',
  // comment the line below to and the image will display correctly
  trailingSlash: true,
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["images.unsplash.com"]
  }
}

module.exports = nextConfig
