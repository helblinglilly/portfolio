"use client";

import type React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navbar from "./Navbar";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <Navbar />

      <div className="m-4 mb-6 md:m-6">
        <div className="mx-auto w-full min-w-0 lg:w-8/12">{children}</div>
      </div>
    </QueryClientProvider>
  );
}
