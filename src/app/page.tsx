'use client';

import React from 'react';
import Image from 'next/image';
import QueryProvider from '@/providers/QueryProvider';
import Profile from './profile.jpeg';
import './homepage.css';
import Intro from '@/homepage/intro';
import Current from '@/homepage/current';
import Tools from '@/homepage/tools';


function Homepage() {
  return (
    <QueryProvider>
      <header className="flex flex-row gap-4 w-full justify-center">
        <Image
          src={Profile}
          alt="Profile Picture"
          priority
          className="rounded-full h-32 w-auto"
        />
        <div className="min-w-fit mt-auto mb-auto">
          <h1 className="text-2xl font-semibold">Lilly Helbling</h1>
          <p>Software Engineer</p>
          <p>info@helbling.uk</p>
          <p><i>she/they</i> 🏳️‍⚧️</p>
        </div>
      </header>

      <main className='grid w-full justify-center gap-4 md:w-8/12 md:mx-auto'>
        <article>
          <div className="inline-flex">
            <h1 className="text-3xl font-bold w-full mb-2">
                Hiya
            </h1>
            <p className="text-3xl font-bold ml-1" id="wave">👋</p>
          </div>

          <Intro/>
        </article>

        <article>
          <h2 className='h2'>Stuff I do</h2>
          <Current />
        </article>

        <article>
          <h2 className='h2'>Tools I use</h2>
          <Tools />
        </article>

      </main>

      {/* <div className="inlineWrapper w-full md:justify-between">
          <ButtonLink link="https://github.com/helblinglilly">
            <GithubIcon />
            Github
          </ButtonLink>

          <ButtonLink link="https://bsky.app/profile/helbling.uk">
            <BlueSkyIcon />
            Bluesky
          </ButtonLink>

          <ButtonLink link="https://instagram.com/helblinglilly">
            <InstgramIcon />
            Instagram
          </ButtonLink>

          <ButtonLink link="https://www.linkedin.com/in/joel-helbling-707ba0171">
            <LinkedinIcon />
            LinkedIn
          </ButtonLink>
        </div> */}
    </QueryProvider>
  );
}

export default Homepage;
