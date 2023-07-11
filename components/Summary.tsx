import Image from "next/image";
import SocialLink from "./SocialLink";

export default function Summary() {
	return (
		<>
			<figure className="image has-text-centered">
				<Image
					src="/images/slack.jpg"
					alt="Profile picture"
					width="350"
					height="350"
					id="profile"
					placeholder="blur"
					blurDataURL="/images/placeholder.jpeg"
					priority={true}
				/>
			</figure>
			<div className="pt-4">
				<p className="title is-4 mb-2">Heya 👋</p>
				<p>
					I'm Joel, I'm a Software Engineer based in Leeds in the UK.
					I mostly work with frontend systems at the moment, NextJS
					and AWS in particular. I'm also a Computer Science graduate
					from the University of Kent and use they/them pronouns 🏳️‍🌈
				</p>
				{/* <p>
					I love to learn new things and dabble around with all sorts
					of tech in my spare time - sometimes I even write about
					these on here! I'm part of the LGBTQ+ community and use
					they/them pronouns 
				</p> */}
				<div
					id="socialLinks"
					className="pt-3 pb-3"
					data-cy="socialLinks"
				>
					<p className="title is-4 mb-2">Socials</p>

					<SocialLink
						name="Github"
						image="/icons/git.svg"
						alt="Git Icon"
						url="https://github.com/helblingjoel"
						className="pt-3"
					/>

					<SocialLink
						name="Twitter"
						image="/icons/twitter.svg"
						alt="Twitter"
						url="https://twitter.com/_helblingjoel"
						className="pt-3"
					/>

					<SocialLink
						name="Instagram"
						image="/icons/instagram.svg"
						alt="Instagram"
						url="https://instagram.com/helblingjoel"
						className="pt-3"
					/>

					<SocialLink
						name="LinkedIn"
						image="/icons/linkedin.svg"
						alt="LinkedIn"
						url="https://www.linkedin.com/in/joel-helbling-707ba0171"
						className="pt-3"
					/>
				</div>
			</div>
		</>
	);
}
