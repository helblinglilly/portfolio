import { ExternalLinkPreview } from "../components/SocialPreview";

export default async function linkPreview(
	link: string
): Promise<ExternalLinkPreview> {
	const key = process.env.FETCHPREVIEW_TOKEN;

	return fetch(`http://api.linkpreview.net/?key=${key}&q=${link}`)
		.then((response) => response.json())
		.then((data) => {
			return {
				title: data.title,
				description: data.description,
				image: data.image,
				url: data.url,
			};
		})
		.catch((err) => {
			console.error(err);
			return {
				title: "Error fetching preview",
				description: "Error fetching preview",
				image: "error",
				url: link,
			};
		});
}
