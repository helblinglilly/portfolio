module.exports = {
  reactStrictMode: true,
  locales: ['en-GB'],
  defaultLocale: 'en-GB',
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: 'https://api.twitter.com/:path*',
      },
    ]
  },
}