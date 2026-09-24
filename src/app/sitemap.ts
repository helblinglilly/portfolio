import type { MetadataRoute } from "next";
import AllPosts from "./blog/posts";
import Snippets from "./scrapbook/data";

const baseUrl = "https://helbling.uk";

export default function sitemap(): MetadataRoute.Sitemap {
  const newestPost = AllPosts[0];
  const newestSnippet = Snippets[0];

  return [
    {
      url: baseUrl,
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: newestPost?.modifiedTime,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/projects`,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/scrapbook`,
      lastModified: newestSnippet?.publishedTime,
      priority: 0.5,
    },
    ...AllPosts.map(
      (post): MetadataRoute.Sitemap[number] => ({
        url: `${baseUrl}${post.url}`,
        lastModified: post.modifiedTime,
        priority: 0.2,
      }),
    ),
  ];
}
