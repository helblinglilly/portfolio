"use client"

import { HomepageModeProvider } from "@/providers/ViewMode";
import React from "react";
import Navbar from "./Navbar";
import HomepageViewGuard from "@/components/HomepageViewGuard";
import { usePathname } from "next/navigation";

export default function ClientLayout({
  children
}: { children: React.ReactNode}){
  const pathname = usePathname()
  
  return (
    <HomepageModeProvider>
      <Navbar />
      {pathname === '/' && ( 
        <HomepageViewGuard />
      )}
      
      <div className="m-6">{children}</div>
    </HomepageModeProvider>
  )
}