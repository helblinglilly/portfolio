import React from "react";
import Layout from "../Layouts/Layout";
import AllPosts from "../components/Blog/AllPosts";
import PostPreviews, { MetaInfo } from "../components/Blog/PostPreviews";
import GithubStats from "../components/GithubStats";
import SocialPreview from "../components/SocialPreview";
import Summary from "../components/Summary";

export default function Home() {
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
					<p className="title is-3">Recent blog post</p>
					<PostPreviews
						posts={AllPosts[0] ? new Array(AllPosts[0]) : []}
					/>
				</div>
				<div className="column">
					<p className="title is-3">Github Stats</p>
					<GithubStats />
				</div>
			</div>
		</Layout>
	);
}
