import Layout from "../../Layouts/Layout";
import { MetaInfo } from "../../components/Blog/PostPreviews";
import GithubStats from "../../components/GithubStats";
import ProjectPreview from "../../components/ProjectPreview";
import SocialPreview, {
	ExternalLinkPreview,
} from "../../components/SocialPreview";
import linkPreview from "../../support/LinkPreview";

export default function Projects({
	pokecompanionGitHub,
	pokewikiLive,
	pokeWikiGithub,
	portfolio,
	piserver,
	pocketbase,
	sweetaf,
}: {
	pokecompanionGitHub: ExternalLinkPreview;
	pokewikiLive: ExternalLinkPreview;
	pokeWikiGithub: ExternalLinkPreview;
	portfolio: ExternalLinkPreview;
	piserver: ExternalLinkPreview;
	pocketbase: ExternalLinkPreview;
	sweetaf: ExternalLinkPreview;
}) {
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
											image={pokecompanionGitHub.image}
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
									<div className="column ">
										<ProjectPreview
											link={"https://pokemon.helbling.uk"}
											title={"Live site"}
											image={pokewikiLive.image}
										/>
									</div>
									<div className="column">
										<ProjectPreview
											link={
												"https://github.com/helblingjoel/pokewiki"
											}
											title={"Github"}
											image={pokeWikiGithub.image}
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
											image={portfolio.image}
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
											image={piserver.image}
										/>
									</div>
									<div className="column">
										<ProjectPreview
											link={
												"https://github.com/helblingjoel/aws-pocketbase"
											}
											title={"AWS Pocketbase Terraform"}
											image={pocketbase.image}
										/>
									</div>

									<div className="column">
										<ProjectPreview
											link={"https://sweetaf.uk"}
											title={"sweetaf"}
											image={sweetaf.image}
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

export async function getStaticProps() {
	const pokecompanionGitHub = await linkPreview(
		"https://github.com/helblingjoel/pokecompanion"
	);
	await new Promise((resolve) => setTimeout(() => resolve(""), 500));

	const pokewikiLive = await linkPreview("https://pokemon.helbling.uk");
	await new Promise((resolve) => setTimeout(() => resolve(""), 500));

	const pokeWikiGithub = await linkPreview(
		"https://github.com/helblingjoel/pokewiki"
	);
	await new Promise((resolve) => setTimeout(() => resolve(""), 500));

	const portfolio = await linkPreview(
		"https://github.com/helblingjoel/portfolio"
	);
	await new Promise((resolve) => setTimeout(() => resolve(""), 500));

	const piserver = await linkPreview(
		"https://github.com/helblingjoel/piserver"
	);
	await new Promise((resolve) => setTimeout(() => resolve(""), 500));

	const pocketbase = await linkPreview(
		"https://github.com/helblingjoel/aws-pocketbase"
	);
	await new Promise((resolve) => setTimeout(() => resolve(""), 500));

	const sweetaf = await linkPreview("https://sweetaf.uk");
	await new Promise((resolve) => setTimeout(() => resolve(""), 500));

	return {
		props: {
			pokecompanionGitHub: {
				...pokecompanionGitHub,
				image:
					pokecompanionGitHub.image.length > 0
						? pokecompanionGitHub.image
						: "/images/pokecompanion-github.png",
			},
			pokewikiLive: {
				...pokewikiLive,
				image:
					pokewikiLive.image.length > 0
						? pokewikiLive.image
						: "/images/posts/2023/pokemon/generic.png",
			},
			pokeWikiGithub: {
				...pokeWikiGithub,
				image:
					pokeWikiGithub.image.length > 0
						? pokeWikiGithub.image
						: "/images/posts/2023/pokemon/gitrepo.png",
			},
			portfolio: {
				...portfolio,
				image:
					portfolio.image.length > 0
						? portfolio.image
						: "/images/portfolio.png",
			},
			piserver: {
				...piserver,
				image:
					piserver.image.length > 0
						? piserver.image
						: "/images/posts/2022/homeserver-pi/gitrepo.png",
			},
			pocketbase: {
				...pocketbase,
				image:
					pocketbase.image.length > 0
						? pocketbase.image
						: "/images/aws-pocketbase.png",
			},
			sweetaf: {
				...sweetaf,
				image:
					sweetaf.image.length > 0
						? sweetaf.image
						: "/images/sweetaf.jpg",
			},
		},
	};
}
