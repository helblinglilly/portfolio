import React from "react";

export const ProjectFavicon = ({
  projectName,
  url,
}: {
  projectName: string;
  url?: string | null;
}) => {
  if (!url) {
    return (
      <div className="dark:bg-zinc-800 rounded-full py-2 -mr-4">
        <div className="min-h-7.5" />
      </div>
    );
  }

  return (
    <>
      <div className="bg-violet-200 dark:bg-zinc-700 rounded-full p-2 drop-shadow-sm">
        <img
          src={url}
          alt={`Favicon for ${projectName}`}
          height="fit-content"
          width={30}
          className="rounded-lg"
        />
      </div>
    </>
  );
};
