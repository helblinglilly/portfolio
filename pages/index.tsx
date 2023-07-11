import React from "react";
import Layout from "../Layouts/Layout";
import AllPosts from "../components/Blog/AllPosts";
import PostPreviews, { MetaInfo } from "../components/Blog/PostPreviews";
import SocialPreview from "../components/App/SocialPreview";
import Image from "next/image";
import GithubStats from "../components/App/GithubStats";

export default function Home() {
	const description =
		"Joel Helbling, Graduate Developer at NHS Digital based in the UK. Computer Science graduate from Uni of Kent";
	const ageDiff = Date.now() - new Date("11 April 2001").valueOf();
	const ageDate = new Date(ageDiff);
	const age = Math.abs(ageDate.getUTCFullYear() - 1970);

	const metaInfo: MetaInfo = {
		title: "Joel Helbling",
		authorName: "Joel Helbling",
		socialSummary: description,
		cover: null,
	};

	return (
		<Layout>
			<SocialPreview metaInfo={metaInfo} />
			<div className="column is-one-quarter" id="main-content">
				<div className="sidebar" data-cy="sidebar">
					<figure className="image has-text-centered">
						<Image
							src="/images/professional.jpg"
							alt="Profile picture"
							width="250"
							height="250"
							id="profile"
							placeholder="blur"
							blurDataURL="/images/placeholder.jpeg"
							priority={true}
						/>
					</figure>
					<div className="pt-4">
						<p className="title mb-0">About me</p>
						<p className="mb-3">
							Pronouns: <i>they/them</i>
						</p>
						<p>
							A {age} year old Swiss Software Engineer based in
							Leeds, United Kingdom. Currently working with
							NextJS, experienced with C# and AWS.
						</p>
						<div
							id="socialLinks"
							className="pt-3 pb-3"
							data-cy="socialLinks"
						>
							<p className="title is-4 mb-2">Socials</p>
							<div className="socialContainer" id="git">
								<Image
									src="/icons/git.svg"
									className="icon"
									alt="Github Icon"
									width={20}
									height={20}
								/>

								<a
									className="ml-1"
									href="https://github.com/helblingjoel"
									target="_blank"
									rel="noreferrer"
									data-cy="socialLink"
								>
									github.com/helblingjoel
								</a>
							</div>
							<div className="socialContainer" id="twitter">
								<Image
									src="/icons/twitter.svg"
									className="icon"
									alt="Twitter Icon"
									width={20}
									height={20}
								/>

								<a
									className="ml-1"
									href="https://twitter.com/_helblingjoel"
									target="_blank"
									rel="noreferrer"
									data-cy="socialLink"
								>
									twitter.com/_helblingjoel
								</a>
							</div>
							<div className="socialContainer" id="instagram">
								<Image
									src="/icons/instagram.svg"
									className="icon"
									alt="Instagram Icon"
									width={20}
									height={20}
								/>

								<a
									className="ml-1"
									href="https://instagram.com/helblingjoel"
									target="_blank"
									rel="noreferrer"
									data-cy="socialLink"
								>
									instagram.com/helblingjoel
								</a>
							</div>
							<div className="socialContainer" id="linkedin">
								<Image
									src="/icons/linkedin.svg"
									className="icon"
									alt="LinkedIn Icon"
									width={20}
									height={20}
								/>

								<a
									className="ml-1"
									href="https://www.linkedin.com/in/joel-helbling-707ba0171"
									target="_blank"
									rel="noreferrer"
									data-cy="socialLink"
								>
									linkedin.com/joel-helblingjoel
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="column is-two-third">
				<p className="title is-3">Recent blog post</p>
				<PostPreviews
					posts={AllPosts[0] ? new Array(AllPosts[0]) : []}
				/>

				<div className="currentRole">
					<p className="title">Current Role</p>
					<p>
						In May 2023 I left the (previously) NHS Digital Graduate
						Scheme to join On the Beach as a Software Engineer. In
						my day to day I mostly work with React (specifically
						NextJS) in an agile frontend team.
					</p>
					<p>
						Outside of work, I still enjoy working on sideprojects
						and exploring the JS Frontend world.
					</p>
				</div>
			</div>
			<div className="column is-one-quarter mb-4">
				<p className="title is-3">GitHub Statistics</p>
				<GithubStats />
			</div>
		</Layout>
	);
}
