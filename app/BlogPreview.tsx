import React from 'react';
import Image from 'next/image';

export default function BlogPreview() {
  return (
    <div className="w-full flex rounded-md bg-slate-200">
      <Image
        src="/images/posts/2023/cloudflare/cloudflare.png"
        width={64}
        height={64}
        alt="Cloudflare"
      />
      <h2 className="text-xl font-semibold">Looking towards the Edge</h2>
    </div>
  );
}
