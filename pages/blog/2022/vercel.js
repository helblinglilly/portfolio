import BlogLayout from "../../../components/Layout/BlogPost";
import SocialPreview from "../../../components/SocialPreview/SocialPreview";
import BashCodeBlock from "../../../components/CodeBlock/bash";
import Image from "next/image";
import Link from "next/link";

export default function Post({ ...props }) {
	const toc = [];
	toc.push({ title: "Background", id: "background" });
	toc.push({ title: "Setup", id: "setup" });
	toc.push({ title: "Build what you need", id: "build-what-you-need" });
	toc.push({ title: "Moving to production", id: "production" });

	const vercelScript = {};
	vercelScript.filename = "vercel.sh";
	vercelScript.code = `#!/bin/bash
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
fi`;

	return (
		<BlogLayout name={"vercel"} toc={toc}>
			<SocialPreview
				title="Move to Vercel - Blog"
				description="My shockingly easy experience with the move to Vercel"
			></SocialPreview>

			<section className="mt-4" id="intro">
				<p>
					So Heroku has recently{" "}
					<a
						href="https://twitter.com/heroku/status/1562817050565054469?s=20&t=SBRFdmRRi4_JFPvtUIH_wg"
						target="_blank"
						referrer="none"
					>
						removed their free tier plan
					</a>
					and while I wasn't a customer with them before, it seemed
					like lots of people in my Twitter feed were. More of more of
					those, I almost want to call them "Hosting as a service"
					started to come to my attention. As this website is built
					with NextJS I naturally had a look at{" "}
					<a
						href="https://vercel.com/"
						target="_blank"
						referrer="none"
					>
						Vercel
					</a>{" "}
					as they are the company behind the framework.
				</p>
			</section>

			<section className="mt-4" id="setup">
				<h3 className="title is-3 mb-2">Setup</h3>
				<p>
					I was mentally already preparing for a long afternoon that
					would probably have nothing to show. Afterall, I did just
					spend the last 6 months or so really getting familiar with
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
					would even be worth it (as we manage our infrastructure at
					work ourselves) and less than 5 minutes later I had my
					website deployed!
				</p>
				<p>
					I was genuinely shocked. Other than tweets and link previous
					not working as they require API keys that I hadn't provided
					yet, everything was in working order. It even set up SSL
					certificates for me! I created a new branch on git, pushed,
					and before I even had my attention back on the deployment
					dashboard there was already a build happening. This was
					quicker than any github self-hosted action runner would do,
					or a Jenkins agent that's constantly polling a git repo.
				</p>
				<p>
					Honestly speaking, even though I have less control over
					what's happening under the hood, particularly with how
					middleware functions turn into serverless functions, it is
					so much better of an experience. No server needs setting up,
					no docker having to be installed, no 20 minute docker image
					build times, or handling of SSL certificates. It links in
					directly to your github account to view your repositories,
					optional settings such as custom build scripts or
					environment variables can be passed in through easily, and
					using your existing custom domains is as simple as changing
					a single DNS entry.
				</p>
			</section>

			<section className="mt-4" id="build-what-you-need">
				<h3 className="title is-3 mb-2">Build only what you need</h3>
				<p>
					As nice as it is that vercel deploys every branch for you
					when you push to it, that also means that you can end up
					wasting the pipeline minutes. Additionally, I don't think
					that non-production environments get torn down after a
					certain timeframe. While that is not an issue billing wise
					as it follows a serverless pricing model, I could see myself
					getting easily confused between stale deployments.
				</p>
				<p>
					There isn't quite a straight-forward solution to this - I
					really hope that they will be able to add an allow-listing
					scheme per branch, there is a solution in place.
				</p>
				<p>
					In the project settings, under "Git" you can specify an
					"Ignore Build Step" script, which can point to a script
					that's part of your repository.
				</p>
				<Image
					className="mt-2"
					src="/images/posts/2022/vercel/ignore_build_step.jpg"
					alt="Screenshot of the 'Ignored Build Step' script option"
					width={2436}
					height={1066}
				/>
				<p>
					When the script is run, there are a bunch of variables
					available for use which can be found{" "}
					<a
						href="https://vercel.com/docs/concepts/projects/environment-variables"
						target="_blank"
						rel="noreferrer"
					>
						in the docs
					</a>
					. This allows you to effectively build your own allow-list
					as a bash script.
				</p>
				<BashCodeBlock code={vercelScript}></BashCodeBlock>

				<p>
					All that's left now is to have the develop branch on its
					own, easily accessible domain. After you have connected your
					domain by either buying it from them directly,
				</p>
			</section>

			<section className="mt-4" id="production">
				<h3 className="title is-3 mb-2">Moving to production</h3>
				<p>
					So this all sounds amazing, but what do you actually have to
					do to get this setup ready for production? First, I added a
					subdomain so that I can use my develop branch as a staging
					environment. Basically, a way to make sure everything is in
					working order before promoting this to production.
				</p>
				<p>
					I enabled analytics just to make sure that the site is
					performing as it should. Added my API keys as environment
					variables so that blog posts wouldn't look weird, and then
					promoted the environment to production.
				</p>
				<br />
				<p>
					Honestly, it was as easy as that. I could not believe it.
					I'm still incredibly happy that I learnt all the underlying
					devops stuff. It's a good skill to have, and it will
					absolutely be helpful in case that anything else goes wrong.
					And it's not like I won't be using it anymore - vercel still
					won't work for my home server.
				</p>
				<p>
					Would I recommend this for companies? To be honest, maybe
					for a startup but I am in no position to make that
					judgement. <br />
					What I am certain about is that if you have a project that
					needs hosting, and don't won't to worry about DevOps,
					billing or anything alike, Vercel (or similar solutions) is
					absolutely the way to go! I was very scepticable about these
					solutions, but this journey has proofen to me that they
					really can do what they say on the tin!
				</p>
			</section>
		</BlogLayout>
	);
}
