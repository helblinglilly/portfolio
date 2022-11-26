import { formatDate } from "../utils";
import { Tweet } from "../support/Types";

export default function Tweets(props: { tweets: Tweet[] }) {
	return (
		<>
			{props.tweets.map((tweet) => {
				return (
					<div className="card mb-6" key={tweet.id}>
						<div className="card-header">
							<p className="card-header-title">
								{formatDate(new Date(tweet.created_at))}
							</p>
							<div className="tweetAuthor accented">
								<p className="pr-4 pt-3">_helblingjoel</p>
							</div>
						</div>
						<div
							className="card-content"
							key={"content-" + tweet.id}
						>
							<p>{tweet.text}</p>
						</div>
						<a
							href={`https://twitter.com/_helblingjoel/status/${tweet.id}`}
							target="_blank"
							rel="noreferrer"
						>
							<div
								className="card-footer has-text-centred"
								key={"link" + tweet.id}
							>
								<div className="card-footer-item accented tweet">
									<p>View on Twitter</p>
								</div>
							</div>
						</a>
					</div>
				);
			})}
		</>
	);
}
