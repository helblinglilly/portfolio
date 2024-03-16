'use client';

import React from 'react';
import { useQuery } from 'react-query';
import Link from 'next/link';
import getMostRecentContribution from '../data/github';
import ButtonLink from './ButtonLink';
import GithubIcon from '../atoms/Icons/Github';

export default function RecentGithubContribution({ username }:{username: string}) {
  const { isLoading, isError, data } = useQuery({
    queryKey: [`recent-github-${username}`],
    queryFn: () => getMostRecentContribution(username),
  });

  return (
    <>
      <Link href="#commit">
        <h2 id="commit" className="text-xl font-semibold hover:underline decoration-violet-300">Recent commit</h2>
      </Link>

      <ButtonLink link={data?.url ?? ''}>
        <GithubIcon />
        {
          isLoading && <p>Loading...</p>
        }
        {
          isError && <p>Try again later</p>
        }
        {
          data && <p>{data.name ?? 'No data'}</p>
        }
      </ButtonLink>
    </>
  );
}
