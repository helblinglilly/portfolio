import React from "react";
import Image from "next/image";
import "./homepage.css";
import Intro from "@/homepage/intro";
import Current from "@/homepage/current";
import Tools from "@/homepage/tools";

const profilePictureURL = "/images/profile.jpg";

function Homepage() {
  return (
    <React.Fragment>
      <header className="flex flex-row gap-4 h-36 w-full justify-center">
        <img
          src={profilePictureURL}
          alt="Profile Picture"
          width={400}
          height={400}
          loading="eager"
          className="rounded-full w-auto"
        />
        <div className="min-w-fit mt-auto mb-auto">
          <h1 className="text-2xl font-semibold">Lilly Helbling</h1>
          <p>Software Engineer</p>
          <p>info@helbling.uk</p>
          <p>
            <i>she/they</i> 🏳️‍⚧️
          </p>
        </div>
      </header>

      <main
        className="grid w-full justify-center gap-4 md:w-8/12 md:mx-auto"
        id="main"
      >
        <article>
          <div className="inline-flex">
            <h1 className="text-3xl font-bold w-full mb-2">Hiya</h1>
            <p className="text-3xl font-bold ml-1" id="wave">
              👋
            </p>
          </div>

          <Intro />
        </article>

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
