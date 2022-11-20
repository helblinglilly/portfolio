import { AWSSummit22Meta } from "../../pages/blog/2022/aws-summit";
import { HomeserverPiMeta } from "../../pages/blog/2022/homeserver-pi";
import { RHasAProblemMeta } from "../../pages/blog/2022/r-has-a-problem";
import { VercelMeta } from "../../pages/blog/2022/vercel";
import PostPreview from "./PostPreview";
import { BlogMetaInfo, PostProps } from "./Types";

// TODO Integrate PostPreview into this file
let visiblePosts: Array<BlogMetaInfo> = [];
// 2022
visiblePosts.push(RHasAProblemMeta);
visiblePosts.push(AWSSummit22Meta);
visiblePosts.push(HomeserverPiMeta);
visiblePosts.push(VercelMeta);

// sort the posts in chronological order
visiblePosts = visiblePosts.sort((a, b) => (a.created < b.created ? 1 : -1));

export const AllPosts = visiblePosts;

export function AllPostPreviews({ ...posts }: PostProps) {
	return (
		<>
			<p className="title is-3">Blog Posts</p>
			{posts.posts.length > 0 ? (
				posts.posts.map((post) => PostPreview(post))
			) : (
				<div>
					<p>No posts match search criteria.</p>
					<p>Try adjusting your filters to find matching posts.</p>
				</div>
			)}
		</>
	);
}
