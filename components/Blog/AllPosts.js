import { Post, PostPreview } from "./Post";

export default function AllPosts({ posts }) {
	return (
		<>
			<p className="title is-3">Blog Posts</p>
			{posts.length > 0 ? (
				posts.map((post) => Post(post))
			) : (
				<div>
					<p>No posts match search criteria.</p>
					<p>Try adjusting your filters to find matching posts.</p>
				</div>
			)}
		</>
	);
}

export function PostSummaries() {
	const posts = [];
	// Link, Title, Preview Text, Creation Date, Tags, Post Image ([/images/thumbnails]/year/filename)
	posts.push(
		new PostPreview(
			"r-has-a-problem",
			"R has a problem",
			"In my work I had to deploy an R Shiny application. Familiar with more traditional programming languages I thought adapting to R-Shiny would be a smooth transition, especially as I would not have much involvement with it. However, the further we got in the project the more obvious its flaws became.",
			new Date("22 Feb 2022"),
			[{ name: "Cloud", color: "is-info" }],
			"r-shiny.png"
		).toObject
	);

	posts.push(
		new PostPreview(
			"aws-summit-2022",
			"AWS Summit London 2022",
			"My first conference that I was able to attend. There were talks to attend, companies to be learnt about, merchandise to be collected and new connections to be made. In this post I summarise my experience, try to capture everything I've learnt, and what I would do differently next time",
			new Date("02 May 2022"),
			[
				{ name: "Event", color: "is-success" },
				{ name: "AWS", color: "is-warning" },
				{ name: "Cloud", color: "is-info" },
			],
			"aws-summit.png"
		).toObject
	);

	// Return by newest first
	return posts.sort((a, b) => (a.date > b.date ? 1 : -1));
}
