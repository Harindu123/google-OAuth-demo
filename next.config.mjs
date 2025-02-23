/** @type {import('next').NextConfig} */
const nextConfig = {

  images: {
    domains: ['avatars.githubusercontent.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
    ],
  },

};

export default nextConfig;
