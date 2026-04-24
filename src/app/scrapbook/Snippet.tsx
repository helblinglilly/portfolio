import React from "react";
import { ISnippet } from "./data";
import Link from "next/link";

const Snippet = ({ snippet }: { snippet: ISnippet }) => {
  return (
    <Link
      href={`?highlighted=${snippet.key}`}
      scroll={false}
      id={snippet.key}
      className="hover:no-underline"
      data-umami-event={`snippet-expand-${snippet.key}`}
    >
      <article className="grid mb-3 p-4 w-full h-full min-h-32 md:min-w-60 rounded-md bg-slate-200 dark:bg-slate-700 hover:bg-violet-100 dark:hover:bg-violet-400">
        <p className="font-semibold">{snippet.snippet}</p>

        <div className="mt-auto">
          <p>― {snippet.source}</p>
        </div>
      </article>
    </Link>
  );
};

export default Snippet;
