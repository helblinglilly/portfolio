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
	pocketbaseLinkPreview,
}: {
	pocketbaseLinkPreview: ExternalLinkPreview;
}) {
	const metaInfo: MetaInfo = {
		title: "Joel Helbling",
		authorName: "Joel Helbling",
		socialSummary: "Joel Helbling, Software Engineer based in Leeds",
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
			<div className="column is-three-quarters">
				<div className="column" style={{ padding: 0 }}>
					<p className="title is-3">Recent projects</p>
					<div className="columns">
						<div className="column">
							<ProjectPreview
								link={"https://pokecompanion.vercel.app"}
								title={"Pokécompanion Svelte Rewrite"}
								image={"/images/pokecompanion-svelte.webp"}
							/>
						</div>
						<div className="column">
							<ProjectPreview
								link={
									"https://github.com/helblingjoel/aws-pocketbase"
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
	const pocketbaseLinkPreview = await linkPreview(
		"https://github.com/helblingjoel/aws-pocketbase"
	);
	return {
		props: {
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
