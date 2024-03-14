import './globals.css';
import React, { ReactNode } from 'react';
import { Metadata } from 'next';
import Navbar from './Navbar';
import Theme from './Theme';

export const metadata: Metadata = {
  title: 'Lilly Helbling',
  description: 'Software Engineer and Pokémon enthusiast based in Leeds, UK',
  creator: 'Lilly Helbling',
  keywords: ['Software Engineer', 'Leeds'],
  openGraph: {
    type: 'profile',
    firstName: 'Lilly',
    lastName: 'Helbling',
    gender: 'Female',
    locale: 'en-GB',
    url: 'https://helbling.uk',
    countryName: 'United Kingdom',
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
          <main className="m-5">{children}</main>
        </Theme>
      </body>
    </html>
  );
}
