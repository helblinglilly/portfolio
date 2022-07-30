import { fetchUrl } from "fetch";

export default async function Preview(link) {
	const key = process.env.FETCHPREVIEW_TOKEN;

	return new Promise((resolve, reject) => {
		fetchUrl(
			`http://api.linkpreview.net/?key=${key}&q=${link}`,
			(error, meta, body) => {
				if (error)
					body = {
						title: "Error fetching preview",
						description: "Error fetching preview",
						image: "error",
						url: link,
					};
				else {
					body = JSON.parse(body.toString());
				}
				resolve(body);
			}
		);
	});
}
