'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import GithubIcon from '@/components/atoms/Icons/Github';
import ButtonLink from '@/components/ButtonLink';
import InstgramIcon from '@/components/atoms/Icons/Instagram';
import LinkedinIcon from '@/components/atoms/Icons/LinkedIn';
import SocialPreview from '@/components/SocialPreview';
import QueryProvider from '@/providers/QueryProvider';
import RecentGithubContribution from '@/components/RecentGithubContribution';
import Profile from './profile.jpeg';
import './homepage.css';

function Homepage() {
  return (
    <QueryProvider>
      <div id="header" className="flex-col md:flex-row gap-4 mb-8 flex justify-around items-center">
        <div className="inline-flex md:grid lg:inline-flex gap-4 justify-center md:w-2/5 md:max-w-md md:justify-items-center">
          <Image
            src={Profile}
            alt="Profile Picture"
            priority
            className="rounded-full w-4/12 h-4/12"
          />
          <div className="min-w-fit mt-auto mb-auto">
            <h1 className="text-2xl font-semibold">Lilly Helbling</h1>
            <p>Software Engineer</p>
            <p>info@helbling.uk</p>
            <i>she/they</i>
          </div>
        </div>

        <div className="w-full gap-3 grid md:flex md:justify-between">
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

      </div>

      <div className="flex-col md:flex-row gap-6 mb-8 flex justify-around">
        <div id="sidebar" className="md:w-2/5 md:max-w-md grid gap-3 content-baseline">
          <div>
            <div className="inline-flex">
              <h1 className="text-3xl font-bold w-full mb-2">
                Hiya
              </h1>
              <p className="text-3xl font-bold ml-1" id="wave">👋</p>

            </div>
            <p>
              I'm a Software Engineer based in Leeds, United Kingdom.
              Professionally experienced with .NET, NextJS, and running those sites in AWS.
            </p>
            <p>
              Outside of work I still play around with code, and occasionally express my
              opinion on the internet.
            </p>
          </div>

          <div className="grid gap-3">

            <Link href="#recent-blog">
              <h2 id="recent-blog" className="text-xl font-semibold hover:underline decoration-violet-300">Recent Blog post</h2>
            </Link>

            <p>
              If your frontend sites barely have any backend interactions,
              should you look beyond serverless?
            </p>
            <ButtonLink link="/blog/2023-cloudflare" className="h-fit">
              <Image
                src="/images/posts/2023/cloudflare/cloudflare.png"
                width={96}
                height={96}
                alt="Cloudflare"
              />

              <p className="p-1 pr-8">Looking towards the Edge</p>
            </ButtonLink>
          </div>

          <RecentGithubContribution username="helblinglilly" />
        </div>

        <main className="w-full grid gap-6 md:gap-0">
          <section className="w-full">

            <h1 className="text-3xl font-semibold w-full mb-2">Showcase</h1>

            <div className="grid w-full gap-3 md:flex justify-items-center md:justify-between">
              <div>
                <Link href="#pokecompanion">
                  <h2 id="pokecompanion" className="text-2xl font-semibold mb-2 hover:underline decoration-violet-300">Pokécompanion</h2>
                </Link>

                <p>
                  My passion project, currently on its third iteration. What started off as a
                  basic frontend for the
                  {' '}
                  <Link href="https://pokeapi.co" className="underline decoration-violet-300">PokéAPI</Link>
                  {' '}
                  has lead me down countless avenues. While still
                  simple at its core, it solves the information overload problem while researching
                  for a Pokémon game like nothing else. Trust me, I'm not biased!
                </p>
              </div>

              <SocialPreview
                url="https://pokecompanion.helbling.uk"
              />

            </div>
          </section>

          <section className="w-full">
            <Link href="#homeserver">
              <h2 id="homeserver" className="text-2xl font-semibold mb-2 hover:underline decoration-violet-300">Homeserver</h2>
            </Link>
            <div className="grid w-full gap-3 md:flex justify-items-center md:justify-between md:flex-row-reverse">
              <p>
                Every homelab needs a dashboard, but why would you choose a pre-made
                one when you could integrate your own apps into it?
                This repo stores my configurations, the code to a glorified bookmark bar,
                as well as a timesheet app and energy bill (and usage) visualisation tool.
                Both could be public projects in their own right - but for now, I just need
                them to solve a problem for me.
              </p>

              <SocialPreview
                url="https://github.com/helblinglilly/piserver"
                showRoute
              />
            </div>
          </section>
        </main>
      </div>

    </QueryProvider>
  );
}

export default Homepage;
