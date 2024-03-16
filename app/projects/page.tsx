import Link from 'next/link';
import React from 'react';
import { Metadata } from 'next';
import SocialPreview from '../SocialPreview';
import QueryProvider from '../QueryProvider';

export const metadata: Metadata = {
  title: 'Projects - Lilly Helbling',
  description: "List of projects that I've been working on.",
  creator: 'Lilly Helbling',
  keywords: ['Software Engineer', 'Leeds'],
  openGraph: {
    type: 'profile',
    firstName: 'Lilly',
    lastName: 'Helbling',
    gender: 'Female',
    locale: 'en-GB',
    url: 'https://helbling.uk',
    countryName: 'United Kingdom',
    images: {
      url: 'https://helbling.uk/images/profile.png',
    },
  },
};

function Project() {
  return (
    <QueryProvider>
      <main className="w-full flex flex-col md:flex-row gap-6 justify-around">
        <section className="w-full grid gap-3">
          <Link href="#pokecompanion">
            <h1 id="pokecompanion" className="text-3xl font-semibold mb-2 hover:underline decoration-violet-300">Pokécompanion</h1>
          </Link>
          <div className="grid gap-3">
            <p>
              Extending the existing site by allowing users to organise
              entries into tags through a Pocketbase backend. Finally
              taking the leap to move part of my infrastructure into AWS.
            </p>
            <p>
              Between the update service and backend, the number of microservices
              is equal to the number of users! However, the skills learnt along
              the way should allow me to turn ideas into products quicker.
            </p>
            <div className="grid md:flex gap-2">
              <div className="bg-slate-200 dark:bg-slate-700 hover:bg-violet-100 dark:hover:bg-slate-600 rounded-sm h-fit w-4/5 max-w-80 justify-self-center">
                <SocialPreview
                  url="https://pokecompanion.helbling.uk"
                />
              </div>
              <div className="bg-slate-200 dark:bg-slate-700 hover:bg-violet-100 dark:hover:bg-slate-600 rounded-sm h-fit w-4/5 max-w-80 justify-self-center">
                <SocialPreview
                  url="https://github.com/helblinglilly/pokecompanion"
                />
              </div>
            </div>

            <div className="grid md:flex gap-2">
              <div className="bg-slate-200 dark:bg-slate-700 hover:bg-violet-100 dark:hover:bg-slate-600 rounded-sm h-fit w-4/5 max-w-80 justify-self-center">
                <SocialPreview
                  url="https://github.com/helblinglilly/pokecompanion-lambda"
                />
              </div>
              <div className="bg-slate-200 dark:bg-slate-700 hover:bg-violet-100 dark:hover:bg-slate-600 rounded-sm h-fit w-4/5 max-w-80 justify-self-center">
                <SocialPreview
                  url="https://github.com/helblinglilly/aws-pocketbase"
                />
              </div>
            </div>

          </div>

          <Link href="#pokecompanion-legacy">
            <h2 id="pokecompanion-legacy" className="text-xl font-semibold mb-2 hover:underline decoration-violet-300">Pokécompanion - Express app</h2>
          </Link>
          <div className="grid gap-3">
            <p>
              At the time, I moved this project from my Raspberry Pi into Vercel.
              I decided to keep the same tech stack
              as it meant I could re-use my existing work and expand on it.
            </p>

            <p>
              While this did allow me to move quite fast, it also made
              it more difficult to build out new features. Using a templating
              approach would make more interactive UI messier.
            </p>
            <div className="grid md:flex gap-2">
              <div className="bg-slate-200 dark:bg-slate-700 hover:bg-violet-100 dark:hover:bg-slate-600 rounded-sm h-fit w-4/5 max-w-80 justify-self-center">
                <SocialPreview
                  url="https://pokewiki-zeta.vercel.app/"
                />
              </div>
              <div className="bg-slate-200 dark:bg-slate-700 hover:bg-violet-100 dark:hover:bg-slate-600 rounded-sm h-fit w-4/5 max-w-80 justify-self-center">
                <SocialPreview
                  url="https://github.com/helblinglilly/pokewiki"
                />
              </div>
            </div>
          </div>

        </section>

        <section className="w-full">

          <Link href="#portfolio">
            <h1 id="portfolio" className="text-3xl font-semibold mb-2 hover:underline decoration-violet-300">Portfolio</h1>
          </Link>
          <div className="grid gap-3">
            <p>
              This site, built with NextJS and tailwind deployed using
              {' '}
              <Link href="https://www.cloudflare.com/en-gb/developer-platform/pages/" className="underline decoration-violet-300">Cloudflare Pages</Link>
              . Originally started out as a PHP app and currently on its third iteration.
              It's good to have a simple application to move around and try new technology with.
              With the downfall of Twitter/X, and no suitable replacement on the market, it's handy
              to keep my own forum for expression open.
            </p>
            <div className="grid md:flex gap-2  justify-center">
              <div className="bg-slate-200 dark:bg-slate-700 hover:bg-violet-100 dark:hover:bg-slate-600 rounded-sm h-fit w-4/5 max-w-80">
                <SocialPreview
                  url="https://github.com/helblinglilly/portfolio"
                />
              </div>
            </div>

          </div>

          <Link href="#piserver">
            <h1 id="piserver" className="text-3xl font-semibold mb-2 hover:underline decoration-violet-300">Homeserver</h1>
          </Link>
          <div className="grid gap-3">
            <p>
              WIP
            </p>
            <div className="grid md:flex gap-2  justify-center">
              <div className="bg-slate-200 dark:bg-slate-700 hover:bg-violet-100 dark:hover:bg-slate-600 rounded-sm h-fit w-4/5 max-w-80">
                <SocialPreview
                  url="https://github.com/helblinglilly/piserver"
                />
              </div>
            </div>

          </div>
        </section>
      </main>
    </QueryProvider>
  );
}

export default Project;
