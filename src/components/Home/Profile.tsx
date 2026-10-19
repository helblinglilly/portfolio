import Link from "next/link";
import React from "react";
import LinkedinIcon from "../atoms/Icons/LinkedIn";
import GithubIcon from "../atoms/Icons/Github";
import { LucideMailPen } from "lucide-react";

export function Profile() {
  const profilePictureURL = "/images/profile.jpeg";

  return (
    <div className="w-64 justify-center flex">
      <div className="flex gap-2 flex-col">
        <img
          src={profilePictureURL}
          alt="Profile Picture"
          width={400}
          height={400}
          loading="eager"
          className="rounded-full w-48 h-auto border border-t-fuchsia-50"
        />

        <div className="justify-between flex flex-col">
          <h1 className="text-center w-full text-2xl font-extrabold">
            Lilly Helbling
          </h1>
          <p className="text-center w-full">she/her 🏳️‍⚧️</p>
          <p className="text-center w-full">Leeds, UK</p>
        </div>

        <div className="min-w-fit mb-auto justify-between flex">
          <button
            type="button"
            className="w-12 h-12 bg-slate-200 rounded-4xl hover:bg-violet-100 dark:bg-slate-700 dark:hover:bg-violet-400"
          >
            <Link
              href={"http://github.com/helblinglilly"}
              target={"_blank"}
              rel={"noopener noreferrer"}
              className="inline-flex gap-1 items-center justify-center font-semibold text-lg w-full h-full"
            >
              <GithubIcon className="h-5" />
            </Link>
          </button>

          <button
            type="button"
            className="w-12 h-12 bg-slate-200 rounded-4xl hover:bg-violet-100 dark:bg-slate-700 dark:hover:bg-violet-400"
          >
            <Link
              href={"https://www.linkedin.com/in/lilly-helbling"}
              target={"_blank"}
              rel={"noopener noreferrer"}
              className="inline-flex gap-1 items-center justify-center font-semibold text-lg w-full h-full"
            >
              <LinkedinIcon className="h-5" />
            </Link>
          </button>

          <button
            type="button"
            className="w-12 h-12 bg-slate-200 rounded-4xl hover:bg-violet-100 dark:bg-slate-700 dark:hover:bg-violet-400"
          >
            <Link
              href={"mailto:info@helbling.uk"}
              target={"_blank"}
              rel={"noopener noreferrer"}
              className="inline-flex gap-1 items-center justify-center font-semibold text-lg w-full h-full"
            >
              <LucideMailPen />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
