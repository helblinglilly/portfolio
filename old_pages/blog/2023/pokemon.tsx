/* eslint-disable @next/next/no-img-element */
import BlogLayout from "../../../Layouts/BlogLayout";
import Image from "next/image";
import { FindPost } from "../../../components/Blog/AllPosts";
import Code, { CodeSection } from "../../../components/Code";
import SocialPreview, {
	ExternalLinkPreview,
} from "../../../components/SocialPreview";
import ProjectPreview from "../../../components/ProjectPreview";

const PostMeta = FindPost("/blog/2023/pokemon");

export default function Post({
	...props
}: {
	sitePreview: ExternalLinkPreview | null;
	gitPreview: ExternalLinkPreview | null;
}) {
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
				<p className="title is-4 pb-0">This article is about:</p>
				<div className="columns">
					<div className="column">
						<ProjectPreview
							link="https://pokemon.helbling.uk"
							title={"Pokécompanion Site"}
							image={"/images/posts/2023/pokemon/generic.png"}
						/>
					</div>
					<div className="column">
						<ProjectPreview
							link="https://github.com/helblinglilly/pokewiki"
							title={"helblinglilly/pokewiki"}
							image={"/images/posts/2023/pokemon/gitrepo.png"}
						/>
					</div>
				</div>
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
					application can be a bit tedious. They don't natively
					support Express.JS in the same way as full-stack frameworks
					like Svelte or NextJS. Instead, you have to tell Vercel that
					your server-side application code will live in the /api
					directory, so it will run your code rather than just serving
					a static file. This also means that all your app traffic
					will have to go through [basedomain]/api/. The last piece of
					the puzzle is to reroute all traffic to go to /api instead,
					using the snippet below. This will make your app.ts file the
					entry point for the request.
				</p>

				<Code info={expressConfig} />
				<p>
					Vercel also makes it easy to assign other branches to be
					used as staging environments and have them deployed to a
					predictable subdomain. When working on a new set of features
					or bug fixes, you can bring those changes into a develop
					branch and test them for however long you want on before
					properly promoting the changes to the main site. This is
					very much like what you would do in a professional setting,
					but Vercel makes it incredibly easy to set up. It's tempting
					to add a new feature locally and push straight to production
					when working solo, but especially in the world of Pokémon
					where there are lots of edge cases to consider, it's best to
					test the changes first.
				</p>
			</section>

			<section className="mt-4 content" id="logging-monitoring">
				<h3 className="title is-3 mb-2">Logging and monitoring</h3>
				<p>
					On my Pi, I would occasionally crash the site because I
					pushed to prod without testing properly beforehand. This was
					especially annoying because my Pi already has about five
					docker containers running at any point, so the site would
					take a couple of minutes to come back online. At least it
					made it painfully obvious that something wasn't working
					right. In the serverless world, a particular user would just
					see a 500 error, and I wouldn't know about it unless they
					told me.
				</p>
				<p>
					To tackle this, I set up useful log points in my application
					and created alerts when 5xx status codes occurred. I found
					Axiom, which integrates nicely with Vercel and offers the
					ability to create custom metrics, dashboards, alerts, and
					inspect your log stream. In their free tier, logs are
					retained for 30 days, and you're limited on throughput.
					There is also a custom dashboard that combines all your
					Vercel projects and gives you an account-level overview.
					This is particularly useful as it enables you to compare
					your actual usage against the costs of native cloud
					platforms like AWS, Azure, or GCP.
				</p>
				<Image
					src="/images/posts/2023/pokemon/axiom.jpg"
					width={1664}
					height={877}
					alt="A custom dashboard in Axiom"
				/>
				<p>
					The one thing I've found myself missing from Axiom so far is
					the ability to add filters to dashboard views. For example,
					it would be helpful to see all the routes that experienced
					500 errors without needing a specific entry for that.
				</p>
				<p>
					Of course, it's great to have all these metrics to see that
					you have zero actual users, but it's also reassuring to
					quickly identify and address potential issues. Finally, it's
					just fun to see real data generated by your projects and
					observe the internet noise of bots and scammers.
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
					of some of the weirdest evolutions:
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
					It can be challenging to get the balance right when it comes
					to future-proofing side projects. While having hundreds of
					regular users would be ideal, the chances of that happening
					are slim. Having already built a similar proof of concept
					before didn't make it any easier for this project as I
					didn't want to discard previous work.
				</p>
				<p>
					Fortunately, by re-platforming this project into a
					serverless platform, I can rest assured that it will scale
					in or out automatically without any input from me.
					Additionally, by having a middle-man that hosts it for free,
					I don't need to worry about any charges.
				</p>
				<p>
					While user demand, or lack thereof, may not be an issue, I
					soon realised that I may not have made the best choices with
					the technologies used. Initially, this was a proof of
					concept: fetch some data from an API, use it to generate a
					static HTML page, and be done with it. This allowed me to
					move quickly by using familiar technologies and quickly
					discover potential issues, such as searching for data in
					different languages.
				</p>
				<p>
					When I decided to rebuild this in a way that could be
					publicly accessible, I didn't want to discard all the work I
					had done previously. This meant that I quickly deployed my
					proof of concept to Vercel, but it also meant that
					innovating from that point would be more challenging.
				</p>
				<p>
					While the sites are mostly still static, certain ideas such
					as bookmarking pages and comparing different Pokémon would
					be easier to manage if most of the page was rendered
					client-side. Initially, I thought that I would consume an
					existing API, cut out what I didn't need, and generate HTML
					files from there. However, it soon became apparent that with
					the amount of data manipulation I wanted to do, I was
					effectively building a new API service that used the PokéAPI
					as its database.
				</p>
				<p>
					Introducing new custom data types to fit specific pages also
					made me miss the full-stack type safety of NextJS, which
					would have been a much better framework to use for this
					project.
				</p>
				<p>
					I don't plan on rewriting this into NextJS anytime soon,
					maybe in a couple of years. For now, I believe I have
					implemented most of the features I wanted, and my next
					effort will be to ensure that I can update it with minimal
					effort when the next game (or major DLCs for Scarlet/Violet)
					is released.
				</p>
			</section>
		</BlogLayout>
	);
}