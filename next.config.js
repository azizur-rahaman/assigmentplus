/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: '/tools/pdf-converter',
  webpack: (config) => {
    config.resolve.alias.canvas = false;
    return config;
  },
};

module.exports = nextConfig;
