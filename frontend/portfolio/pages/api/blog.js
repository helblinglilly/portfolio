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
		new Post(
			"first-post",
			"Post 1",
			"This post is about a man that used to walk on the beach until he didn't",
			new Date(),
			[{ name: "JS", color: "is-warning" }]
		).toObject
	);

	posts.push(
		new Post(
			"second-post",
			"Post 2",
			"A massive bear somehow got to the beach and ate a man",
			new Date()
		).toObject
	);

	return posts;
}

class Post {
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
			link: this.link,
			title: this.title,
			preview: this.preview,
			tags: tags,
			thumbnail: `/images/thumbnails/${this.thumbnail}`,
			date: formatDate(this.date),
		};
	}
}
