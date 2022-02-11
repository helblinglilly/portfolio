import Layout from "../../components/layout";
import React from "react";
import axios from "axios";
import AllPosts from "../../components/blog/allPosts";
import LatestTweets from "../../components/blog/latestTweets";

export default function Blog(props) {
	return (
		<Layout home>
			<div className="column is-one-quarter">
				<p>Left</p>
			</div>
			<div className="column is-two-third">
				<div>
					<AllPosts></AllPosts>
				</div>
			</div>
			<div className="column is-one-quarter">
				<LatestTweets tweets={props}></LatestTweets>
			</div>
		</Layout>
	);
}

export async function getServerSideProps() {
	const token = process.env.TWITTER_TOKEN;
	const config = {
		headers: { Authorization: `Bearer ${token}` },
	};

	let tweets = await axios.get(
		"https://api.twitter.com/2/users/1397471686371467266/tweets?tweet.fields=created_at&max_results=5",
		config
	);
	tweets = tweets.data.data;
	return {
		props: {
			tweets: tweets,
		},
	};
}
