/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/github/:path',
        destination: 'https://github.com/skywalker212/:path',
        permanent: true,
      }
    ]
  }
};

export default nextConfig;