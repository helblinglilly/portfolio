export default function LatestTweets({tweets}) {
    console.log("props are", tweets)
    return (
        <>
            <p className="title is-3">Tweets</p>
            {tweets.tweets.map((tweet) => showTweets(tweet))}
        </>
    );
}

function showTweets(tweets) {
        return (
            <div className="mt-6">
                <p>{tweets.text}</p>
            </div>
        )
        
}