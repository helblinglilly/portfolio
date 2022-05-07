import Layout from "../components/Layout/Layout";
import Location from "../components/Location/Location";
import CurrentRole from "../components/CurrentRole/CurrentRole";
import LatestPost from "../components/Blog/LatestPost";
import AboutMe from "../components/AboutMe/AboutMe";
import SocialPreview from "../components/SocialPreview/SocialPreview";

export default function Home() {
	const description =
		"Joel Helbling, Graduate Developer at NHS Digital based in the UK. Computer Science graduate from Uni of Kent";
	return (
		<Layout home>
			<SocialPreview
				title="Joel Helbling"
				description={description}
			></SocialPreview>
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
