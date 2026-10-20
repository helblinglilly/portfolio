/* eslint-disable @next/next/no-img-element */

"use client";

import React from "react";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import getSocialMetadata from "@/data/socialpreview";

export default function SocialPreview({
  url: inputUrl,
  className = "",
  showRoute = false,
}: {
  url: string;
  className?: string;
  showRoute?: boolean;
}) {
  const url = new URL(inputUrl);

  const { data } = useQuery({
    queryKey: [`socialpreview-${url.toString()}`],
    queryFn: () => getSocialMetadata(url.toString()),
  });

  const placeholder = "/images/placeholder.jpeg";

  return (
    <div className="bg-card hover:bg-accent hover:text-accent-foreground rounded-sm h-fit w-4/5 max-w-80 justify-self-center">
      <Link
        href={url}
        className={`text-center text-foreground italic justify-self-center ${className}`}
        style={{
          textDecorationLine: "none",
        }}
      >
        <div
          className="relative flex justify-center overflow-hidden"
          style={{
            paddingBottom: "55%",
          }}
        >
          <img
            src={data?.image.og ?? placeholder}
            alt="Social media preview"
            className="absolute object-cover p-2 h-full w-auto"
          />
        </div>
        <p className="pl-2 pr-2 pb-2" style={{ wordBreak: "break-all" }}>
          {url.hostname}
          {showRoute ? url.pathname : ""}
        </p>
      </Link>
    </div>
  );
}
