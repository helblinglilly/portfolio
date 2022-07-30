import Image from "next/image";

export default function AboutMe() {
	const ageDiff = Date.now() - new Date("11 April 2001");
	const ageDate = new Date(ageDiff);
	const age = Math.abs(ageDate.getUTCFullYear() - 1970);

	return (
		<div className="sidebar">
			<figure className="image has-text-centered">
				<Image
					src="/images/professional.jpg"
					id="profile"
					width={250}
					height={250}
					alt="Profile Picture"
					priority={true}
					placeholder={"blur"}
					blurDataURL={"images/icon-transparent.png"}
				/>
			</figure>
			<div className="pt-4">
				<p className="title">About me</p>
				<p>
					Hi, I'm Joel, a {age} year old Swiss software engineer
					currently working in Leeds, United Kingdom. I've lived in
					the UK since 2016 and studied Computer Science in
					Canterbury, Kent.
					<br />
					My current role at NHS Digital is as part of the Primary
					Care Team doing a combination of analytical work as well as
					rewriting proprietary analytical tools in Python.
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
	);
}
