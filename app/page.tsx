import React from 'react';
import Image from 'next/image';
import GithubIcon from '../atoms/Icons/Github';
import ButtonLink from './ButtonLink';
import InstgramIcon from '../atoms/Icons/Instagram';
import LinkedinIcon from '../atoms/Icons/LinkedIn';

function Homepage() {
  return (
    <>
      <div className="flex-col md:flex-row gap-4 mb-8 flex justify-between">
        <div className="inline-flex gap-4 justify-center md:w-2/5 md:max-w-md">
          <Image
            src="/images/profile.png"
            alt="Profile Picture"
            width={100}
            height={100}
            className="rounded-full w-auto"
          />
          <div className="min-w-fit">
            <h1 className="text-2xl font-semibold">Lilly Helbling</h1>
            <p>Software Engineer</p>
            <p>info@helbling.uk</p>
            <i>she/they</i>
          </div>
        </div>

        <ButtonLink link="https://github.com/helblinglilly">
          <GithubIcon />
          Github
        </ButtonLink>

        <ButtonLink link="https://instagram.com/helblinglilly">
          <InstgramIcon />
          Instagram
        </ButtonLink>

        <ButtonLink link="https://www.linkedin.com/in/joel-helbling-707ba0171">
          <LinkedinIcon />
          LinkedIn
        </ButtonLink>

      </div>
      <div className="md:w-2/5 md:max-w-md">
        <h1 className="text-3xl font-bold w-full">Hiya 👋</h1>
        <p>
          I'm a Software Engineer based in Leeds, United Kingdom.
          Professionally experienced with .NET, NextJS, and running those sites in AWS.
          I also write code outside of work, which is what you'll see here!
        </p>
      </div>
    </>
  );
}

export default Homepage;
