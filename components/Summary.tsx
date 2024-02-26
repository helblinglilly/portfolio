import Image from "next/image";
import SocialLink from "./SocialLink";

export default function Summary({ showHomepage }: { showHomepage?: boolean }) {
	return (
		<>
			<figure className="image has-text-centered">
				<Image
					src="/images/profile.png"
					alt="Profile picture"
					width="350"
					height="350"
					id="profile"
					placeholder="blur"
					blurDataURL="/images/placeholder.jpeg"
					priority={true}
				/>
			</figure>
			<div className="mt-4">
				<p className="title is-4 mb-2">Heya 👋</p>
				<p>
					I'm Lilly, I'm a Software Engineer based in Leeds in the UK.
					I mostly work with frontend systems at the moment, NextJS
					and AWS in particular. I'm also a Computer Science graduate
					from the University of Kent and use she/they pronouns 🏳️‍⚧️
				</p>
				<div
					id="socialLinks"
					className="pt-3 pb-3"
					data-cy="socialLinks"
				>
					<p className="title is-4 mb-2">Socials</p>

					{showHomepage && (
						<SocialLink
							name="Homepage"
							alt="Icon"
							url="https://www.helbling.uk"
							className="mt-3"
						/>
					)}
					<SocialLink
						name="Github"
						image="/icons/git.svg"
						alt="Git Icon"
						url="https://github.com/helblinglilly"
						className="mt-3"
					/>

					<SocialLink
						name="BlueSky"
						image="/icons/bluesky.png"
						alt="BlueSky"
						url="https://bsky.app/profile/helblingjoel.bsky.social"
						className="mt-3"
					/>

					<SocialLink
						name="Instagram"
						image="/icons/instagram.svg"
						alt="Instagram"
						url="https://instagram.com/helblinglilly"
						className="mt-3"
					/>

					<SocialLink
						name="LinkedIn"
						image="/icons/linkedin.svg"
						alt="LinkedIn"
						url="https://www.linkedin.com/in/joel-helbling-707ba0171"
						className="mt-3"
					/>
				</div>
			</div>
		</>
	);
}
