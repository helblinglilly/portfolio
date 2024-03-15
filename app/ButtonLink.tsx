import Link from 'next/link';
import React from 'react';

function ButtonLink(
  { children, link, className = '' }: {
    children: React.ReactNode;
  link: string;
  className?: string;
  },
) {
  return (
    <button
      type="button"
      className={`flex h-12 w-full bg-slate-200 rounded-md hover:bg-violet-100 dark:bg-slate-700 dark:hover:bg-violet-400 ${className}`}
    >
      <Link
        href={link}
        className="inline-flex gap-1 items-center justify-center font-semibold text-lg w-full h-full"
      >
        {children}
      </Link>
    </button>
  );
}

export default ButtonLink;
