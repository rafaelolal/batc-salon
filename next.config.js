/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/batc',
  images: {
    domains: ["firebasestorage.googleapis.com"],
  },
  experimental: { images: { allowFutureImage: true } },
};

module.exports = nextConfig;