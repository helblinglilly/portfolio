const withBundleAnalyzer = require("@next/bundle-analyzer")({
	enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
	reactStrictMode: true,
	devIndicators: {
		buildActivity: false,
	},
	images: {
		domains: [
			"opengraph.githubassets.com",
			"github-readme-stats.vercel.app",
			"pokemon.helbling.uk",
		],
	},

	eslint: {
		// Warning: This allows production builds to successfully complete even if
		// your project has ESLint errors.
		ignoreDuringBuilds: true,
	},
});
