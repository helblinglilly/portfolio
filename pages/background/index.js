import Layout from "../../components/Layout/Layout";
import { useEffect } from "react";
import ReactDOM from "react-dom";
import Menu from "../../components/Background/Menu";
import NHSDigital from "../../components/Background/NHSDigital";
import Waitrose from "../../components/Background/Waitrose";
import Kent from "../../components/Background/Kent";
import McDonalds from "../../components/Background/McDonalds";
import RoyalHarbour from "../../components/Background/RoyalHarbourAcademy";

export default function Home() {
	return (
		<Layout home>
			<div className="column is-one-quarter">
				<Menu></Menu>
				<div id="backToTopContainer">
					<a className="button hidden" id="backToTopButton" href="#navbar">
						Back to top
					</a>
				</div>
			</div>
			<div className="column mb-4">
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
