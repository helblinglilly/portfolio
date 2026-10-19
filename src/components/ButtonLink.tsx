import Link from "next/link";
import React from "react";

function ButtonLink({
  children,
  link,
  className = "",
  newTab = false,
}: {
  children: React.ReactNode;
  link: string;
  className?: string;
  newTab?: boolean;
}) {
  return (
    <button
      type="button"
      className={`flex h-12 w-full bg-slate-200 rounded-md hover:bg-violet-100 dark:bg-slate-700 dark:hover:bg-violet-400 ${className}`}
    >
      <Link
        href={link}
        target={newTab ? "_blank" : undefined}
        rel={newTab ? "noopener noreferrer" : undefined}
        className="inline-flex gap-1 items-center justify-center font-semibold text-lg w-full h-full"
      >
        {children}
      </Link>
    </button>
  );
}

export default ButtonLink;
