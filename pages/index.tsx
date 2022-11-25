import Layout from "../Layouts/Layout";
import { PostPreviews, AllPosts } from "../components/Blog/PostPreviews";
import SocialPreview from "../components/SocialPreview";
import Image from "next/image";
import React from "react";
import { MetaInfo } from "../components/Blog/Types";

export default function Home() {
	const description =
		"Joel Helbling, Graduate Developer at NHS Digital based in the UK. Computer Science graduate from Uni of Kent";
	const ageDiff = Date.now() - new Date("11 April 2001").valueOf();
	const ageDate = new Date(ageDiff);
	const age = Math.abs(ageDate.getUTCFullYear() - 1970);
	const previousLocation = `Previously, I lived in Kent during my studies and before moving to the UK I lived in Schaffhausen, Switzerland`;

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
				<div className="sidebar">
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
							Hi, I'm Joel, a {age} year old Swiss software
							engineer currently working in Leeds, United Kingdom.
							I've lived in the UK since 2016 and studied Computer
							Science in Canterbury, Kent.
							<br />
							At the moment, I'm part of NHS Pathways where I'm
							working as a Graduate Software Developer
						</p>
						<div id="socialLinks" className="pt-3 pb-3">
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
									className="ml-1 icon-text"
									href="https://github.com/helblingjoel"
									target="_blank"
									rel="noreferrer"
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
									className="ml-1 icon-text"
									href="https://twitter.com/_helblingjoel"
									target="_blank"
									rel="noreferrer"
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
									className="ml-1 icon-text"
									href="https://instagram.com/helblingjoel"
									target="_blank"
									rel="noreferrer"
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
									className="ml-1 icon-text"
									href="https://www.linkedin.com/in/joel-helbling-707ba0171"
									target="_blank"
									rel="noreferrer"
								>
									linkedin.com/joel-helblingjoel
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="column is-two-third">
				<PostPreviews
					posts={AllPosts[0] ? new Array(AllPosts[0]) : []}
				/>

				<div className="currentRole">
					<p className="title">Current Role</p>
					<p style={{ display: "inline" }}>
						I'm currently enrolled on the NHS Digital Graduate
						Scheme where over the course of 2 years, I get to spend
						6 months in different teams across the organisation.
						After spending 8 weeks in a Javascript boot camp, I
						joined the Pathways development team as a Software
						Engineer maintaining C# applications, carrying out QA
						duties, and leading a project where I got to learn about
						AWS, DevOps and Infrastructure as Code. In May 2022 I
						joined the Primary Care Domain team as an Information
						Analyst where I supported the team by improving data
						quality and carrying out one-off analytical tasks for
						external stakeholders. I also supported the upskilling
						of the team with Git and Python as well as producing
						publications for the NHS Digital website.
					</p>
					<p>
						In October I rejoined the Pathways team in my previous
						role. I'm leading that same project again which had to
						be put on hold in my absence and supporting the move of
						our existing products to AWS. My previous experience in
						the team has enabled me to slot back in with next to no
						delay - I am actively contributing to projects and
						supporting other developers as well as the QA team.
					</p>
				</div>
			</div>
			<div className="column is-one-quarter mb-4">
				<div className="tiles">
					<p className="title">Location</p>
					<iframe
						className="map"
						style={{ borderRadius: 15 + "px" }}
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d75398.71585168022!2d-1.5837988269883614!3d53.80354915520323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48793e4ada64bd99%3A0x51adbafd0213dca9!2sLeeds!5e0!3m2!1sen!2suk!4v1644350878285!5m2!1sen!2suk"
						width="100%"
						height="450"
						loading="lazy"
					></iframe>
					<p>{previousLocation}</p>
					<p></p>
				</div>
			</div>
		</Layout>
	);
}
