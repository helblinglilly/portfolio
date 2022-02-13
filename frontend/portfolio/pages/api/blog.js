import { formatDate } from "../../utils";

export function postSummaries() {
	const posts = [];
	posts.push(
		new Post(
			"first-post",
			"Post 1",
			"This post is about a man that used to walk on the beach until he didn't",
			new Date("01 Jan 1975 00:00:00 GMT"),
			[
				{ name: "JS", color: "is-warning" },
				{ name: "C#", color: "is-info" },
			]
		).toObject
	);

	posts.push(
		new Post(
			"second-post",
			"Post 2",
			"A massive bear somehow got to the beach and ate a man",
			new Date("01 Jan 1970 00:00:00 GMT")
		).toObject
	);
	return posts;
}

export function latestPost() {
	let posts = postSummaries();
	return posts.sort((a, b) => (a.date < b.date ? 1 : -1))[0];
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
