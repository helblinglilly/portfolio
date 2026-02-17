// @ts-nocheck Don't worry about it
// Auto-import all .mdx files in this directory
const mdxContext = require.context("./", false, /\.mdx$/);

export interface ISnippet {
  key: string;
  publishedTime: string;
  source: string;
  tags: string[];
  link?: string;
  /**
   * The short snippet that should be shown in a card
   */
  snippet: string;
  /**
   * The "explainer" that will show up when interacted with
   * Just the regular, unnamed content of an mdx file.
   */
  content: string;
}

const AllSnippets: ISnippet[] = mdxContext
  .keys()
  .map((key: string) => {
    const mod = mdxContext(key);
    return {
      key: key.split("./")[1].split(".mdx")[0],
      source: mod.source ?? "Unknown",
      tags: mod.tags ?? [],
      link: mod.link,
      content: mod.default,
      snippet: mod.snippet,
      publishedTime: mod.publishedTime ?? new Date().toISOString(),
    };
  })
  .sort((a, b) => (new Date(a).valueOf() < new Date(b).valueOf() ? 1 : -1));

export default AllSnippets;
