const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

module.exports = withMDX(withBundleAnalyzer({
  reactStrictMode: true,
  devIndicators: {
    buildActivity: false,
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.helbling.uk',
      },
      {
        protocol: 'https',
        hostname: 'pokecompanion.com',
      },
      {
        protocol: 'https',
        hostname: 'opengraph.githubassets.com'
      },
      {
        protocol: 'https',
        hostname: 'github-readme-stats.vercel.app'
      },
      {
        protocol: 'https',
        hostname: 'www.sweetaf.uk'
      }
    ],
  },

  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  }
}));
