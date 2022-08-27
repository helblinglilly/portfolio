import { Post, PostPreview } from "./Post";

const posts = [];
/*
	Link to this site: /[postyear]/link
	Title: As displayed to end users
	Preview Text: In post preview and URL preview
	Creation Date: Date posted as Date object
	Tags: [ {name: 'name', color: 'bulma-colour'}]
	Thumbnail: Location in /images/posts/[year]/link
	Cover Image: Location in /images/posts/[year]/link
*/
posts.push(
	new PostPreview(
		"r-has-a-problem",
		"R has a problem",
		"In my work I had to deploy an R Shiny application. Familiar with more traditional programming languages I thought adapting to R-Shiny would be a smooth transition, especially as I would not have much involvement with it. However, the further we got in the project the more obvious its flaws became.",
		new Date("2022-02-05"),
		[{ name: "Cloud", color: "cloud" }],
		"thumbnail.png"
	).toObject
);

posts.push(
	new PostPreview(
		"aws-summit-2022",
		"AWS Summit London 2022",
		"My first conference that I was able to attend. There were talks to attend, companies to be learnt about, merchandise to be collected and new connections to be made. In this post I summarise my experience, try to capture everything I've learnt, and what I would do differently next time",
		new Date("2022-05-05"),
		[
			{ name: "Event", color: "is-success" },
			{ name: "AWS", color: "aws" },
			{ name: "Cloud", color: "cloud" },
		],
		"thumbnail.png",
		"cover.jpeg"
	).toObject
);

posts.push(
	new PostPreview(
		"homeserver-pi",
		"My Pi home server",
		"A place to write custom apps on the network, block ads, run sponsorblock for my Chromecast devices, store a plex library and use it as local network storage. Find out how I've harnessed the power of Docker and a Raspberry Pi 3B+ to enjoy all the flexibility in a tiny, power-efficient, quiet package.",
		new Date("2022-07-30"),
		[
			{ name: "Raspberry Pi", color: "pi" },
			{ name: "Docker", color: "docker" },
		],
		"thumbnail.png"
	).toObject
);

posts.push(
	new PostPreview(
		"vercel",
		"Moving to Vercel",
		"With heroku making the news recently about removing their free-tier plan, I thought it would be interesting to look into the managed hosting space. What I found left me with my mouth wide open, despite only having scratched the surface!",
		new Date("2022-08-30"),
		[{ name: "Cloud", color: "cloud" }],
		"thumbnail.png"
	).toObject
);

export default function AllPosts({ posts }) {
	return (
		<>
			<p className="title is-3">Blog Posts</p>
			{posts.length > 0 ? (
				posts.map((post) => Post(post))
			) : (
				<div>
					<p>No posts match search criteria.</p>
					<p>Try adjusting your filters to find matching posts.</p>
				</div>
			)}
		</>
	);
}

export function PostSummaries() {
	return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function GetPostMetadata(blog_url) {
	return posts.find((post) => post.link.split("/")[1] === blog_url);
}
