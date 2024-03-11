import Link from 'next/link';
import React from 'react';

function ButtonLink({ children, link }: { children: React.ReactNode, link: string }) {
  return (
    // <div className="ml-8 mr-8 items-center flex">
    <button
      type="button"
      className="flex h-12 w-full bg-slate-200 hover:bg-slate-100 rounded-md md:w-40 dark:bg-slate-700 dark:hover:bg-slate-600"
    >
      <Link
        href={link}
        className="inline-flex items-center justify-center font-semibold text-lg w-full"
      >
        {children}
      </Link>
    </button>
    // </div>
  );
}

export default ButtonLink;
