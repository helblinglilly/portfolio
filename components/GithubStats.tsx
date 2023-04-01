import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function GithubStats() {
	const { theme, setTheme } = useTheme();

	const [overviewURL, setOverviewURL] = useState(
		`https://github-readme-stats.vercel.app/api?username=helblingjoel&theme=buefy&hide=stars`
	);
	const [languageURL, setLanguageURL] = useState(
		`https://github-readme-stats.vercel.app/api/top-langs/?username=helblingjoel&theme=buefy&layout=compact`
	);
	const [mostRecentRepoURL, setMostRecentRepo] = useState(
		`https://github-readme-stats.vercel.app/api/pin/?username=helblingjoel&repo=pokewiki&theme=buefy`
	);

	useEffect(() => {
		const statsTheme = theme === "light" ? "buefy" : "dark";
		setOverviewURL(
			`https://github-readme-stats.vercel.app/api?username=helblingjoel&theme=${statsTheme}&hide=stars`
		);
		setLanguageURL(
			`https://github-readme-stats.vercel.app/api/top-langs/?username=helblingjoel&theme=${statsTheme}&layout=compact`
		);

		const getMostRecentRepo = async () => {
			try {
				const result = await fetch(
					"https://api.github.com/users/helblingjoel/events?per_page=1"
				);
				const responseBody = await result.json();

				if (responseBody[0]?.repo?.name) {
					const username = responseBody[0].repo.name.split("/")[0];
					const repo = responseBody[0].repo.name.split("/")[1];
					setMostRecentRepo(
						`https://github-readme-stats.vercel.app/api/pin/?username=${username}&repo=${repo}&theme=${statsTheme}`
					);
				}
			} catch (e) {
				console.error(`Failed to get most recent contribution`);
			}
		};
		getMostRecentRepo();
	}, [theme]);

	return (
		<>
			<Image
				src={overviewURL}
				width={450}
				height={164}
				alt="Overall statistics overview"
				className="mb-3"
				placeholder="blur"
				blurDataURL="/images/placeholder.jpeg"
			/>

			<Image
				src={languageURL}
				width={450}
				height={164}
				alt="Most usage language statistics"
				placeholder="blur"
				blurDataURL="/images/placeholder.jpeg"
			/>

			<p className="title is-5 pt-3 mb-3">Most recent contribution</p>
			<Image
				src={mostRecentRepoURL}
				width={450}
				height={164}
				alt="Overall statistics overview"
				placeholder="blur"
				blurDataURL="/images/placeholder.jpeg"
			/>
		</>
	);
}