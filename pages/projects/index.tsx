import Layout from "../../Layouts/Layout";
import { MetaInfo } from "../../components/Blog/PostPreviews";
import GithubStats from "../../components/GithubStats";
import ProjectPreview from "../../components/ProjectPreview";
import SocialPreview from "../../components/SocialPreview";

export default function Projects() {
	const metaInfo: MetaInfo = {
		title: "Projects - Joel Helbling",
		authorName: "Joel Helbling",
		socialSummary: "Joel Helbling, Software Engineer based in Leeds",
		cover: null,
	};
	return (
		<Layout>
			<SocialPreview metaInfo={metaInfo} />
			<div className="column is-one-quarter">
				<div className="title">
					<p className="is-3">Github Stats</p>
					<GithubStats />
				</div>
			</div>
			<div className="column is-three-quarters" id="main-content">
				<p className="title is-3">Projects</p>

				<div className="columns">
					<div className="column">
						<div className="card">
							<div className="card-content">
								<p className="title is-5">
									Pokécompanion - SvelteKit
								</p>
								<div className="columns">
									<div className="column">
										<ProjectPreview
											link={
												"https://pokecompanion.vercel.app"
											}
											title={"Live site"}
											image={
												"/images/pokecompanion-svelte.webp"
											}
										/>
									</div>
									<div className="column">
										<ProjectPreview
											link={
												"https://github.com/helblingjoel/pokecompanion"
											}
											title={"Github"}
											image={
												"/images/pokecompanion-github.png"
											}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="column">
						<div className="card">
							<div className="card-content">
								<p className="title is-5">
									Pokécompanion - Express
								</p>
								<div className="columns">
									<div className="column">
										<ProjectPreview
											link={"https://pokemon.helbling.uk"}
											title={"Live site"}
											image={
												"/images/posts/2023/pokemon/generic.png"
											}
										/>
									</div>
									<div className="column">
										<ProjectPreview
											link={
												"https://github.com/helblingjoel/pokewiki"
											}
											title={"Github"}
											image={
												"/images/posts/2023/pokemon/gitrepo.png"
											}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="columns">
					<div className="column">
						<div className="card">
							<div className="card-content">
								<p className="title is-5">This site</p>
								<div className="columns">
									<div className="column">
										<ProjectPreview
											link={
												"https://github.com/helblingjoel/portfolio"
											}
											title={"Github"}
											image={"/images/portfolio.png"}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="column is-three-quarters">
						<div className="card">
							<div className="card-content">
								<p className="title is-5">Other</p>
								<div className="columns">
									<div className="column">
										<ProjectPreview
											link={
												"https://github.com/helblingjoel/piserver"
											}
											title={"Pi Homeserver"}
											image={
												"/images/posts/2022/homeserver-pi/gitrepo.png"
											}
										/>
									</div>
									<div className="column">
										<ProjectPreview
											link={
												"https://github.com/helblingjoel/aws-pocketbase"
											}
											title={"AWS Pocketbase Terraform"}
											image={"/images/aws-pocketbase.png"}
										/>
									</div>

									<div className="column">
										<ProjectPreview
											link={"https://sweetaf.uk"}
											title={"sweetaf"}
											image={"/images/sweetaf.jpg"}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}
