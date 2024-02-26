import Layout from "../../Layouts/Layout";
import { MetaInfo } from "../../components/Blog/PostPreviews";
import GithubStats from "../../components/GithubStats";
import ProjectPreview from "../../components/ProjectPreview";
import SocialPreview, {
	ExternalLinkPreview,
} from "../../components/SocialPreview";
import linkPreview from "../../support/LinkPreview";

export default function Projects({
	pokecompanion,
	pokewikiLive,
	portfolio,
	piserver,
	pocketbase,
	sweetaf,
}: {
	pokecompanion: ExternalLinkPreview;
	pokewikiLive: ExternalLinkPreview;
	portfolio: ExternalLinkPreview;
	piserver: ExternalLinkPreview;
	pocketbase: ExternalLinkPreview;
	sweetaf: ExternalLinkPreview;
}) {
	const metaInfo: MetaInfo = {
		title: "Projects - Lilly Helbling",
		authorName: "Lilly Helbling",
		socialSummary: "Javascript tinkerer and Pokémon enthusiast based in Leeds, UK.",
		cover: null,
	};
	return (
		<Layout>
			<SocialPreview metaInfo={metaInfo} />
			<div className="column is-one-quarter" id="main-content">
				<div className="sidebar">
					<p className="title is-3">Github Stats</p>
					<GithubStats />
				</div>
			</div>

			{/* <div id="sidebar">
				<div className="title">
					<p className="is-3">Github Stats</p>
					<GithubStats />
				</div>
			</div> */}
			<div className="column is-three-quarters">
				<p className="title is-3">Projects</p>

				<div className="columns projectRow">
					<div className="column" style={{ flex: 1 }}>
						<ProjectPreview
							link={"https://pokecompanion.helbling.uk"}
							title={"Pokécompanion SvelteKit"}
							image={pokecompanion.image}
						/>
					</div>

					<div className="column" style={{ flex: 1 }}>
						<ProjectPreview
							link={"https://pokemon.helbling.uk"}
							title={"Pokécompanion Express"}
							image={pokewikiLive.image}
						/>
					</div>
				</div>

				<div className="columns projectRow">
					<div className="column" style={{ flex: 1 }}>
						<ProjectPreview
							link={"https://github.com/helblinglilly/portfolio"}
							title={"This site"}
							image={portfolio.image}
						/>
					</div>

					<div className="column" style={{ flex: 1 }}>
						<ProjectPreview
							link={"https://github.com/helblinglilly/piserver"}
							title={"Pi Homeserver"}
							image={piserver.image}
						/>
					</div>
				</div>

				<div className="columns projectRow">
					<div className="column" style={{ flex: 1 }}>
						<ProjectPreview
							link={
								"https://github.com/helblinglilly/aws-pocketbase"
							}
							title={"AWS Pocketbase Terraform"}
							image={pocketbase.image}
						/>
					</div>

					<div className="column" style={{ flex: 1 }}>
						<ProjectPreview
							link={"https://sweetaf.uk"}
							title={"sweetaf"}
							image={sweetaf.image}
						/>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export async function getStaticProps() {
	const pokecompanion = await linkPreview("https://pokecompanion.helbling.uk")
	await new Promise((resolve) => setTimeout(() => resolve(""), 500));

	const pokewikiLive = await linkPreview("https://pokemon.helbling.uk");
	await new Promise((resolve) => setTimeout(() => resolve(""), 500));

	const portfolio = await linkPreview(
		"https://github.com/helblinglilly/portfolio"
	);
	await new Promise((resolve) => setTimeout(() => resolve(""), 500));

	const piserver = await linkPreview(
		"https://github.com/helblinglilly/piserver"
	);
	await new Promise((resolve) => setTimeout(() => resolve(""), 500));

	const pocketbase = await linkPreview(
		"https://github.com/helblinglilly/aws-pocketbase"
	);
	await new Promise((resolve) => setTimeout(() => resolve(""), 500));

	const sweetaf = await linkPreview("https://sweetaf.uk");
	await new Promise((resolve) => setTimeout(() => resolve(""), 500));

	return {
		props: {
			pokecompanion: {
				...pokecompanion,
				image:
				pokecompanion.image.length > 0
						? pokecompanion.image
						: "/images/pokecompanion-svelte.webp",
			},
			pokewikiLive: {
				...pokewikiLive,
				image:
					pokewikiLive.image.length > 0
						? pokewikiLive.image
						: "/images/posts/2023/pokemon/generic.png",
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
