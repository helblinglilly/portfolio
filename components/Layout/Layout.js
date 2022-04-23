import Head from "next/head";
import Navbar from "../Navbar/Navbar";
import { useEffect } from "react";

export default function Layout({ children }) {
	const author = "Joel Helbling";
	const description = "Joel Helbling, Graduate Developer at NHS Digital";

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
				<meta name="description" content={description} />
				<meta property="og:image" content="/images/icon-transparent.png" />
				<meta property="og:image:type" content="image/png" />
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
