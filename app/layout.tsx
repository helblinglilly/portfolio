"use client"

import './globals.css'
import Navbar from "./Navbar"
import React, { ReactNode } from 'react'
import { Theme } from './Theme';

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
          <main>{children}</main>
        </Theme>
      </body>
    </html>
  )
}