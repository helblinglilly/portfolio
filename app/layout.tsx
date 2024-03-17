import './globals.css';
import React, { ReactNode } from 'react';
import { Metadata } from 'next';
import Navbar from './Navbar';
import Theme from './Theme';

const description = 'Software Engineer and Pokémon enthusiast based in Leeds, UK';

export const metadata: Metadata = {
  title: 'Lilly Helbling',
  description,
  creator: 'Lilly Helbling',
  keywords: ['Software Engineer', 'Leeds'],
  metadataBase: new URL('https://helbling.uk'),
  openGraph: {
    type: 'profile',
    firstName: 'Lilly',
    lastName: 'Helbling',
    gender: 'Female',
    locale: 'en-GB',
    url: 'https://helbling.uk',
    countryName: 'United Kingdom',
    description,
    images: {
      url: 'https://helbling.uk/images/profile.png',
    },
  },
  twitter: {
    card: 'summary',
    site: 'https://helbling.uk',
    title: 'Lilly Helbling',
    description,
    images: {
      url: 'https://helbling.uk/images/profile.png',
    },
  },
};

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
