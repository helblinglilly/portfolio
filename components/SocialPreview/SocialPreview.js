import Head from "next/head";
import Script from "next/script";

export default function SocialPreview(props) {
	const title = props.title;
	const description = props.description;
	const author = props.author ? props.author : "Joel Helbling";
	const previewImage = props.previewImage
		? props.previewImage
		: "https://helbling.uk/images/social_preview.png";
	const themeColor = props.themeColor ? props.themeColor : "#8D0370";
	console.log(title, author);
	return (
		<Head>
			<meta charSet="utf-8"></meta>
			<meta name="google" content="notranslate" />
			<meta
				name="viewport"
				content="width=device-width,initial-scale=1,maximum-scale=2,shrink-to-fit=no"
			/>

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

			<title>{title}</title>
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
