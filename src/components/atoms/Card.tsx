import React from "react";

export function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="shadow-md shadow-gray-400 bg-violet-50 dark:bg-zinc-800 dark:shadow-none rounded-md justify-center flex flex-col p-4 h-full w-full">
      {children}
    </div>
  );
}
