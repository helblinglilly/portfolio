import React from "react";
import Head from "next/head";
import Script from "next/script";
import { BlogMetaInfo } from "../Blog/Types";

export default function SocialPreview(metaInfo: BlogMetaInfo) {
	const themeColor = "#8D0370";
	const previewImage = metaInfo.cover
		? metaInfo.cover
		: "https://helbling.uk/images/social_preview.png";

	return (
		<>
			<Script
				src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_KEY}`}
				strategy="afterInteractive"
			></Script>

			<Script id="google-analytics" strategy="afterInteractive">
				{`
           				window.dataLayer = window.dataLayer || [];
  						function gtag(){dataLayer.push(arguments);}
  						gtag('js', new Date());
  						gtag('config', '${process.env.GA_KEY}');
        			`}
			</Script>
			<Head>
				<meta charSet="utf-8"></meta>
				<meta name="google" content="notranslate" />
				<meta
					name="viewport"
					content="width=device-width,initial-scale=1,maximum-scale=2,shrink-to-fit=no"
				/>

				<title>{metaInfo.title}</title>
				<meta name="author" content={metaInfo.authorName} />
				<meta name="theme-color" content={themeColor} />
				<meta name="title" content={metaInfo.title} />
				<meta name="description" content={metaInfo.summary} />

				<meta property="og:title" content={metaInfo.title} />
				<meta property="og:description" content={metaInfo.summary} />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://helbling.uk/" />
				<meta property="og:image" content={previewImage} />
				<meta property="og:image:type" content="image/png" />

				<meta property="twitter:url" content="https://helbling.uk/" />
				<meta property="twitter:title" content={metaInfo.title} />
				<meta
					property="twitter:description"
					content={metaInfo.summary}
				/>
				<meta property="twitter:image" content={previewImage} />
				<meta name="twitter:card" content="summary_large_image" />
			</Head>
		</>
	);
}
