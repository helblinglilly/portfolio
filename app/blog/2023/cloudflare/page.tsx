import React from 'react';
import Link from 'next/link';
import BlogPost from './cloudflare.mdx';

const title = 'Exploring Cloudflare';
const description = "Discover the journey of switching platforms, from the perks of serverless to the love-hate with Vercel. Uncover Cloudflare's potential as a dynamic alternative and the excitement of mastering diverse tools for smarter development choices.";
const tags = ['Cloudflare', 'Vercel', 'Frontend'];

export const metadata = {
  description,
  keywords: tags,
  authors: {
    url: 'https://helbling.uk',
    name: 'Lilly Helbling',
  },
  openGraph: {
    title,
    description,
    publishedTime: new Date('2023-11-26T12:00:00.00Z').toISOString(),
    modifiedTime: new Date('2024-03-17T12:00:00.00Z').toISOString(),
    type: 'article',
    tags,
  },
  title,
  twitter: {
    description,
    title,
  },
};

export default function Cloudflare() {
  return (
    <>
      <h1 className="text-3xl font-semibold mb-2">{metadata.title?.toString() ?? ''}</h1>

      <span id="blogHeader">
        <p>
          {new Date(metadata.openGraph.publishedTime).toLocaleDateString('en-GB')}
          ,
        </p>
        <Link href={metadata.authors.url}>{metadata.authors.name}</Link>
      </span>

      <hr />

      <BlogPost />
    </>
  );
}
