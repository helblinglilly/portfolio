import React from "react";

export const Intro = ({}: {}) => {
  return (
    <div className="max-w-2xl">
      <div className="inline-flex">
        <h2 className="text-5xl font-bold w-full mb-2">Hiya</h2>
        <p className="text-5xl font-bold ml-1" id="wave">
          👋
        </p>
      </div>

      <p>
        With a general interest in all things tech I offer an open, curious mind
        that's quick to adapt to new technologies. I'm always honing my ability
        to solve user problems up and down the stack, making sure I consider
        every part of the process.
      </p>
    </div>
  );
};
