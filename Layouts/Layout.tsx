import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Head from "next/head";

export default function Layout(props: { children: any }) {
	useEffect(() => {
		const handleScroll = () => {
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
				menuButton?.classList.remove("hidden");
			} else {
				if (menuButton && !menuButton.classList.contains("hidden"))
					menuButton.classList.add("hidden");
			}
		};
		document.addEventListener("scroll", handleScroll, { passive: true });

		return () => {
			document.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div>
			<Head>
				<link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
				<link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
				<link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
				<link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
				<link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
				<link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
				<link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
				<link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
				<link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
				<link rel="manifest" href="/manifest.json" />
				<meta name="msapplication-TileColor" content="#ffffff"></meta>
				<meta name="msapplication-TileImage" content="/ms-icon-144x144.png"></meta>
				<meta name="theme-color" content="#ffffff"></meta>
			</Head>
			<a className="access-skipnav" href="#main-content">
				Skip Navigation
			</a>
			{process.env.NODE_ENV === "production" &&
			process.env.NEXT_PUBLIC_VERCEL_ENV === "production" ? null : (
				<div className="notification is-warning mb-0">
					<p>
						This is a{" "}
						{process.env.NEXT_PUBLIC_VERCEL_ENV
							? process.env.NEXT_PUBLIC_VERCEL_ENV
							: "local"}{" "}
						instance running in {process.env.NODE_ENV} mode
					</p>
				</div>
			)}

			<Navbar />
			<div>
				<main className="p-6">
					<div className="columns">{props.children}</div>
					<div id="backToTopContainer">
						<a
							className="button hidden"
							id="backToTopButton"
							href="#navbar"
						>
							Back to top
						</a>
					</div>
				</main>
			</div>
		</div>
	);
}
