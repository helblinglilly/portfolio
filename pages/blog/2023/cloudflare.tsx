/* eslint-disable @next/next/no-img-element */
import BlogLayout from "../../../Layouts/BlogLayout";
import { FindPost } from "../../../components/Blog/AllPosts";
import SocialPreview, {
	ExternalLinkPreview,
} from "../../../components/SocialPreview";
import Link from "next/link";

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
					It doesn't feel like it was long ago when I jumped on Vercel as my go-to, full-stack platform for my web apps. I even wrote a <Link href="/blog/2022/vercel">blog post</Link> about it!
				</p>
				<p>So, why am I switching platforms again? And should you too?</p>
			</section>

			<section className="mt-4" id="problems-with-serverless">
				<h3 className="title is-3 mb-2">Problems with serverless</h3>
				<p>
					Serverless is great. You can scale down to 0, and <Link href="https://www.primevideotech.com/video-streaming/scaling-up-the-prime-video-audio-video-monitoring-service-and-reducing-costs-by-90">scale up to burn through hundreds of thousands of dollars</Link> with the same paradigm!
					Realistically, you'll probably never get to the point where you have to worry about the latter. But even on the lower end, it comes with its cost - cold starts.</p>
				<p>
					I recently attended a talk and wanted to pull up some projects I've been working on. Sadly, I had to stare at a blank phone screen for what felt like an eternity, all while trying to have a conversation about performance... Yikes.
				</p>
				<p>
					The reality is that most side projects will only end up with a few users a day, and one of them will inevitably be yourself. It's hard to attract users when, with all variables accounted for, they have to wait 3-5 seconds for your app to load.
				</p>
				<p>I can already hear you saying: <b>Use the Edge!</b> - and you'd be completely right.</p>
				<p>The problem of staring at a blank screen, waiting for some static HTML to load, can be mostly mitigated by using correct rendering patterns. Put your HTML files and as much of the initial network requests on the edge. Often, it's better for a user to see a partially rendered page with a few loading states for your "actual" backend calls than trying to build the entire HTML file on the server and just return that to the user.</p>
				<br />
				<p>So why are we not doing this all the time? In my experience, it seems to be because we're trying to blur the lines in favour of a better frontend developer experience.</p>
				<p>A new React developer will get told that they have to perform some actions in a <code>getServerSideProps</code> call for "security". And why would you break an SPA/client-side nav'd flow for this? While legacy NextJS codebases are trying to move network calls closer to the client, those on the bleeding-edge are getting their hands on <Link href="https://blog.logrocket.com/react-server-components-comprehensive-guide/">React Server Components</Link> and <Link href="https://nextjs.org/blog/next-14#forms-and-mutations">Next 14</Link> with server actions. But do they understand what they're really building?</p>
				<p>To be clear, I'm not blaming the technology. But our (my) ignorant approach in how we integrate them.</p>
				<p>Serverless is still great, but we should perhaps use it with more intent rather than defaulting to it.</p>
			</section>

			<section className="mt-4 content" id="vercel-is-great">
				<h3 className="title is-3 mb-2">What I value about Vercel</h3>
				<p>
					Like any modern meta-framework (where did this term even come from), Vercel is a one-stop-shop for all your web needs. They even started offering storage solutions at ridiculous mark ups for said privilege!
				</p>
				<p>
					While I've never used it for work/business, it is perfect for side projects. Need your code to be on a secured domain when you hit "merge" - or hell, even just "push"? Done. Got tests? It'll even run those for you!
					SSL certificates? Who even has the time.
				</p>
				<p>
					Its integrations with other technologies like <Link href="https://axiom.co">Axiom</Link> and <Link href="https://sentry.io">Sentry</Link> also make it easy to manage your logs and gain observability. It really does take care of everything, and allows you to just focus on creating a product.
				</p>
			</section>

			<section className="mt-4 content" id="vercel-is-not-so-great">
				<h3 className="title is-3 mb-2">Why I Sort of Dislike Vercel</h3>
				<p>
					Vercel is, and will always be, a man in the middle. They make use of economies of scale and sublet AWS, Cloudflare, and others but make those easy to use. That's the privilege that you pay for.
				</p>
				<p>
					Once you reach beyond the free tier or dig into their T&Cs you'll want to reconsider your options - are you still getting enough value for your money? Could you optimise your code, your strategy to make the free tier last longer, and is that even worth the effort? You'll likely want to keep using Vercel; you know it, you trust it, and once you pay $20/month you can do whatever your heart desires!
				</p>
				<p>Even though you're getting the best of a lot of different vendors, you're still effectively locking yourself into one vendor.</p>
				<p>
					Also, $20/month is a lot. You can likely find more cost-effective solutions elsewhere, learn more about what Vercel abstracts away from you, and learn to appreciate those services. There's never any harm in evaluating your options.
				</p>
			</section>

			<section className="mt-4 content" id="why-bother">
				<h3 className="title is-3 mb-2">
					So Why Bother with Cloudflare?
				</h3>
				<p>Much like AWS, it's just one of the platforms that Vercel re sells you. However, as an individual, it means that their free tier will go much further. It also has a Terraform provider - gone are the days of having to manually configure <i>infrastructure</i> through a UI.</p>

				<p>However, I am now making a conscious decision about what I'm deploying to the edge, which is a lot different from just ticking a box in a <code>next.config.js</code> file to say "now use the edge".</p>

				<p>The free tier still has its limitations, they are just different. Vercel only provides you web vitals for one project, but Cloudflare does this for everything. Vercel will issue SSL certificates for any number of subdomains for free, Cloudflare only does this for one level: <code>dev.pokemon.helbling.uk</code> would no longer work.</p>

				<p>Importantly, it is not a replacement for a full node environment, as some libraries won't be able to run on the edge. Of course, there are also other valid use cases where traditional servers (serverless or not) will still be the right choice. It's not a 1:1 replacement, but generally speaking, if you can deploy to the edge, you probably should.</p>
			</section>
			<section className="mt-4" id="conclusion">
				<h3 className="title is-3 mb-2">
					Conclusion
				</h3>
				<p>
					As I've already started tooling around with AWS a bit by deploying my own <Link href="https://pocketbase.io">Pocketbase</Link> instance to EC2, I appreciate that I can deploy my projects to Cloudflare through Terraform and keep all my infrastructure in code.
				</p>
				<p>The end product, whether managed through Vercel or Cloudflare, will be practically identical. However, by exploring Cloudflare, I encouraged myself to think more about where my code is going to run - and there's no arguing that that's a good thing.</p>
				<p>It's also another tool that I'm getting more familiar with, and being familiar with more tools will help me make better, more informed decisions when I'm building software.</p>
			</section>
		</BlogLayout>
	);
}
