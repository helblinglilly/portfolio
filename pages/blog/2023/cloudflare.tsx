/* eslint-disable @next/next/no-img-element */
import BlogLayout from "../../../Layouts/BlogLayout";
import Image from "next/image";
import { FindPost } from "../../../components/Blog/AllPosts";
import SocialPreview, {
	ExternalLinkPreview,
} from "../../../components/SocialPreview";

const PostMeta = FindPost("/blog/2023/cloudflare");

export default function Post({
	...props
}: {
	sitePreview: ExternalLinkPreview | null;
	gitPreview: ExternalLinkPreview | null;
}) {
	if (!PostMeta) return <p>Could not find information about post</p>;

	return (
		<BlogLayout metaInfo={PostMeta}>
			<SocialPreview metaInfo={PostMeta} />

			<section className="mt-4" id="introduction">
				<h3 className="title is-3 mb-2">Introduction</h3>
				<p>
					It doesn't feel that long ago since I jumped on Vercel as my go-to, full stack* platform for my web-apps. I even wrote a blog post about it!
				</p>
				<p>*except data storage</p>
			</section>

			<section className="mt-4" id="problems-with-serverless">
				<h3 className="title is-3 mb-2">Problems with serverless</h3>
				<p>
					Serverless is great. You can scale down to 0, and scale up to burn through hundreds of thousands of dollars (link to Amazon prime video debacle here). But it does come with its cost - cold starts. I've recently been at a talk and when I wanted to pull up some projects I've been working on I had to stare at the blank screen of my phone for what felt like an eternity. Meanwhile I tried to have a conversation about performance with the person opposite...
				</p>
				<p>
					Reality is that most side projects will have a few users a day, and one of them will inevitably be the author themself. It's hard to try and attract users when they're faced with a cold-start of up to 5 seconds - that almost 2 TikToks.
				</p>
				<p>THEN USE THE EDGE I hear you shout, and you are right.</p>
				<p>This could all go away if we used the correct rendering patterns. Statically generate as much as you can, hydrate those skeletons from the edge/CDN if you can and handle the relatively few backend calls with Lambdas or whatever.</p>
				<p>The issue, I found, is that we are blurring the lines of what runs where. A new React developer will get told that they have to perform some actions in a `getServerSideProps` call for "security". And why would you break an SPA/client side nav'd flow for this? While legacy Next codebases are trying to move network calls closer to the client, those on the edge are getting their hands on React Server components and Next14.
The issue, and my fault here, is not with the underlying technology but rather how we choose to apply it.</p>
				<p>So yes, Vercel is great and you should probably keep using it. But don't be fooled that serverless is this magic technology that solves all your problems if you're not in the sweet spot where you can eat up cold starts easily and don't burn through your cash.</p>
			</section>

			<section className="mt-4 content" id="vercel-is-great">
				<h3 className="title is-3 mb-2">What I value about Vercel</h3>
				<p>
				Like any modern meta-framework (where did this term even come from), Vercel is a one stop shop for all your web needs. They even started offering storage solutions at ridiculous mark ups for said privilege!
				</p>
				<p>
				While I can't offer an opinion on its scale in a business sense, it is perfect for side projects and you just need your code to be on a secured domain when you hit "merge" - or hell, even just "push". Got tests? It'll even run those for you as part of the process!
SSL certificates? Who even has the time

				</p>
			</section>

			<section className="mt-4 content" id="vercel-is-not-so-great">
				<h3 className="title is-3 mb-2">Why I sort of dislike Vercel</h3>
				<p>
				Vercel is, and will always be, a man in the middle. They make use of economies of scale and sublet AWS, Cloudflare and others but make those easy to use - that's the privilege that you pay for.
				</p>
				<p>
				Once you reach beyond the free tier, or dig into their T&Cs you'll want to reconsider your options - are you still getting enough value for your money? Could you optimise your code, your strategy to make the free tier last longer, and is that even worth the effort? You'll likely want to keep using Vercel, you know it, you trust it, and once you pay $20/month you can do whatever your heart desires!
				</p>
				<p>
				But $20/month is a lot. You can likely find more cost effective solutions elsewhere, and learn more about what Vercel abstracts away from you (and learn to appreciate it).
So you should you?

				</p>
			</section>

			<section className="mt-4" id="why-bother">
				<h3 className="title is-3 mb-2">
				So why bother with Cloudflare?
				</h3>
				<p>
				Well that depends. I am nowhere near the limits of the free tier yet - was anyway. All I heard was that the edge got mentioned, and you can effectively click a button to make it work.
But I love setting up pipelines. It's crazy to think that by pressing a button in my living room I make computers all across the globe do these things just to give you this to read.
				</p>
				<p>
				I want to learn more, and ultimately I want to be skilled enough across the stack from CDNs to Terraform - so that I could turn myself into a project machine. I want to go from idea to product in as little time as possible. Understand exactly* what it is I'm building, how and where it runs, and what optimisations I could make.
				</p>
				<p>
				Throw something together in hopes that one idea will eventually make it and be worthwhile. And once it does, I want to have to worry about as little tech debt as possible and continue to move - being able to trust that the underlying structure won't blow up if I get 100 concurrent users.
				</p>
				<p>
				In other words, because I'm a nerd.
				</p>
			</section>
			<section className="mt-4" id="conclusion">
				<h3 className="title is-3 mb-2">
				Conclusion
				</h3>
				<p>
					As I've already started tooling around with AWS a bit, by deploying my own Pocketbase instance to EC2, I appreciate that I can deploy my projects to cloudflare through Terraform and have my configurations in code.
				</p>
				<p>The end product, be it on Vercel or Cloudflare is, for the purposes of side projects, identical</p>
				<p>By exploring Cloudflare I make myself think more about where my code is going to run - and there's no arguing that that's a good thing.</p>
			</section>
		</BlogLayout>
	);
}
