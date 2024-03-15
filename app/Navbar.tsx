'use client';

import React from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import ThemeIcon from '../components/ThemeIcon';

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="flex h-16 w-full justify-between bg-violet-300 dark:bg-slate-950">
      <div className="flex items-center gap-3">
        <Link href="/" className="ml-2 flex h-full items-center align-middle">
          <Image src="/images/is-light.svg" width={40} height={40} alt="Personal logo" />
        </Link>

        <div className="flex h-full items-center">
          <Link
            href="/"
            className="hidden sm:flex h-10 items-center rounded-md px-4 hover:bg-violet-200 dark:hover:bg-violet-400"
          >
            Home
          </Link>

          <Link
            href="/blog"
            className="flex h-10 items-center rounded-md px-4 hover:bg-slate-200 hover:bg-violet-200 dark:hover:bg-violet-400"
          >
            Blog
          </Link>
          <Link
            href="/projects"
            className="flex h-10 items-center rounded-md px-4 hover:bg-slate-200 hover:bg-violet-200 dark:hover:bg-violet-400"
          >
            Projects
          </Link>
        </div>
      </div>

      <div className="flex items-center">
        <button
          type="button"
          aria-label="Change Theme"
          className="mr-3 flex h-10 items-center rounded-md px-4 hover:bg-violet-200 dark:hover:bg-violet-400"
          onClick={() => {
            setTheme(theme === 'dark' ? 'light' : 'dark');
          }}
        >
          <ThemeIcon />
        </button>
      </div>
    </nav>
  );
}
