import React from "react";
import Link from "next/link";
import Posts from "./posts";
import type { Metadata } from "next";
import metadataGenerator from "@/helpers/metadata";

export function generateMetadata(): Metadata {
  return metadataGenerator({
    title: "Lilly's Blog",
    description: "Sometimes I feel like posting an opinion on the internet.",
    type: "profile",
    image: "/images/profile.jpg",
    url: "https://helbling.uk/blog",
    publishedTime: Posts[Posts.length - 1].publishedTime,
    modifiedTime: Posts[Posts.length - 1].modifiedTime,
  });
}

function Blog() {
  return (
    <>
      <h1 id="blog" className="text-3xl font-semibold mb-4">
        Blog
      </h1>
      <main className="grid gap-6" id="main">
        {Posts.map((post) => (
          <Link
            key={post.title}
            href={post.url}
            className="p-4 w-full h-full bg-slate-200 rounded-md hover:bg-violet-100 dark:bg-slate-700 dark:hover:bg-violet-400 hover:decoration-transparent"
          >
            <article className="mb-3">
              <h2 className="h2" style={{ marginBottom: 0 }}>
                {post.title}
              </h2>
              <i>
                Published:{" "}
                {new Date(post.publishedTime).toLocaleDateString("en-GB")}
              </i>
            </article>

            <p>{post.description}</p>
          </Link>
        ))}
      </main>
    </>
  );
}

export default Blog;
