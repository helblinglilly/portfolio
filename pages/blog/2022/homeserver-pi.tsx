import BlogLayout from "../../../components/Layout/BlogPost";
import SocialPreview from "../../../components/SocialPreview/SocialPreview";
import Preview from "../../../components/LinkPreview";
import Image from "next/image";
import React from "react";
import { BlogMetaInfo } from "../../../components/Blog/Types";

export const HomeserverPiMeta: BlogMetaInfo = {
	link: "/blog/2022/homeserver-pi",
	title: "My Pi home server",
	summary: `A place to write custom apps on the network, block ads, run sponsorblock for my Chromecast devices, store a plex library and use it as local network storage. Find out how I've harnessed the power of Docker and a Raspberry Pi 3B+ to enjoy all the flexibility in a tiny, power-efficient, quiet package.`,
	created: JSON.parse(JSON.stringify(new Date("2022-07-30"))),
	thumbnail: "/images/posts/2022/homeserver-pi/thumbnail.png",
	authorName: "Joel Helbling",
	authorLink: "https://helbling.uk",
	tags: [
		{ name: "Raspberry Pi", color: "pi" },
		{ name: "Docker", color: "docker" },
	],
	tableOfContents: [
		{ title: "Motivation", id: "motivation" },
		{ title: "Setup", id: "setup" },
		{ title: "Applications", id: "applications" },
		{ title: "Limitations", id: "limitations" },
	],
	cover: null,
};

export default function HomeserverPi({ ...props }) {
	return (
		<BlogLayout
			title={props.meta.title}
			toc={props.meta.tableOfContents}
			date={props.meta.created}
			thumbnail={props.meta.thumbnail}
		>
			<SocialPreview
				title="Pi Homeserver - Blog"
				description={props.meta.summary}
			/>

			<section className="mt-4" id="motivation">
				<h3 className="title is-3 mb-2">Motivation</h3>
				<p>
					More and more people in my surrounding have been getting
					into the home server community. From hosting Plex to running
					Minecraft servers out of their bedroom. While I played
					around with some low-level electronics in the past, I was
					eager to to apply some knowledge I picked up at work.
					<br />
					Between my partner moving from iOS to Android and thereby
					losing Airdrop and Bo Burnham temporarily removing some of
					his music from Spotify I already had two good reasons to
					start thinking about hosting a NAS.
					<br />
					Not long after I stumbled across{" "}
					<a href="https://pi-hole.net/">Pihole</a> and{" "}
					<a href="https://github.com/erdnaxeli/castblock">
						Castblock
					</a>{" "}
					and the deal was sealed at that point. I got out my
					Raspberry Pi, an Ethernet cable and an old SSD and I got to
					work.
				</p>
			</section>

			<section className="mt-4" id="setup">
				<h3 className="title is-3 mb-3">Setup</h3>

				<div className="columns">
					<div className="column">
						<p>
							If you want to copy this setup, or simply look
							further into the setup take a look at the Github
							Repo please by all means be my guest! All you need
							to do is install Docker and Docker Compose on the
							target machine, set up some secrets in the Github
							repository and the docker-compose file and you
							should be good to go!
						</p>
						<p>
							Github secrets are great, because you wouldn't want
							to include API keys or database credentials in the
							repository, or storing them permanently on the
							deployment machine. Including them as part of the
							repository stores them safely and will include them
							in the Docker image at deployment - which means you
							will be able to debug related issues locally in
							exactly the same way.
						</p>
					</div>
					<div className="column is-half">
						<a
							href={props.preview.url}
							target="_blank"
							rel="noreferrer"
						>
							<div className="card m-5">
								<div className="card-header">
									<div className="card-header-title">
										<p>helblingjoel/piserver</p>
									</div>
								</div>
								<div className="card-image">
									<figure className="image is-2by1">
										<img
											src={props.preview.image}
											alt="Placeholder image"
											width={1200}
											height={600}
										/>
									</figure>
								</div>
								<div className="card-content">
									<p>{props.preview.description}</p>
								</div>
							</div>
						</a>
					</div>
				</div>

				<h4 className="title is-4 mb-2 mt-0">Docker compose</h4>
				<p>
					One of the main reasons why I deploy applications as Docker
					containers is because I can use a single file to deploy
					every application. When I inevitably break my setup by
					transferring to a different boot drive or just generally
					messing about with it, I will have a simple recovery
					process.
					<br />
					It also means there is a lot less margin for error as I'm no
					longer manually setting up everything. Docker compose is a
					way of writing Infrastructure as Code, and this ability to
					reproduce the exact same setup 1:1 on any machine is a
					bliss. Especially as it means you can track this setup in
					git.
				</p>
			</section>

			<section className="mt-4" id="applications">
				<h3 className="title is-3 mb-2">Applications</h3>
				So what is in that Docker compose file?
				<br />
				<h4 className="title is-4 mb-2 mt-3">Pihole</h4>
				<p>
					An absolute must-have.{" "}
					<a
						href="https://pi-hole.net/"
						target="_blank"
						rel="noreferrer"
					>
						Pihole
					</a>{" "}
					is an easy-to-use method of setting up ad-blocking on your
					network. Effectively it acts as a DNS server, but it has a
					blocklist of known ad providers. So when any device that's
					connected to it makes a DNS request to an ad-server, Pihole
					will block that request making the client think that the
					service is unavailable. Oftentimes, this will simply result
					in no ads being shown. You know those games that get
					advertised on social media that serve you an ad every 30
					seconds? Well, you can actually play those now without
					having to turn off your WiFi/Data each time. It won't work
					for everything though, Youtube for example serves their ads
					from the same service as the actual videos. But it works
					around 80% of the time.
					<br />
					Ideally, you would set your router to use Pihole as a DNS
					server. If you have a router that was not provided by your
					ISP you should be able to do this - but in the UK at least
					DNS is typically how ISPs block certain websites (which they
					have to by law) so they don't allow you to do this. But for
					most common devices like phones, tablets and laptops it is
					relatively straightforward to change your DNS server.
					<br />
					The Pi handles this great. I have mine connected to my
					router via Ethernet to reduce additional latency. New DNS
					requests sometimes have a notable stutter, I would estimate
					around 200ms more than usual. But successful responses are
					usually cached on the client anyway, so it isn't that
					noticeable after the first week of use.
				</p>
				<div className="columns mt-3">
					<div className="column">
						<Image
							src="/images/posts/2022/homeserver-pi/pihole.jpeg"
							width="1680"
							height="1080"
							alt="Pihole screenshot"
							placeholder={"blur"}
							blurDataURL={"/../../images/icon-transparent.png"}
						/>
					</div>
					<div className="column">
						<Image
							src="/images/posts/2022/homeserver-pi/pihole-compose.jpeg"
							width="752"
							height="768"
							alt="Pihole Docker-compose screenshot"
							placeholder={"blur"}
							blurDataURL={"/../../images/icon-transparent.png"}
						/>
					</div>
				</div>
				<h4 className="title is-4 mb-2 mt-3">Plex</h4>
				<p>
					<a
						href="https://www.plex.tv/"
						target="_blank"
						rel="noreferrer"
					>
						Plex
					</a>{" "}
					allows you to store media on your NAS and watch it anywhere
					on your network, including Chromecasts. Personally, I use it
					more to keep copies of my favourite Youtube videos in case
					they get taken down in the future. But it's also amazing for
					storing a personal movie collection as it finds metadata,
					cover art etc for you and displays it in a nice app or
					web-interface for you.
					<br />
					Sadly, with all those other bits running, the Pi does get a
					bit overwhelmed with certain content. Compression is
					strongly favoured, and I keep my files at 720p. I'm hoping
					that when Pi 4s are available again, I'll be able to upgrade
					and increase this to 1080p.
				</p>
				<Image
					src="/images/posts/2022/homeserver-pi/plex-compose.jpeg"
					width="1474"
					height="582"
					alt="Plex Docker-compose screenshot"
					placeholder={"blur"}
					blurDataURL={"/../../images/icon-transparent.png"}
					className="mt-3"
				/>
				<h4 className="title is-4 mb-2 mt-3">Filebrowser</h4>
				<p>
					There are certainly better NAS solutions out there. But{" "}
					<a href="https://filebrowser.org/">Filebrowser</a> is easy
					to set up and has a simple interface. Personally, I only
					really use it to store things like ROMs, user manuals etc -
					things that I find myself downloading about once every 6
					months. It's more for my partner as he's recently moved from
					iOS to Android and needs to move files between his devices
					quite frequently and he's feeling the absence of Airdrop.
					This is a simple solution that doesn't compress anything,
					doesn't send anything to the cloud, and doesn't try to push
					another monthly subscription onto you. This means that we
					are in charge of backups, maintenance and increasing storage
					capacity, but it's exactly the straightforward solution we
					were looking for.
				</p>
				<div className="columns mt-3">
					<div className="column">
						<Image
							src="/images/posts/2022/homeserver-pi/fileserver.jpeg"
							width="1680"
							height="1146"
							alt="Fileserver screenshot"
							placeholder={"blur"}
							blurDataURL={"/../../images/icon-transparent.png"}
						/>
					</div>
					<div className="column">
						<Image
							src="/images/posts/2022/homeserver-pi/fileserver-compose.jpeg"
							width="848"
							height="436"
							alt="Fileserver Docker-compose screenshot"
							placeholder={"blur"}
							blurDataURL={"/../../images/icon-transparent.png"}
						/>
					</div>
				</div>
				<h4 className="title is-4 mb-2 mt-3">Pi VPN</h4>
				<p>
					Of course, I can have all the apps running on my home server
					within my network, but as soon as I leave the house I lose
					access to all of it. So hosting a VPN is the obvious
					solution to this problem - especially for Pihole as having a
					proper adblocker while I'm out and about is fantastic.
					<br />A lot of performance is left on the table though.
					Connections are slow, and I would not want to watch a
					Youtube video through this connection.
					<br />
					<a href="https://www.pivpn.io/">PiVPN</a> is incredibly easy
					to set up. I had a few attempts at setting up OpenVPN but to
					no avail. You set it running as a Docker container and don't
					really need to touch it again other than setting up your
					connection profiles. If you know your stuf with VPNs then
					this is probably not for you, but it's simple enough for me
					and gets the basic job done.
				</p>
				<h4 className="title is-4 mb-2 mt-3">Castblock</h4>
				<div className="columns">
					<div className="column">
						<p>
							If you're familiar with what SponsorBlock is in{" "}
							<a href="https://youtubevanced.com/">
								Youtube Vanced
							</a>{" "}
							(RIP) then you get the general idea of{" "}
							<a href="https://github.com/erdnaxeli/castblock">
								Castblock
							</a>
							. It effectively scans your 'cast-able' devices on
							the network and implements sponsorblock. The
							community reports where the sponsor reads are in a
							video and it will skip over the video for you.{" "}
						</p>
					</div>
					<div className="column">
						<Image
							src="/images/posts/2022/homeserver-pi/castblock.jpeg"
							width="582"
							height="266"
							alt="Castblock Docker-compose screenshot"
							placeholder={"blur"}
							blurDataURL={"/../../images/icon-transparent.png"}
						/>
					</div>
				</div>
				<p>
					What it can't do unfortunately is block the actual ads that
					Youtube places in front of a video. Even if there was a way
					that the developers could, I suspect that Google would be
					pretty quick in sending a Cease&Desist. But it does have the
					ability to <i>mute</i> ads that are playing. The volume
					adjustment is not always quite perfect, but the volume is
					always back on for when the video starts/resumes so I can't
					see any harm in having it enabled.
				</p>
				<h4 className="title is-4 mb-2 mt-3">Postgres</h4>
				<p>
					Having a database always accessible in your network is very
					handy. When prototyping for a new project I can rely on
					having an external database available in a safe environment,
					meaning I don't have to worry about security just yet. It
					also provides the flexibility of not having to install a
					local Postgres instance on every machine I want to develop
					on. Whether that's my personal laptop, my work laptop after
					work or my desktop PC on the weekends - I can just clone the
					git repo, install dependencies and set off exactly where I
					left off.
					<br />
					There's no specific reason for Postgres out of all the SQL
					flavours. It's just a kind that I have previous experience
					in and have come to like. And the setup to run it inside of
					a Docker container is much more simplified than installing
					it on bare metal while retaining the ability to take backups
					of the data folder.
					<br />I don't use it often, but I have never felt like it
					was slowing me down, so I would say that the Pi is a good
					machine to run a basic database on.
				</p>
				<h4 className="title is-4 mb-2 mt-3">Dashboard</h4>
				<p>
					Of course, it's nice to have all those apps installed and
					available, but as my Human Computer Interactions professor
					said "if you don't see it, it doesn't exist". Especially if
					I want my partner to make good use of this and get excited
					about it too, I need to create a way for them to access it
					all from his phone etc.
					<br />
					So rather than using some pre-existing solution that checks
					the status of services unreliably and includes a fancy
					background I thought I may as well create this myself. A
					static HTML page would have been enough as effectively, all
					that it needs to do, is redirect to certain ports. But
					instead, I decided to build an Express app so that I could
					write applications for it myself.
					<br />
					The first application I added myself is a timesheet app.
					When I was on my first graduate placement as a developer I
					realised how bad my time-keeping was and I was aware that I
					was working overtime without counting it properly. So
					instead I decided to build this in my free time so that I
					can hold myself accountable and not work for free anymore.
					<br />
					Then later in the year when Pokemon Brilliant Diamond was
					released, I started to get into Pokemon again, and online
					resources around it have exploded since the Black/White 2
					days. Trying to work out something as simple as "at what
					level does this Pokemon evolve" takes a few minutes of
					switching between sites, scrolling past trivia, finding the
					right generation entry etc. This process has become
					incredibly frustrating, so I set out to find an API and
					build my own front-end for it. If you're looking to build
					something similar I strongly recommend{" "}
					<a href="https://pokeapi.co/">Poke API</a>. So basic
					information like item lookups, evolutions, move sets etc are
					now available at my fingertips. Having this flexibility also
					allowed me to display content in German and English. So it's
					equally as useful when I replay childhood games in German on
					my DS, as it is when I play new games in English on the
					Switch.
				</p>
				<div className="columns mt-3">
					<div className="column">
						<Image
							src="/images/posts/2022/homeserver-pi/dashboard.jpeg"
							width="1680"
							height="1340"
							alt="Dashboard screenshot"
							placeholder={"blur"}
							blurDataURL={"/../../images/icon-transparent.png"}
						/>
					</div>
					<div className="column">
						<Image
							src="/images/posts/2022/homeserver-pi/dashboard-compose.jpeg"
							width="744"
							height="334"
							alt="Dashboard Docker-compose screenshot"
							placeholder={"blur"}
							blurDataURL={"/../../images/icon-transparent.png"}
						/>
					</div>
				</div>
			</section>

			<section className="mt-4" id="limitations">
				<h3 className="title is-3 mb-2">Limitations</h3>
				<p>
					So I am running a considerable amount of applications on
					this poor Raspberry Pi 3B+. I am currently looking at
					getting <a href="https://sonarr.tv/">Sonarr</a> set up for
					Plex, but I just don't have the performance spare for it,
					and it somehow refuses to work on my 0w2. So my ability to
					expand is starting to fade, which is why I'm desperately
					looking at getting a Pi 4 now. Getting a second, powerful Pi
					would then enable me to start tinkering with distributed
					computing at a lower scale.
				</p>
				<p>
					Currently, my Pi just sits behind my ISP's router on a
					little table, which means that physical space is limited. I
					wouldn't be comfortable deploying a 3.5" HDD in this current
					location. In a dream scenario, this would all just be an old
					desktop sitting on the floor, but this comes with its noise
					and power efficiency implications. But honestly, this is a
					silent, low-power solution that can sit in my living room
					without disturbing us or driving up our energy bill.
					Hopefully ARM will continue to grow more into mainstream
					computing. Modern tech, especially GPUs, keep getting more
					and more powerful but their power consumption is equally
					sky-rocketing. Situations like this call for power-efficient
					systems outside of laptops.
				</p>
			</section>
		</BlogLayout>
	);
}

export async function getStaticProps() {
	const preview = await Preview("https://github.com/helblingjoel/piserver");

	return {
		props: {
			preview: {
				title: preview.title,
				description: preview.description,
				image: preview.image,
				url: preview.url,
			},
			meta: {
				...HomeserverPiMeta,
			},
		},
	};
}
