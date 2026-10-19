"use client";
import React from "react";
import { greetingText } from "./greeting";

export const Intro = ({}: {}) => {
  const text = greetingText();

  return (
    <section className="max-w-2xl">
      <div className="inline-flex">
        <h2 className="text-6xl font-bold w-full mb-2 tracking-tight">Hiya</h2>
        <p className="text-6xl font-bold ml-1" id="wave">
          👋
        </p>
      </div>

      <p className="text-2xl font-semibold tracking-tight text-gray-800 dark:text-gray-200">
        {text}
      </p>

      <p>
        With a general interest in all things tech I offer an open, curious mind
        that's quick to adapt to new technologies. I'm always honing my ability
        to solve user problems up and down the stack, making sure I consider
        every part of the process.
      </p>
    </section>
  );
};
