/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'xsgames.co',
        port: '',
        pathname: '/randomusers/**'
      },
      {
        protocol: 'https',
        hostname: 'a.storyblok.com',
        port: ''
      }
    ]
  }
};

module.exports = nextConfig;
