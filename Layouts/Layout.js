import Navbar from "../components/Navbar";
import { useEffect } from "react";

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
	});

	return (
		<div>
			<a className="access-skipnav" href="#main-content">
				Skip Navigation
			</a>

			<p>spike/cypress</p>

			{process.env.NODE_ENV === "production" &&
			process.env.VERCEL_ENV === "production" ? null : (
				<div className="notification is-warning mb-0">
					<p>This is a {process.env.NODE_ENV} environment</p>
				</div>
			)}

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
