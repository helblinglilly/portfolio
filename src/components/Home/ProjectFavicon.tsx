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
      <div className="flex size-[46px] shrink-0 items-center justify-center rounded-full bg-violet-200 dark:bg-zinc-700 drop-shadow-sm">
        <img
          src={url}
          alt={`Favicon for ${projectName}`}
          height={30}
          width={30}
          className="size-[30px] rounded-lg object-contain"
        />
      </div>
    </>
  );
};
