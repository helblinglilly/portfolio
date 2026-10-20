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
      className={`flex h-12 w-full bg-card rounded-md hover:bg-accent hover:text-accent-foreground ${className}`}
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
