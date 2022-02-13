import Layout, { siteTitle } from "../components/layout";
import Location from "../components/home/location";
import CurrentRole from "../components/home/currentRole";
import LatestPost from "../components/home/latestPost";
import Sidebar from "../components/sidebar";

export default function Home() {
	return (
		<Layout home>
			<div className="column is-one-quarter">
				<Sidebar></Sidebar>
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
