"use client";

import Link from "next/link";
import { useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { Card } from "@/components/atoms/Card";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ISnippet } from "./data";

function SnippetSource({
  link,
  children,
}: Pick<ISnippet, "link"> & {
  children: React.ReactNode;
}) {
  if (link) {
    return (
      <Link href={link} className="link">
        {children}
      </Link>
    );
  }
  return <>{children}</>;
}

export function SnippetModal({
  snippet,
  children,
}: {
  snippet: Omit<ISnippet, "content"> & { content: null };
  children: React.ReactNode;
}) {
  const QUERY_PARAM_NAME = "highlighted";
  const params = useSearchParams();
  const pathname = usePathname();
  const dialogRef = useRef<HTMLDivElement>(null);
  const isActive = params.get(QUERY_PARAM_NAME) === snippet.key;

  const close = () => {
    const url = new URL(window.location.href);
    if (url.searchParams.get(QUERY_PARAM_NAME) !== snippet.key) return;

    url.searchParams.delete(QUERY_PARAM_NAME);
    window.history.replaceState(
      null,
      "",
      `${pathname}${url.search}${url.hash}`,
    );
  };

  return (
    <Dialog
      open={isActive}
      onOpenChange={(open) => {
        if (!open) close();
      }}
    >
      <DialogContent
        ref={dialogRef}
        initialFocus={dialogRef}
        aria-describedby={undefined}
        className="max-w-4xl"
      >
        <Card>
          <DialogTitle className="mb-2 pr-12 text-lg font-semibold">
            {snippet.snippet}
          </DialogTitle>
          <SnippetSource link={snippet.link}>{snippet.source}</SnippetSource>
          <div className="grid m-auto justify-center items-center w-full md:w-3/4 p-8">
            {children}
          </div>
        </Card>
      </DialogContent>
    </Dialog>
  );
}
