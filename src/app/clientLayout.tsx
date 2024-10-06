"use client"

import { HomepageMode, HomepageModeProvider } from "@/providers/ViewMode";
import React from "react";
import Navbar from "./Navbar";
import HomepageViewGuard from "@/components/HomepageViewGuard";
import { usePathname } from "next/navigation";

export default function ClientLayout({
  children,
  homepageProviderInitial
}: { children: React.ReactNode, homepageProviderInitial: HomepageMode | undefined}){
  const pathname = usePathname()
  
  return (
    <HomepageModeProvider initialState={homepageProviderInitial}>
      <Navbar />
      {pathname === '/' && ( 
        <HomepageViewGuard />
      )}
      
      <div className="m-6">{children}</div>
    </HomepageModeProvider>
  )
}