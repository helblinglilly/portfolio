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
						src="/images/is-light.png"
						width={140}
						height={28}
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
				</div>
				<div className="navbar-end">
					<a
						onClick={toggleTheme}
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
