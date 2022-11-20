import Link from "next/link";
import Image from "next/image";
import { AWSSummit22Meta } from "../../pages/blog/2022/aws-summit";
import { HomeserverPiMeta } from "../../pages/blog/2022/homeserver-pi";
import { RHasAProblemMeta } from "../../pages/blog/2022/r-has-a-problem";
import { VercelMeta } from "../../pages/blog/2022/vercel";
import { BlogMetaInfo, PostProps } from "./Types";

let visiblePosts: Array<BlogMetaInfo> = [];
// 2022
visiblePosts.push(RHasAProblemMeta);
visiblePosts.push(AWSSummit22Meta);
visiblePosts.push(HomeserverPiMeta);
visiblePosts.push(VercelMeta);

// sort the posts in chronological order
visiblePosts = visiblePosts.sort((a, b) => (a.created < b.created ? 1 : -1));

export const AllPosts = visiblePosts;

export function PostPreviews({ ...posts }: PostProps) {
	return (
		<>
			<p className="title is-3">Blog Posts</p>
			{posts.posts.map((post) => {
				return (
					<>
						<Link href={post.link} key={post.title}>
							<div className="card mb-6" key={post.title}>
								<p className="title is-4 pt-4 pl-5 mb-0">
									{post.title}
								</p>
								<div className="card-content">
									<div className="columns accented">
										<div className="column is-one-fifth level-item has-text-centered accented">
											<Image
												src={post.thumbnail}
												className="is-inline postImage"
												alt="Blog post thumbnail"
												width={200}
												height={200}
												priority={true}
												placeholder={"blur"}
												blurDataURL={
													"images/icon-transparent.png"
												}
											/>
										</div>
										<div className="column accented">
											<p className="accented">
												{post.blogSummary}
											</p>
										</div>
									</div>

									<div className="columns accented">
										<div className="column tags are-medium accented mb-0">
											{post.tags.map((tag) => {
												return (
													<span
														className={
															"tag " + tag.color
														}
														key={tag.name}
													>
														{tag.name}
													</span>
												);
											})}
										</div>
										<div className="column accented has-text-right">
											<i>
												Posted:{" "}
												{new Date(
													post.created
												).toLocaleDateString()}
											</i>
										</div>
									</div>
								</div>
							</div>
						</Link>
					</>
				);
			})}
		</>
	);
}
