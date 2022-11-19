export default async function Preview(
	link: string
): Promise<{ title: string; description: string; image: string; url: string }> {
	const key = process.env.FETCHPREVIEW_TOKEN;

	const response = await fetch(
		`http://api.linkpreview.net/?key=${key}&q=${link}`
	);

	if (response.status !== 200 || response.body === null) {
		return {
			title: "Error fetching preview",
			description: "Error fetching preview",
			image: "error",
			url: link,
		};
	}

	const { data, errors } = await response.json();

	return data;
	/*

	return new Promise((resolve, reject) => {
		fetch();

		fetch(
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
	*/
}
