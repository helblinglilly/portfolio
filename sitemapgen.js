const fs = require("fs");

const ignorefiles = ["404", "_app", "_middleware"];
const priorities = {
	"/": 1.0,
	"/blog/": 0.8,
	"/background/": 0.8,
};
const defaultPriority = 0.3;
const xmlHead = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">`;
const xmlFoot = `</urlset>`;
const sitebase = "https://helbling.uk";

async function getFiles(path = "./pages/") {
	const entries = await fs.promises.readdir(path, { withFileTypes: true });
	let files = entries
		.filter((file) => !file.isDirectory())
		// Strip details
		.map((file) => ({
			path: (path + file.name).replace("./pages/", "").replace(".js", ""),
			lastModified: fs.statSync(path + file.name).mtime,
		}))
		// Ignore files in ingorefiles
		.filter((entry) => !ignorefiles.includes(entry.path))
		// Sort out index dialemma and add leading "/"
		.map((entry) => ({
			path: `/${entry.path.replace("index", "")}`,
			lastModified: entry.lastModified,
		}));

	const folders = entries.filter((folder) => folder.isDirectory());

	for (const folder of folders)
		files.push(...(await getFiles(`${path}${folder.name}/`)));

	return files;
}

function setPriority(route) {
	if (route === "/") return priorities["/"];

	for (const key of Object.keys(priorities)) {
		if (key !== "/") {
			if (route === key) {
				return priorities[key];
			}
		}
	}
	return defaultPriority;
}

function main() {
	getFiles().then((files) => {
		files = files.map((entry) => ({
			path: entry.path,
			lastModified: entry.lastModified,
			priority: setPriority(entry.path),
		}));

		let writeString = xmlHead;
		files.forEach((entry) => {
			writeString += `<url><loc>${sitebase}${entry.path}</loc><lastmod>${
				entry.lastModified.toISOString().split("T")[0]
			}</lastmod><priority>${entry.priority}</priority></url>`;
		});
		writeString += xmlFoot;
		fs.writeFileSync(
			__dirname + "/public/sitemap.xml",
			writeString,
			"utf-8"
		);
		console.log("Generated sitemap");
	});
}
main();
