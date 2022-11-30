import BlogLayout from "../../../Layouts/BlogLayout";
import SocialPreview from "../../../components/SocialPreview";
import BashCodeBlock from "../../../components/CodeBlock/bash";
import Image from "next/image";
import Link from "next/link";
import { FindPost } from "../../../components/Blog/AllPosts";

const VercelMeta = FindPost("/blog/2022/vercel");

export default function Post() {
	const vercelScript = {
		filename: "vercel.sh",
		code: `#!/bin/bash
echo "VERCEL_GIT_COMMIT_REF: $VERCEL_GIT_COMMIT_REF"

if [ "$VERCEL_GIT_COMMIT_REF" == "main" ]; then
  echo "✅ - Building and deploying to helbling.uk"
  exit 1;
elif [ "$VERCEL_GIT_COMMIT_REF" == "develop" ]; then
  echo "✅ - Building and deploying to dev.helbling.uk"
  exit 1;
else
  echo "🛑 - Build cancelled"
  exit 0;
fi`,
	};

	if (!VercelMeta) return <p>Could not find information about post</p>;

	return (
		<BlogLayout metaInfo={VercelMeta}>
			<SocialPreview metaInfo={VercelMeta}></SocialPreview>

			<section className="mt-4" id="intro">
				<p>
					So Heroku has recently{" "}
					<a
						href="https://twitter.com/heroku/status/1562817050565054469?s=20&t=SBRFdmRRi4_JFPvtUIH_wg"
						target="_blank"
						rel="noreferrer"
					>
						removed their free tier plan
					</a>{" "}
					and while I wasn't a customer with them, it seems like lots
					of people on my Twitter feed were. Because of that, more of
					these "Platform as a service" providers started to come to
					my attention. I thought it can't hurt to see what all the
					noise was about and as my website is built with NextJS I
					thought it would be good to take a look at{" "}
					<a
						href="https://vercel.com/"
						target="_blank"
						rel="noreferrer"
					>
						Vercel
					</a>
					.
				</p>
			</section>

			<section className="mt-4" id="setup">
				<h3 className="title is-3 mb-2">Setup</h3>
				<p>
					I was mentally already preparing for a long afternoon that
					would probably have nothing to show. After all, I did just
					spend the last 6 months or so really getting familiar with,
					and enjoying the benefits of managing things like Docker
					yourself. To read more about this journey, see my previous
					post about{" "}
					<Link href="/blog/2022/homeserver-pi">
						my Raspberry Pi homeserver.
					</Link>
				</p>
				<p>
					But my god was I surprised. I went onto their website,
					looked at their pricing options to evaluate if the free tier
					would even be worth it, and less than 5 minutes later I had
					my website deployed!
				</p>
				<p>
					I was genuinely shocked. Other than tweets and link previews
					not working as they require API keys that I hadn't provided
					yet, everything was in working order. It even set up SSL
					certificates for me! I created a new branch on git, pushed
					to it, and before I even switched to my browser window
					again, a build was already in progress. This was quicker
					than any GitHub self-hosted action runner or Jenkins agent
					would manage.
				</p>
				<p>
					Honestly speaking, even though I have less control over
					what's happening under the hood, particularly with how
					middleware functions turn into serverless functions, it's
					such a smooth experience that I can justify the trade-offs.
					No server needs setting up, docker doesn't have to be
					installed, you don't need to sit and wait for an image to be
					built to then redeploy, and you don't even have to manage
					SSL certificates. It links in directly to your GitHub
					account to view your repositories, optional settings such as
					custom build scripts or environment variables can be passed
					in through easily, and using your existing custom domains is
					as simple as changing a single DNS entry.
				</p>
			</section>

			<section className="mt-4" id="build-what-you-need">
				<h3 className="title is-3 mb-2">Build only what you need</h3>
				<p>
					As nice as it is that vercel deploys every branch for you
					when you push to it, that also means that you can end up
					wasting pipeline minutes from your free-tier allowance.
					Additionally, I don't think that non-production environments
					get torn down after a certain timeframe. While that is not
					an issue billing-wise as it follows a serverless pricing
					model, I could see myself getting easily confused between
					stale deployments.
				</p>
				<p>
					There isn't quite a straightforward solution to this - I do
					hope that they will be able to add an allow-listing scheme
					per branch. There is a way to work around this, but it's not
					as straightforward as it should be.
				</p>
				<p>
					In the project settings, under "Git" you can specify an
					"Ignore Build Step" script, which can point to a script
					that's part of your repository.
				</p>
				<Image
					className="mt-3 mb-3"
					src="/images/posts/2022/vercel/ignore_build_step.jpg"
					alt="Screenshot of the 'Ignored Build Step' script option"
					width={2436}
					height={1066}
					placeholder="blur"
					blurDataURL="/images/placeholder.jpeg"
				/>
				<p>
					This script gets run every time a new deployment is queued.
					If it exits with a code 1 the build will continue, otherwise
					it will be aborted. There are a few different variables
					available at runtime which are described{" "}
					<a
						href="https://vercel.com/docs/concepts/projects/environment-variables"
						target="_blank"
						rel="noreferrer"
					>
						in the docs
					</a>
					. Using this method, you can put together your own
					allow-list in the form of rules. While this offers advanced
					functionality, it's also the sort of feature that should
					primarily be handled through a GUI. Advanced users could
					then still create their own scripts if they wish to.
				</p>
				<BashCodeBlock code={vercelScript}></BashCodeBlock>
			</section>

			<section className="mt-4" id="production">
				<h3 className="title is-3 mb-2">Moving to production</h3>
				<p>
					So this all sounds amazing, but what do you have to do to
					get this ready for production? First, I added a subdomain so
					that I can use my develop branch as a staging environment.
					This gives me a way to make sure everything is in working
					order before promoting this to production. You can easily do
					this by binding a domain to a certain branch in the GUI
					which is a very welcome feature.
				</p>
				<br />
				<p>
					I enabled analytics just to make sure that the site is
					performing as it should, added my API keys as environment
					variables, and then promoted the environment to production.
				</p>
				<br />
				<p>
					Honestly, it was as easy as that. I couldn't believe it. I'm
					still incredibly happy that I learned all the underlying
					DevOps skills. It's a good skill to have, and it will
					absolutely come in helpful when things eventually go wrong.
					And it's not like I won't be using it anymore - Vercel will
					never be able to work for my home server.
				</p>
				<br />
				<p>
					Would I recommend this to professionals? Yes, I could
					absolutely see the use case where a startup wants to reduce
					its time-to-market and offer its developers a great building
					environment.
				</p>
				<p>
					For individuals, if you have a project that needs hosting
					and don't want to worry about DevOps, billing or any
					potential burdens like that, Vercel is the way to go! I was
					very scepticable if solutions like it could be a feasible
					replacement to managing small-scale infrastructure yourself,
					but after around 2h in an afternoon I completely understand
					its value and appeal.
				</p>
				<p>
					I wouldn't say it's a universal replacement, these solutions
					do have their limitations with the technologies they support
					and odds are you would still need to set up a database
					yourself somewhere. You would also be turning down an
					opportunity to get into DevOps and learn more about
					infrastructure in a low-risk environment. But with that in
					mind, if your tech stack is supported and you don't want to
					get your hands dirty, they are a great and cheap solution!
				</p>
			</section>
		</BlogLayout>
	);
}
