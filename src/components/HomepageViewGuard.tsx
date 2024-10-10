import React, { useEffect } from "react";
import { HomepageMode, useHomepageMode } from "@/providers/ViewMode";

export default function HomepageViewGuard(){
  const { mode, setMode } = useHomepageMode();

  
  useEffect(() => {
    if (mode === undefined) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [mode]);

  if (mode === undefined){
    return (
      <dialog open={mode === undefined} className="bg-violet-200/[.9] dark:bg-slate-900/[.8] backdrop-blur-sm w-full h-screen z-10 text-center" aria-label="Dialog to select mode in which homepage will be displayed in. Text contents will vary depending on your choice. To change this later, use 'Change Homepage Mode' button in Navigation">
        <h2 className="h1 h-fit pt-8">What are you interested in?</h2>
        <p className="max-w-lg mx-auto px-4">I work on and with different things in and out of work. What would you like to learn more about?</p>

        <div className="w-full h-4/6 flex gap-4 p-4 flex-col md:flex-row">
          <button className="w-full h-full bg-indigo-500/[.2] hover:bg-indigo-500/[.4] dark:bg-indigo-400/[.4] dark:hover:bg-indigo-400/[.7] rounded-2xl" onClick={() => setMode(HomepageMode.PROFESSIONAL)} aria-label="Professional. Talks about work experience.">
            <div className="inline-flex gap-4">
              <p className="h2">Professional 💼</p>
            </div>
          </button>
          <button className="w-full h-full bg-fuchsia-500/[.2] hover:bg-fuchsia-500/[.4] dark:bg-fuchsia-400/[.4] dark:hover:bg-fuchsia-400/[.7] rounded-2xl" onClick={() => setMode(HomepageMode.PERSONAL)} aria-label="Personal. Talks about personal projects.">
            <p className="h2">Personal 😎</p></button>
        </div>
      </dialog>
    )
  }

  return null;
    
}