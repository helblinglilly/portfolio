import Link from "next/link";
import Image from "next/image";
import { BlogMetaInfo } from "../../support/Types";

export function PostPreviews(props: { posts: BlogMetaInfo[] }) {
	return (
		<>
			{props.posts.length === 0 ? (
				<>
					<p>No posts match search criteria.</p>
					<p>Try adjusting your filters to find matching posts.</p>
				</>
			) : (
				props.posts.map((post) => {
					return (
						<Link
							href={post.link}
							key={`${post.title}link`}
							className="blogPost"
						>
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
												className="is-inline"
												alt="Blog post thumbnail"
												width={200}
												height={200}
												priority={true}
												style={{ borderRadius: "5px" }}
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
												).toLocaleDateString("en-GB")}
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
