import { ExternalLinkPreview } from "./Blog/Types";

export default async function Preview(
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
		.catch(() => {
			return {
				title: "Error fetching preview",
				description: "Error fetching preview",
				image: "error",
				url: link,
			};
		});
}
