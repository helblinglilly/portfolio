"use client";

import React from "react";
import { ISnippet } from "./data";

const QUERY_PARAM_NAME = "highlighted";

const Snippet = ({
  snippet,
}: {
  snippet: Pick<ISnippet, "key" | "snippet" | "source">;
}) => {
  const href = `?${QUERY_PARAM_NAME}=${encodeURIComponent(snippet.key)}`;

  return (
    <a
      href={href}
      id={snippet.key}
      className="hover:no-underline"
      data-umami-event={`snippet-expand-${snippet.key}`}
      onClick={(event) => {
        if (
          event.defaultPrevented ||
          event.button !== 0 ||
          event.metaKey ||
          event.ctrlKey ||
          event.shiftKey ||
          event.altKey
        ) {
          return;
        }

        event.preventDefault();

        const url = new URL(window.location.href);
        url.searchParams.set(QUERY_PARAM_NAME, snippet.key);
        window.history.pushState(null, "", `${url.pathname}${url.search}`);
      }}
    >
      <article className="grid mb-3 p-4 w-full h-full min-h-32 md:min-w-60 rounded-md bg-slate-200 dark:bg-slate-700 hover:bg-violet-100 dark:hover:bg-violet-400">
        <p className="font-semibold">{snippet.snippet}</p>

        <div className="mt-auto">
          <p>― {snippet.source}</p>
        </div>
      </article>
    </a>
  );
};

export default Snippet;
