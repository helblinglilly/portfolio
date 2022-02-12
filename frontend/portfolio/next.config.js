module.exports = {
	reactStrictMode: true,
	locales: ["en-GB"],
	defaultLocale: "en-GB",
	images: {
		domains: ["ghchart.rshah.org"],
	},
	async rewrites() {
		return [
			{
				source: "/:path*",
				destination: "https://api.twitter.com/:path*",
			},
		];
	},
};
