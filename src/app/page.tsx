import React from "react";
import "./homepage.css";
import { Intro } from "@/components/Home/Intro";
import Current from "@/homepage/current";
import { Profile } from "@/components/Home/Profile";
import { Projects } from "@/components/Home/Projects";
import { Approach } from "@/components/Home/Approach";
import Tools from "@/components/Home/Tools";
import { WorkHistory } from "@/components/Home/WorkHistory/WorkHistory";

function Homepage() {
  return (
    <React.Fragment>
      <header className="flex flex-col lg:flex-row gap-4 w-full justify-center items-center lg:items-start py-12 md:py-24">
        <Profile />
        <div className="mt-12 lg:mt-24 lg:-translate-y-1/3">
          <Intro />
        </div>
      </header>

      <main className="grid min-w-0 w-full grid-cols-1 gap-8" id="main">
        <section className="min-w-0 flex-col gap-4">
          <Projects />
        </section>

        <section className="min-w-0 flex-col gap-4">
          <Approach />
        </section>

        <section>
          <Tools />
        </section>

        <section>
          <WorkHistory />
        </section>
      </main>
    </React.Fragment>
  );
}

export default Homepage;
