import BlogLayout from "../../../Layouts/BlogLayout";
import SocialPreview from "../../../components/SocialPreview";
import Link from "next/link";
import Image from "next/image";
import { FindPost } from "../../../components/Blog/AllPosts";
import Code from "../../../components/CodeBlock";
import { CodeSection } from "../../../support/Types";

const PostMeta = FindPost("/blog/2023/pokemon");

export default function Post() {
	if (!PostMeta) return <p>Could not find information about post</p>;

	const expressConfig: CodeSection = {
		languageName: "json",
		languageFn: require("highlight.js/lib/languages/json"),
		filename: "vercel.json",
		code: `{
	"rewrites": [
		{
			"source": "/(.*)",
			"destination": "/api/app"
		}
	]
}`,
	};
	return (
		<BlogLayout metaInfo={PostMeta}>
			<SocialPreview metaInfo={PostMeta} />

			<section className="mt-4" id="introduction">
				<h3 className="title is-3 mb-2">Introduction</h3>
				<p>
					I recently got back into Pokémon when the Diamond/Pearl
					remakes were released. In an effort to get my partner
					involved, I played a Pokémon game in English for the first
					time instead of German.
				</p>
				<p>
					I had already built something similar before and had it
					deployed on my Raspberry Pi as a proof of concept. However,
					the existing apps on my Pi aren't public as they process
					location-specific data. If I wanted to expand on my existing
					work, I would have to re-platform the app. Much like this
					website, Vercel was the obvious candidate for something like
					this. Vercel is free to use for hobby projects and takes
					care of almost everything under the hood for you.
				</p>
			</section>

			<section className="mt-4" id="express-vercel">
				<h3 className="title is-3 mb-2">Using Express on Vercel</h3>
				<p>
					Configuring Vercel to work with a server-side-only
					application was a bit annoying. They don't natively support
					Express.JS in the same way as full stack-ish frameworks like
					Svelte or NextJS. To work around this, you have to tell
					Vercel that your server-side application code will live in
					the /api directory, so it will run your code rather than
					just serving a static file. This also implies that all your
					app traffic will have to go through [basedomain]/api/. The
					last bit of the puzzle is to reroute all traffic to go to
					/api instead, using the snippet below. This will make your
					app.ts file the entry point for the request.
				</p>

				<Code info={expressConfig} />
				<p>
					Vercel also makes it easy to assign other branches to be
					used as staging environments and have them deployed to a
					predictable subdomain. When working on a new set of features
					or bug fixes, I could bring those changes into a develop
					branch and test them for however long I wanted on
					dev.pokemon.helbling.uk before properly promoting the
					changes to the main site. This is very much like what you
					would do in a professional setting, but they make it
					incredibly easy to set up. It's tempting to add a new
					feature locally and push straight to production when you're
					working solo, but especially in the world of Pokémon where
					there are lots of edge cases to consider, it's wise to test
					the changes first.
				</p>
			</section>

			<section className="mt-4 content" id="logging-monitoring">
				<h3 className="title is-3 mb-2">Logging and monitoring</h3>
				<p>
					## On my Pi, it wasn't infrequent that I would crash the
					site because I pushed to prod without testing properly
					beforehand.
				</p>
				<p>
					This was particularly annoying as my Pi already has about 5
					containers running at any point, so the site would take a
					couple of minutes to come back online. But at least it made
					it painfully obvious that something wasn't working right. I
					say this because in the serverless world, a particular user
					would just see a 500 error, and I wouldn't know about it
					unless they told me.
				</p>
				<p>
					I find that the best approach to tackle this would be to set
					up useful log points in my application and create alerts
					when 5xx status codes occurred. I've got a bit of experience
					with Splunk through work, but this seems a bit overkill and
					too expensive to set up for a silly side project.
				</p>
				<p>
					A quick Google search brought me to Axiom, which integrates
					nicely with Vercel and offers the ability to create custom
					metrics, dashboards, alerts, and of course inspect your log
					stream. In their free tier, logs are retained for 30 days
					and you're limited on throughput. There is also a custom
					dashboard that combines all your Vercel projects and gives
					you account-level overviews. This is particularly useful as
					it enables you to compare your actual usage against the
					costs of native cloud platforms like AWS, Azure, or GCP.
				</p>
				<Image
					src="/images/posts/2023/pokemon/axiom.jpg"
					width={1664}
					height={877}
					alt="A custom dashboard in Axiom"
				/>
				<p>
					The one thing I've found myself missing from Axiom so far is
					the ability to add filters to dashboard views, i.e. being
					able to see all the routes that experienced 500 errors
					without needing a specific entry for that.
				</p>
				<p>
					Of course, it's great to have all these metrics to see that
					you have <i>checks notes</i> 0 actual users. But it's
					reassuring to see that I could quickly identify and act upon
					potential issues. Finally, it's also just fun to see real
					data generated by your projects and observe the internet
					noise of bots and scammers.
				</p>
			</section>

			<section className="mt-4 content" id="data-quality">
				<h3 className="title is-3 mb-2">A word about data quality</h3>
				<p>
					When I think of Pokémon evolutions, I typically think of
					leveling up, using certain items, or reaching certain
					friendship levels. I was hoping that the PokéAPI would have
					included all sorts of weird evolutions like Leafeon, which
					needs to be taken to a specific place in certain games.
					Thankfully, it handles most of them, but some evolution
					methods are so oddly specific and unique that it doesn't
					record them in a standardized way. So below is a quick list
					of some of the weirdest evolutions
				</p>
				<ul>
					<li>
						Galarian Farfetched evolves into Sirfetched after
						landing 3 critical hits in a single battle
					</li>
					<li>
						Galarian Yamask evolves into Runerigus when the player
						travels through the stone gate in the Dusty Bowl after
						the Yamask has lost 49+ HP from a single attack and
						didn't faint in a battle since.
					</li>
					<li>
						Milcery evolves into Alcremie when you spin and strike a
						pose while Milcery holds a sweet.
					</li>
					<li>
						White-Striped Basculin evolves into Basculegion after
						losing at least 294 HP from *recoil damage* where the
						damage doesn't count if the recoil results in Basculin
						fainting.
					</li>
				</ul>
			</section>

			<section className="mt-4" id="scaling">
				<h3 className="title is-3 mb-2">
					Scaling for users and complexity
				</h3>
				<p>
					## It's difficult to get the balance right when
					future-proofing side projects. The fact that I had already
					built a similar page before certainly didn't help this
					project. Of course, it would be the dream if a few hundred
					people would use your projects regularly, but the odds of
					that happening are incredibly small.
				</p>
				<p>
					Thankfully, by re-platforming this project into a serverless
					platform, I have peace of mind that it will scale in and out
					without any input from me. By having a middle-man that hosts
					this for free, I don't need to worry about getting charged
					for it.
				</p>
				<p>
					While meeting user demand, or lack thereof, might not be an
					issue, I soon started to realize that I might not have made
					the best choices with the technologies used. This started as
					a proof of concept - fetch some data from an API, use it to
					generate a static HTML page, and be done with it. Doing this
					was fine at the time as it allowed me to move quickly by
					using familiar technologies and quickly discover potential
					issues that I might run into, such as searching for data in
					different languages.
				</p>
				<p>
					When I decided to rebuild this in a way that could be
					publicly accessible, I didn't want to throw away all the
					work I did previously. This meant that I quickly had my POC
					deployed to Vercel, but it meant that innovating from that
					point will be more difficult.
				</p>
				<p>
					Yes, the sites are mostly still static, but certain ideas
					like bookmarking pages, comparing different Pokémon, and
					such would be a lot easier to manage if most of the page was
					rendered client-side, rather than having to worry about all
					that before. At first, I thought that I was just going to
					consume an existing API, cut out what I didn't need, and
					just generate HTML files from there. Yet it soon occurred to
					me that with the amount of data manipulation that I wanted
					to do, I was effectively building a new API service that
					used the PokéAPI as its database.
				</p>
				<p>
					Introducing new custom data types to fit the specific pages
					also really made me miss the full-stack type safety of
					NextJS which would have been a much better framework to use
					for this kind of project.
				</p>
				<p>
					I don't think I'll rewrite this into NextJS soon, maybe
					again in a couple of years. For now, I think I have covered
					most features that I was looking to implement, and my next
					effort will be to make sure that I can update it with as
					little effort as possible when the next game (or major DLCs
					for Scarlet/Violet) is released.
				</p>
			</section>
		</BlogLayout>
	);
}
