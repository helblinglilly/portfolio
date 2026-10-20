"use client";

import ThemeIcon from "@/components/ThemeIcon";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <React.Fragment>
      {/*<a className="skip-to-content-link justify-center" href="#main">
        Skip to content
      </a>*/}

      <nav className="flex justify-center w-full px-4 mt-4">
        <div className="bg-transparent border-2 rounded-2xl p-2 w-full max-w-5xl min-w-0 flex flex-row justify-between shadow-neutral-400 shadow-xs md:shadow-lg dark:shadow-none dark:border-neutral-300">
          <div className="flex min-w-0 gap-1 sm:gap-4 pl-1 sm:pl-4">
            <Link
              href="/"
              className="ml-2 sm:ml-2 flex h-full items-center align-middle w-8 sm:w-10 shrink-0"
            >
              <Image
                src="/images/is-light.svg"
                width={60}
                height={60}
                alt="Personal logo. Navigates to homepage."
              />
            </Link>

            <Link
              href="/blog"
              className="flex h-10 items-center rounded-xl px-1 sm:px-4 hover:bg-fuchsia-300/80 dark:hover:bg-[#F714B1] hover:decoration-transparent"
            >
              Blog
            </Link>
            <Link
              href="/projects"
              className="flex h-10 items-center rounded-xl px-1 sm:px-4 hover:bg-fuchsia-300/80 dark:hover:bg-[#F714B1] hover:decoration-transparent"
            >
              Projects
            </Link>
            <Link
              href="/scrapbook"
              className="flex h-10 items-center rounded-xl px-1 sm:px-4 hover:bg-fuchsia-300/80 dark:hover:bg-[#F714B1] hover:decoration-transparent"
            >
              Scrapbook
            </Link>
          </div>

          <div className="flex">
            <button
              type="button"
              aria-label="Change Theme"
              className="flex h-10 shrink-0 items-center rounded-xl px-2 sm:px-4 hover:bg-fuchsia-300/80 dark:hover:bg-[#F714B1] hover:decoration-transparent hover:cursor-pointer"
              onClick={() => {
                setTheme(theme === "dark" ? "light" : "dark");
              }}
            >
              <ThemeIcon />
            </button>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}
