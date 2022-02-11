import axios from "axios"

export async function latestTweets() {
    const token = process.env.TWITTER_TOKEN;
    
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    
    // Get Tweets
    axios.get('https://api.twitter.com/2/users/1397471686371467266/tweets?tweet.fields=created_at', config)
    .then((response) => {
        return response
    });
}