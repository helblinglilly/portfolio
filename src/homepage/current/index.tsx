"use client"

import React from "react";
import Professional from "./Professional";
import Personal from "./Personal";
import { HomepageMode, useHomepageMode } from "@/providers/ViewMode";


export default function Current(){
  const { mode } = useHomepageMode();

  return (
    <>
      {mode === HomepageMode.PERSONAL ? <Personal /> : <Professional />}
    </>
  )
}
