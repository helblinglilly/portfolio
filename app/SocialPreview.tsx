/* eslint-disable @next/next/no-img-element */

'use client';

import React from 'react';
import Link from 'next/link';
import { useQuery } from 'react-query';
import getSocialMetadata from '../data/socialpreview';

export default function SocialPreview({ url, className = '' }: {
  url: string;
  className?: string
}) {
  const { data } = useQuery({
    queryKey: [`socialpreview-${url}`],
    queryFn: () => getSocialMetadata(url),
  });

  const placeholder = '/images/placeholder.jpeg';

  return (
    <Link href={url} className={className}>
      <img
        src={data?.image.og ?? placeholder}
        alt="Social media preview"
        className="p-2 w-full h-full"
      />
      <p className="pb-2">{new URL(url).hostname}</p>
    </Link>
  );
}
