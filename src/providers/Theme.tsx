'use client';

import { ThemeProvider } from 'next-themes';
// biome-ignore lint/style/useImportType: <explanation>
import React from 'react';

export default function Theme({ children }: { children: React.ReactNode}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem enableColorScheme>
      {children}
    </ThemeProvider>
  );
}
