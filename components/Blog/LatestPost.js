import { Post } from "./Post";
import { PostSummaries } from "./AllPosts";

export default function LatestPost() {
	return (
		<>
			<p className="title">Latest Post</p>
			{Post(latestPost())}
		</>
	);
}

function latestPost() {
	let posts = PostSummaries();
	return posts.sort((a, b) => (a.date > b.date ? 1 : -1))[0];
}
