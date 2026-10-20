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
    image: "/images/socialpreview-dark.png",
    url: "https://helbling.uk/blog",
    publishedTime: Posts[Posts.length - 1].publishedTime,
    modifiedTime: Posts[Posts.length - 1].modifiedTime,
  });
}

function Blog() {
  return (
    <>
      <h1 id="blog" className="text-3xl font-semibold tracking-tight mb-8">
        Blog
      </h1>
      <main className="grid min-w-0 w-full grid-cols-1 gap-8" id="main">
        {Posts.map((post) => (
          <Link
            key={post.title}
            href={post.url}
            className="group p-4 w-full h-full bg-card shadow-md shadow-gray-400 dark:shadow-none rounded-md transition-colors hover:bg-accent hover:text-accent-foreground hover:decoration-transparent focus-visible:bg-accent focus-visible:text-accent-foreground"
          >
            <article className="mb-3">
              <h2
                className="h2 group-hover:text-accent-foreground group-focus-visible:text-accent-foreground"
                style={{ marginBottom: 0 }}
              >
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
