import Layout from "../components/Layout/Layout";
import Location from "../components/Location/Location";
import CurrentRole from "../components/CurrentRole/CurrentRole";
import LatestPost from "../components/Blog/latestPost";
import AboutMe from "../components/AboutMe/AboutMe";
import { useEffect } from "react";

export default function Home() {
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
					console.log("Turn on");
					if (menuButton.classList.contains("hidden")) {
						menuButton.classList.remove("hidden");
						console.log("Turned on");
					}
				} else {
					console.log("Turn off");
					if (!menuButton.classList.contains("hidden"))
						menuButton.classList.add("hidden");
				}
			},
			[]
		);
	});

	return (
		<Layout home>
			<div className="column is-one-quarter">
				<AboutMe></AboutMe>
				<div id="backToTopContainer">
					<a className="button hidden" id="backToTopButton" href="#navbar">
						Back to top
					</a>
				</div>
			</div>
			<div className="column is-two-third">
				<LatestPost></LatestPost>
				<CurrentRole></CurrentRole>
			</div>
			<div className="column is-one-quarter mb-4">
				<Location></Location>
			</div>
		</Layout>
	);
}
