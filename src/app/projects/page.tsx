import Link from 'next/link';
import React from 'react';
import { Metadata } from 'next';
import metadataGenerator from '@/helpers/metadata';
import Pokecompanion from './Pokecompanion';
import Portfolio from './Portfolio';
import Homeserver from './Homeserver';

export const runtime = 'edge';

export function generateMetadata(): Metadata {
  return metadataGenerator({
    title: "Lilly's Projects",
    description: "List of projects that I've been working on.",
    url: 'https://helbling.uk/projects',
    publishedTime: new Date('2020-01-01').toISOString(),
    modifiedTime: new Date('2020-01-01').toISOString()
  });
}

function Project() {
  return (
    <div className="md:max-w-screen-sm md:ml-auto md:mr-auto">
      <h1 className='text-3xl font-bold w-full mb-2'>Projects</h1>

      <div>
        <ul>
          <li>
            <h2 className='text-xl font-semibold mb-2'>
              <Link href="#pokecompanion" className='link'>
                  Pokécompanion
              </Link>
            </h2>
          </li>
          <ul>
            <li>
              <Link href="#update-service" className='anchor'>
                  AWS Lambda - SQS update service
              </Link>
            </li>
            <li>
              <Link href="#pokecompanion-workers" className='anchor'>
                  avatar.helbling.uk
              </Link>
            </li>
            <li>
              <Link href="#pokecompanion-workers" className='anchor'>
              socialpreview.helbling.uk
              </Link>
            </li>
          </ul>
          <li>
            <h2 className='text-xl font-semibold mb-2'>
              <Link href="#homeserver" className='link'>
                  Homeserver
              </Link>
            </h2>
          </li>
          <li>
            <h2 className='text-xl font-semibold mb-2'>
              <Link href="#portfolio" className='link'>
                  Portfolio
              </Link>
            </h2>
          </li>
        </ul>
      </div>

      <hr className='mt-8 mb-8' />

      <main id="main">
        <Pokecompanion />
        <hr className='mt-8 mb-8' />
        <Homeserver />
        <hr className='mt-8 mb-8' />
        <Portfolio />
      </main>
    </div>
  );
}

export default Project;
