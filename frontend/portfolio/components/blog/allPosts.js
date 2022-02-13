import Link from "next/link";
import Image from "next/image";

export default function AllPosts({ posts }) {
	return (
		<>
			<p className="title is-3">Blog Posts</p>
			{posts.length > 0 ? (
				posts.map((post) => card(post))
			) : (
				<div>
					<p>No posts match search criteria.</p>
					<p>Try adjusting your filters to find matching posts.</p>
				</div>
			)}
		</>
	);
}

function card(post) {
	const link = "/blog/" + post.link;
	let r = (Math.random() + 1).toString(36).substring(7);

	return (
		<Link href={link} key={r}>
			<div className="card mb-6" key={post.title}>
				<p className="title is-4 pt-4 pl-5 mb-0">{post.title}</p>
				<div className="card-content">
					<div className="columns accented">
						<div className="column is-one-fifth level-item has-text-centered accented">
							<Image
								src={post.thumbnail}
								className="is-inline postImage"
								alt="Post Icon"
								width={200}
								height={200}
							/>
						</div>
						<div className="column accented">
							<p className="accented">{post.preview}</p>
						</div>
					</div>

					<div className="tags are-medium">
						{post.tags.map((tag) => {
							return (
								<span className={tag.color} key={tag.name}>
									{tag.name}
								</span>
							);
						})}
					</div>
				</div>
			</div>
		</Link>
	);
}
