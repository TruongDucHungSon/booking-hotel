/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'http', // Assuming your URL is using http
        hostname: '36.50.135.197',
        pathname: '/storage/**',
      },
    ],
  },
};

export default nextConfig;
