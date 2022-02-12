import React, { useState } from "react";
import axios from "axios";
import Layout from "../../components/layout";
import AllPosts from "../../components/blog/allPosts";
import LatestTweets from "../../components/blog/latestTweets";
import { postSummaries } from "../api/blog";
import { formatDate } from "../../utils";

export default function Blog(props) {
	const [searchTerm, setSearchTerm] = useState();
	const [tags, setTags] = useState([]);
	const [years, setYears] = useState([""]);

	if (searchTerm === undefined || searchTerm === "") setSearchTerm(".*");

	return (
		<Layout home>
			<div className="column is-one-quarter">
				<p className="title is-3">Filter</p>
				{/* Search */}
				<div className="card">
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

							{getYears().map((year) => {
								return (
									<label className="checkbox" key={year}>
										<input
											className="mr-2"
											type="checkbox"
											onChange={(event) => {
												if (event.target.checked)
													setYears((years) => [...years, year]);
												else
													setYears((years) =>
														years.filter(
															(item) => item !== year
														)
													);
											}}
										/>
										{year}
									</label>
								);
							})}
						</div>

						<div className="pt-4 accented">
							<p className="title is-5 mb-2">Tags</p>
							{getTags().map((tag) => {
								return (
									<div className="mb-2 accented" key={tag}>
										<label className="checkbox">
											<input
												className="mr-2"
												type="checkbox"
												onChange={(event) => {
													if (event.target.checked)
														setTags((tags) => [...tags, tag]);
													else
														setTags((tags) =>
															tags.filter(
																(item) => item !== tag
															)
														);
												}}
											/>
											{tag}
										</label>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
			<div className="column is-two-third">
				<div>
					<AllPosts
						posts={filterPosts(props.posts, searchTerm, tags, years)}
					></AllPosts>
				</div>
			</div>
			<div className="column is-one-quarter">
				<LatestTweets tweets={props}></LatestTweets>
			</div>
		</Layout>
	);
}

function filterPosts(posts, searchTerm, tags, years) {
	return posts.filter((post) => {
		const searchRegex = new RegExp(searchTerm, "gim");
		const searchMatched = searchRegex.test(`${post.title} ${post.preview}`);

		let tagsMatched = tags.length === 0 ? true : false;
		if (!tagsMatched) {
			post.tags.forEach((tag) => {
				if (tags.includes(tag.name)) {
					tagsMatched = true;
					return;
				}
			});
		}

		let yearMatched = false;
		years.forEach((year) => {
			if (post.date.includes(year)) {
				yearMatched = true;
				return;
			}
		});

		if (searchMatched && tagsMatched && yearMatched) return post;
	});
}

export async function getServerSideProps() {
	const token = process.env.TWITTER_TOKEN;
	const config = {
		headers: { Authorization: `Bearer ${token}` },
	};

	let tweets;
	try {
		tweets = await axios.get(
			"delete me https://api.twitter.com/2/users/1397471686371467266/tweets?tweet.fields=created_at&max_results=5",
			config
		);
		tweets = tweets.data.data;
	} catch (err) {
		tweets = [
			{
				created_at: formatDate(new Date()),
				id: "1492283279768231937",
				text: "Unable to get tweets at this time",
			},
		];
	}

	return {
		props: {
			tweets: tweets,
			posts: postSummaries(),
		},
	};
}

function getYears() {
	const years = [];
	for (const post of postSummaries()) {
		const year = post.date.split("/")[2];
		if (!years.includes(year)) years.push(year);
	}
	return years;
}

function getTags() {
	const tags = [];
	for (const post of postSummaries()) {
		for (const tag of post.tags) {
			if (!tags.includes(tag.name)) tags.push(tag.name);
		}
	}
	return tags;
}
