import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import QueryProvider from '../../../providers/QueryProvider';
import formatMetadata from '../helpers';

export const runtime = 'edge';

// notFound throws
// eslint-disable-next-line consistent-return
async function getPostData(postname: string) {
  try {
    const blogpost = await import(`../posts/${postname}.mdx`);
    return {
      BlogPost: blogpost.default,
      title: blogpost.title,
      description: blogpost.description,
      tags: blogpost.tags,
      publishedTime: blogpost.publishedTime,
      modifiedTime: blogpost.modifiedTime,
      author: blogpost.author,
    };
  } catch {
    notFound();
  }
}

export async function generateMetadata({ params: { postname } }: {
  params: {
    postname: string;
  }
}) {
  try {
    const blogpost = await getPostData(postname);
    const postMeta = formatMetadata(blogpost);
    return {
      description: postMeta.description,
      keywords: postMeta.tags,
      authors: postMeta.author,
      openGraph: {
        title: postMeta.title,
        url: postMeta.url,
        description: postMeta.description,
        publishedTime: postMeta.publishedTime,
        modifiedTime: postMeta.modifiedTime,
        type: 'article',
        tags: postMeta.tags,
      },
      title: postMeta.title,
      twitter: {
        title: postMeta.title,
        description: postMeta.description,
      },
    };
  } catch {
    return {
      title: '404',
      description: 'Post not found',
      openGraph: {
        title: '404',
        description: 'Post not found',
        tags: null,
      },
      twitter: {
        title: '404',
        description: 'Post not found',
        tags: null,
      },
    };
  }
}

export default async function Post({ params: { postname } } : {
  params: {
    postname: string;
  }
}) {
  try {
    const Content = await getPostData(postname);
    const postMeta = formatMetadata(Content);
    return (
      <div id="blogWrapper">
        <h1 className="text-3xl font-semibold mb-2">{Content.title}</h1>

        <span id="blogHeader">
          <p>
            {new Date(postMeta.publishedTime).toLocaleDateString('en-GB')}
            ,
          </p>
          <Link href={postMeta.author.url}>{postMeta.author.name}</Link>
        </span>

        <hr />

        <QueryProvider>
          <Content.BlogPost />
        </QueryProvider>
      </div>
    );
  } catch {
    notFound();
  }
}
