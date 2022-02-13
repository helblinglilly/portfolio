import Layout from "../components/Layout";
import Location from "../components/Location/Location";
import CurrentRole from "../components/CurrentRole";
import LatestPost from "../components/Blog/latestPost";
import AboutMe from "../components/AboutMe/AboutMe";

export default function Home() {
	return (
		<Layout home>
			<div className="column is-one-quarter">
				<AboutMe></AboutMe>
			</div>
			<div className="column is-two-third">
				<LatestPost></LatestPost>
				<CurrentRole></CurrentRole>
			</div>
			<div className="column is-one-quarter">
				<Location></Location>
			</div>
		</Layout>
	);
}
