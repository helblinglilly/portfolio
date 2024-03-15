/* eslint-disable @next/next/no-img-element */

'use client';

import React from 'react';
import Link from 'next/link';
import { useQuery } from 'react-query';
import getSocialMetadata from '../data/socialpreview';

export default function SocialPreview({ url: inputUrl, className = '', showRoute = false }: {
  url: string;
  className?: string
  showRoute?: boolean;
}) {
  const url = new URL(inputUrl);

  const { data } = useQuery({
    queryKey: [`socialpreview-${url.toString()}`],
    queryFn: () => getSocialMetadata(url.toString()),
  });

  const placeholder = '/images/placeholder.jpeg';

  return (
    <Link href={url} className={`text-center text-slate-700 dark:text-slate-200 italic ${className}`}>
      <div
        className="relative flex justify-center overflow-hidden"
        style={{
          paddingBottom: '55%',
        }}
      >
        <img
          src={data?.image.og ?? placeholder}
          alt="Social media preview"
          className="absolute object-cover p-2 h-full w-auto"
        />
      </div>
      <p className="pl-2 pr-2 pb-2 min-w-60">
        {url.hostname}
        {showRoute ? url.pathname : '' }
      </p>
    </Link>
  );
}
