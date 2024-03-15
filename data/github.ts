const baseUrl = 'https://api.github.com';

interface IGithubEvent {
id: string;
type: 'PushEvent',
actor: {
  id: number,
  login: string;
  display_login: string;
  gravatar_id: string;
  url: string;
  avatar_url: string;
},
repo: {
  id: number;
  name: string;
  url: string;
},
payload: {
  ref: string;
  head: string;
},
public: boolean;
created_at: string;
}

async function getMostRecentContribution(username: string) {
  const res = await fetch(`${baseUrl}/users/${username}/events/public`);
  const events = (await res.json()) as IGithubEvent[];
  const sortedEvents = events
    .sort((a, b) => new Date(b.created_at).valueOf() - new Date(a.created_at).valueOf());

  return {
    url: sortedEvents[0] ? `https://github.com/${sortedEvents[0].repo.name}` : null,
    name: sortedEvents[0]?.repo.name ?? null,
  };
}

export default getMostRecentContribution;
