import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import formatMetadata from '../helpers';
import metadataGenerator from '@/helpers/metadata';

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

    return metadataGenerator({
      title: postMeta.title,
      description: postMeta.description,
      type: 'article',
      tags: postMeta.tags,
      publishedTime: postMeta.publishedTime,
      modifiedTime: postMeta.modifiedTime,
      authors: {
        name: postMeta.author.name ?? 'Lilly Helbling',
        url: postMeta.author.url ?? 'https://helbling.uk'
      },
      url: postMeta.url
    });
  } catch {

    return metadataGenerator({
      title: '404',
      description: 'Post does not exist',
      url: 'https://helbling.uk',
      publishedTime: new Date().toISOString(),
      modifiedTime: new Date().toISOString()
    });
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
          <Link href={postMeta.author.url} className='anchor'>{postMeta.author.name}</Link>
        </span>

        <hr />

        <Content.BlogPost />
      </div>
    );
  } catch {
    notFound();
  }
}
