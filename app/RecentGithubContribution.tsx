'use client';

import React from 'react';
import { useQuery } from 'react-query';
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
      <h2 className="text-xl font-semibold">Recent commit</h2>
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
