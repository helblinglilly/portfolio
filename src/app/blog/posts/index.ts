// @ts-nocheck
import formatMetadata, { IPostMetadata } from '../helpers';
import * as Rant2022 from './2022-r-rant.mdx';
import * as AWSSummit2022 from './2022-aws-summit.mdx';
import * as Homeserver2022 from './2022-homeserver.mdx';
import * as Vercel2022 from './2022-vercel.mdx';
import * as Cloudflare2023 from './2023-cloudflare.mdx';
import * as Pokewiki2023 from './2023-pokewiki.mdx';

const AllPosts: IPostMetadata[] = [
  Rant2022,
  AWSSummit2022,
  Homeserver2022,
  Vercel2022,
  Cloudflare2023,
  Pokewiki2023,
].sort((a, b) => (new Date(a.publishedTime).valueOf() < new Date(b.publishedTime).valueOf()
  ? 1
  : -1)).map((entry) => formatMetadata(entry));

export default AllPosts;
