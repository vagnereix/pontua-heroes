/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ['i.annihil.us', 'images.unsplash.com'],
  },
};

module.exports = nextConfig;
