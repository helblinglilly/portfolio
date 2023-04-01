import Layout from "../../Layouts/Layout";
import SocialPreview from "../../components/App/SocialPreview/SocialPreview";
import Menu from "../../components/Background/Menu";
import NHSDigital from "../../components/Background/NHSDigital";
import Waitrose from "../../components/Background/Waitrose";
import Kent from "../../components/Background/Kent";
import McDonalds from "../../components/Background/McDonalds";
import RoyalHarbour from "../../components/Background/RoyalHarbourAcademy";
import { MetaInfo } from "../../components/Blog/PostPreviews/PostPreviews.Types";

export default function Home() {
	const metaInfo: MetaInfo = {
		title: "Background - Joel Helbling",
		authorName: "Joel Helbling",
		socialSummary: `Background information about my previous roles, education and how those influenced me as a person`,
		cover: null,
	};
	return (
		<Layout>
			<SocialPreview metaInfo={metaInfo} />
			<div className="column is-one-quarter">
				<Menu></Menu>
			</div>
			<div className="column mb-4" id="main-content">
				<NHSDigital></NHSDigital>
				<hr></hr>
				<Waitrose></Waitrose>
				<hr></hr>
				<Kent></Kent>
				<hr></hr>
				<McDonalds></McDonalds>
				<hr></hr>
				<RoyalHarbour></RoyalHarbour>
			</div>
		</Layout>
	);
}
