import Link from "next/link";
import Image from "next/image";
import { formatDate } from "../../utils";

export class PostPreview {
	constructor(
		link,
		title,
		preview,
		date,
		tags = [{ name: "Misc", color: "is-light" }],
		thumbnail = "default.png"
	) {
		this.link = link;
		this.title = title;
		this.preview = preview;
		this.tags = tags;
		this.thumbnail = thumbnail;
		this.tags = tags;
		if (typeof date === "object") this.date = date;
	}

	get toObject() {
		const tags = [];
		for (const tag of this.tags) {
			const moddedTag = { name: tag.name, color: `tag ${tag.color}` };
			tags.push(moddedTag);
		}

		return {
			link: `${this.date.getFullYear()}/${this.link}`,
			title: this.title,
			preview: this.preview,
			tags: tags,
			thumbnail:
				this.thumbnail === "default.png"
					? `/images/thumbnails/default.png`
					: `/images/thumbnails/${this.date.getFullYear()}/${this.thumbnail}`,
			date: formatDate(this.date),
		};
	}
}

export function Post(post) {
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
								priority={true}
								placeholder={"blur"}
								blurDataURL={"images/icon-transparent.png"}
							/>
						</div>
						<div className="column accented">
							<p className="accented">{post.preview}</p>
						</div>
					</div>

					<div className="columns accented">
						<div className="column tags are-medium accented mb-0">
							{post.tags.map((tag) => {
								return (
									<span className={tag.color} key={tag.name}>
										{tag.name}
									</span>
								);
							})}
						</div>
						<div className="column accented has-text-right">
							<i>Posted: {post.date}</i>
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
}
