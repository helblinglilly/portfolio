import Navbar from "../components/Navbar";
import { useEffect } from "react";

let vercel_env;

export default function Layout({ children }) {
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

		vercel_env = process.env.VERCEL_ENV;
	});

	return (
		<div>
			<a className="access-skipnav" href="#main-content">
				Skip Navigation
			</a>

			{process.env.NODE_ENV === "production" &&
			process.env.VERCEL_ENV === "production" ? null : (
				<div className="notification is-warning mb-0">
					<p>
						This is a{" "}
						{process.env.VERCEL_ENV
							? process.env.VERCEL_ENV
							: "local"}{" "}
						instance running in {process.env.NODE_ENV} mode
					</p>
				</div>
			)}

			<p>VERCEL_ENV: {vercel_env}</p>
			<p>NODE_ENV: {process.env.NODE_ENV}</p>
			<p>VERCEL: {process.env.VERCEL}</p>
			<p>VERCEL_URL: {process.env.VERCEL_URL}</p>
			<p>ENVIRONMENT: {process.env.ENVIRONMENT}</p>

			<Navbar></Navbar>
			<div>
				<main className="p-6">
					<div className="columns">{children}</div>
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
