import Layout from '../../components/layout'
import Image from 'next/image'
import Link from 'next/link'
import { allPosts } from '../api/blog'
import React from 'react';
import axios from 'axios'
import LatestTweets from '../../components/blog/latestTweets';

export default function Blog(props) {
  return (
    <Layout home>
    <div className='column is-one-quarter'>
      <p>Left</p>
    </div>
    <div className="column is-two-third">
      <div>
        <p className='title is-3'>Blog Posts</p>
        {allPosts().map((post) => card(post))}
      </div>
    </div>
    <div className="column is-one-quarter">
      <LatestTweets tweets={props}></LatestTweets>
    </div>
  </Layout>
  )
}

const card = (post) => {
  const link = "/blog/" + post.link;
  let r = (Math.random() + 1).toString(36).substring(7);

  return (
    <Link href={link} key={r}>
      <div className="card mb-6" key={post.title}>
        <p className='title is-4 pt-4 pl-5 mb-0'>
          {post.title}
        </p>
        <div className='card-content'>
          <div className='columns accented'>
            <div className='column is-one-fifth level-item has-text-centered accented'>
              <Image src={post.thumbnail} className="is-inline postImage" alt="Post Icon" width={200} height={200}/>
            </div>
            <div className='column accented'>
              <p className='accented'>{post.preview}</p>
            </div>
          </div>

          <div className="tags are-medium">
            <span className={post.tags.color}>{post.tags.name}</span>
          </div>
        </div>
        
      </div>
    </Link>
  )
}

export async function getServerSideProps() {
  const token = process.env.TWITTER_TOKEN;
  const config = {
      headers: { Authorization: `Bearer ${token}` }
  };

  let tweets = await axios.get('https://api.twitter.com/2/users/1397471686371467266/tweets?tweet.fields=created_at&max_results=5', config)
  tweets = tweets.data.data;
  return {
      props: {
          tweets: tweets
      }
  }
}