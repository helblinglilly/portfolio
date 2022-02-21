import Layout from "../components/Layout/Layout";
import Head from "next/head";
import Location from "../components/Location/Location";
import CurrentRole from "../components/CurrentRole/CurrentRole";
import LatestPost from "../components/Blog/latestPost";
import AboutMe from "../components/AboutMe/AboutMe";

export default function Home() {
	return (
		<Layout home>
			<Head>
				<title>Home - Joel Helbling</title>
			</Head>
			<div className="column is-one-quarter" id="main-content">
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
