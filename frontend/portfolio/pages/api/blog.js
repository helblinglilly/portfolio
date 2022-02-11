import { formatDate } from "../../utils";

export default function handler(req, res) {
	if (req.method === "GET") {
		const response = {
			posts: postSummaries(),
		};
		res.send(response);
	} else {
		res.status(500).send();
	}
}

export function postSummaries() {
	const posts = [];
	posts.push(
		new Post("first-post", "Post 1", "A bit of a title haha", new Date()).toObject
	);

	posts.push(
		new Post("second-post", "Post 2", "A bit of a title haha", new Date()).toObject
	);

	return posts;
}

class Post {
	constructor(
		link,
		title,
		preview,
		date,
		tags = { name: "Misc", color: "is-light" },
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
		const moddedTag = { name: this.tags.name, color: `tag ${this.tags.color}` };
		return {
			link: this.link,
			title: this.title,
			preview: this.preview,
			tags: moddedTag,
			thumbnail: `/images/thumbnails/${this.thumbnail}`,
			date: formatDate(this.date),
		};
	}
}
