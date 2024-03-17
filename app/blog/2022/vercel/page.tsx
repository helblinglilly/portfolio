import React from 'react';
import Link from 'next/link';
import BlogPost, {
  title, description, tags, publishedTime, modifiedTime,
} from './vercel.mdx';

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
    publishedTime,
    modifiedTime,
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
