import Head from "next/head";

export default function SocialPreview(
	title,
	description,
	author = "Joel Helbling",
	previewImage = "https://helbling.uk/images/icon-white.png",
	themeColor = "#8D0370"
) {
	return (
		<Head>
			<meta name="author" content={author} />
			<meta name="theme-color" content={themeColor} />
			<meta name="title" content={title} />
			<meta name="description" content={description} />

			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:type" content="website" />
			<meta property="og:url" content="https://helbling.uk/" />
			<meta property="og:image" content={previewImage} />
			<meta property="og:image:type" content="image/png" />

			<meta property="twitter:url" content="https://helbling.uk/" />
			<meta property="twitter:title" content={title} />
			<meta property="twitter:description" content={description} />
			<meta property="twitter:image" content={previewImage} />
			<meta name="twitter:card" content="summary_large_image" />
		</Head>
	);
}
