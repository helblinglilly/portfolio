import React from "react";
import "./homepage.css";
import { Intro } from "@/components/Home/Intro";
import Current from "@/homepage/current";
import Tools from "@/homepage/tools";
import { Profile } from "@/components/Home/Profile";

function Homepage() {
  return (
    <React.Fragment>
      <header className="flex flex-col lg:flex-row gap-4 w-full justify-center items-center lg:items-start py-12 md:py-24">
        <Profile />
        <div className="mt-12 lg:mt-24 lg:-translate-y-1/3">
          <Intro />
        </div>
      </header>

      <main
        className="grid w-full justify-center gap-4 lg:w-8/12 md:mx-auto"
        id="main"
      >
        <article>
          <Current />
        </article>

        <article>
          <Tools />
        </article>
      </main>
    </React.Fragment>
  );
}

export default Homepage;
