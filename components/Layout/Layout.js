import Head from "next/head";
import Navbar from "../Navbar/Navbar";
import { useEffect } from "react";

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
				<meta
					name="viewport"
					content="width=device-width,initial-scale=1,maximum-scale=2,shrink-to-fit=no"
				/>
				<meta name="author" content={author} />
				<meta name="theme-color" content="#8D0370" />

				<meta name="title" content="Blog of Joel Helbling" />
				<meta name="description" content={description} />

				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://helbling.uk/" />
				<meta property="og:title" content="Homepage" />
				<meta property="og:description" content={description} />
				<meta
					property="og:image"
					content="/images/social_previews/1200x630.png"
				/>

				<meta property="twitter:url" content="https://helbling.uk/" />
				<meta property="twitter:title" content="Homepage" />
				<meta property="twitter:description" content={description} />
				<meta
					property="twitter:image"
					content="/images/social_previews/1200x630.png"
				/>

				<meta name="og:description" content={description} />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://helbling.uk" />
				<meta property="og:title" content="Homepage" />
				<meta
					property="og:image"
					content="https://helbling.uk/images/social_previews/1200x630.png"
				/>
				<meta property="og:image:type" content="image/png" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:creator" content="@_helblingjoel" />
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
