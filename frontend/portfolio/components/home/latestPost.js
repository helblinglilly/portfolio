import { latestPost } from "../../pages/api/blog";
import { card } from "../blog/allPosts";

export default function LatestPost() {
	return (
		<>
			<p className="title">Latest Post</p>
			{card(latestPost())}
		</>
	);
}
