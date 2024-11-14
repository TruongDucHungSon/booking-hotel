/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https', // or 'http' if the domain uses it
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https', // Assuming your URL is using http
        hostname: 'api.aksoft.vn',
        pathname: '/storage/**',
      },
      {
        protocol: 'https', // Update to 'https' if your QA domain uses https
        hostname: 'qa1.mecaheo.com',
        pathname: '/storage/**',
      },
    ],
  },
};

export default nextConfig;
