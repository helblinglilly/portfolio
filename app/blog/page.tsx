import React from 'react';
import Link from 'next/link';
import Posts from './posts';

function Blog() {
  return (
    <>
      <h1 id="pokecompanion" className="text-3xl font-semibold mb-2">Blog</h1>
      <div className="grid gap-3">
        {
        Posts.map((post) => (
          <Link
            key={post.title}
            href={post.url}
            className="bg-slate-200 rounded-md hover:bg-violet-100 dark:bg-slate-700 dark:hover:bg-violet-400"
          >
            <h2>{post.title}</h2>
            <p>{post.description}</p>
          </Link>
        ))
      }
      </div>
    </>
  );
}

export default Blog;
