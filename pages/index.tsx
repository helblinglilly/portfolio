import Layout from "../Layouts/Layout";
import { PostPreviews } from "../components/Blog/PostPreviews";
import AllPosts from "../components/Blog/AllPosts";
import SocialPreview from "../components/SocialPreview";
import Image from "next/image";
import React from "react";
import { MetaInfo } from "../support/Types";
import GithubStats from "../components/GithubStats";

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
						<p className="title">About me</p>
						<p>
							I'm a {age} year old software developer currently
							based in Leeds, United Kingdom. At work, I mostly
							use C#, while I explore different Javascript
							frameworks in my spare time. I'm particularly
							interested in web development in the cloud, and I'm
							currently learning about AWS to pursue that.
							<br />
							At the moment, I'm working at NHS England as a
							developer on their graduate scheme.
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
						At the start of the graduate scheme that I'm currently
						enrolled on, I completed an 8 week Javascript bootcamp
						with Northcoders. Shortly after this, I joined the
						Pathways team where I maintained C# applications, and
						architected a proof of concept to replace a legacy data
						visualisation platform using AWS Aurora and R in
						kubernetes.
					</p>
					<p>
						After around 6 months, I switched into an Information
						Analyst role in the Primary Care Domain team. I worked
						on data analysis pieces for external stakeholders, as
						well as improving the process for regular data
						publications. This involved a combination of SAS EG and
						Python (Pandas and Databricks).
					</p>
					<p>
						Since then, I have been supporting the cloud migration
						of various products used by internal and external
						stakeholders of Pathways, and developing new features
						for our migrated products. I have gained a more in-depth
						understanding of AWS, DevOps. Alongside the cloud
						migrations, we are working to introduce End-to-End
						testing into our deployment process which I have been
						supporting on.
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
