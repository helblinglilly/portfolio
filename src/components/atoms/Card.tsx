import React from "react";

export function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="shadow-md shadow-gray-400 bg-card dark:shadow-none rounded-md justify-start flex flex-col p-4 h-full w-full">
      {children}
    </div>
  );
}
