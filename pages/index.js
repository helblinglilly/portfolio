import Layout from "../components/Layout/Layout";
import Location from "../components/Location/Location";
import CurrentRole from "../components/CurrentRole/CurrentRole";
import LatestPost from "../components/Blog/latestPost";
import AboutMe from "../components/AboutMe/AboutMe";

export default function Home() {
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
