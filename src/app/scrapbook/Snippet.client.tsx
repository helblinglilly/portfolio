"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
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
  const router = useRouter();
  const overlayRef = useRef<HTMLDivElement>(null);

  const isActive = params.get(QUERY_PARAM_NAME) === snippet.key;
  const [isVisible, setIsVisible] = useState(false);

  const close = () => {
    if (params.get(QUERY_PARAM_NAME) === snippet.key) {
      router.replace(pathname, { scroll: false });
    }
  };

  // Sync visibility state with URL param
  useEffect(() => {
    if (isActive) {
      document.documentElement.classList.add("overflow-hidden");
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [isActive]);

  // Remove scroll lock only after the exit transition finishes
  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;

    const handleTransitionEnd = () => {
      if (!isVisible && !isActive) {
        document.documentElement.classList.remove("overflow-hidden");
      }
    };

    overlay.addEventListener("transitionend", handleTransitionEnd);
    return () =>
      overlay.removeEventListener("transitionend", handleTransitionEnd);
  }, [isVisible, isActive]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.code === "Escape") close();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [params]);

  return (
    <div
      ref={overlayRef}
      role="dialog"
      aria-modal={isVisible}
      aria-hidden={!isVisible}
      className={`fixed inset-0 z-50 flex items-center justify-center p-8 md:p-16 backdrop-blur-md transition-opacity duration-100 ${
        isVisible
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <div
        className={`w-full lg:w-2/3 rounded-md md:rounded-xl bg-gray-200/90 dark:bg-slate-800/95 drop-shadow-md flex flex-col overflow-y-auto overscroll-contain max-h-[calc(100dvh-4rem)] md:max-h-[calc(100dvh-8rem)] transition-all duration-100 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
      >
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
  );
}
