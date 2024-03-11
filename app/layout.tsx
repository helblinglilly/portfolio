import './globals.css';
import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import Theme from './Theme';

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
