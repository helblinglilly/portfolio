import React, { useState } from "react";
import Layout from "../../Layouts/Layout";
import LatestTweets from "../../components/Tweets/LatestTweets";
import SocialPreview from "../../components/SocialPreview";
import axios from "axios";
import {
	BlogMetaInfo,
	MetaInfo,
	TweetsAndBlogProps,
	Tags,
} from "../../components/Blog/Types";
import {
	AllPostPreviews,
	AllPosts,
} from "../../components/Blog/AllPostPreviews";

export default function Blog({ ...props }: TweetsAndBlogProps) {
	const metaInfo: MetaInfo = {
		title: "Blog - Joel Helbling",
		socialSummary: `Blog homepage of Joel Helbling. View the collection of blog posts, search for specific ones, filter by tags or by publishing year`,
		authorName: "Joel Helbling",
		cover: null,
	};

	const [visiblePosts, setVisiblePosts] = useState<BlogMetaInfo[]>([]);
	const [isSearchVisible, setSearchVisibility] = useState<boolean>(false);
	const toggleMobileSearchVisibility = () => {
		setSearchVisibility(!isSearchVisible);
	};

	const [searchTerm, setSearchTerm] = useState("");
	const [tags, setTags] = useState<Tags[]>([]);
	const [years, setYears] = useState<number[]>([]);

	if (searchTerm === undefined || searchTerm === "") setSearchTerm(".*");

	return (
		<Layout>
			<SocialPreview metaInfo={metaInfo} />

			<div className="column is-one-quarter">
				<div className="desktop title">
					<p className="is-3">Filter</p>
				</div>
				// Think I changed when it's visible now?
				<div
					className={
						"card mobile mb-2 " + isSearchVisible
							? ""
							: "mobileHidden"
					}
				>
					<div className="card-header">
						<p className="card-header-title primary">
							Toggle filters
						</p>
						<button
							className="card-header-icon"
							onClick={toggleMobileSearchVisibility}
							aria-label="more options"
						>
							<span className="icon">
								<p>▽</p>
							</span>
						</button>
					</div>
				</div>
			</div>
			<div className="column is-two-third" id="main-content">
				<AllPostPreviews posts={props.posts} />
			</div>
			<div className="column is-one-quarter">
				<LatestTweets tweets={props.tweets}></LatestTweets>
			</div>
		</Layout>
	);
}

function search() {
	return (
		<>
			<div className="desktop title">
				<p className="is-3">Filter</p>
			</div>

			<div className="card mobile mb-2">
				<div className="card-header">
					<p className="card-header-title primary">Toggle filters</p>
					<button
						className="card-header-icon"
						onClick={toggleMobileSearch}
						aria-label="more options"
					>
						<span className="icon">
							<p>▽</p>
						</span>
					</button>
				</div>
			</div>
			{searchCard(setSearchTerm, setTags, setYears, posts)}
		</>
	);
}

function toggleMobileSearch() {
	// TODO Mobile Blog post search toggle
	console.log("Toogle mobile search");

	// document.querySelector("#search").classList.toggle("mobileHidden");
}

function searchCard(
	setSearchTerm: (arg0: string) => void,
	setTags: (arg0: { (tags: any): any[]; (tags: any): any }) => void,
	setYears: (arg0: { (years: any): any[]; (years: any): any }) => void,
	posts: BlogMetaInfo[]
) {
	return (
		<div className="card search mobileHidden" id="search">
			<div className="card-content">
				<input
					className="input"
					placeholder="Search term..."
					onChange={(event) => {
						setSearchTerm(event.target.value);
					}}
				></input>

				<div className="pt-4 accented">
					<p className="title is-5 mb-2">Posted in year</p>

					{getYears(posts).map((year) => {
						return (
							<div className="pt-2 accented" key={year}>
								<label className="checkbox">
									<input
										className="mr-2"
										type="checkbox"
										onChange={(event) => {
											if (event.target.checked)
												setYears((years: any) => [
													...years,
													year,
												]);
											else
												setYears((years: any[]) =>
													years.filter(
														(item: any) =>
															item !== year
													)
												);
										}}
									/>
									{year}
								</label>
							</div>
						);
					})}
				</div>

				<div className="pt-4 accented">
					<p className="title is-5 mb-2">Tags</p>
					// TODO needs attention
					{getTags(posts).map((tag) => {
						return (
							<div className="mb-2 accented" key={tag.name}>
								<label className="checkbox">
									<input
										className="mr-2"
										type="checkbox"
										onChange={(event) => {
											if (event.target.checked)
												setTags((tags: Tags[]) => [
													...tags,
													tag,
												]);
											else
												setTags((tags: Tags[]) =>
													tags.filter(
														(item) => item !== tag
													)
												);
										}}
									/>
									{tag.name}
								</label>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

function filterPosts(
	posts: Array<BlogMetaInfo>,
	searchTerm: string | RegExp | undefined,
	tags: string | any[],
	years: any[]
): Array<BlogMetaInfo> {
	return posts.filter((post) => {
		const searchRegex = new RegExp(
			searchTerm ? searchTerm.toString() : ".*",
			"gim"
		);
		const searchMatched = searchRegex.test(
			`${post.title} ${post.blogSummary}`
		);

		let tagsMatched = tags.length === 0 ? true : false;
		if (!tagsMatched) {
			post.tags.forEach((tag: { name: any }) => {
				if (tags.includes(tag.name)) {
					tagsMatched = true;
					return;
				}
			});
		}

		let yearsMatched = years.length === 0 ? true : false;
		if (!yearsMatched) {
			years.forEach((year: any) => {
				if (new Date(post.created).getFullYear() === year) {
					yearsMatched = true;
					return;
				}
			});
		}

		if (searchMatched && tagsMatched && yearsMatched) return post;
	});
}

export async function getServerSideProps(): Promise<TweetsAndBlogProps> {
	let token = process.env.TWITTER_TOKEN;
	token =
		"AAAAAAAAAAAAAAAAAAAAAGNkZAEAAAAAXJkUOyC6a0as2fu6UVYAl3YBGDY%3DWMFjkaT3XHsgzfpHksuHFGK6NDPDPU2K0tGUhoUHB7ijTbgwm1";
	const config = {
		headers: { Authorization: `Bearer ${token}` },
	};

	let tweets;
	try {
		tweets = await axios.get(
			"https://api.twitter.com/2/users/1397471686371467266/tweets?tweet.fields=created_at&max_results=5",
			config
		);

		if (tweets.data.errors) {
			tweets = [
				{
					created_at: new Date().toISOString(),
					id: "1492283279768231937",
					text: "Currently on private",
				},
			];
		} else {
			tweets = tweets.data.data;
		}
	} catch (err) {
		tweets = [
			{
				created_at: new Date().toISOString(),
				id: "1492283279768231937",
				text: "Unable to get tweets at this time",
			},
		];
		console.log(err);
	}

	return {
		props: {
			tweets: tweets,
			posts: AllPosts,
		},
	};
}

const getYears = (posts: BlogMetaInfo[]): number[] => {
	const years: number[] = [];
	posts.forEach((post) => {
		const postYear = new Date(post.created).getFullYear();
		if (!years.includes(postYear)) years.push(postYear);
	});
	return years;
};

const getTags = (posts: BlogMetaInfo[]): Tags[] => {
	const tags: Tags[] = [];
	posts.forEach((post) => {
		post.tags.forEach((tag) => {
			if (!tags.includes(tag)) tags.push(tag);
		});
	});
	return tags;
};

const reevaluateVisiblePosts = () => {};
