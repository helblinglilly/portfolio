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
	posts.push(
		new PostPreview(
			"first-post",
			"Post 1",
			"This post is about a man that used to walk on the beach until he didn't",
			new Date("01 Jan 1975 00:00:00 GMT"),
			[
				{ name: "JS", color: "is-warning" },
				{ name: "C#", color: "is-info" },
			]
		).toObject
	);

	posts.push(
		new PostPreview(
			"second-post",
			"Post 2",
			"A massive bear somehow got to the beach and ate a man",
			new Date("01 Jan 1970 00:00:00 GMT")
		).toObject
	);
	return posts;
}
