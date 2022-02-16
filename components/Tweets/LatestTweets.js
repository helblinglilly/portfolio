import { Tweet } from "./Tweet";

export default function LatestTweets({ tweets }) {
	return (
		<>
			<p className="title is-3">Tweets</p>
			{tweets.tweets.map((tweet) => Tweet(tweet))}
		</>
	);
}
