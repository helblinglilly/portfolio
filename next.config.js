module.exports = {
	reactStrictMode: true,
	devIndicators: {
		buildActivity: false,
	},
	images: {
		domains: ["opengraph.githubassets.com"],
	},

	eslint: {
		// Warning: This allows production builds to successfully complete even if
		// your project has ESLint errors.
		ignoreDuringBuilds: true,
	},
};
