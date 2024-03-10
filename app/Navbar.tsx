"use client"

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import ThemeIcon from "../components/ThemeIcon";

export default function Navbar() {
	const { theme, setTheme } = useTheme();

	return (
		<nav className="w-full flex justify-between h-16">
			<div className="flex items-center gap-3">
				<Link href="/" className="flex align-middle h-full ml-2 items-center">
					<Image
							src={`/images/is-light.svg`}
							width={40}
							height={40}
							alt="Personal logo"
						/>
				</Link>

				<div className="flex h-full items-center">
					<Link href="/" className="items-center hover:bg-slate-200 dark:hover:bg-slate-600 px-4 h-10 rounded-md hidden sm:flex">
						Home
					</Link>

					<Link href="/blog" className="items-center flex hover:bg-slate-200 dark:hover:bg-slate-600 px-4 h-10 rounded-md">
						Blog
					</Link>
					<Link href="/projects" className="items-center flex hover:bg-slate-200 dark:hover:bg-slate-600 px-4 h-10 rounded-md">
						Projects
					</Link>
				</div>
			</div>

			<div className="flex items-center">
				<button 
					className="items-center flex hover:bg-slate-200 dark:hover:bg-slate-600 px-4 h-10 rounded-md mr-3"
					onClick={() => {
						if (theme === 'light'){
							setTheme('dark');
						} else {
							setTheme('light');
						}
				}}>
					<ThemeIcon />
				</button>
			</div>
		</nav>
	);
}
