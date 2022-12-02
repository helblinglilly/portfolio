import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { useTheme } from "next-themes";

export default function Navbar() {
	const { theme, setTheme } = useTheme();
	return (
		<nav className="navbar is-spaced" id="navbar">
			<Script src="/js/navbar.js"></Script>
			<div className="navbar-brand">
				<Link href="/" className="navbar-item" data-cy="navbar-logo">
					<Image
						src="/images/is-light.png"
						width={140}
						height={28}
						alt="Personal logo"
					/>
				</Link>
				<a
					onClick={toggleNavbar}
					role="button"
					id="navBurger"
					className="navbar-burger"
					aria-label="menu"
					aria-expanded="false"
					data-target="navMenu"
				>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
				</a>
			</div>
			<div className="navbar-menu">
				<div className="navbar-start">
					<Link href="/">
						<div className="navbar-item" data-cy="navbar-home">
							Home
						</div>
					</Link>
					<Link href="/blog">
						<div className="navbar-item" data-cy="navbar-blog">
							Blog
						</div>
					</Link>
					<Link href="/background">
						<div
							className="navbar-item"
							data-cy="navbar-background"
						>
							Background
						</div>
					</Link>
				</div>
				<div className="navbar-end">
					<a
						onClick={() => {
							if (
								theme === "light" ||
								localStorage.getItem("theme") === "light"
							)
								setTheme("dark");
							else if (
								theme === "dark" ||
								localStorage.getItem("theme") === "dark"
							)
								setTheme("light");
							else setTheme("light");
						}}
						className="navbar-item"
						id="navbar-theme"
						data-cy="navbar-theme"
					>
						Change Theme
					</a>
				</div>
			</div>
		</nav>
	);
}

function toggleNavbar() {
	document.querySelector(".navbar-menu").classList.toggle("is-active");
	document.querySelector(".navbar-burger").classList.toggle("is-active");
}
