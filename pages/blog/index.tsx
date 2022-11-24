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
import { AllPosts, PostPreviews } from "../../components/Blog/PostPreviews";

export default function Blog(props: TweetsAndBlogProps) {
	const metaInfo: MetaInfo = {
		title: "Blog - Joel Helbling",
		socialSummary: `Blog homepage of Joel Helbling. View the collection of blog posts, search for specific ones, filter by tags or by publishing year`,
		authorName: "Joel Helbling",
		cover: null,
	};

	const [visiblePosts, setVisiblePosts] = useState<BlogMetaInfo[]>(
		props.posts
	);
	const [isSearchVisible, setSearchVisibility] = useState<boolean>(false);
	const [searchTerm, setSearchTerm] = useState<RegExp>(/.*/);

	const uniqueTagLabels = (): Tags[] => {
		// TODO there must be a better way of doing this
		// But tags don't have the same object reference to use Set... to get them unique
		let tagNames: string[] = [];
		props.posts.flatMap((post) => {
			post.tags.forEach((tag) => {
				if (!tagNames.includes(tag.name)) tagNames.push(tag.name);
			});
		});

		const realTabs: Tags[] = [];

		props.posts.flatMap((post) => {
			post.tags.forEach((tag) => {
				if (tagNames.includes(tag.name)) {
					tagNames.splice(tagNames.indexOf(tag.name), 1);
					realTabs.push(tag);
				}
			});
		});

		return realTabs;
	};

	const uniqueYears = (): number[] => {
		const years: number[] = [];
		props.posts.flatMap((post) => {
			if (!years.includes(new Date(post.created).getFullYear()))
				years.push(new Date(post.created).getFullYear());
		});
		return years;
	};

	const [selectedTags, setSelectedTags] = useState<Tags[]>([]);
	const [selectedYears, setSelectedYears] = useState<number[]>([]);

	const toggleMobileSearchVisibility = () => {
		setSearchVisibility(!isSearchVisible);
	};

	const updateSearchTerm = (term: string) => {
		console.log(term);
		if (!term) setSearchTerm(/.*/);
		else setSearchTerm(new RegExp(term.toLocaleLowerCase()));
		refreshVisiblePosts();
	};

	const updateTags = (changingTag: Tags, isChecked: boolean) => {
		const newTags = selectedTags;
		if (isChecked) {
			newTags.push(changingTag);
		} else {
			newTags.splice(newTags.indexOf(changingTag), 1);
		}
		setSelectedTags(newTags);

		refreshVisiblePosts();
	};

	const updateYears = (changingYear: number, isChecked: boolean) => {
		const newYears = selectedYears;
		if (isChecked) {
			newYears.push(changingYear);
		} else {
			newYears.splice(newYears.indexOf(changingYear), 1);
		}
		setSelectedYears(newYears);

		refreshVisiblePosts();
	};

	const refreshVisiblePosts = () => {
		const postsToDisplay: BlogMetaInfo[] = [];
		props.posts.forEach((post) => {
			const searchMatches = [];
			let containsMatchingTag = selectedTags.length === 0;
			let matchesYear = selectedYears.length === 0;

			searchMatches.push(searchTerm.test(post.authorName.toLowerCase()));
			searchMatches.push(searchTerm.test(post.blogSummary.toLowerCase()));
			searchMatches.push(searchTerm.test(post.link.toLowerCase()));
			searchMatches.push(searchTerm.test(post.title.toLowerCase()));
			post.tableOfContents.forEach((entry) => {
				searchMatches.push(searchTerm.test(entry.title.toLowerCase()));
			});
			post.tags.forEach((tag) => {
				searchMatches.push(searchTerm.test(tag.name.toLowerCase()));
				selectedTags.forEach((selectedTag) => {
					if (selectedTag.name === tag.name)
						containsMatchingTag = true;
				});
			});

			selectedYears.forEach((year) => {
				if (new Date(post.created).getFullYear() === year)
					matchesYear = true;
			});

			if (
				searchMatches.includes(true) &&
				containsMatchingTag &&
				matchesYear
			)
				postsToDisplay.push(post);
		});

		setVisiblePosts(postsToDisplay);
	};

	return (
		<Layout>
			<SocialPreview metaInfo={metaInfo} />

			<div className="column is-one-quarter">
				<div className="desktop title">
					<p className="is-3">Filter</p>
				</div>

				<div
					className="card mb-2 mobile"
					onClick={toggleMobileSearchVisibility}
				>
					<div className="card-header">
						<div className="card-header-title pimrary">
							<p>{isSearchVisible ? "Hide" : "Show"} Filters</p>
						</div>
					</div>
				</div>

				<div className={isSearchVisible ? "card" : "card mobileHidden"}>
					<div className="card-content">
						<input
							className="input"
							placeholder="Search term..."
							onChange={(event) => {
								updateSearchTerm(event.target.value);
							}}
						></input>

						<p className="title is-5 mb-2 pt-4">Posted in year</p>
						{uniqueYears().map((year) => {
							return (
								<div className="pt-2 accented" key={year}>
									<label className="checkbox">
										<input
											key={year}
											className="mr-2"
											type="checkbox"
											onChange={(event) =>
												updateYears(
													year,
													event.target.checked
												)
											}
										/>
										{year}
									</label>
								</div>
							);
						})}
						<p className="title is-5 mb-2 pt-4">Tags</p>
						{uniqueTagLabels().map((tag) => {
							return (
								<div className="pt-2 accented" key={tag.name}>
									<label className="checkbox">
										<input
											key={tag.name}
											className="mr-2"
											type="checkbox"
											onChange={(event) =>
												updateTags(
													tag,
													event.target.checked
												)
											}
										/>
										{tag.name}
									</label>
								</div>
							);
						})}
					</div>
				</div>
			</div>
			<div className="column is-two-third" id="main-content">
				<p className="title is-3">Blog Posts</p>
				<PostPreviews posts={visiblePosts} />
			</div>
			<div className="column is-one-quarter">
				<LatestTweets tweets={props.tweets}></LatestTweets>
			</div>
		</Layout>
	);
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

export async function getServerSideProps(): Promise<{
	props: TweetsAndBlogProps;
}> {
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
