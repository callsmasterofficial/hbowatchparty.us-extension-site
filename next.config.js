/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      'i.redd.it/x1sr1lob3ai41.jpg',
      'img.icons8.com',
      'accessdashboard.live',
      'super-dashboard-images-cdn.s3.amazonaws.com',
    ],
  },
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap',
      },
    ]
  },
}
