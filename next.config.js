const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

module.exports = withMDX(
  withBundleAnalyzer({
    reactStrictMode: true,
    experimental: {
      // OpenNext cache interception currently serves the wrong segment payload
      // when Next 16.3's prefetch inlining is enabled, causing endless retries.
      // https://github.com/opennextjs/opennextjs-cloudflare/issues/1334
      prefetchInlining: false,
    },
    devIndicators: {
      buildActivity: false,
    },
    pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
    images: {
      unoptimized: true,
      remotePatterns: [
        {
          protocol: "https",
          hostname: "**.helbling.uk",
        },
        {
          protocol: "https",
          hostname: "pokecompanion.com",
        },
        {
          protocol: "https",
          hostname: "opengraph.githubassets.com",
        },
        {
          protocol: "https",
          hostname: "github-readme-stats.vercel.app",
        },
        {
          protocol: "https",
          hostname: "www.sweetaf.uk",
        },
      ],
    },
  }),
);

import("@opennextjs/cloudflare").then((module) =>
  module.initOpenNextCloudflareForDev(),
);
