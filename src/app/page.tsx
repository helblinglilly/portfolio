'use client';

import React from 'react';
import Image from 'next/image';
import './homepage.css';
import Intro from '@/homepage/intro';
import Current from '@/homepage/current';
import Tools from '@/homepage/tools';
import GithubIcon from '@/components/atoms/Icons/Github';
import BlueSkyIcon from '@/components/atoms/Icons/BlueSky';
import LinkedinIcon from '@/components/atoms/Icons/LinkedIn';
import InstgramIcon from '@/components/atoms/Icons/Instagram';

export const runtime = 'edge';

const profilePictureURL = 'https://static.helbling.uk/profile/current.jpg';

function Homepage() {
  return (
    <React.Fragment>
      <header className="flex flex-row gap-4 w-full justify-center pb-4">
        <Image
          src={profilePictureURL}
          alt="Profile Picture"
          width={200}
          height={200}
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

      <main className='grid w-full justify-center gap-4 md:w-8/12 md:mx-auto' id='main'>
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
          <Current />
        </article>

        <article>
          <Tools />
        </article>
      </main>

      <aside className='grid w-full gap-2 pt-4 md:mx-auto md:fixed md:justify-end md:top-[5rem] md:pr-10' aria-label='Social media links'>
        <h3 className="text-2xl font-semibold">Socials</h3>

        <div className='grid grid-cols-4 md:grid-cols-1'>
          <div className='col-span-2 sm:col-span-1'>
            <a href="https://github.com/helblinglilly" className='inline-flex gap-2 text-center link'>
              <div className='w-[24px] h-auto grid justify-center'>
                <GithubIcon />
              </div>
              <p className='my-auto'>Github</p>
            </a>
          </div>

          <div className='col-span-2 sm:col-span-1'>
            <a href="https://bsky.app/profile/helbling.uk" className='inline-flex gap-2 text-center link'>
              <div className='w-[24px] h-auto grid justify-center'>
                <BlueSkyIcon />
              </div>
              <p className='my-auto'>BlueSky</p>
            </a>
          </div>

          <div className='col-span-2 sm:col-span-1'>
            <a href="https://instagram.com/helblinglilly" className='inline-flex gap-2 text-center link'>
              <div className='w-[24px] h-auto grid justify-center'>
                <InstgramIcon />
              </div>
              <p className='my-auto'>Instagram</p>
            </a>
          </div>

          <div className='col-span-2 sm:col-span-1'>
            <a href="https://www.linkedin.com/in/joel-helbling-707ba0171" className='inline-flex gap-2 text-center link'>
              <div className='w-[24px] h-auto grid justify-center'>
                <LinkedinIcon />
              </div>
              <p className='my-auto'>LinkedIn</p>
            </a>
          </div>
        </div>
      </aside>
    </React.Fragment>
  );
}

export default Homepage;
