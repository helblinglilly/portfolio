"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";
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
  const dialogRef = useRef<HTMLDialogElement>(null);
  const params = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const close = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
    if (params.get(QUERY_PARAM_NAME) === snippet.key) {
      router.replace(pathname, { scroll: false });
    }
  };

  const open = () => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  };

  useEffect(() => {
    if (!dialogRef.current) {
      return;
    }

    if (params.get(QUERY_PARAM_NAME) === snippet.key) {
      open();
    } else {
      close();
    }
  }, [params]);

  useEffect(() => {
    const handler = window.addEventListener("keydown", (e) => {
      if (e.code === "Escape") {
        close();
      }
    });

    return handler;
  }, []);

  return (
    <dialog
      ref={dialogRef}
      className="fixed inset-0 z-10 m-0 h-dvh w-screen max-h-none max-w-none bg-transparent p-0"
    >
      <div
        className="grid h-dvh z-20 w-full items-center p-8 md:p-16 backdrop-blur-md"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            close();
          }
        }}
      >
        <div className="justify-self-center w-full lg:w-2/3 rounded-md md:rounded-xl bg-gray-200/90 dark:bg-slate-800/95 drop-shadow-md flex flex-col overflow-y-auto max-h-[calc(100dvh-4rem)] md:max-h-[calc(100dvh-8rem)]">
          <div className="p-8 pb-4">
            <h3 className="text-lg font-semibold pb-2">{snippet.snippet}</h3>
            <SnippetSource link={snippet.link}>{snippet.source}</SnippetSource>
          </div>

          <div className="px-8 pb-8">
            <div className="grid m-auto justify-center items-center w-full md:w-3/4 p-8">
              {children}
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
}
