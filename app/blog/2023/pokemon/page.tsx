import React from 'react';
import Link from 'next/link';
import BlogPost from './pokewiki.mdx';
import QueryProvider from '../../../QueryProvider';

const title = 'Moving my Pokémon companion to the cloud';
const description = 'My process, decisions, and lessons learnt from replatforming my first application into the cloud. With considerations such as time to market, system observability and the managing of technical debt, this post covers a few areas where the path of least resistance can be the right, and sometimes wrong decision.';
const tags = ['Pokemon', 'PokeAPI', 'Vercel', 'ExpressJS', 'Axiom'];

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
    publishedTime: new Date('2023-04-02T12:00:00.00Z').toISOString(),
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

export default function Pokewiki() {
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

      <QueryProvider>
        <BlogPost />
      </QueryProvider>
    </>
  );
}
