import React from 'react';
import Link from 'next/link';
import Posts from './posts';
import { Metadata } from 'next';
import metadataGenerator from '@/helpers/metadata';

export function generateMetadata(): Metadata {
  return metadataGenerator({
    title: "Lilly's Blog",
    description: 'Sometimes I feel like posting an opinion on the internet.',
    type: "profile",
    image: '/images/profile.jpeg',
    url: 'https://helbling.uk/blog',
    publishedTime: Posts[Posts.length - 1].publishedTime,
    modifiedTime: Posts[Posts.length - 1].modifiedTime,
  });
}

function Blog() {
  return (
    <>
      <h1 id="pokecompanion" className="text-3xl font-semibold mb-4">Blog</h1>
      <div className="grid gap-6">
        {
          Posts.map((post) => (
            <Link
              key={post.title}
              href={post.url}
              className="p-4 bg-slate-200 rounded-md hover:bg-violet-100 dark:bg-slate-700 dark:hover:bg-violet-400"
            >
              <div className="mb-3">
                <h2 className="h2 link" style={{ marginBottom: 0 }}>{post.title}</h2>
                <i>
                Published:
                  {' '}
                  {new Date(post.publishedTime).toLocaleDateString('en-GB')}
                </i>
              </div>

              <p>{post.description}</p>
            </Link>
          ))
        }
      </div>
    </>
  );
}

export default Blog;
