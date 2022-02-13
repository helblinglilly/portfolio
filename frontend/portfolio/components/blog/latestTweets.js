import { formatDate } from "../../utils";

export default function LatestTweets({ tweets }) {
	return (
		<>
			<p className="title is-3">Tweets</p>
			{tweets.tweets.map((tweet) => showTweets(tweet))}
		</>
	);
}

function showTweets(tweets) {
	const link = `https://twitter.com/_helblingjoel/status/${tweets.id}`;

	return (
		<div className="card mb-6" key={tweets.id}>
			<div className="card-header">
				<p className="card-header-title">
					{formatDate(new Date(tweets.created_at))}
				</p>
				<div className="tweetAuthor accented">
					<p className="pr-4 pt-3">_helblingjoel</p>
				</div>
			</div>
			<div className="card-content" key={"content-" + tweets.id}>
				<p>{tweets.text}</p>
			</div>
			<a href={link} target="_blank">
				<div className="card-footer has-text-centred" key={tweets.id}>
					<div className="card-footer-item accented tweet">
						<p>View on Twitter</p>
					</div>
				</div>
			</a>
		</div>
	);
}
