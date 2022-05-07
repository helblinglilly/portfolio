import Head from "next/head";
import Navbar from "../Navbar/Navbar";
import { useEffect } from "react";
import Script from "next/script";

export default function Layout({ children }) {
	const author = "Joel Helbling";
	const description =
		"Joel Helbling, Graduate Developer at NHS Digital based in the UK. Computer Science graduate from Uni of Kent";

	useEffect(() => {
		document.addEventListener(
			"scroll",
			() => {
				const limit =
					Math.max(
						document.body.scrollHeight,
						document.body.offsetHeight,
						document.documentElement.clientHeight,
						document.documentElement.scrollHeight,
						document.documentElement.offsetHeight
					) - window.innerHeight;
				const location = Math.floor(window.scrollY);
				let menuButton = document.getElementById("backToTopButton");

				if ((100 / limit) * location > 40) {
					menuButton.classList.remove("hidden");
				} else {
					if (!menuButton.classList.contains("hidden"))
						menuButton.classList.add("hidden");
				}
			},
			{ passive: true }
		);
	});
	return (
		<div>
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
			</Head>
			<a className="access-skipnav" href="#main-content">
				Skip Navigation
			</a>
			<Navbar></Navbar>
			<div>
				<main className="p-6">
					<div className="columns">{children}</div>
				</main>
			</div>
		</div>
	);
}
