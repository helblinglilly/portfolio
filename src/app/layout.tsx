import './globals.css';
import React, { ReactNode } from 'react';
import { Metadata } from 'next';
import Theme from '@/providers/Theme';
import Navbar from './Navbar';
import metadataGenerator from '@/helpers/metadata';

export function generateMetadata(): Metadata {
  return metadataGenerator({
    url: 'https://helbling.uk',
    publishedTime: new Date('2020-01-01').toISOString(),
    modifiedTime: new Date('2023-03-19').toISOString(),
  });
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Theme>
          <Navbar />
          <main className="m-6">{children}</main>
        </Theme>
      </body>
    </html>
  );
}
