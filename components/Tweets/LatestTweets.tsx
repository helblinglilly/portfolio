import { Tweet } from "./Tweet";
import { TweetsProps } from "../Blog/Types";

export default function LatestTweets({ ...allTweets }: TweetsProps) {
	return (
		<>
			<p className="title is-3">Tweets</p>
			{allTweets.tweets.map((tweet) => Tweet(tweet))}
		</>
	);
}
