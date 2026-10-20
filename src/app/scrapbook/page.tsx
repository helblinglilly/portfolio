import React, { Suspense } from "react";
import Snippets from "./data";
import type { Metadata } from "next";
import metadataGenerator from "@/helpers/metadata";
import Snippet from "./Snippet";
import { SnippetModal } from "./Snippet.client";

export function generateMetadata(): Metadata {
  return metadataGenerator({
    title: "Lilly's Scrapbook",
    description: "A collection of values and other tidbits that I hold dear",
    image: "/images/socialpreview-dark.png",
    url: "https://helbling.uk/scrapbook",
    publishedTime: Snippets[Snippets.length - 1].publishedTime,
    modifiedTime: Snippets[Snippets.length - 1].publishedTime,
  });
}

function SnippetPage() {
  return (
    <>
      <h1 id="scrapbook" className="text-3xl font-semibold tracking-tight mb-8">
        Scrapbook, snippets, quotes
      </h1>

      <div className="grid gap-2 w-full lg:w-1/2 mb-8">
        <p>
          Below is a collection of stuff that I valueable or find myself
          frequently referencing. Kind of like a Pintrest board, but in my own
          corner of the internet and I get to tell the story behind each entry.
        </p>
        <p>Free from ads, AI and algorithms.</p>
        <p>Click on a card to learn more.</p>
      </div>

      <main
        className="grid min-w-0 w-full grid-cols-[repeat(auto-fill,minmax(min(100%,15rem),1fr))] gap-8"
        id="main"
      >
        {Snippets.map((post) => (
          <React.Fragment key={post.key}>
            <Suspense>
              <SnippetModal
                snippet={{
                  ...post,
                  content: null, // canot be serialised over the wire
                }}
              >
                <post.content />
              </SnippetModal>
            </Suspense>
            <Snippet
              snippet={{
                key: post.key,
                snippet: post.snippet,
                source: post.source,
              }}
              key={post.key}
            />
          </React.Fragment>
        ))}
      </main>
    </>
  );
}

export default SnippetPage;
