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
    image: "/images/profile.jpg",
    url: "https://helbling.uk/scrapbook",
    publishedTime: Snippets[Snippets.length - 1].publishedTime,
    modifiedTime: Snippets[Snippets.length - 1].publishedTime,
  });
}

function SnippetPage() {
  const professional = Snippets.filter((snippet) => {
    return snippet.tags.includes("prof");
  });
  const fun = Snippets.filter((snippet) => {
    return snippet.tags.includes("fun");
  });

  return (
    <>
      <h1 id="blog" className="text-3xl font-semibold mb-4">
        Scrapbook, snippets, quotes
      </h1>

      <p>
        Below is a collection of stuff that I valueable or find myself
        frequently referencing. Free from social media.
      </p>
      <p>Click on a card to find out more.</p>

      <main className="grid gap-6" id="main">
        <h2 className="text-xl font-semibold">What I bring to work with me</h2>
        <section className="grid gap-6 grid-flow-row sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 w-full">
          {professional.map((post) => (
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
              <Snippet snippet={post} key={post.key} />
            </React.Fragment>
          ))}
        </section>

        <h2 className="text-xl font-semibold">Other, great content</h2>
        <section className="grid gap-6 grid-flow-row sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 w-full">
          {fun.map((post) => (
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
              <Snippet snippet={post} key={post.key} />
            </React.Fragment>
          ))}
        </section>
      </main>
    </>
  );
}

export default SnippetPage;
