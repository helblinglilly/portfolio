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
      className={`flex h-12 w-full bg-slate-200 hover:bg-slate-100 rounded-md dark:bg-slate-700 dark:hover:bg-slate-600 ${className}`}
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
