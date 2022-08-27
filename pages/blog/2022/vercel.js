import BlogLayout from "../../../components/Layout/BlogPost";
import SocialPreview from "../../../components/SocialPreview/SocialPreview";
import Preview from "../../../components/LinkPreview";

export default function Post({ ...props }) {
	const toc = [];
	toc.push({ title: "Background", id: "background" });
	toc.push({ title: "Setup", id: "setup" });
	toc.push({ title: "Extra requirements", id: "extra_requirements" });
	toc.push({ title: "Moving to production", id: "production" });

	return (
		<BlogLayout name={"vercel"} toc={toc}>
			<SocialPreview
				title="Move to Vercel - Blog"
				description="My shockingly easy experience with the move to Vercel"
			></SocialPreview>

			<section className="mt-4" id="background">
				<h3 className="title is-3 mb-2">Background</h3>
				<p>Some cool text</p>
			</section>

			<section className="mt-4" id="setup">
				<h3 className="title is-3 mb-2">Setup</h3>
				<p>Some cool text</p>
			</section>

			<section className="mt-4" id="extra_requirements">
				<h3 className="title is-3 mb-2">Extra requirements</h3>
				<p>Some cool text</p>
			</section>

			<section className="mt-4" id="production">
				<h3 className="title is-3 mb-2">Moving to production</h3>
				<p>Some cool text</p>
			</section>
		</BlogLayout>
	);
}

export async function getStaticProps() {
	const preview = await Preview("https://github.com/helblingjoel/piserver");

	return {
		props: {
			title: preview.title,
			description: preview.description,
			image: preview.image,
			url: preview.url,
		},
	};
}
