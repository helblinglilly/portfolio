// import { latestTweets } from "../../pages/api/twitter";
import axios from "axios"

export async function getServerSideProps() {
    const token = process.env.TWITTER_TOKEN;
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    axios.get('https://api.twitter.com/2/users/1397471686371467266/tweets?tweet.fields=created_at', config)
    .then((response) => {
        console.log("response", response);
        return {
            props: {
                response
            }
        }
    })
}


export default function LatestTweets(tweets) {
    console.log(tweets);
    return (
        <>
            {/* <p>{props}</p> */}
            <p className="title is-3">Tweets</p>
        </>
    );
}