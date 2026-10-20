"use client";
import React from "react";
import { greetingText } from "./greeting";

export const Intro = ({}: {}) => {
  const text = greetingText();

  return (
    <section className="max-w-2xl">
      <div className="inline-flex">
        <h2 className="text-6xl font-bold w-full mb-2 tracking-tight">Hiya</h2>
        <p className="text-6xl font-bold ml-1 motion-safe:animate-[wave_3s_infinite]">
          👋
        </p>
      </div>

      <p className="text-2xl font-semibold tracking-tight text-subheading">
        {text}
      </p>

      <p className="text-foreground">
        A curious, pragmatic, product minded engineer with great passion for
        users and teams.
      </p>

      <p className="text-foreground">
        My expertise lies in frontend development, but my curiosity and can-do
        attitude lead me to solve user problems up and down the stack.
      </p>

      <p className="text-foreground">
        I'm always looking to improve myself, uplift those around me, and learn
        from every failure and success - together.
      </p>
    </section>
  );
};
