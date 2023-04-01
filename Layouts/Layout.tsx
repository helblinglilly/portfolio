import Navbar from "../components/App/Navbar";
import { useEffect } from "react";

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
