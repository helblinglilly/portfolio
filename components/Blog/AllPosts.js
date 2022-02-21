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

	// Celeste Post
	posts.push(
		new PostPreview(
			"terraform",
			"Terraform",
			"A summary of my experience in building a CI/CD pipeline using Docker, Jenkins, Kubernetes and Terraform. Despite having completed training courses about AWS, I inherited an old code base which turned out to be problematic to work with.",
			new Date("21 Feb 2022"),
			[
				{ name: "AWS", color: "aws" },
				{ name: "Cloud", color: "is-info" },
			],
			"2022/terraform.png"
		).toObject
	);

	// Post with default image
	// posts.push(
	// 	new PostPreview(
	// 		"first-post",
	// 		"Post 1",
	// 		"This post is about a man that used to walk on the beach until he didn't",
	// 		new Date("01 Jan 1975 00:00:00 GMT"),
	// 		[
	// 			{ name: "JS", color: "is-warning" },
	// 			{ name: "C#", color: "is-info" },
	// 		]
	// 	).toObject
	// );

	// Return by newest first
	return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}
