import React from "react";
import Layout from "../Layouts/Layout";
import AllPosts from "../components/Blog/AllPosts";
import PostPreviews, { MetaInfo } from "../components/Blog/PostPreviews";
import SocialPreview, {
	ExternalLinkPreview,
} from "../components/SocialPreview";
import Summary from "../components/Summary";
import ProjectPreview from "../components/ProjectPreview";
import linkPreview from "../support/LinkPreview";

export default function Home({
	pokecompanion,
	pocketbaseLinkPreview,
}: {
	pokecompanion: ExternalLinkPreview,
	pocketbaseLinkPreview: ExternalLinkPreview;
}) {
	const metaInfo: MetaInfo = {
		title: "Lilly Helbling",
		authorName: "Lilly Helbling",
		socialSummary: "Javascript tinkerer and Pokémon enthusiast based in Leeds, UK.",
		cover: null,
	};

	return (
		<Layout>
			<SocialPreview metaInfo={metaInfo} />
			<div className="column is-one-quarter" id="main-content">
				<div className="sidebar">
					<Summary />
				</div>
			</div>
			<div className="column is-three-quarters homepage-wrapper">
				<div className="column" style={{ padding: 0 }}>
					<p className="title is-3">Recent projects</p>
					<div className="columns homepageProjects">
						<div className="column">
							<ProjectPreview
								link={"https://pokecompanion.helbling.uk"}
								title={"Pokécompanion Svelte Rewrite"}
								image={pokecompanion.image}
							/>
						</div>
						<div className="column">
							<ProjectPreview
								link={
									"https://github.com/helblinglilly/aws-pocketbase"
								}
								title={"Pocketbase AWS Terraform Template"}
								image={pocketbaseLinkPreview.image}
							/>
						</div>
					</div>
				</div>
				<div
					className="column"
					style={{ padding: 0, paddingTop: "2rem" }}
				>
					<p className="title is-3">Recent blog post</p>
					<PostPreviews
						posts={AllPosts[0] ? new Array(AllPosts[0]) : []}
					/>
				</div>
			</div>
		</Layout>
	);
}

export async function getStaticProps() {
	const pokecompanion = await linkPreview("https://pokecompanion.helbling.uk")
	await new Promise((resolve) => setTimeout(() => resolve(""), 500));

	const pocketbaseLinkPreview = await linkPreview(
		"https://github.com/helblinglilly/aws-pocketbase"
	);
	return {
		props: {
			pokecompanion: {
				...pokecompanion,
				image:
				pokecompanion.image.length > 0
						? pokecompanion.image
						: "/images/pokecompanion-svelte.webp",
			},
			pocketbaseLinkPreview: {
				...pocketbaseLinkPreview,
				image:
					pocketbaseLinkPreview.image.length > 0
						? pocketbaseLinkPreview.image
						: "/images/aws-pocketbase.png",
			},
		},
	};
}
