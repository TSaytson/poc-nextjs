/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.achurchconsulting.com',
        port: '',
        pathname: '/wp-content/uploads/2021/02/remote-work-models.png'
      }
    ]
  }
}

module.exports = nextConfig
