const { hostname } = require('os');

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.contentstack.io',
        port: '',
        pathname: '/v3/assets/bltb6530b271fddd0b1/blt232a8ff06bf93ebd/63eeb1546495981254659630/Valorant_2022_EP6-1_PlayVALORANT_ContentStackThumbnail_1200x625_MB01.png'
      },
      {
        protocol: 'https',
        hostname: 'assets.b9.com.br',
        port: '',
        pathname: '/wp-content/uploads/2021/06/vavab9.jpg'
      }
    ]
  }
}