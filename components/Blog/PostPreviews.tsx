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
			{posts.posts.length === 0 ? (
				<>
					<p>No posts match search criteria.</p>
					<p>Try adjusting your filters to find matching posts.</p>
				</>
			) : (
				posts.posts.map((post) => {
					return (
						<Link href={post.link} key={`${post.title}link`}>
							<div
								className="card mb-6"
								key={`${post.title}card`}
							>
								<p
									className="title is-4 pt-4 pl-5 mb-0"
									key={`${post.title}title`}
								>
									{post.title}
								</p>
								<div
									className="card-content"
									key={`${post.title}cardContent`}
								>
									<div
										className="columns accented"
										key={`${post.title}columns`}
									>
										<div
											className="column is-one-fifth level-item has-text-centered accented"
											key={`${post.title}thumbnailContainer`}
										>
											<Image
												src={post.thumbnail}
												className="is-inline postImage"
												alt="Blog post thumbnail"
												width={200}
												height={200}
												priority={true}
												placeholder={"blur"}
												blurDataURL={
													"images/placeholder.jpeg"
												}
												key={`${post.title}thumbnailImage`}
											/>
										</div>

										<div
											className="column accented"
											key={`${post.title}summaryContainer`}
										>
											<p
												className="accented"
												key={`${post.title}summaryContent`}
											>
												{post.blogSummary}
											</p>
										</div>
									</div>

									<div
										className="columns accented"
										key={`${post.title}footer`}
									>
										<div
											className="column tags are-medium accented mb-0"
											key={`${post.title}tags`}
										>
											{post.tags.map((tag) => {
												return (
													<span
														style={{
															color: tag.color,
															backgroundColor:
																tag.backgroundColor,
														}}
														className={"tag "}
														key={
															post.title +
															tag.name
														}
													>
														{tag.name}
													</span>
												);
											})}
										</div>
										<div
											className="column accented has-text-right"
											key={`${post.title}date`}
										>
											<i key={`${post.title}dateItalics`}>
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
					);
				})
			)}
		</>
	);
}
