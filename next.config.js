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
    domains: [
      'opengraph.githubassets.com',
      'github-readme-stats.vercel.app',
      'pokecompanion.com',
      'pokemon.helbling.uk',
      'www.sweetaf.uk',
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.helbling.uk',
      },
    ],
  },

  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  }
}));
