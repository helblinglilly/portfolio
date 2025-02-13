'use client';

import React from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import ThemeIcon from '@/components/ThemeIcon';
import { HomepageMode, useHomepageMode } from '@/providers/ViewMode';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname()
  const { mode, setMode } = useHomepageMode();

  return (
    <nav className="flex h-16 w-full justify-between bg-violet-300 dark:bg-slate-950">
      <a className="skip-to-content-link" href="#main">
        Skip to content
      </a>
      <div className="flex items-center gap-3">
        <Link href="/" className="ml-2 flex h-full items-center align-middle">
          <Image src="/images/is-light.svg" width={40} height={40} alt="Personal logo. Navigates to homepage." />
        </Link>

        <div className="flex h-full items-center">
          <Link
            href="/"
            className="hidden sm:flex h-10 items-center rounded-md px-4 hover:bg-violet-200 dark:hover:bg-[#F714B1] hover:decoration-transparent"
          >
            Home
          </Link>

          <Link
            href="/blog"
            className="flex h-10 items-center rounded-md px-4 hover:bg-slate-200 dark:hover:bg-[#F714B1] hover:decoration-transparent"
          >
            Blog
          </Link>
          <Link
            href="/projects"
            className="flex h-10 items-center rounded-md px-4 hover:bg-slate-200 dark:hover:bg-[#F714B1] hover:decoration-transparent"
          >
            Projects
          </Link>
        </div>
      </div>

      <div className="flex items-center">
        {pathname === '/' && (
          <button
            type="button"
            aria-label={`Change Homepage Mode to ${mode === HomepageMode.PERSONAL ? HomepageMode.PROFESSIONAL : HomepageMode.PERSONAL}`}
            className="mr-3 flex h-10 items-center rounded-md px-4 hover:bg-violet-200 dark:hover:bg-[#F714B1] hover:decoration-transparent"
            onClick={() => {
              setMode(mode === HomepageMode.PERSONAL ? HomepageMode.PROFESSIONAL : HomepageMode.PERSONAL);
            }}
          >
            { mode === HomepageMode.PERSONAL ? '😎' : '💼'}
          </button>
        )}

        <button
          type="button"
          aria-label="Change Theme"
          className="mr-3 flex h-10 items-center rounded-md px-4 hover:bg-violet-200 dark:hover:bg-[#F714B1] hover:decoration-transparent"
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
