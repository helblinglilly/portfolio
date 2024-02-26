/* eslint-disable @next/next/no-img-element */
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function GithubStats() {
	const { theme } = useTheme();

	const [overviewURL, setOverviewURL] = useState(
		`https://github-readme-stats.vercel.app/api?username=helblinglilly&theme=buefy&hide=stars${
			theme !== "light" ? "?&hide_border=true" : ""
		}`
	);
	const [languageURL, setLanguageURL] = useState(
		`https://github-readme-stats.vercel.app/api/top-langs/?username=helblinglilly&theme=buefy&layout=compact${
			theme !== "light" ? "?&hide_border=true" : ""
		}`
	);
	const [mostRecentRepoURL, setMostRecentRepo] = useState(
		`https://github-readme-stats.vercel.app/api/pin/?username=helblinglilly&repo=pokewiki&theme=buefy${
			theme !== "light" ? "?&hide_border=true" : ""
		}`
	);
	const repoUsername = useRef();
	const repoName = useRef();

	useEffect(() => {
		const statsTheme = theme === "light" ? "buefy" : "dark";
		let newOverviewURL = `https://github-readme-stats.vercel.app/api?username=helblinglilly&theme=${statsTheme}&hide=stars`;
		let newLanguageURL = `https://github-readme-stats.vercel.app/api/top-langs/?username=helblinglilly&theme=${statsTheme}&layout=compact`;

		if (theme !== "light") {
			newOverviewURL += "&hide_border=true";
			newLanguageURL += "&hide_border=true";
		}

		setOverviewURL(newOverviewURL);
		setLanguageURL(newLanguageURL);

		const getMostRecentRepo = async () => {
			try {
				const result = await fetch(
					"https://api.github.com/users/helblinglilly/events?per_page=1"
				);
				const responseBody = await result.json();

				if (responseBody[0]?.repo?.name) {
					const username = responseBody[0].repo.name.split("/")[0];
					const repo = responseBody[0].repo.name.split("/")[1];
					repoUsername.current = username;
					repoName.current = repo;

					let newRepoURL = `https://github-readme-stats.vercel.app/api/pin/?username=${username}&repo=${repo}&theme=${statsTheme}`;
					if (theme !== "light") {
						newRepoURL += "&hide_border=true";
					}

					setMostRecentRepo(newRepoURL);
				}
			} catch (e) {
				console.error(`Failed to get most recent contribution`);
			}
		};
		getMostRecentRepo();
	}, [theme]);

	return (
		<>
			<div className="column">
				<img
					src={languageURL}
					width={450}
					height={164}
					alt="Most usage language statistics"
					placeholder="blur"
				/>
			</div>

			<div className="column">
				<img
					src={overviewURL}
					width={450}
					height={164}
					alt="Overall statistics overview"
					className="mb-3"
					placeholder="blur"
				/>
			</div>

			<div className="column">
				<a
					href={`https://github.com/${repoUsername.current}/${repoName.current}`}
					target="_blank"
					rel="noreferrer"
				>
					<img
						src={mostRecentRepoURL}
						width={450}
						height={164}
						alt="Overall statistics overview"
						placeholder="blur"
					/>
				</a>
			</div>
		</>
	);
}
