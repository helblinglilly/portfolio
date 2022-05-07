import BlogLayout from "../../../components/Layout/BlogPost";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import SocialPreview from "../../../components/SocialPreview/SocialPreview";
export default function Post() {
	const toc = [];
	toc.push({ title: "Travel", id: "travel" });
	toc.push({ title: "Expo", id: "expo" });
	toc.push({ title: "Talks", id: "talks-attended" });
	toc.push({ title: "Lessons for next time", id: "next-time" });

	return (
		<BlogLayout name={"aws-summit-2022"} toc={toc}>
			<SocialPreview
				title="AWS Summit 2022 - Blog Post"
				description="My first conference that I was able to attend. There were talks to attend, companies to be learnt about, merchandise to be collected and new connections to be made. In this post I summarise my experience, try to capture everything I've learnt, and what I would do differently next time"
				previewImage="https://helbling.uk/images/posts/2022/aws-summit-2022/cover.jpeg"
			></SocialPreview>

			<section className="mt-4" id="overview">
				<h3 className="title is-3 mb-2">Overview</h3>
				<p>
					This was the first time I managed to go to a convention in my
					professional career. In this post I'm reflecting on my experience,
					what I most appreciated and what I would do differently next time.
					This being a massive event, there was too much to cover in one day, or
					write about. Use the navigation to the side/above to skip to the
					relevant section.
				</p>
			</section>

			<section className="mt-4" id="expo">
				<h3 className="title is-3 mb-2">Expo</h3>
				<p>
					I was relatively early to arrive, so the images shown below are
					probably as empty as it was for the entire day. On the bottom layer,
					there were 2 floors, and most of the interesting stands to me were
					below where I stood along one big wall.
				</p>
				<div className="columns mt-2">
					<div className="column is-two-thirds">
						<Image
							src="/images/posts/2022/aws-summit-2022/expo-floor.jpeg"
							width="639"
							height="359"
							alt="Expo Floor"
							placeholder={"blur"}
							blurDataURL={"/../../images/icon-transparent.png"}
						/>
					</div>
					<div className="column">
						<Image
							src="/images/posts/2022/aws-summit-2022/entrance.jpeg"
							width="252"
							height="336"
							alt="Excel Entrance"
							placeholder={"blur"}
							blurDataURL={"/../../images/icon-transparent.png"}
						/>
					</div>
				</div>
				<p>
					I was pleasantly surprised when I saw they had cloakrooms available.
					As I was staying in a hotel the night before so the backpack I was
					carrying with me was quite heavy.
				</p>
				<p>
					With the relatively tight schedule between the different talks,
					getting around the venue and accounting for a lunch break I found
					myself running out of time before I could pay a proper visit to all
					the stands. My main intention this year was to just find out what
					there is to see, how these things run and try to learn as much as
					possible. If I wanted to visit particular stalls I would make sure to
					visit them first thing in the morning, but this year I just wanted to
					see what companies there are even about. For example, I didn't even
					consider that there is a whole market for cross-cloud networking
					providers or logging/monitoring solutions (à la Splunk, Datadog or
					Instana). So I certainly achieved in resolving as many "didn't know
					what I didn't know about" and I'm now more convinced than ever that I
					know absolutely nothing.
				</p>
				<p>
					The areas that I found the most interesting, even though I don't have
					a use for them yet, were the "Ask an architect" sections where, if you
					had any questions on how to implement something in AWS you could talk
					directly with staff, and the startup quarter which is effectively the
					same but more business orientated.
				</p>
			</section>

			<section className="mt-4 content" id="talks-attended">
				<h3 className="title is-3 mb-2">Talks Attended</h3>
				<p>
					Most talks, even if they were rated for a more advanced level,
					basically consisted of:
				</p>
				<ol>
					<li>Intro</li>
					<li>How to implement this in AWS</li>
					<li>Talk from a successful customer or a demonstration</li>
					<li>Conclusion</li>
				</ol>
				<p>
					which is incredibly approachable. I wouldn't expect a talk that would
					be almost elitist in knowledge. AWS is very aware that its product
					offering is massive, and most talks were focused on <b>how</b> to get
					to the cloud, rather than <i>why</i>. By design, this makes most talks
					approachable, and I would argue that unless you have plenty of
					experience with a certain technology, no matter your expertise, you
					will learn more about the cloud and have the inspiration to take that
					new knowledge and start working on a demo project.
				</p>
				<h5 className="title is-5 mb-2">
					Reduce your operational burden to deploy containers
				</h5>
				<p>
					A talk about monolithic architecture, how to break it into
					micro-services, and how to manage your containers. They even gave a
					demonstration of using{" "}
					<Link href="https://aws.amazon.com/eks/">
						<a>Elastic Kubernetes Service (EKS)</a>
					</Link>
					. I already have experience with using a Kubernetes cluster, so while
					I was already familiar with most of the content, I did get to have
					that validation that I was using it correctly and got a run-down that
					was much more approachable than any training materials I covered on{" "}
					<Link href="https://www.pluralsight.com/">
						<a>Pluralsight</a>
					</Link>{" "}
					and{" "}
					<Link href="https://www.aws.training/">
						<a>AWS' training</a>
					</Link>{" "}
					resources.
				</p>
				<h5 className="title is-5 mb-2">
					Migrate your database to AWS with ease
				</h5>
				<p>
					This talk was effectively my vindication of a conversation I had with
					my manager. In my research, I stumbled across{" "}
					<Link href="https://aws.amazon.com/dms/">
						<a>AWS Data Migration Service (DMS)</a>
					</Link>{" "}
					which fits the bill perfectly for a task that we had to do. Because we
					decided against using DMS, we had to manually convert our schema,
					build a data import/export tool ourselves and had to manage all the
					inconsistencies ourselves.
					<br />
					EDF shared their success story of migrating a 15TB database in 28h
					(with practice runs of course). So given that the one in question for
					us was a fraction of this, I certainly feel like my gut instinct was
					right but got restricted by the scope of the project, my own
					experience and confidence.
				</p>
				<h5 className="title is-5 mb-2">
					Fullstack web and mobile development with a cloud-based backend
				</h5>
				<p>
					This talk has blown me away, but it was also the biggest
					disappointment. We got introduced to{" "}
					<Link href="https://aws.amazon.com/amplify/">
						<a>AWS Amplify</a>
					</Link>
					. While not of the most use to existing companies, this would be
					fantastic for a startup.
					<br />
					Effectively, you can take an existing mockup from{" "}
					<Link href="https://www.figma.com/">
						<a>Figma</a>
					</Link>
					, and Amplify will turn it into a ReactJS application for you. As a
					developer, you only need to be concerned with the front-end. Amplify
					will build a whole pipeline with different environments for you so you
					can develop, perform QA and eventually deploy to production without
					ever having to go near things like Jenkins or CodePipeline. You can
					use an SDK to abstract the entire database away from you, so you can
					just directly store your JS objects and retrieve them from a
					datastore. Under the hood, Amplify will set up a{" "}
					<Link href="https://aws.amazon.com/dynamodb/">
						<a>DynamoDB</a>
					</Link>{" "}
					database for you. So while it is important to know what Amplify will
					do under the hood, it can still reduce the Time to Market
					significantly as a lot less setup and therefore maintenance is
					required.
					<br />
					The only real disappointment was when they brought an existing client
					out on the stage. They built their business using Amplify and were
					already expanding internationally. Sadly, they didn't even think to
					localise their marketing video. Showing a video at the end of your
					presentation is rarely a good idea, let alone when it's a generic
					video with subtitles - I've not seen this many people walk out of a
					talk all day.
				</p>
			</section>

			<section className="mt-4" id="travel">
				<h3 className="title is-3 mb-2">Travel</h3>
				<p>
					A first for me, my employer was covering all travel, and accommodation
					expenses. I was allowed to travel to London the afternoon before so
					that I could be well-rested for the big day.
				</p>
				<div className="columns mt-1">
					<div className="column">
						<Image
							src="/images/posts/2022/aws-summit-2022/travel.jpeg"
							width="378"
							height="504"
							alt="Canning Town DLR station"
							placeholder={"blur"}
							blurDataURL={"/../../images/icon-transparent.png"}
						/>{" "}
					</div>
					<div className="column">
						<p>
							The fact that I got paid did make the overcrowding a lot more
							bearable. Sneaking just around peak travelling times was the
							best decision I made. The LNER to London was relatively quiet,
							and after eating dinner in Islington I managed to get to the
							hotel without much trouble.
							<br />
							However, after the lovely receptionist of the hotel kindly
							placed me in the "quiet" area of the hotel - with a Royal Mail
							distribution centre just outside my window... After a short 4
							hours of sleep and a Mcdonald's breakfast, I got to join
							thousands of commuters on their morning routine towards
							central London. While the Stratford tube station was
							relatively quiet when I hit Canning Town for the DLR to the
							Excel I wished I would have walked or cycled. The station was
							so overcrowded I had to miss 3 trains before I managed to get
							on board. As I later realised other expos were happening on
							the same day at the other end of the Excel, adding to the
							overcrowding even more (see picture).
						</p>
					</div>
				</div>
				<p>
					My advice for anyone having to travel to the Excel in the future would
					be to either stay at a hotel close enough in walking/cycling distance,
					or one that is further down the tube line so that you would be
					travelling towards central London.
				</p>
			</section>

			<section className="mt-4" id="next-time">
				<h3 className="title is-3 mb-2">Lessons learnt</h3>
				<p>
					For my first time at a convention, I feel like I have done as good as
					I could have expected. Bringing a separate bag with me, anticipating
					where the busy areas will be as more people start coming in, and
					having a basic introduction ready before talking to the first person
					will be my main considerations.
					<br />A bit of advice to anybody, do bring water with you. There might
					be all the options around you, but when you're in the middle of a
					crowd of people and your mouth is starting to dry up, having the
					option right there is priceless.
				</p>
				<p>
					I went with a friend from University, and while I didn't manage to do
					a lot of networking at the main event this did give me a lot of
					security and if I went by myself I feel like I would have had a lot
					less confidence and would have probably burnt myself out. I will be
					sure to visit conventions with at least one other person in the
					future.
				</p>
			</section>
		</BlogLayout>
	);
}
