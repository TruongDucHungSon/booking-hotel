/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https', // or 'http' if the domain uses it
        hostname: 'images.unsplash.com',
        pathname: '/**', // Allow all paths under this hostname
      },
      {
        protocol: 'https', // Assuming your URL is using https
        hostname: 'api.aksoft.vn',
        pathname: '/**', // Ensure this path is correct for your images
      },
      {
        protocol: 'https', // Update to 'https' if your QA domain uses https
        hostname: 'qa1.mecaheo.com',
        pathname: '/storage/**', // Ensure this path is correct for your images
      },
      {
        protocol: 'https', // Update to 'https' if your QA domain uses https
        hostname: 'pay.payos.vn',
        pathname: '/web/**', // Ensure this path is correct for your images
      },
    ],
  },
};

export default nextConfig;
