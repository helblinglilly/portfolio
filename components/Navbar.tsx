import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useState } from "react";

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const { theme, setTheme } = useTheme();

	const toggleTheme = () => {
		const newTheme = theme === "light" ? "dark" : "light";
		setTheme(newTheme);
	};

	return (
		<nav className="navbar is-spaced" id="navbar">
			<div className="navbar-brand">
				<Link href="/" className="navbar-item" data-cy="navbar-logo">
					<Image
						src={`/images/is-${theme === "dark" ? 'dark' : 'light'}.svg`}
						width={40}
						height={40}
						alt="Personal logo"
					/>
				</Link>
				<a
					onClick={() => {
						setIsMenuOpen(!isMenuOpen);
					}}
					role="button"
					id="navBurger"
					className={`navbar-burger ${isMenuOpen ? "is-active" : ""}`}
					aria-label="menu"
					aria-expanded="true"
					data-target="navMenu"
				>
					<span
						aria-hidden="true"
						className={"navbarBurgerElement"}
					></span>
					<span
						aria-hidden="true"
						className={"navbarBurgerElement"}
					></span>
					<span
						aria-hidden="true"
						className={"navbarBurgerElement"}
					></span>
				</a>
			</div>
			<div className={`navbar-menu ${isMenuOpen ? "is-active" : ""}`}>
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
					<Link href="/projects">
						<div className="navbar-item" data-cy="navbar-projects">
							Projects
						</div>
					</Link>
				</div>
				<div className="navbar-end">
					<p
						onClick={toggleTheme}
						className="navbar-item"
						id="navbar-theme"
						data-cy="navbar-theme"
						style={{ cursor: "pointer" }}
					>
						Change Theme
					</p>
				</div>
			</div>
		</nav>
	);
}
